export function textTyping(element, text, i = 0) {
   if (i === 0) {
      element.textContent = ""
   }
   element.textContent += text[i]

   if (i === text.length - 1) {
      return
   }
   setTimeout(() => textTyping(element, text, i + 1), 150)
}

export const message = "Hello There"