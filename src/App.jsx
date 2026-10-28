import { useState } from 'react'
import html2canvas from 'html2canvas'
import CodeBox from './components/CodeBox'

function App() {
  const [code, setCode] = useState(
    `function calculateScore(points, bonus) {
    const total = points * bonus;
    
    if (total > 100){
    console.log("New high score!!!");
    }
    return total;
    }`
  )

  const [winStyle, setWinStyle] = useState('mac')
  const [theme, setTheme] = useState('vscode')
  const [lang, setLang] = useState('javascript')
  const [bg, setBg] = useState('linear-gradient(135deg, #667eea 0%, #764ba2 100%)')
  const [padding, setPadding] = useState('48px')

  function downloadPizza() {
    const element = document.getElementById('capture-area')

    html2canvas(element, {
      scale: 2,
      backgroundColor: null
    }).then((canvas) => {
      const a = document.createElement('a')
      a.download = "Pizza.png"
      a.href = canvas.toDataURL('image/png')
      a.click()
    })
  }

  return (
    <div className="app">
      <h1
      style={{
        margin: '0 0 6px 0',
        fontSize: '26px',
        fontweight: '700'
      }}
      >Pizza</h1>

      <toolbar
      winStyle={winStyle} setWinStyle={setWinStyle} 
      theme={theme} setTheme={setTheme}
      lang={lang} setLang={setLang}
      bg={bg} setBg={setBg}
      padding={padding} setPadding={setPadding}
      onDownload={downloadPizza}
      />

      <CodeBox
      code={code} setCode={setCode}
      winStyle={winStyle}
      theme={theme}
      lang={lang}
      bg={bg}
      padding={padding}
      />
    </div> 
  )
}

export default App