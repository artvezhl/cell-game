import React, { FC } from 'react'

import Arrow, { TDirection } from '../Arrow/Arrow'
import styles from './Arrows.module.scss'

interface IArrowsProps {
  directions: TDirection[]
}

const Arrows: FC<IArrowsProps> = ({ directions }) => {
  return (
    <div className={styles.arrows}>
      {directions.map((direction) => (
        <Arrow key={Math.random() * Date.now()} direction={direction} />
      ))}
    </div>
  )
}

export default Arrows
