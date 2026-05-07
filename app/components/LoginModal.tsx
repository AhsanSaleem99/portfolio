"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

const LoginModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  // ✅ Close Modal Function
  const closeModal = () => setOpen(false);

  // ✅ Prevent Background Scroll + ESC Close
  useEffect(() => {
    if (!open) return;

    // Lock scroll
    document.body.style.overflow = "hidden";

    // ESC handler
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);

    // Cleanup
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>

      {/* Modal Portal */}
      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999]
              flex items-center justify-center
              bg-black/50 backdrop-blur-md px-4"
              onClick={closeModal} // ✅ Click outside closes
            >
              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full max-w-md rounded-2xl border border-[var(--foreground)]/10
                bg-[var(--background)]/90 backdrop-blur-xl shadow-2xl p-8"
                onClick={(e) => e.stopPropagation()} // ✅ Prevent inside click closing
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      Login Access
                    </h2>
                    <p className="mt-1 text-sm text-[var(--foreground)]/60">
                      Enter your credentials to continue.
                    </p>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="text-[var(--foreground)]/50 hover:text-[var(--foreground)] transition"
                  >
                    ✕
                  </button>
                </div>

                {/* Form */}
                <form className="mt-6 space-y-5">
                  {/* Username */}
                  <div>
                    <label className="text-sm font-medium">Username</label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      className="mt-2 w-full px-4 py-3 rounded-xl border border-[var(--foreground)]/15
                      bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="mt-2 w-full px-4 py-3 rounded-xl border border-[var(--foreground)]/15
                      bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-medium
                    bg-gradient-to-r from-cyan-400 to-purple-500
                    text-white hover:opacity-90 transition"
                  >
                    Sign In →
                  </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-xs text-center text-[var(--foreground)]/50">
                  Tip: Press <span className="font-semibold">ESC</span> to close
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default LoginModal;
