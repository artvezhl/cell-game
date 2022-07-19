import { IBoard } from '../models/IBoard'
import { ICell } from '../models/ICell'
import { createSlice } from '@reduxjs/toolkit'

interface BoardState {
  // board: IBoard
  board: ICell[][]
  isLoading: boolean
  startPosition: {
    x: number
    y: number
  }
  finishPosition: {
    x: number
    y: number
  }
  checkedPosition: {
    x: number
    y: number
  }
}
const initialState: BoardState = {
  board: [],
  isLoading: false,
  startPosition: {
    x: 0,
    y: 0,
  },
  finishPosition: {
    x: 0,
    y: 0,
  },
  checkedPosition: {
    x: 0,
    y: 0,
  },
}
export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    initBoard(state) {
      const result = []
      for (let i = 0; i < 3; i++) {
        const row: ICell[] = []
        for (let j = 0; j < 3; j++) {
          row.push({
            id: Date.now() * Math.random(),
            x: j,
            y: i,
          })
        }
        result.push(row)
      }
      state.board = result
    },
  },
})

export default boardSlice.reducer
