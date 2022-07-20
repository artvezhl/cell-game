export const setArrowDirection = (axis: string, value: number) => {
  return axis === 'x' && value === 1
    ? 'right'
    : axis === 'x' && value === -1
    ? 'left'
    : axis === 'y' && value === 1
    ? 'down'
    : 'up'
}
