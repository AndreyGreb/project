import { useLayoutEffect, useRef, useState } from 'react'

const useResizeObserver = () => {
	const ref = useRef<HTMLDivElement | null>(null)

	const initalSize = {
		width: 0,
		height: 0
	}
	const [size, setSize] = useState(initalSize)

	useLayoutEffect(() => {

		const resizeObserver = new ResizeObserver(([{ target }]) => {

			const { width, height } = target.getBoundingClientRect()

			setSize({
				width,
				height
			})
		})

		if (ref.current) {
			resizeObserver.observe(ref.current)
		}

		return () => resizeObserver.disconnect()
	}, [])

	return { ref, size }
}

export default useResizeObserver