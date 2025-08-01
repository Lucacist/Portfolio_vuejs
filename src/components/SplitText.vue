<template>
    <div
      ref="textRef"
      :class="`split-parent ${className}`"
      :style="styleObject"
    >
      {{ text }}
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { SplitText as GSAPSplitText } from '../utils/SplitText'
  
  gsap.registerPlugin(ScrollTrigger, GSAPSplitText)
  
  const props = defineProps({
    text: String,
    className: { type: String, default: '' },
    delay: { type: Number, default: 100 },
    duration: { type: Number, default: 0.6 },
    ease: { type: String, default: 'power3.out' },
    splitType: { type: String, default: 'chars' },
    from: { type: Object, default: () => ({ opacity: 0, y: 40 }) },
    to: { type: Object, default: () => ({ opacity: 1, y: 0 }) },
    threshold: { type: Number, default: 0.1 },
    rootMargin: { type: String, default: '-100px' },
    textAlign: { type: String, default: 'center' },
    onLetterAnimationComplete: Function
  })
  
  const textRef = ref(null)
  let splitter = null
  let scrollTrigger = null
  
  const styleObject = {
    textAlign: props.textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  }
  
  const animateText = () => {
    if (!textRef.value || !props.text) return
  
    const el = textRef.value
    const absoluteLines = props.splitType === 'lines'
    if (absoluteLines) el.style.position = 'relative'
  
    try {
      splitter = new GSAPSplitText(el, {
        type: props.splitType,
        absolute: absoluteLines,
        linesClass: 'split-line'
      })
    } catch (err) {
      console.error('SplitText failed:', err)
      return
    }
  
    let targets = splitter[props.splitType] || splitter.chars
  
    targets.forEach(t => {
      t.style.willChange = 'transform, opacity'
    })
  
    const startPct = (1 - props.threshold) * 100
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(props.rootMargin)
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
    const marginUnit = marginMatch ? (marginMatch[2] || 'px') : 'px'
    const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`
    const start = `top ${startPct}%${sign}`
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
        once: true,
        onToggle: (self) => (scrollTrigger = self)
      },
      onComplete: () => {
        gsap.set(targets, {
          ...props.to,
          clearProps: 'willChange',
          immediateRender: true
        })
        props.onLetterAnimationComplete?.()
      }
    })
  
    tl.set(targets, { ...props.from, immediateRender: false, force3D: true })
    tl.to(targets, {
      ...props.to,
      duration: props.duration,
      ease: props.ease,
      stagger: props.delay / 1000,
      force3D: true
    })
  }
  
  onMounted(() => {
    animateText()
  })
  
  onBeforeUnmount(() => {
    if (scrollTrigger) scrollTrigger.kill()
    if (splitter) splitter.revert()
  })
  </script>

<style scoped>
.split-parent {
  display: inline-block;
}

.split-line {
  display: block;
}

.chars {
  display: inline-block;
}

.words {
  display: inline-block;
}

.lines {
  display: block;
}

p {
  overflow: hidden;
  font-size: inherit;
}
</style>
  