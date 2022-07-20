import { ICell } from '../models/ICell'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPosition } from '../models/IPosition'
import { TDirection } from '../../components/Arrow/Arrow'

interface BoardState {
  board: ICell[][]
  rows: number
  columns: number
  isLoading: boolean
  directions: TDirection[]
  startPosition: IPosition
  currentPosition: IPosition
  finishPosition: IPosition
  checkedPosition: IPosition
}
const initialState: BoardState = {
  board: [],
  isLoading: false,
  rows: 3,
  columns: 3,
  directions: [],
  startPosition: {
    x: -1,
    y: -1,
  },
  currentPosition: {
    x: 0,
    y: 0,
  },
  finishPosition: {
    x: -1,
    y: -1,
  },
  checkedPosition: {
    x: -1,
    y: -1,
  },
}
export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    initBoard(state) {
      const result = []
      for (let i = 0; i < state.rows; i++) {
        const row: ICell[] = []
        for (let j = 0; j < state.columns; j++) {
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
    start(state) {
      const x = Math.floor(Math.random() * state.columns)
      state.startPosition.x = x
      state.startPosition.y = Math.floor(Math.random() * state.board[x].length)
      state.currentPosition = {
        ...state.startPosition,
      }
    },
    stop(state) {
      state.startPosition = initialState.startPosition
    },
    setCurrentPosition(
      state,
      action: PayloadAction<{ axis: string; value: number }>
    ) {
      const { axis, value } = action.payload
      const newValue = state.currentPosition[axis] + value
      state.currentPosition[axis] = newValue
    },
    setDirection(state, action: PayloadAction<TDirection>) {
      state.directions.push(action.payload)
    },
  },
})

export default boardSlice.reducer
