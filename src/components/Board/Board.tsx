import React from 'react'

import styles from './Board.module.scss'
import Cell from '../Cell/Cell'

const Board = () => {
  return (
    <div className={styles.board}>
      <Cell />
      <Cell type="start" />
      <Cell type="finish" />
      <Cell />
      <Cell type="choose" />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  )
}

export default Board
