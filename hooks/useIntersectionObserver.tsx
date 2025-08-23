"use client"
import { useEffect, useRef, useState, RefObject } from "react"

type UseIntersectionObserverOptions = IntersectionObserverInit

export default function useIntersectionObserver(
  options: UseIntersectionObserverOptions = { threshold: 0.1 }
): [RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
                   observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return [ref, isVisible]
}
