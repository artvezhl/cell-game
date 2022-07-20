import React, { FC } from 'react'

import styles from './Arrow.module.scss'
import arrow from '../../images/down-arrow.png'

export type TDirection = 'right' | 'left' | 'up' | 'down'

interface IArrowProps {
  direction: TDirection
}

const Arrow: FC<IArrowProps> = ({ direction = 'down' }) => {
  const currentDirection = () => {
    let rotate = 0

    switch (direction) {
      case 'up':
        rotate = 180
        break
      case 'left':
        rotate = 90
        break
      case 'right':
        rotate = 270
        break
      default:
        break
    }

    return `rotate(${rotate}deg)`
  }

  return (
    <div className={styles.arrow}>
      <img
        src={arrow}
        style={{
          transform: currentDirection(),
        }}
        alt={`${direction} arrow`}
      />
    </div>
  )
}

export default Arrow
