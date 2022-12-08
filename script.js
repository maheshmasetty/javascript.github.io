//red yellow blue

//without loops
// const redDiv = document.getElementById("red")
// const greenDiv = document.getElementById("green")
// const yellowDiv = document.getElementById("yellow")

// redDiv.onclick=()=>console.log("red")
// yellowDiv.onclick=()=>console.log("yellow")
// greenDiv.onclick=()=>console.log("green")

//with loops
let t = document.getElementById("res")

const timesclicked = { 'red': 0, 'yellow': 0, 'green': 0 }
const squares = document.querySelectorAll('.colorSquare')
squares.forEach(square => {
  square.onclick = () => {
    //to displAY color inside the box
    timesclicked[square.value] += 1
    square.innerText = timesclicked[square.value]
    //to display the name inside the box
    //square.innerText=square.name

    //to display color on console
    //console.log(square.value)

    //to display color on webpage
    //res.innerText=square.value 
  }
})
const cleargame = document.getElementById("clear")
cleargame.onclick = () => clearbutton()
const clearbutton = () => {
  timesclicked.red = 0
  timesclicked.yellow = 0
  timesclicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}
