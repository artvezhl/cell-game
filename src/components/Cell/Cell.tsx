import React, { FC, useEffect, useState } from 'react'
import start from '../../images/start.png'
import finish from '../../images/finish.png'
import choose from '../../images/tap.png'

import styles from './Cell.module.scss'
import { ICell } from '../../store/models/ICell'
import { useAppSelector } from '../../store/hooks'
import { IPosition } from '../../store/models/IPosition'

interface ICellProps {
  cell: ICell
  pointer: (
    position: IPosition,
    cell: ICell,
    cb: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
}

const Cell: FC<ICellProps> = ({ cell, pointer }) => {
  const [isStart, setIsStart] = useState<boolean>(false)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [isChoose, setIsChoose] = useState<boolean>(false)
  const { startPosition, finishPosition } = useAppSelector(
    (state) => state.boardReducer
  )

  useEffect(() => {
    pointer(startPosition, cell, setIsStart)
  }, [startPosition, finishPosition, cell, setIsStart, pointer])

  const content = isStart ? (
    <img src={start} alt="start" />
  ) : isFinish ? (
    <img src={finish} alt="finish" />
  ) : isChoose ? (
    <img src={choose} alt="choose" />
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
