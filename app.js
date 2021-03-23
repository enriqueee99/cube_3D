let box = document.getElementById('box')
let galeria = document.getElementById('galeria')


galeria.addEventListener('click',(e)=>{
	let dato = e.target.className
	switch(dato){
		case 'img1':
		box.style.transform='rotateY(0deg)'
		break;
		case 'img2':
		box.style.transform='rotateY(-90deg)'
		break;
		case 'img3':
		box.style.transform='rotateY(90deg)'
		break;
		case 'img4':
		box.style.transform='rotateY(180deg)'
		break;
		case 'img5':
		box.style.transform='rotateX(-90deg)'
		break;
		case 'img6':
		box.style.transform='rotateX(90deg)'
		break;
	}
})