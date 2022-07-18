import React from 'react'
import styles from './App.module.scss'
import Board from '../Board/Board'
import Arrows from '../Arrows/Arrows'

function App() {
  const x = 0

  return (
    <div className={styles.app}>
      <h1>Cell Game</h1>
      <Board />
      <Arrows />
    </div>
  )
}

export default App
