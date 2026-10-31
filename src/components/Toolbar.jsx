const grads = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
    'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', 
]

export default function Toolbar({
    winStyle, setWinStyle, theme, setTheme, lang, setLang, bg, 
    setBg, padding, setPadding, onDownload
}) {
    return (
        <div className="toolbar">
            <div className="control-item">
                <span>Window</span>
                <select value={winStyle} onChange={(e) => setWinStyle(e.target.value)}>
                    <option value="mac">MacOS</option>
                    <option value="vscode">VS Code</option>
                    <option value="clean">Minimal (None)</option>
                </select>
            </div>
            <div className="control-item">
                <span>Theme</span>
                <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <option value="vscode">Vs Code dark</option>
                    <option value="dracula">Dracula</option>
                    <option value="atom">Atom One Dark</option>
                    <option value="light">Clean Light</option>
                </select>
            </div>
            <div className="control-item">
                <span>Language</span>
                <select value={lang} onChange={(e) => setLang(e.target.value)}>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="cpp">C++</option>
                </select>
            </div>

            <div className="control-item">
                <span>Padding</span>
                <select value={padding} onChange={(e) => setPadding(e.target.value)}>
                    <option value="25px">Small</option>
                    <option value="48px">Medium</option>
                    <option value="70px">Large</option>
                </select>
            </div>
            <div className="control-item">
                <span>Background</span>
                <div className="colordots">
                    {grads.map((g, i) => (
                        <div
                        key={i}
                        onClick={() => setBg(g)}
                        className={`dot ${bg === g ? 'active' : ''}`}
                        style={{ background: g }}
                        />
                    ))}
                </div>
            </div>

            <button className="exportbutton" onClick={onDownload}>Export PNG</button>
        </div>
    )
}