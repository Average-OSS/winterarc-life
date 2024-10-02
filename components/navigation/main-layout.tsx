"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row  w-full flex-1 mx-auto  overflow-hidden",
          "h-[100dvh]"
        )}
      >
        <main className="flex flex-1">
          <div
            className={cn(
              "p-2 md:p-5 rounded-tl-2xl   flex flex-col gap-2 flex-1 w-full h-[100dvh]",
              "relative  overflow-auto scrollbar-none scrollbar-track-gray-100  scrollbar-thumb-gray-300 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-800 sm:scrollbar-thin "
            )}
          >
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
