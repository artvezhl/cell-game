import React, { useEffect } from 'react'
import styles from './App.module.scss'
import Board from '../Board/Board'
import Arrows from '../Arrows/Arrows'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { boardSlice } from '../../store/reducers/BoardSlice'

function App() {
  const dispatch = useAppDispatch()
  const { initBoard } = boardSlice.actions
  const board = useAppSelector((state) => state.boardReducer.board)

  useEffect(() => {
    dispatch(initBoard())
  }, [dispatch, initBoard])

  return (
    <div className={styles.app}>
      <h1>Cell Game</h1>
      <Board board={board} />
      <Arrows />
    </div>
  )
}

export default App
