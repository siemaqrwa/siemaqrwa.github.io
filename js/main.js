const IMAGE1 = document.querySelector("#image_1")
const circles = document.querySelectorAll("#image_1 div")
let lastPos = [0,0]

let Image1Handler = event => {
    let bound = event.target.getBoundingClientRect()
    let x = event.clientX - bound.left 
    let y = event.clientY - bound.top

    lastPos = [x, y]

    console.log(lastPos)

    circles.forEach(circle => {
        circle.setAttribute("style", `translate: ${x}px ${y}px`)
    })
}

IMAGE1.addEventListener("mousemove", Image1Handler)

const IMAGE2 = document.querySelector("#image_2")
const quoterCircles = document.querySelectorAll("#image_2 div")

let randomRotate = _ => `${~~(Math.random()*4) * 90}deg`

let randomH = _ => 180 + ~~(Math.random() * 50)
let randomS = _ => 80 + ~~(Math.random() * 10)
let randomL = _ => 25 + ~~(Math.random() * 10)

quoterCircles.forEach(circle => {
    circle.setAttribute("data-rotate", ~~(Math.random()*4))
    circle.style.rotate = `${+circle.getAttribute("data-rotate") * 90}deg`
    circle.style.background = `hsl(${randomH()}, ${randomS()}%, ${randomL()}%)`

    circle.addEventListener('click', _ => {
        circle.setAttribute("data-rotate", (+circle.getAttribute("data-rotate") + 1))
        circle.style.rotate = `${+circle.getAttribute("data-rotate") * 90}deg`
    })

    circle.addEventListener("contextmenu", e => {
        e.preventDefault()
        circle.style.background = `hsl(${randomH()}, ${randomS()}%, ${randomL()}%)`
    })
})