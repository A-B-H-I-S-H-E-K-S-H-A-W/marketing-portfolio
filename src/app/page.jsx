"use client";

import { ArrowRight, Mail, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { easeInOut, motion } from "framer-motion";
import HeroModal from "@/components/ui/HeroModal";

export default function Home() {
  return (
    <>
      <div className="relative min-h-[120vh] overflow-hidden">
        <div className="absolute top-0 left-0 -z-[1]  inset-0 w-full bg-gradient-to-br from-background via-secondary to-muted overflow-hidden"></div>
        <motion.div
          initial={{ left: "-800px", top: "800px" }}
          animate={{ left: "-155px", top: "112px" }}
          transition={{
            type: "tween",
            ease: easeInOut,
            duration: 2.5,
          }}
          className="absolute md:h-[900px] h-[46rem] md:w-[900px] w-[46rem] bg-gradient-to-br from-accent via-secondary to-muted rounded-full shadow-2xl shadow-foreground/90"
        ></motion.div>
        <motion.div
          initial={{ right: "-800px", bottom: "800px" }}
          animate={{ right: "-168px", bottom: "180px" }}
          transition={{
            type: "tween",
            ease: easeInOut,
            duration: 2.5,
          }}
          className="absolute md:h-[900px] h-[46rem] md:w-[900px] w-[46rem] bg-gradient-to-br from-accent via-secondary to-muted  rounded-full shadow-2xl shadow-foreground/60"
        ></motion.div>

        <Header />

        <main>
          <section className="overflow-hidden">
            <div className="relative mx-auto px-4 md:px-20 py-32 lg:py-10 max-w-screen">
              <div className="grid gap-10 grid-cols-1 md:grid-cols-[60%_40%]">
                <div className="relative z-10 flex flex-col items-start">
                  <motion.div
                    initial={{ position: "relative", top: "-2rem", opacity: 0 }}
                    animate={{ position: "relative", top: "0rem", opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  >
                    <Link
                      href="/"
                      className="rounded-lg flex w-fit items-center gap-2 border p-1 pr-3 lg"
                    >
                      <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                        New
                      </span>
                      <span className="text-sm">Introduction Tailark Html</span>
                      <span className="bg-border block h-4 w-px"></span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </motion.div>

                  <motion.h1
                    initial={{ position: "relative", top: "-2rem", opacity: 0 }}
                    animate={{ position: "relative", top: "0rem", opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.3 }}
                    className="mt-10 text-balance text-start text-4xl font-bold md:text-5xl xl:text-7xl"
                  >
                    Fueling Business with
                    <p className="text-accent">Smart Digital Strategies</p>
                  </motion.h1>
                  <motion.p
                    initial={{ position: "relative", top: "-2rem", opacity: 0 }}
                    animate={{ position: "relative", top: "0rem", opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="text-start mt-8 uppercase max-w-xl text-xs md:text-base"
                  >
                    It's more than a marketing agency—it's a catalyst for brand
                    transformation, turning vision into impact and engagement
                    into loyalty.
                  </motion.p>

                  <motion.div
                    initial={{ position: "relative", top: "-2rem", opacity: 0 }}
                    animate={{ position: "relative", top: "0rem", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="w-full md:w-sm"
                  >
                    <form
                      action=""
                      className="mx-auto my-10 md:max-w-sm lg:my-12"
                    >
                      <div className="bg-input has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border pr-1 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                        <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                        <input
                          placeholder="Your mail address"
                          className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                          type="email"
                        />
                        <div className="md:pr-1.5 lg:pr-0">
                          <Button
                            className="cursor-pointer text-muted"
                            aria-label="submit"
                          >
                            <span className="hidden md:block text-muted">
                              Get Started
                            </span>
                            <SendHorizonal
                              className="relative text-muted mx-auto size-5 md:hidden"
                              strokeWidth={2}
                            />
                          </Button>
                        </div>
                      </div>
                    </form>
                  </motion.div>
                </div>
                <div className="relative z-10">
                  <HeroModal className={""} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
