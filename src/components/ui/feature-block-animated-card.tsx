
"use client"

import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedIconProps {
  icon: React.ReactNode
  index: number
  className?: string
}

const AnimatedIcon = ({ icon, index, className }: AnimatedIconProps) => {
  return (
    <motion.div
      className={cn(
        "absolute size-12 rounded-full bg-white/10 p-3 shadow-xl backdrop-blur-md",
        `circle-${index + 1}`,
        className
      )}
    >
      {icon}
    </motion.div>
  )
}

interface FeatureBlockAnimatedCardProps {
  title: string | React.ReactNode
  description: React.ReactNode
  gradient?: boolean
  className?: string
  contentClassName?: string
  cardClassName?: string
  icons?: React.ReactNode[] | Array<{ icon: React.ReactNode; size?: "sm" | "md" | "lg" }>
}

export function FeatureBlockAnimatedCard({
  title,
  description,
  gradient = false,
  className,
  contentClassName,
  cardClassName,
  icons = [],
}: FeatureBlockAnimatedCardProps) {
  const [scope, animate] = useAnimate()

  // Setup animated icons positions
  useEffect(() => {
    if (icons.length === 0) return

    const iconPositions = [
      { top: "0%", left: "20%" },
      { top: "30%", right: "5%" },
      { top: "70%", left: "10%" },
      { top: "60%", right: "15%" },
    ]

    // Apply initial positions to each icon
    icons.slice(0, 4).forEach((_, index) => {
      const position = iconPositions[index]
      const element = document.querySelector(`.circle-${index + 1}`)
      if (element && position) {
        Object.entries(position).forEach(([key, value]) => {
          ;(element as HTMLElement).style[key as any] = value
        })
      }
    })

    // Create animation sequence for each icon
    icons.slice(0, 4).forEach((_, i) => {
      animate(
        `.circle-${i + 1}`,
        { y: [0, -10, 0], scale: [1, 1.1, 1] },
        { 
          duration: 2, 
          delay: i * 0.2,
          repeat: Infinity,
          repeatDelay: 0.5
        }
      )
    })

    // Cleanup function
    return () => {
      // Animation cleanup happens automatically with useAnimate
    }
  }, [icons, animate])

  return (
    <div className={cn("relative", className)} ref={scope}>
      {/* Animated icons */}
      {icons.slice(0, 4).map((iconItem, index) => {
        const icon = 'icon' in iconItem ? iconItem.icon : iconItem
        return (
          <AnimatedIcon key={index} icon={icon} index={index} />
        )
      })}

      {/* Main content card */}
      <Card
        className={cn(
          "relative overflow-hidden",
          gradient &&
            "bg-gradient-to-br from-gray-900/90 via-gray-900 to-gray-800/80",
          cardClassName
        )}
      >
        <CardContent
          className={cn(
            "flex flex-col gap-2 p-6 sm:p-8",
            contentClassName
          )}
        >
          <h3 className="text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
