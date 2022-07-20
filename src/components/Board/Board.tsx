import React, { FC, useCallback, useEffect, useRef } from 'react'

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
  const { start, stop, setCurrentPosition, setDirection } = boardSlice.actions
  const boardState = useAppSelector((state) => state.boardReducer)
  const { currentPosition } = useAppSelector((state) => state.boardReducer)
  const positionRef = useRef<IPosition>(currentPosition)
  positionRef.current = currentPosition
  const cellPointer = useCallback(
    (
      position: IPosition,
      { x, y }: ICell,
      cb: React.Dispatch<React.SetStateAction<boolean>>
    ): void => (x === position.x && y === position.y ? cb(true) : cb(false)),
    []
  )

  useEffect(() => {
    console.log('current', currentPosition)
  }, [currentPosition])

  const startGameHandler = () => {
    dispatch(start())

    const refreshPosition = (index: number, delay: number): any => {
      if (index === 0) {
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
            : currentValue === boardState[type]
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

    refreshPosition(10, 2000)
  }

  return (
    <>
      <div className={styles.board}>
        {board.map((row) => {
          return row.map((cell) => (
            <Cell key={cell.id} cell={cell} pointer={cellPointer} />
          ))
        })}
      </div>
      <div className={styles.buttons}>
        <button onClick={startGameHandler}>START</button>
        <button onClick={() => dispatch(stop())}>STOP</button>
      </div>
    </>
  )
}

export default Board
