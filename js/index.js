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

function unblur(currentBlur, currentOpacity, i = 0) {

   var newOpacity = (currentOpacity < 1)
      ? currentOpacity + 0.04
      : 1
   var newBlur = (currentBlur > 0)
      ? currentBlur - 1
      : 0
   
   var splash = document.getElementById('background')

   splash.style.opacity = newOpacity
   splash.style.filter = `blur(${newBlur}px)`

   setTimeout(() => unblur(newBlur, newOpacity,i + 1), 50)
}


function ParseFloatsFromString(stringArray) {
   var numbersArray = stringArray.match(/\d+(\.\d+)?/g)

   var numbers = numbersArray.map(function (numberString) {
      return parseFloat(numberString, 10)
   })

   return numbers
}


window.addEventListener('load', function () {
   var background = document.getElementById('background');
   var computedStyles = window.getComputedStyle(background);

   var currentOpacity = computedStyles.opacity;
   var currentBlur = computedStyles.filter;

   var completeString = currentOpacity + " " + currentBlur
   var numbers = ParseFloatsFromString(completeString)
   unblur(numbers[1], numbers[0])
})

window.addEventListener("scroll", blur)

const element = document.querySelector("#hello")
const text = "Hi there!"


setTimeout(() => textTyping(element, text), 2000)


