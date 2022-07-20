import React, { FC, useRef, useState } from 'react'

import styles from './Board.module.scss'
import Cell from '../Cell/Cell'
import { ICell } from '../../store/models/ICell'
import { IPosition } from '../../store/models/IPosition'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { boardSlice } from '../../store/reducers/BoardSlice'
import { setArrowDirection } from '../../assets/helpers'

interface IBoardProps {
  board: ICell[][]
}

const Board: FC<IBoardProps> = ({ board }) => {
  const dispatch = useAppDispatch()
  const {
    start,
    stop,
    setCurrentPosition,
    setDirection,
    setGameFinished,
    resetState,
  } = boardSlice.actions
  const boardState = useAppSelector((state) => state.boardReducer)
  const { currentPosition } = useAppSelector((state) => state.boardReducer)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const positionRef = useRef<IPosition>(currentPosition)
  positionRef.current = currentPosition

  const startGameHandler = () => {
    setIsButtonDisabled(true)
    dispatch(resetState())
    dispatch(start())

    const refreshPosition = (index: number, delay: number): any => {
      if (index === 0) {
        setIsButtonDisabled(false)
        dispatch(setGameFinished(true))
        return
      }
      setTimeout(() => {
        const axis = Math.random() > 0.5 ? 'x' : 'y'
        const type = axis === 'x' ? 'columns' : 'rows'
        const currentValue = positionRef.current[axis]
        const randomValue = Math.random() > 0.5 ? 1 : -1
        const value =
          currentValue === 0
            ? 1
            : currentValue === boardState[type] - 1
            ? -1
            : randomValue

        const direction = setArrowDirection(axis, value)

        dispatch(setDirection(direction))

        dispatch(
          setCurrentPosition({
            axis,
            value,
          })
        )
        return refreshPosition(index - 1, delay)
      }, delay)
    }

    refreshPosition(10, 1000)
  }

  return (
    <>
      <div className={styles.board}>
        {board.map((row) => {
          return row.map((cell) => <Cell key={cell.id} cell={cell} />)
        })}
      </div>
      <div className={styles.buttons}>
        <button disabled={isButtonDisabled} onClick={startGameHandler}>
          START
        </button>
        <button disabled={!isButtonDisabled} onClick={() => dispatch(stop())}>
          STOP
        </button>
      </div>
    </>
  )
}

export default Board
