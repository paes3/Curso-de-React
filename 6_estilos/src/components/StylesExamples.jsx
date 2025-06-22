import React from 'react'

import './StylesExamples.css'

import styles from "./StylesExamples.module.css"

const StylesExamples = () => {

    // inline
    const inlineStyle = {
        color: "blue",
        fontSize: "20px",
    }

  return <div>
    <h2 style={inlineStyle}>Estilos inline</h2>

    {/* arquivo de estilos */}
    <p className="text">Meu CSS</p>

    {/* CSS Modules */}
    <p className={styles.textPurple}>Meu CSS Modules</p>
    </div>
  
}

export default StylesExamples