import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { CHROME_SPRING, REDUCED_MOTION_TRANSITION } from "@/lib/motion";
import {
  ArrowUpRight01Icon,
  Cancel01Icon,
  DocumentAttachmentIcon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Experiencia", href: "/#experience" },
  { label: "Trabajo", href: "/#work" },
  { label: "Habilidades", href: "/#skills" },
  { label: "Certificaciones", href: "/#awards" },
  { label: "Educación", href: "/#education" }
] as const;

const DESKTOP_NAV_QUERY = "(min-width: 768px)";

function isVisible(element: HTMLElement) {
  return typeof element.checkVisibility === "function"
    ? element.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })
    : element.getClientRects().length > 0;
}

function focusIfVisible(element: HTMLElement | null) {
  if (element && isVisible(element)) element.focus();
}

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAV_QUERY);
    const closeOnDesktop = () => {
      if (!media.matches) return;
      const active = document.activeElement;
      const lostVisibleFocus = active instanceof HTMLElement && !isVisible(active);
      setIsMenuOpen(false);
      if (!lostVisibleFocus) return;
      const desktopLink = desktopNavRef.current?.querySelector<HTMLElement>("a[href]");
      focusIfVisible(desktopLink ?? null);
    };

    closeOnDesktop();
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      focusIfVisible(menuButtonRef.current);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <header className="glass-chrome sticky top-0 z-50 w-full text-foreground">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-8">
          <a
            className="pressable group flex min-h-11 items-center gap-2.5 font-display text-sm tracking-[0.04em]"
            href="/"
            onClick={closeMenu}
          >
            <span
              className="h-3 w-3 shrink-0 bg-coral transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
              aria-hidden="true"
            />
            {personalInfo.name}
          </a>

          <nav
            ref={desktopNavRef}
            className="hidden items-center gap-6 text-sm font-medium md:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="pressable flex min-h-11 items-center px-1.5 text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 text-foreground">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="pressable hidden min-h-10 items-center gap-2 border border-foreground/35 px-3 text-sm font-bold text-muted-foreground transition-colors duration-150 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground md:inline-flex"
            >
              <HugeiconsIcon
                icon={DocumentAttachmentIcon}
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
              CV
            </a>
            <ThemeToggle />

            <button
              ref={menuButtonRef}
              type="button"
              className="pressable inline-flex h-11 w-11 items-center justify-center text-foreground md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
            >
              <HugeiconsIcon
                icon={isMenuOpen ? Cancel01Icon : Menu01Icon}
                size={20}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <m.div
              id={menuId}
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={reduceMotion ? REDUCED_MOTION_TRANSITION : CHROME_SPRING}
              className="overflow-hidden bg-coral text-ink md:hidden"
            >
              <nav
                className="mx-auto flex max-w-6xl flex-col gap-0 px-6 py-4 font-display text-3xl tracking-[-0.01em]"
                aria-label="Mobile"
              >
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="pressable flex min-h-14 items-center border-b border-ink/30 text-ink"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable flex min-h-14 items-center justify-between border-b border-ink/30 text-ink"
                  onClick={closeMenu}
                >
                  <span>CV</span>
                  <span className="flex items-center gap-1.5 bg-ink px-2.5 py-1.5 font-sans text-xs font-black tracking-normal text-white">
                    PDF
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="h-3.5 w-3.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </nav>
            </m.div>
          ) : null}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
