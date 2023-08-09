import { useEffect, useMemo, useRef, useState } from 'react'

import Image from '../ui/Image'

import { ProductCardImageProps } from './types'

import styles from './styles.module.scss'

const ProductCardImage = ({ imageList }: ProductCardImageProps) => {

	const lastCloneRef = useRef<HTMLDivElement | null>(null)
	const firstCloneRef = useRef<HTMLDivElement | null>(null)
	const imageListRef = useRef<HTMLDivElement | null>(null)

	const initialPictureList = useMemo(() => {
		if (imageList.length > 1) {
			return [
				{
					id: 'lastClone',
					ref: lastCloneRef,
					...imageList[imageList.length - 1]
				},
				...imageList.map((image, index) => ({
					id: String(index),
					ref: undefined,
					...image
				})),
				{
					id: 'firstClone',
					ref: firstCloneRef,
					...imageList[0]
				}
			]
		}

		return imageList.map((image, index) => ({ id: String(index), ref: undefined, ...image }))
	}, [imageList])

	const [pictureList, setpictureList] = useState(initialPictureList)
	const [mount, setMount] = useState(false)

	const callbackObserver: IntersectionObserverCallback = (entries) => {

		entries.map(entry => {

			const widthItem = lastCloneRef.current?.offsetWidth

			if (entry.target.id === 'lastClone') {
				imageListRef.current?.classList.add('overflow--clear')
				widthItem && imageListRef.current?.scrollTo(widthItem * imageList.length + 1, 0)
				imageListRef.current?.classList.remove('overflow--clear')
			}

			if (entry.target.id === 'firstClone') {
				imageListRef.current?.classList.add('overflow--clear')
				widthItem && imageListRef.current?.scrollTo(widthItem, 0)
				imageListRef.current?.classList.remove('overflow--clear')
			}
		})
	}

	if (mount) {

		const observer = new IntersectionObserver(callbackObserver, {
			root: imageListRef.current,
			threshold: 1
		})

		lastCloneRef.current && observer.observe(lastCloneRef.current)
		firstCloneRef.current && observer.observe(firstCloneRef.current)
	}

	useEffect(() => {
		setMount(true)
	}, [])

	return (
		<div className={styles['layout']}>
			<div
				className={styles['imageList']}
				ref={imageListRef}
			>
				{
					pictureList.map(image =>
						<div
							className={styles['image']}
							id={image.id}
							ref={image.ref}
							key={image.id}
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
	)
}

export default ProductCardImage