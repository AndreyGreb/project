import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBagData } from '../../store/actionCreators/bag'
import gif from '../../assets/images/icons/loading.gif'

import BagItem from './BagItem'
import style from './Bag.module.scss'
import useTypedSelector from '../../hooks/useTypedSelector'
import IBagItem from './BagItem/types'
import ButtonSubmit from '../UI/Buttons/ButtonSubmit'

const Bag: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBagData())
  }, [dispatch])

  const { bagData, loading, error } = useTypedSelector((state) => state.bag)
  // const [price, setPrice] = useState(0)

  // const priceData = 0
  // for (let i = 0; i < bagData.length; i += 1) {
  //   priceData += parseInt(bagData[i].price, 10)
  // }
  // setPrice(priceData)

  if (loading) {
    return (
      <section className={style.img}>
        <img src={gif} alt="" />
      </section>
    )
  }

  if (error) {
    return <div>{error}</div>
  }
  return (
    <section className={style.bag}>
      <div className={style.bag__header}>
        <span className={style['bag__header-title']}>BAG</span>
        {bagData.length > 0 && (
          <span className={style['bag__header-items']}>
            {bagData.length} {bagData.length === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>
      <div className={style.bag__product}>
        {bagData.length === 0 ? (
          <div className={style['bag__product-empty']}>BAG IS EMPTY!</div>
        ) : (
          bagData.map((item: IBagItem) => {
            return (
              <BagItem
                key={item.id}
                id={item.id}
                srcImg={item.srcImg}
                brand={item.brand}
                category={item.category}
                price={item.price}
              />
            )
          })
        )}
      </div>
      {bagData.length > 0 && (
        <div className={style.bag__checkout}>
          <span className={style['bag__checkout-total']}>Total USD $490</span>
          <div className={style.wrapperBtn}>
            <ButtonSubmit text="PROCEED TO CHECKOUT" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Bag
