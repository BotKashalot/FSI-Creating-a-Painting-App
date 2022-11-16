

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
let clearButton = document.createElement('button')

//append purple onto palette
let colorPurple = document.createElement('div')
colorPurple.setAttribute('class', 'color-choice')
colorPurple.setAttribute('id', 'purple')
colorPurple.textContent = '■'
palette.append(colorPurple)

//button properties and styling
clearButton.textContent = 'Click to clear painting'
clearButton.style.backgroundColor = 'black'
clearButton.style.color = 'white'
clearButton.setAttribute('id', 'white')
console.log(clearButton.id)
document.body.append(clearButton)

//changing the color from teh pallete
palette.addEventListener('click', function(e){
	console.log(e.target)
	selectedColor = e.target.id
	console.log(selectedColor)
//	selectedColor = e.target.color
})

//painting with selected color
painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor 
	console.log(e.target)
	//clearing teh painting with the button
	clearButton.addEventListener('click', function(){
		e.target.style.backgroundColor = 'white'
	})
})


//doublecking to turn pixel back to white
painting.addEventListener('dblclick', function(e){
	e.target.style.backgroundColor = 'white' 
})






