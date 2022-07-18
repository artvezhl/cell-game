import React, { FC } from 'react'
import start from '../../images/start.png'
import finish from '../../images/finish.png'
import choose from '../../images/tap.png'

import styles from './Cell.module.scss'

type TCellType = 'start' | 'finish' | 'choose'

interface ICellProps {
  type?: TCellType
}

const Cell: FC<ICellProps> = ({ type }) => {
  const content =
    type === 'start' ? (
      <img src={start} alt={type} />
    ) : type === 'finish' ? (
      <img src={finish} alt={type} />
    ) : type === 'choose' ? (
      <img src={choose} alt={type} />
    ) : null

  return <div className={styles.cell}>{content}</div>
}

export default Cell
