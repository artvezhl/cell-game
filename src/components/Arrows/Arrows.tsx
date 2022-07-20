import React, { FC } from 'react'

import Arrow, { TDirection } from '../Arrow/Arrow'
import styles from './Arrows.module.scss'

interface IArrowsProps {
  directions: TDirection[]
  isGameActive: boolean
}

const Arrows: FC<IArrowsProps> = ({ directions, isGameActive }) => {
  return (
    <div className={styles.arrows}>
      {directions.length && isGameActive
        ? directions.map((direction) => (
            <Arrow key={Math.random() * Date.now()} direction={direction} />
          ))
        : null}
    </div>
  )
}

export default Arrows
