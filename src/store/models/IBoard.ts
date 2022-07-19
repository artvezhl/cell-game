export interface IBoard {
  rows: number
  columns: number
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
