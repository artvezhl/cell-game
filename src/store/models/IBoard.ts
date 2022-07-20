import { IPosition } from './IPosition'

export interface IBoard {
  rows: number
  columns: number
  startPosition: IPosition
  finishPosition: IPosition
  checkedPosition: IPosition
}
