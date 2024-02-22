// while (document.readyState !== 'complete') {

// }


window.addEventListener("scroll", blur)

function blur() {
   var background = document.getElementById('background')
   var scrollHeight = window.scrollY

   var scrollMax = background.clientHeight

   var opacity = (scrollHeight > scrollMax)
      ? 0
      : 1 - (scrollHeight / scrollMax)

   background.style.opacity = opacity;

   var blur = Math.floor(10 * (scrollHeight / scrollMax))

   background.style.filter = `blur(${blur}px)`
}


const element = document.querySelector("#hello")
const text = "Hi there!"

function textTyping(element, text, i = 0) {
   if (i === 0) {
      element.textContent = ""
   }

   element.textContent += text[i]

   if (i === text.length - 1) {
      return
   }

   setTimeout(() => textTyping(element, text, i + 1), 100)

}

textTyping(element, text)