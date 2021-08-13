import React, { FC } from 'react'

import style from './SelectedSize.module.scss'
import ISelectedSize from './types'

const SizeItem: FC<ISelectedSize> = ({ id, clickSize, selectedSize, value }: ISelectedSize) => {
  return (
    <button
      onClick={() => clickSize(id)}
      className={id === selectedSize ? `${style.sizeItem} ${style.active}` : `${style.sizeItem}`}
      type="button"
    >
      {value}
    </button>
  )
}

export default SizeItem
