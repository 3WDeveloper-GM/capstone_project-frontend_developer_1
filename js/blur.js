function blur() {
   var background = document.getElementById('background')
   var scrollHeight = window.scrollY

   var scrollMax = background.clientHeight

   var opacity = (scrollHeight > scrollMax)
      ? 0
      : 1 - (scrollHeight / scrollMax)

   background.style.opacity = opacity;

   var blur = Math.floor(10*(scrollHeight/scrollMax))

   background.style.filter = `blur(${blur}px)`
}