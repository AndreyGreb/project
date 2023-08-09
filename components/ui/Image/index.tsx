import NextImage, { ImageProps } from 'next/image'
import { useMemo } from 'react'

const Image = (props: ImageProps) => {

	const source = useMemo(() => {
		if (!props.src) {
			return '/NoPhotoImage.svg'
		}
		return props.src
	}, [props.src])

	return (
		<NextImage
			quality={100}
			priority
			unoptimized
			{...props}
			src={source}
		/>
	)
}

export default Image