import React, { FC } from 'react'
import start from '../../images/start.png'
import finish from '../../images/finish.png'
import choose from '../../images/tap.png'

import styles from './Cell.module.scss'
import { ICell } from '../../store/models/ICell'

type TCellType = 'start' | 'finish' | 'choose'

interface ICellProps {
  type?: TCellType
  cell: ICell
}

const Cell: FC<ICellProps> = ({ type, cell }) => {
  const content =
    type === 'start' ? (
      <img src={start} alt={type} />
    ) : type === 'finish' ? (
      <img src={finish} alt={type} />
    ) : type === 'choose' ? (
      <img src={choose} alt={type} />
    ) : null

  return (
    <div
      onClick={() => console.log('coordinates', cell)}
      className={styles.cell}
    >
      {content}
    </div>
  )
}

export default Cell
