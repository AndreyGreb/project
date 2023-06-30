import { useEffect, useRef, useState } from 'react'

const useScrollTo = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [scrollTo, setScrollTo] = useState(false)

	useEffect(() => {
		if (ref.current && scrollTo) {
			ref.current!.scrollIntoView({ behavior: 'smooth' })
			setScrollTo(false)
		}
	}, [scrollTo])

	return { ref, setScrollTo }
}

export default useScrollTo