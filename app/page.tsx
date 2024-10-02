"use client";

import AncientWinterArcTimer from "@/components/ancient-winter-arc-timer";
import { fontHeading } from "@/config/myFont";
import { cn } from "@/lib/utils";
import Waitlist from "./Wailist";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-8xl flex justify-start items-center gap-4 flex-col pt-3 md:pt-28 px-5 md:px-10 ">
        <h2
          className={cn(
            fontHeading.className,
            "text-4xl md:text-4xl lg:text-6xl  font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          )}
        >
          Winter Arc has Started
        </h2>
        <AncientWinterArcTimer />{" "}
        <div className="pt-5 text-left max-w-[700px] pb-5">
          <div className={cn(fontHeading.className, "text-2xl")}>
            What{"'"}s Winter Arc?
          </div>

          <div className="pb-2 text-default-600 pt-5 md:pt-3">
            Winter Arc is a special time from October 1st to last date of the
            year when people try to make their lives better. It{"'"}s cold
            outside, the year is ending, and many folks think about what they
            want to change.{" "}
          </div>
          <div className="pb-2 text-default-600 pt-2">
            During Winter Arc, people follow some simple rules to be healthier
            and work harder to achieve a goal. It can be anything, as simple as
            setting good daily habits to start of something big in your life.
            They eat good food, sleep enough, and spend less time on phones or
            games and other addiction and focus more on how they will get the
            goal.
          </div>
          <div className="pb-2 text-default-600 pt-2">
            They focus on important stuff like work, learning, and saving or
            earning money. Build some cool shit, Some people also exercise more,
            read books, and wake up early and most importantly if not anything
            than finish those incomplete side projects. The big idea is to use
            your remaining 3 months time well and grow as a person. Winter Arc
            helps you end the year strong and start the new one even better.
          </div>
        </div>
        <div className="pt-5 text-center pb-20">
          <div className="pb-2 text-default-600 pt-2">
            More stuff coming soon here to help you with that....
          </div>
          <Waitlist />
        </div>
      </div>
    </>
  );
}
