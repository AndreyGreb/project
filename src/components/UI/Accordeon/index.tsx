import React, { FC } from 'react'

import style from './Accordeon.module.scss'
import IAccordeon from './types'

const Accordeon: FC<IAccordeon> = ({ id, title, content }: IAccordeon) => {
  return (
    <div className={style['productCard__info-accordeon']}>
      <input type="checkbox" id={id} />
      <label className={style['productCard__info-accordeonTitle']} htmlFor={id}>
        <span>{title}</span>
      </label>

      <p className={style['productCard__info-accordeonContent']}>{content}</p>
    </div>
  )
}

export default Accordeon
