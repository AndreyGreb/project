import { Swiper, SwiperSlide } from 'swiper/react'
import { useMemo, useState } from 'react'
import classNames from 'classnames'

import useDetectedDevice from '@/hooks/useDetectedDevice'

import Image from '../ui/Image'

import { ProductCardImageProps } from './types'

import styles from './styles.module.scss'
import 'swiper/css'

const MAX_COUNT_IMAGES = 10

const ProductCardImage = ({ imageList }: ProductCardImageProps) => {

	const { } = useDetectedDevice()

	const pictureList = useMemo(() => imageList.map((image, index) => ({ ...image, id: index })), [imageList])

	const [activeImageId, setActiveImageId] = useState(0)

	return (
		<>
			<div className={styles['layout']}>
				<Swiper


					loop
				>
					{
						pictureList.map((picture, index) => index < MAX_COUNT_IMAGES &&
							<SwiperSlide
								key={picture.id}
							>
								<div className={styles['image']}>
									<Image
										src={picture.src}
										alt={picture.alt}
										fill
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</SwiperSlide>
						)
					}
				</Swiper>
				<div className={styles['background']} />
			</div >

			<div className={styles['snippet']}>
				{
					pictureList.map((picture, index) => index < MAX_COUNT_IMAGES &&
						<div
							className={classNames(styles['snippetItem'], activeImageId === picture.id && styles['snippetItem--active'])}
							key={picture.id}
						/>
					)
				}
			</div>
		</>
	)
}

export default ProductCardImage