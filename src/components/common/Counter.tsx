import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

interface CounterProps {
    value: number
    suffix?: string
    duration?: number
}

export default function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => {
        const num = Math.round(latest)
        // Format with dots (e.g., 20.000)
        return num.toLocaleString('de-DE') + suffix
    })

    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, { duration, ease: "easeOut" })
            return controls.stop
        }
    }, [inView, value, count, duration])

    return <motion.span ref={ref}>{rounded}</motion.span>
}
