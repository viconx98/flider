const sliderContainerEl = document.querySelector(".slider-container")
const thumbEl = document.querySelector(".thumb")
const trackEl = document.querySelector(".track")
const valueEl = document.querySelector(".slider-value")

const SLIDER_WIDTH_PX = sliderContainerEl.offsetWidth
const THUMB_WIDTH_PX = thumbEl.offsetWidth
const THUMB_OFFSET_PX = Math.round(THUMB_WIDTH_PX / 2)

let isDragging = false

// To mark the start of dragging
thumbEl.addEventListener("mousedown", (event) => {
    isDragging = true
})

// Update the position of thumb as the mouse moves around
document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        const sliderOffsetLeft = sliderContainerEl.offsetLeft
        const sliderOffsetTop = sliderContainerEl.offsetTop

        const relativePosition = event.clientX - sliderOffsetLeft

        let delta = Math.round((relativePosition / SLIDER_WIDTH_PX) * 100)

        // Max / Min for sliders
        if (delta >= 100) delta = 100
        if (delta <= 0) delta = 0

        // Math to make sure the cursor stays in the center of thumb when its moving around
        const left = event.clientX - sliderOffsetLeft - THUMB_OFFSET_PX
        const top = event.clientY - sliderOffsetTop - THUMB_OFFSET_PX

        thumbEl.style.left = `${left}px`
        thumbEl.style.top = `${top}px`

        valueEl.innerText = `Value: ${delta}`
        trackEl.style.width = `${delta}%`
    }
})

// Uncomment this if you want the thumb to stop dragging when user lets go of holding their mouse click
// thumbEl.addEventListener("mouseup", (event) => {
//     isDragging = false
// })