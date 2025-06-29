"use client";

import { ArrowRight, Mail, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { easeInOut, motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 z-[1] h-screen inset-0 w-full bg-gradient-to-br from-background via-secondary to-muted overflow-hidden">
        <motion.div
          initial={{ left: "-800px", top: "800px" }}
          animate={{ left: "-160px", top: "112px" }}
          transition={{
            type: "tween",
            ease: easeInOut,
            duration: 2.5,
          }}
          className="absolute -left-40 top-28 h-[900px] w-[900px] bg-gradient-to-br from-accent via-secondary to-muted rounded-full shadow-2xl shadow-foreground/90"
        ></motion.div>
        <motion.div
          initial={{ right: "-800px", bottom: "800px" }}
          animate={{ right: "-160px", bottom: "112px" }}
          transition={{
            type: "tween",
            ease: easeInOut,
            duration: 2.5,
          }}
          className="absolute -right-40 bottom-28 h-[900px] w-[900px] bg-gradient-to-br from-accent via-secondary to-muted  rounded-full shadow-2xl shadow-foreground/60"
        ></motion.div>
      </div>

      <Header />

      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto px-4 md:px-20 py-32 lg:py-10 max-w-screen min-h-[200vh]">
            <div className="relative z-10 flex flex-col items-start">
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

              <h1 className="mt-10 text-balance text-start text-4xl font-bold md:text-5xl xl:text-7xl">
                Fueling Business with
                <p className="text-accent">Smart Digital Strategies</p>
              </h1>
              <p className="text-start mt-8 uppercase max-w-xl text-xs md:text-base">
                It's more than a marketing agency—it's a catalyst for brand
                transformation, turning vision into impact and engagement into
                loyalty.
              </p>

              <div className="w-full md:w-sm">
                <form action="" className="mx-auto my-10 md:max-w-sm lg:my-12">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
