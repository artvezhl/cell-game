import React, { FC, useEffect, useState } from 'react'
import start from '../../images/start.png'
import finish from '../../images/finish.png'

import styles from './Cell.module.scss'
import { ICell } from '../../store/models/ICell'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { IPosition } from '../../store/models/IPosition'
import { boardSlice } from '../../store/reducers/BoardSlice'

interface ICellProps {
  cell: ICell
}

const Cell: FC<ICellProps> = ({ cell }) => {
  const [isStart, setIsStart] = useState<boolean>(false)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [isChoose, setIsChoose] = useState<boolean>(false)
  const { startPosition, finishPosition, checkedPosition, isGameFinished } =
    useAppSelector((state) => state.boardReducer)
  const dispatch = useAppDispatch()
  const { setChecked, setFinishPosition } = boardSlice.actions
  const [checkedColor, setCheckedColor] = useState<string>(
    'radial-gradient(circle, rgba(230,19,19,0.8169861694677871) 0%, rgba(227,70,252,0.6741290266106443) 100%)'
  )

  useEffect(() => {
    if (startPosition.x === cell.x && startPosition.y === cell.y) {
      setIsStart(true)
    } else {
      setIsStart(false)
    }
    if (
      checkedPosition.x === cell.x &&
      checkedPosition.y === cell.y &&
      finishPosition.x === cell.x &&
      finishPosition.y === cell.y
    ) {
      setCheckedColor(
        'radial-gradient(circle, rgba(8,230,13,0.9626444327731093) 0%, rgba(70,252,74,0.9150253851540616) 100%)'
      )
    }
    if (checkedPosition.x === cell.x && checkedPosition.y === cell.y) {
      setIsChoose(true)
    } else {
      setIsChoose(false)
    }
    if (finishPosition.x === cell.x && finishPosition.y === cell.y) {
      setIsStart(false)
      setIsFinish(true)
    } else {
      setIsFinish(false)
    }
  }, [
    cell,
    startPosition,
    checkedPosition,
    finishPosition,
    setIsStart,
    setIsChoose,
    setIsFinish,
    isGameFinished,
  ])

  console.log('isFinish', isFinish)

  const content = isStart ? (
    <img src={start} alt="start" />
  ) : isFinish ? (
    <img src={finish} alt="finish" />
  ) : null

  const chooseCellHandler = () => {
    console.log('coordinates', cell)
    if (isGameFinished) {
      dispatch(setChecked(cell))
      setTimeout(() => {
        dispatch(setFinishPosition())
        // setIsFinish(true)
      }, 500)
    }
  }

  return (
    <div
      onClick={chooseCellHandler}
      className={styles.cell}
      style={
        isChoose
          ? {
              background: checkedColor,
            }
          : undefined
      }
    >
      {content}
    </div>
  )
}

export default Cell
