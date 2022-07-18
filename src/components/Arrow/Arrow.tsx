import React, { FC } from 'react'

import styles from './Arrow.module.scss'
import arrow from '../../images/down-arrow.png'

type TDirection = 'right' | 'left' | 'up' | 'down'

interface IArrowProps {
  direction: TDirection
}

const Arrow: FC<IArrowProps> = ({ direction }) => {
  return (
    <div className={styles.arrow}>
      <img src={arrow} alt={direction} />
    </div>
  )
}

export default Arrow
