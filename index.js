

//const painting = document.querySelector('.painting')
//
//painting.addEventListener('click', function(){
//	console.log('testing, testing, 123')
//})

//const painting = document.querySelector('.painting')
//
//painting.addEventListener('click', function(e){
//	console.log(e.target)
//})

//const painting = document.querySelector('.painting')
//
//painting.addEventListener('click', function(e){
//	e.target.style.backgroundColor = 'blue'
//})
//

//let selectedColor = 'blue'
//const painting = document.querySelector('.painting')
//
//painting.addEventListener('click', function(e){
//	e.target.style.backgroundColor = selectedColor 
//})
//

let selectedColor = 'blue'
const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')

painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor 
})


painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor 
})
