import { useEffect, useMemo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

import useDetectedDevice from '@/hooks/useDetectedDevice'

import Image from '../ui/Image'

import { ProductCardImageProps } from './types'

import styles from './styles.module.scss'
import 'swiper/css'

const MAX_COUNT_IMAGES = 10

const ProductCardImage = ({ imageList }: ProductCardImageProps) => {

	const imagesRef = useRef<Array<HTMLDivElement | null>>([])
	const layoutRef = useRef<HTMLDivElement | null>(null)

	const { } = useDetectedDevice()

	const pictureList = useMemo(() => imageList.map((image, index) => ({ ...image, id: String(index) })), [imageList])

	const [activeImageId, setActiveImageId] = useState('0')

	const callbackObserver: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => entry.isIntersecting && setActiveImageId(entry.target.id))
	}

	useEffect(() => {

		const observer = new IntersectionObserver(callbackObserver, {
			root: layoutRef.current,
			threshold: 1
		})

		imagesRef.current.forEach((image) => image && observer.observe(image))
	}, [])

	return (
		<>
			<div
				className={styles['layout']}
				ref={layoutRef}
			>
				<Swiper loop>
					{
						pictureList.map((picture, index) => index < MAX_COUNT_IMAGES &&
							<SwiperSlide key={picture.id}>
								<div
									className={styles['image']}
									ref={el => imagesRef.current[index] = el}
									id={picture.id}
								>
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