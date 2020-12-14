let w = window.outerWidth;
let h = document.querySelector('.content').clientHeight;
let h_b = document.querySelector('.parallax').clientHeight;

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', function () {
		//console.log(window.outerWidth+ " "+ window.outerHeight);
		let s = window.pageYOffset;
		
		let p = s / h * 100;
		let p_b = s / h_b * 100;
		let o = 1 - 1 / 100 * p_b;
		

		let z_1 = 1 + (w / 10000 * p_b);
		document.querySelector('.parallax__snowfall-first').style.transform = `scale(${z_1})`;
		document.querySelector('.parallax__snowfall-first').style.opacity = Math.abs(o);
		
		z_1 = 1 + (w / 1000000 * p_b);
		document.querySelector('.parallax__snowfall-second').style.transform = `scale(${z_1})`;
		document.querySelector('.parallax__snowfall-second').style.opacity = Math.abs(o);


		z_1 = 1 + (w / 5000000 * p);
		document.querySelector('.parallax__background').style.transform = `scale(${z_1})`;

		let hr = w / 2000 * p_b;
		z_1 = 1 + (w * 0.000005 * p_b);
		document.querySelector('.parallax__snow-main').style.transform = `translate3d(${hr}px,0,0) scale(${z_1})`;

		hr = w / 1500 * p_b;
		z_1 = 1 + (w * 0.00001 * p_b);
		document.querySelector('.parallax__tree').style.transform = `translate3d(${hr}px,0,0) scale(${z_1})`;

		//let hr_3 = w / 1500 * p_b;
		//let z_5 = 1 + (w * 0.00001 * p_b); 
		document.querySelector('.parallax__snow-near-tree').style.transform = `translate3d(${hr}px,0,0) scale(${z_1})`;

		// let hr_4 = w / 1500 * p_b;
		//let z_6 = 1 + (w * 0.00001 * p_b); 
		document.querySelector('.parallax__gift').style.transform = `translate3d(${hr}px,0,0) scale(${z_1})`;

		// let hr_5 = w / 1500 * p_b;
		//let z_7 = 1 + (w * 0.00001 * p_b); 
		document.querySelector('.parallax__snowman').style.transform = `translate3d(${hr}px,0,0) scale(${z_1})`; 
	});

});;