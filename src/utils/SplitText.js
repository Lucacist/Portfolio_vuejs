// utils/SplitText.js
export class SplitText {
    constructor(el, { type = 'chars', linesClass = '' } = {}) {
      this.el = el
      this.originalHTML = el.innerHTML
      this.chars = []
      this.words = []
      this.lines = []
  
      const text = el.textContent.trim()
      const words = text.split(' ')
  
      if (type === 'words' || type === 'chars') {
        el.innerHTML = ''
  
        words.forEach((word, wIndex) => {
          const wordSpan = document.createElement('span')
          wordSpan.style.display = 'inline-block'
  
          if (type === 'words') this.words.push(wordSpan)
  
          word.split('').forEach((char, cIndex) => {
            const charSpan = document.createElement('span')
            charSpan.textContent = char
            charSpan.style.display = 'inline-block'
            wordSpan.appendChild(charSpan)
            if (type === 'chars') this.chars.push(charSpan)
          })
  
          el.appendChild(wordSpan)
          if (wIndex < words.length - 1) {
            el.appendChild(document.createTextNode(' '))
          }
        })
      }
    }
  
    revert() {
      this.el.innerHTML = this.originalHTML
    }
  }
  