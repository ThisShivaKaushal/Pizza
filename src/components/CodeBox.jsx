import { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, dracula, atomDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'


export default function CodeBox({ code, setCode, winStyle, theme, lang, bg, padding }) {
    const [fileName, setFileName] = useState('script.js')

    // theme

    let activetheme = vscDarkPlus
    if (theme === 'dracula') activeTheme = dracula
    if (theme === 'atom') activeTheme = atomDark
    if (theme === 'light') activeTheme = oneLight

    const isLight = theme === light

    const totalLines = code.split('\n').length

    function handleTab(e) {
        if (e.key === 'Tab') {
            e.preven
        }
    }
 }