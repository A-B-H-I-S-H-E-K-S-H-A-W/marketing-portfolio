"use client";

import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MessageSquareText,
  SendHorizonal,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { easeInOut, motion } from "framer-motion";
import HeroModal from "@/components/ui/HeroModal";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { items, strategies } from "@/data";
import {
  DraggableCard,
  DraggableCardContainer,
} from "@/components/DragggableCards";
import Image from "next/image";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < breakpoint);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[100vh] bg-gradient-to-b from-background via-secondary to-muted overflow-hidden">
        <div className="absolute top-0 left-0 -z-[1] max-h-screen inset-0 w-full overflow-hidden"></div>

        <motion.div
          initial={{ right: "-800px", bottom: "700px" }}
          animate={{ right: "-168px", bottom: isMobile ? 290 : 70 }}
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
                        Ace Productions
                      </span>
                      <span className="text-sm">Marketing Agency</span>
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
      {/* Hero Section Ends */}

      {/* About Section */}
      <div className="relative px-4 md:px-20 md:py-28 py-8 min-h-screen bg-gradient-to-b from-10% from-muted via-70% via-secondary to-foreground overflow-hidden">
        <div className="relative z-10">
          <div className="">
            <div className="flex flex-col gap-10">
              <FadeIn>
                <h2 className="md:text-6xl text-3xl font-bold">
                  We're strategic{" "}
                  <p className="text-accent">digital marketing agency</p>
                </h2>
              </FadeIn>

              <FadeIn>
                <Button className="text-muted cursor-pointer font-bold">
                  Check out
                </Button>
              </FadeIn>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {strategies.map(({ number, title, description }) => (
                  <FadeIn key={number}>
                    <div className="relative bg-gradient-to-tl from-30% from-primary to-secondary rounded-2xl shadow-md p-6 flex items-center text-center hover:shadow-xl transition-all duration-300">
                      <div className="absolute md:-left-6 -left-5 text-[150px] font-extrabold text-foreground mb-4">
                        {number}
                      </div>
                      <div className="pl-10">
                        <h2 className="text-2xl text-muted font-bold mb-2">
                          {title}
                        </h2>
                        <p className="text-muted text-lg font-medium">
                          {description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section Ends */}

      {/* Works Section */}
      <div className="relative px-4 md:px-20 min-h-screen bg-gradient-to-b from-foreground to-secondary overflow-hidden">
        <div>
          <FadeIn>
            <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
              <span className="absolute text-background uppercase top-1/2 mx-auto max-w-full -translate-y-3/4 text-center text-5xl font-bold md:text-7xl">
                We’re not just a{" "}
                <h2 className="text-secondary"> marketing agency.</h2>
                We’re the force behind your{" "}
                <h2 className="text-primary inline"> brand’s success.</h2>
              </span>
              {items.map((item) => (
                <DraggableCard
                  key={item.title}
                  className={`${item.className} bg-gradient-to-b from-foreground to-secondary shadow-2xl`}
                >
                  <Image
                    width={320}
                    height={320}
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-[28rem] w-80 object-cover"
                  />
                </DraggableCard>
              ))}
            </DraggableCardContainer>
          </FadeIn>
        </div>
      </div>
      {/* Works Section Ends */}
      {/* Footer Section */}
      <div className="relative px-4 md:px-20 md:py-32 py-8 max-h-[80vh] bg-gradient-to-b from-20% from-secondary to-80% to-background overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="md:text-6xl text-4xl  font-bold uppercase">
              Your Brand's{" "}
              <span className="text-primary block">strategic partner</span>
            </h2>
            <p className="mt-8 text-2xl font-semibold">
              Connect us{" "}
              <Link href={""} className="underline block">
                connect@aceproductions.in
              </Link>
            </p>
            <div className="mt-8">
              <h4 className="text-primary text-2xl uppercase font-semibold">
                Kolkata
              </h4>
              <p className="md:text-xl text-base uppercase font-semibold">
                B/38A/H/3/1 Market Street
              </p>
              <p className="md:text-xl text-base uppercase font-semibold">
                Kolkata: 700087
              </p>
              <p className="md:text-xl text-base uppercase font-semibold">
                New Market Area
              </p>
              <p className="md:text-xl text-base uppercase font-semibold">
                West Bengal
              </p>
            </div>
          </div>
          <div>
            <div className="">
              <ul className="grid grid-cols-2 gap-14">
                <li>
                  <Link
                    href={""}
                    className="text-3xl font-semibold text-foreground hover:text-primary duration-300"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-3xl font-semibold text-foreground hover:text-primary duration-300"
                  >
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-3xl font-semibold text-foreground hover:text-primary duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-3xl font-semibold text-foreground hover:text-primary duration-300"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-10 mt-20">
              <Link href={""}>
                <Instagram
                  size={40}
                  className="hover:text-primary duration-300"
                />
              </Link>
              <Link href={""}>
                <Twitter
                  size={40}
                  className="hover:text-primary duration-300"
                />
              </Link>
              <Link href={""}>
                <Linkedin
                  size={40}
                  className="hover:text-primary duration-300"
                />
              </Link>
              <Link href={""}>
                <MessageSquareText
                  size={40}
                  className="hover:text-primary duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section Ends */}
    </>
  );
}
