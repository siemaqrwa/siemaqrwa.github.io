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

let CursorHandler = event => {
    let x = event.clientX
    let y = event.clientY

    document.querySelector("#cursor").setAttribute("style", `translate: ${x}px ${y}px`)
}

IMAGE1.addEventListener("mousemove", Image1Handler)

document.addEventListener("mousemove", CursorHandler)