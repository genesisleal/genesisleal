import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    let animationFrameId

    const updatePosition = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }))
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animationFrameId)
    }
  }, [targetPosition])

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <div
        ref={trailRef}
        className={`cursor-trail ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        ref={cursorRef}
        className={`cursor-main ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: targetPosition.x,
          top: targetPosition.y,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <span className="cursor-text">{isHovering ? 'Ver' : ''}</span>
      </div>
    </>
  )
}
