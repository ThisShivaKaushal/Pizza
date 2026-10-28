import { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, dracula, atomDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { VscChromeMinimize, VscChromeRestore, VscChromeClose } from "react-icons/vsc";

export default function CodeBox({ code, setCode, winStyle, theme, lang, bg, padding }) {
    const [fileName, setFileName] = useState('script.js')

    // theme

    let activeTheme = vscDarkPlus
    if (theme === 'dracula') activeTheme = dracula
    if (theme === 'atom') activeTheme = atomDark
    if (theme === 'light') activeTheme = oneLight

    const isLight = theme === 'light'

    const totalLines = code.split('\n').length

    function handleTab(e) {
        if (e.key === 'Tab') {
            e.preventDefault()
            const start = e.target.selectionStart
            const end = e.target.selectionEnd
            setCode(code.substring(0, start) +' '+ code.substring(end))
            setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = start + 2

            }, 0)
        }
    }

    return (
        <div 
        id="capture-area"
        style={{
            background: bg,
            padding: padding,
            borderRadius: '12px',
            transition: 'padding 0.2 ease',
            minWidth: '520px',
            maxWidth: '850px',
        }}
        >
            <div
            style={{
                background: isLight ? '#ffffff' : '#181920',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65)',
                border: isLight ?  '1px solid #ddd' : '1px solid rgba(255, 255, 255, 0.08)',
            }}
            >
                {winStyle === 'mac' && (
                    <div style={{ display: 'flex', alignItems: 'center', padding: '13px 16px', background: isLight ? '#f1f1f1' : '#21222c' }} >
                        <div style={{ display: 'flex', gap: '8px'}}>
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                        </div>

                        <input 
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                        style={{
                            margin: '0 auto',
                            background: 'transparent',
                            border: 'none',
                            color: '#888',
                            textAlign: 'center',
                            fontSize: '13px',
                            outline: 'none',
                            width:'120px',
                            paddingRight: '35px',
                        }}
                        />
                    </div>
                )}

                {winStyle === 'vscode' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: isLight ? '#e8e8e8' : '#111217' }}>
                        <div style={{
                            background: isLight ? '#fff' : '#181920',
                            padding: '9px 16px',
                            borderTop: '2px solid #6366f1',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{ color: '#facc15', fontSize: '12px', fontWeight: 'bold'}}>{"</>"}</span>
                            <input
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)} 
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: isLight ? '#222' : '#ddd',
                                fontSize: '13px',
                                outline: 'none',
                                width: '85px'
                            }}
                            />
                        </div>
                        <div style={{ 
                            display: 'flex',
                            gap: '14px',
                            paddingRight: '14px',
                            color: '#777',
                            fontSize: '16px'
                        }}
                        >
                            <VscChromeMinimize style={{ cursor: 'pointer'}}/>
                            <VscChromeRestore styele={{ cursoe: 'pointer'}}/>
                            <VscChromeClose style={{ cursor: 'pointer'}}
                            onMouseEnter={(e) => e.target.style.color = '#ff4757'}
                            onMouseLeave={(e) => e.target.style.color = '#888'}
                            onClick={() => setCode('')}
                            />
                        </div>
                    </div>    
                )}

                <div className="editor">
                    <div className="linenumber">
                        {Array.from({ length: totalLines }).map((_, idx) => (
                            <div key={idx}>{idx + 1}</div>
                        ))}

                    </div>
                    <div className="code-stack">
                        <textarea
                        className= "input"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeydown={handleTab}
                        spellCheck="false"
                        autoCapitalize="off"
                        style={{
                            caretColor: isLight ? '#000' : '#fff'
                        }}
                        data-html2canvas-ignore="true"
                        />

                        <SyntaxHighlighter
                        language={lang}
                        style={activeTheme}
                        customStyle={{
                            background: 'transparent'
                        }}
                        codeTagProps={{
                            style: {
                                fontFamily: "'Consolas', 'Courier New', monospace",
                                fontSize: '15px',
                                lineHeight: '1.6'
                            }
                        }}
                        >
                            {code + ' '}
                        </SyntaxHighlighter>
                    </div>

                </div>
            </div>
        </div> 
        
    )
 }