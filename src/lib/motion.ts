/** Default UI spring — no overshoot, ~0.4s settle */
export const UI_SPRING = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.4,
};

/** Faster settle for menus and overlays */
export const CHROME_SPRING = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.32,
};

export const REDUCED_MOTION_TRANSITION = {
  duration: 0.18,
  ease: "easeOut" as const,
};
