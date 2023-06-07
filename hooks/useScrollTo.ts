import { useEffect, useRef, useState } from 'react'

const useScrollTo = <T extends Element>() => {
	const ref = useRef<T>(null)
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