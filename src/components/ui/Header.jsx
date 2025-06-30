import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import lightLogo from "@/assets/darkLogo.png";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Expertise", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Header = ({ className }) => {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuState]);
  return (
    <header className="max-w-screen">
      <motion.nav
        initial={{ position: "relative", top: "-2rem", opacity: 0 }}
        animate={{ position: "relative", top: "0rem", opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        data-state={menuState && "active"}
        className={`group relative z-20 w-full ${className}`}
      >
        <div className="m-auto md:px-20 px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 py-6 lg:gap-0 lg:py-10 overflow-hidden">
            <div className="flex w-full justify-between">
              <div className="z-20 text-foreground lg:text-4xl text-2xl font-bold">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <Image
                    className="block w-44 md:w-56"
                    src={lightLogo}
                    alt="app illustration"
                    height={80}
                  />
                </Link>
              </div>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20  block cursor-pointer lg:p-2 p-1 rounded-xl backdrop-blur-2xl bg-primary hover:bg-primary/90 duration-300"
              >
                <Menu className="text-secondary group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto lg:size-10 size-8 duration-200" />
                <X className="text-secondary group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto lg:size-10 size-8 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <AnimatePresence>
              {menuState && (
                <>
                  <motion.div
                    initial={{
                      height: "0",
                      width: "100vw",
                      left: "0",
                      overflow: "hidden",
                    }}
                    animate={{
                      height: "100vh",
                      width: "100vw",
                      left: "0",
                      overflow: "hidden",
                    }}
                    exit={{
                      height: "0",
                      width: "100vw",
                      left: "0",
                      overflow: "hidden",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: easeInOut,
                      type: "spring",
                      stiffness: 50,
                      damping: 16,
                      mass: 1.5,
                    }}
                    className="absolute max-h-dvh top-0 bg-muted/50 backdrop-blur-xl flex flex-col items-start justify-between rounded-2xl border md:px-20 px-5 shadow-2xl shadow-zinc-300/60 overflow-hidden"
                  >
                    <div className="lg:pr-4">
                      <ul className="pt-32 text-base lg:flex lg:flex-col space-y-6 lg:space-y-12 lg:text-sm">
                        {menuItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className="text-foreground/80 hover:text-primary font-bold block duration-150 lg:text-5xl text-3xl"
                            >
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pb-12 md:py-8 flex w-full flex-col justify-end">
                      <Button
                        variant="default"
                        size="lg"
                        className="cursor-pointer text-secondary"
                      >
                        <Link href="#">
                          <span className="md:text-xl text-base">
                            Contact Us
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
