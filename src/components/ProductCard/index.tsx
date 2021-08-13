import React, { FC, useState } from 'react'
import Slider from 'react-slick'

import style from './ProductCard.module.scss'
import './index.scss'
import useTypedSelector from '../../hooks/useTypedSelector'
import ButtonSubmit from '../UI/Buttons/ButtonSubmit'
import SizeItem from './SizeItem'
import Accordeon from '../UI/Accordeon'

const ProductCard: FC = () => {
  const { size } = useTypedSelector((state) => state.size)

  const [selectedSize, setSelectedSize] = useState(0)

  const clickSize = (id: number) => {
    setSelectedSize(id)
  }

  return (
    <section className={style.productCard}>
      <div className={style.productCard__slider}>
        <Slider infinite={false} slidesToShow={2} waitForAnimate={false}>
          <img
            className={style['productCard__slider-item']}
            src="https://a.lmcdn.ru/img600x866/R/T/RTLAAD418301_13771372_1_v1_2x.jpg"
            alt=""
          />

          <img
            className={style['productCard__slider-item']}
            src="https://a.lmcdn.ru/img600x866/R/T/RTLAAD418301_13771373_2_v1_2x.jpg"
            alt=""
          />

          <img
            className={style['productCard__slider-item']}
            src="https://a.lmcdn.ru/img600x866/R/T/RTLAAD418301_13771374_3_v1_2x.jpg"
            alt=""
          />

          <img
            className={style['productCard__slider-item']}
            src="https://a.lmcdn.ru/img600x866/R/T/RTLAAD418301_13771375_4_v1_2x.jpg"
            alt=""
          />
          <img
            className={style['productCard__slider-item']}
            src="https://a.lmcdn.ru/img600x866/R/T/RTLAAD418301_13771376_5_v1_2x.jpg"
            alt=""
          />
        </Slider>
      </div>

      <div className={style.productCard__info}>
        <span className={style['productCard__info-brand']}>AERONAUTICA MILITARE</span>
        <span className={style['productCard__info-category']}>SWEATSHIRT</span>
        <div className={style['productCard__info-price']}>
          <span>USD $300.00</span>
        </div>
        <div className={style['productCard__info-size']}>
          <span className={style['productCard__info-size-title']}>SIZE</span>
          <div className={style['productCard__info-size-container']}>
            {size.map((item) => {
              return (
                <SizeItem
                  value={item.value}
                  key={item.id}
                  id={item.id}
                  clickSize={clickSize}
                  selectedSize={selectedSize}
                />
              )
            })}
          </div>
        </div>
        <div className={style['productCard__info-btn']}>
          <div className={style['productCard__info-btnBag']}>
            <ButtonSubmit text="ADD TO BAG" />
          </div>
          <div className={style['productCard__info-btnLike']}>
            <ButtonSubmit
              text={
                <svg viewBox="0 0 28 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.0938 2.22812C23.6644 0.79865 21.7719 0.017362 19.7521 0.017362C17.7324 0.017362 15.8341 0.804437 14.4047 2.2339L13.6581 2.98047L12.9 2.22233C11.4705 0.792862 9.56647 0 7.54669 0C5.53271 0 3.63447 0.787075 2.21079 2.21075C0.781319 3.64022 -0.00575563 5.53846 3.16897e-05 7.55824C3.16897e-05 9.57801 0.792894 11.4705 2.22236 12.8999L13.0909 23.7685C13.2414 23.919 13.444 24 13.6407 24C13.8375 24 14.0401 23.9248 14.1905 23.7743L25.0823 12.9231C26.5117 11.4936 27.2988 9.59537 27.2988 7.5756C27.3046 5.55582 26.5233 3.65758 25.0938 2.22812ZM23.9827 11.8177L13.6407 22.1191L3.32195 11.8003C2.18764 10.666 1.56261 9.16132 1.56261 7.55824C1.56261 5.95515 2.18185 4.45045 3.31616 3.32192C4.44469 2.19339 5.94939 1.56836 7.54669 1.56836C9.14978 1.56836 10.6603 2.19339 11.7946 3.32771L13.1025 4.63564C13.4092 4.94237 13.9012 4.94237 14.2079 4.63564L15.5043 3.33928C16.6386 2.20497 18.1491 1.57994 19.7464 1.57994C21.3437 1.57994 22.8484 2.20497 23.9827 3.33349C25.117 4.46781 25.7362 5.97251 25.7362 7.5756C25.742 9.17868 25.117 10.6834 23.9827 11.8177Z" />
                </svg>
              }
            />
          </div>
        </div>
        <Accordeon
          id="accordeon1"
          title="PRODUCT DESCRIPTION"
          content="Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel."
        />
        <Accordeon
          id="accordeon2"
          title="SHIPPING & RETURNS"
          content="Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel."
        />
        <Accordeon
          id="accordeon3"
          title="FABRIC COMPOSITION"
          content="Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel."
        />
      </div>
    </section>
  )
}

export default ProductCard
