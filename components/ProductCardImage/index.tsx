import { useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import Image from '../ui/Image'

import { ProductCardImageProps } from './types'

import styles from './styles.module.scss'

const maxImages = 10

const ProductCardImage = ({ imageList }: ProductCardImageProps) => {

	const imagesRef = useRef<Array<HTMLDivElement | null>>([])
	const imageListRef = useRef<HTMLDivElement | null>(null)

	const [activeImageId, setActiveImageId] = useState(0)

	const callbackObserver: IntersectionObserverCallback = useCallback((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setActiveImageId(Number(entry.target.getAttribute('id')))
			}
		})
	}, [imageList])

	const initialObserve = useCallback(() => {

		const observer = new IntersectionObserver(callbackObserver, {
			root: imageListRef.current,
			threshold: 1
		})

		imagesRef.current.forEach((imageRef) => imageRef && observer.observe(imageRef))
	}, [imageList])

	useEffect(() => {
		imageList.length > 1 && initialObserve()
	}, [imageList])

	return (
		<div className={classNames(imageList.length === 0 && styles['productCardImage'])}>
			<div className={styles['layout']}>
				<div
					className={styles['imageList']}
					ref={imageListRef}
				>
					{
						imageList.map((image, index) => index < maxImages &&
							<div
								className={styles['image']}
								id={String(index)}
								ref={el => imagesRef.current[index] = el}
								key={index}
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>
						)
					}
				</div>
				<div className={styles['background']} />
			</div>

			{
				imageList.length > 1 &&
				<div className={styles['snippet']}>
					{
						imageList.map((_, index) => index < maxImages &&
							<div
								className={classNames(styles['snippetItem'], index === activeImageId && styles['snippetItem--active'])}
								key={index}
							/>
						)
					}
				</div>
			}
		</div>
	)
}

export default ProductCardImage