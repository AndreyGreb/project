import { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from '../ui/Image'

import { ProductCardImageProps } from './types'

import styles from './styles.module.scss'
import 'swiper/css'

const maxImages = 10

const ProductCardImage = ({ imageList }: ProductCardImageProps) => {

	const [activeImageId, setActiveImageId] = useState(0)

	return (
		<div className={styles['layout']}>
			<Swiper

			>
				{
					imageList.map((image, index) => index < maxImages &&
						<SwiperSlide

							key={index}
						>
							<div
								className={styles['image']}
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>
						</SwiperSlide>
					)
				}
			</Swiper>
			<div className={styles['background']} />
		</div>
	)
}

export default ProductCardImage