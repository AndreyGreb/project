import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { removeBagData } from '../../../store/actionCreators/bag'
import { PRODUCT_ROUTE } from '../../../utils/consts'
import ButtonRemove from '../../UI/Buttons/ButtonRemove'

import style from './BagItem.module.scss'
import IBagItem from './types'

const BagItem: FC<IBagItem> = ({ id, srcImg, brand, category, price }: IBagItem) => {
  const dispatch = useDispatch()
  const { bagData } = useTypedSelector((state) => state.bag)
  const removeBagItem = (bagId: number) => {
    const responce = bagData.filter((item) => {
      return item.id !== bagId
    })
    dispatch(removeBagData(responce))
  }
  return (
    <div className={style['bag__product-item']}>
      <Link to={`${PRODUCT_ROUTE}/:${id}`}>
        <img src={srcImg} alt="" />
      </Link>
      <div className={style['bag__product-itemInfo']}>
        <span className={style['bag__product-itemInfo-brand']}>{brand}</span>
        <span className={style['bag__product-itemInfo-category']}>{category}</span>
        <span className={style['bag__product-itemInfo-price']}>USD ${price}</span>
      </div>
      <ButtonRemove id={id} click={removeBagItem} />
    </div>
  )
}

export default BagItem
