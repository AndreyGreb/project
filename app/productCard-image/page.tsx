"use client"

import ProductCardImage from '@/components/ProductCardImage'

import styles from './styles.module.scss'

const ProductCardImagePage = () => {
	return (
		<div className={styles['productCard']}>
			<ProductCardImage
				imageList={[
					{
						src: 'productCardImage1.jpg',
						alt: 'image 1'
					},
					{
						src: 'productCardImage2.png',
						alt: 'image 2'
					},
					{
						src: 'productCardImage3.jpg',
						alt: 'image 3'
					}
				]}

			/>
		</div>
	)
}

export default ProductCardImagePage