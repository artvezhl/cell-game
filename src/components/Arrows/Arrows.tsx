import React from 'react'

import Arrow from '../Arrow/Arrow'
import styles from './Arrows.module.scss'

const Arrows = () => {
  return (
    <div className={styles.arrows}>
      <Arrow direction="down" />
      <Arrow direction="right" />
      <Arrow direction="down" />
      <Arrow direction="down" />
      <Arrow direction="up" />
      <Arrow direction="down" />
      <Arrow direction="left" />
      <Arrow direction="down" />
      <Arrow direction="down" />
      <Arrow direction="down" />
    </div>
  )
}

export default Arrows
