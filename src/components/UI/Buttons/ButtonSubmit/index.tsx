import React, { FC } from 'react'
import style from './ButtonSubmit.module.scss'
import IButtonSubmit from './types'

const ButtonSubmit: FC<IButtonSubmit> = ({ text }: IButtonSubmit) => {
  return (
    <button className={style.btn} type="button">
      {text}
    </button>
  )
}

export default ButtonSubmit
