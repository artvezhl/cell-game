import React, { FC } from 'react'

import styles from './Board.module.scss'
import Cell from '../Cell/Cell'
import { ICell } from '../../store/models/ICell'

interface IBoardProps {
  board: ICell[][]
}

const Board: FC<IBoardProps> = ({ board }) => {
  console.log('board is', board)

  return (
    <div className={styles.board}>
      {board.map((row) => {
        return row.map((cell) => <Cell key={cell.id} cell={cell} />)
      })}
      {/*<Cell />*/}
      {/*<Cell type="start" />*/}
      {/*<Cell type="finish" />*/}
      {/*<Cell />*/}
      {/*<Cell type="choose" />*/}
      {/*<Cell />*/}
      {/*<Cell />*/}
      {/*<Cell />*/}
      {/*<Cell />*/}
    </div>
  )
}

export default Board
