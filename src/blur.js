export function blur() {
   var background = document.getElementById('background')
   var scrollHeight = window.scrollY
   var maximumBlur = 9

   var scrollMax = background.clientHeight

   var opacity = (scrollHeight > scrollMax)
      ? 0
      : 1 - (scrollHeight / scrollMax)

   background.style.opacity = opacity;

   var blur = (scrollHeight < scrollMax)
      ? Math.floor(10 * (scrollHeight / scrollMax))
      : maximumBlur

   background.style.filter = `blur(${blur}px)`
}

export function unBlur(currentBlur, currentOpacity, i = 0) {
   if (i < 40) {
      let opacityStep = 0.05
      let blurStep = 2
      let newOpacity = (currentOpacity < 1)
         ? currentOpacity + opacityStep
         : 1
      let newBlur = (currentBlur > 0)
         ? currentBlur - blurStep
         : 0

      let splash = document.getElementById('background')

      splash.style.opacity = newOpacity
      splash.style.filter = `blur(${newBlur}px)`

      setTimeout(() => unBlur(newBlur, newOpacity, i + 1), 25)
   }
}

export function onLoadHandler() {
   var background = document.getElementById('background');
   var computedStyles = window.getComputedStyle(background);

   var currentOpacity = computedStyles.opacity;
   var currentBlur = computedStyles.filter;

   var completeString = currentOpacity + " " + currentBlur
   var numbers = ParseFloatsFromString(completeString)
   unBlur(numbers[1], numbers[0])
}


export function ParseFloatsFromString(stringArray) {
   var numbersArray = stringArray.match(/\d+(\.\d+)?/g)

   var numbers = numbersArray.map(function (numberString) {
      return parseFloat(numberString, 10)
   })

   return numbers
}

