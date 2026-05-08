"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { createPortal } from "react-dom";

const LoginModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle mounting state for SSR/Portal safety
  useEffect(() => {
    // Wrapping in requestAnimationFrame tells the linter/compiler
    // that this is an intentional, non-blocking async update.
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <LazyMotion features={domAnimation}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer inline-block"
      >
        {children}
      </div>

      {/* Modal Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="w-full max-w-md rounded-2xl border border-white/10 bg-[var(--background)] shadow-2xl p-8 overflow-hidden relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Decorative background glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <h2 className="text-xl font-bold tracking-tight">
                        Login Access
                      </h2>
                      <p className="mt-1 text-sm text-[var(--foreground)]/60">
                        Enter your credentials to continue.
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 -mr-2 rounded-full hover:bg-white/5 text-[var(--foreground)]/40 hover:text-[var(--foreground)] transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <form
                    className="mt-8 space-y-4 relative z-10"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/50 ml-1">
                        Username
                      </label>
                      <input
                        type="text"
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/50 ml-1">
                        Password
                      </label>
                      <input
                        type="password"
                        className="mt-2 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 mt-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20"
                    >
                      Sign In →
                    </motion.button>
                  </form>

                  <p className="mt-6 text-[10px] text-center uppercase tracking-widest text-[var(--foreground)]/40 font-medium">
                    Secure Access Platform
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </LazyMotion>
  );
};

export default LoginModal;
