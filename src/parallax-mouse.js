function parallaxMouse(options) {
	/**
	 * Setting options
	 */
	const elements = document.querySelectorAll(options.elements) ?? console.warn('parallaxMouse: Elements is empty!')
	const moveFactor = options.moveFactor ?? 5
	const wrap = options.wrap ?? '.container'
	const perspective = options.perspective ?? false

	/**
	 * Set 'preserve-3d' for perspective objects
	 */
	elements.forEach(element => {
		if(perspective) {
			element.style.transformStyle = 'preserve-3d'
		}
	})

	document.querySelector(wrap).addEventListener('mousemove', function(e) {
		let percentX = (0-((e.pageX/window.innerWidth)*moveFactor)-(moveFactor/2)+moveFactor)/2
		let percentY = (0-((e.pageY/window.innerHeight)*moveFactor)-(moveFactor/2)+moveFactor)/2

		elements.forEach(element => {
			element.style.transform = `translate(${percentX}%, ${percentY}%)`

			if(perspective){
				let mouseX = (e.pageX - window.pageYOffset - window.innerWidth / 2) / window.innerWidth 
				let mouseY = (e.pageY - window.pageXOffset - window.innerHeight / 2) / window.innerWidth 

				element.style.transform += `rotateX(${mouseX * 30}deg) rotateY(${mouseY * -30}deg) perspective(${perspective})`	
			}
		})
	})
}

window.parallaxMouse = parallaxMouse
export { parallaxMouse }