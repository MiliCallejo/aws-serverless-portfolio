import React from "react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { REDUCED_MOTION_TRANSITION, UI_SPRING } from "@/lib/motion";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function MotionWrapper({ children, delay = 0, ...props }: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={
          reduceMotion ? { ...REDUCED_MOTION_TRANSITION, delay } : { ...UI_SPRING, delay }
        }
        {...props}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
