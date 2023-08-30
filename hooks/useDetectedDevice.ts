import { useState, useEffect } from 'react'

const getWindowDimensions = (breakpoint: number) => {
	return typeof window !== 'undefined' ? window.innerWidth <= breakpoint : true
}

const useDetectedDevice = () => {
	const [isDesktopState, setIsDesktop] = useState<boolean>(true)
	const [isTabletLargeState, setIsTabletLarge] = useState<boolean>(true)
	const [isTabletState, setIsTablet] = useState<boolean>(true)
	const [isTabletSmallState, setIsTabletSmall] = useState<boolean>(true)
	const [isMobileState, setIsMobile] = useState<boolean>(true)
	const [isMobileSmall, setIsMobileSmall] = useState<boolean>(true)
	const [isMobileXSmall, setIsMobileXSmall] = useState<boolean>(true)

	const devices = {
		isDesktop: isDesktopState,
		isTabletLarge: isTabletLargeState,
		isTablet: isTabletState,
		isTabletSmall: isTabletSmallState,
		isMobile: isMobileState,
		isMobileSmall: isMobileSmall,
		isMobileXSmall: isMobileXSmall,
	}

	const handleResize = () => {
		setIsDesktop(getWindowDimensions(1440))
		setIsTabletLarge(getWindowDimensions(1279))
		setIsTablet(getWindowDimensions(1023))
		setIsTabletSmall(getWindowDimensions(767))
		setIsMobile(getWindowDimensions(567))
		setIsMobileSmall(getWindowDimensions(359))
		setIsMobileXSmall(getWindowDimensions(320))
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return devices
}

export default useDetectedDevice
