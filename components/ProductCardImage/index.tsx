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

	const { isTablet } = useDetectedDevice()

	const pictureList = useMemo(() => imageList.map((image, index) => ({ ...image, id: String(index) })), [imageList])

	const initialActiveImageId = '0'
	const [activeImageId, setActiveImageId] = useState(initialActiveImageId)

	const activeImage = useMemo(() => pictureList.find(picture => picture.id === activeImageId), [activeImageId])

	const callbackObserver: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => entry.isIntersecting && setActiveImageId(entry.target.id))
	}

	useEffect(() => {

		setActiveImageId(initialActiveImageId)

		if (isTablet) {
			const observer = new IntersectionObserver(callbackObserver, {
				root: layoutRef.current,
				threshold: 1
			})

			imagesRef.current.forEach((image) => image && observer.observe(image))
		}
	}, [isTablet])

	return (
		<>
			<div
				className={styles['layout']}
				ref={layoutRef}
			>
				{
					!isTablet &&
					<div className={styles['image']}>
						<Image
							src={activeImage?.src || ''}
							alt={activeImage?.alt || ''}
							fill
							style={{ objectFit: 'contain' }}
						/>
						{
							pictureList.length > 1 &&
							<div
								className={styles['mask']}
								onMouseLeave={() => setActiveImageId(initialActiveImageId)}
							>
								{
									pictureList.map((picture, index) => index < MAX_COUNT_IMAGES &&
										<div
											className={styles['maskItem']}
											onMouseEnter={() => setActiveImageId(picture.id)}
											key={picture.id}
										/>
									)
								}
							</div>
						}
					</div>
				}
				{
					isTablet &&
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
				}
				<div className={styles['background']} />
			</div>

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