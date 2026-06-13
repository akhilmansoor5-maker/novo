"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const filled = scrolled || !isHome || isOpen;

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: filled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0)",
          backdropFilter: filled ? "blur(20px)" : "blur(0px)",
          borderBottomColor: filled ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 border-b"
        style={{ height: scrolled ? 60 : 72, transition: "height 0.4s ease" }}
      >
        <div className="container-novo h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-[22px] font-black tracking-[-0.05em] leading-none text-white">
                NOVO
              </span>
              <span className="text-[9px] tracking-[0.22em] font-medium uppercase leading-none mt-[3px] text-white/40">
                Industries
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                {(pathname === link.href || pathname.startsWith(link.href + "/")) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/8 rounded-none"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919322220026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Link
              href="/quote"
              className="px-5 py-2.5 bg-white text-[#0a0a0a] text-[13px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden text-white/70 hover:text-white transition-colors p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col pt-[72px]"
          >
            <div className="flex-1 flex flex-col px-8 py-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-5 border-b border-white/8 text-4xl font-bold tracking-tight transition-colors ${
                      pathname === link.href ? "text-white" : "text-white/30 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12 flex flex-col gap-4">
              <Link
                href="/quote"
                className="w-full py-4 bg-white text-[#0a0a0a] text-center text-sm font-bold tracking-widest uppercase"
              >
                Request Quote
              </Link>
              <a
                href="tel:+919322220026"
                className="text-center text-sm text-white/40"
              >
                +91 93222 20026
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
