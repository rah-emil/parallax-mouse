## parallax-mouse.js 🔥

Simple parallax elements for the mouse. Pure JavaScript.

### Installation
##### Using the CDN
1. Add `<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax-mouse.js/1.0.0/parallax-mouse.min.js"></script>` to your markup
2. Done!

##### Download file
1. [Download file](https://cdnjs.cloudflare.com/ajax/libs/parallax-mouse.js/1.0.0/parallax-mouse.min.js "Download file")
2. Copy the code and paste into your project.
3. Done!

##### NPM
`npm install  parallax-mouse --save`

### Getting started 

#### Tag script
```html
<body>
	<div class="parallax">
		<img src="http://placehold.it/50x50" class="cherry" alt="">
	</div>
	<!-- /.parallax -->
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax-mouse.js/1.0.0/parallax-mouse.min.js"></script>
	<script>
		parallaxMouse({ elements: '.cherry', moveFactor: 10, wrap: '.parallax', perspective: '100px' })
	</script>
</body>
```

#### ES6
```javascript
import { parallaxMouse } from 'parallax-mouse/dist/parallax-mouse.min.js'

parallaxMouse({ elements: '.cherry', moveFactor: 10, wrap: '.parallax', perspective: '100px' })
```

### Options
| Name  | Default value  | Description  |
| :------------ | :------------ | :------------ |
| elements  | null  | Elements to be involved  |
| moveFactor  | 5  | Scatter level of elements  |
| wrap  | .container  | Wrapping elements (listens to mouse event)  |
| perspective | false  | Needed if you want 3D effect of the elements. By Required in string format. For example, `perspective: '500px'`  |


### Support or Contact
To contact me, write to me by mail: 013131@mail.ru
