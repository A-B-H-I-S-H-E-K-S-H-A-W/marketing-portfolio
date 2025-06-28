"use client";

import { ArrowRight, Mail, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto px-4 md:px-20 py-32 lg:py-28  min-h-screen md:min-h-0">
            <div className="">
              <div className="relative z-10 mx-auto w-full text-center">
                <Link
                  href="/"
                  className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Introduction Tailark Html</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>
                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-7xl">
                  Fueling Business Growth with
                  <p className="text-yellow-400">Smart Digital Strategies</p>
                </h1>
                <p className="mt-8">
                  It's more than a marketing agency—it's a catalyst for brand
                  transformation, turning vision into impact and engagement into
                  loyalty.
                </p>

                <div>
                  <form action="" className="mx-auto my-10 max-w-sm lg:my-12">
                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border pr-1 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                      <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                      <input
                        placeholder="Your mail address"
                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                        type="email"
                      />
                      <div className="md:pr-1.5 lg:pr-0">
                        <Button
                          className="cursor-pointer text-gray-400 hover:text-white"
                          aria-label="submit"
                        >
                          <span className="hidden md:block">Get Started</span>
                          <SendHorizonal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
