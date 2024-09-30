"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootElement({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="py-8 md:py12 px-6 md:px-12 xl:px-20 flex flex-col gap-6 w-full max-w-screen-xl min-h-screen mx-auto"
      style={{
        display: "grid",
        gridAutoFlow: "row",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <div className="flex gap-4 font-medium" id="links">
        {pathname !== "/" ? <Link className="underline" href="/">Progress Bar</Link> : ""}
        {pathname !== "/about" ? <Link className="underline" href="/about">About</Link> : ""}
      </div>
      <div className="basis-full">
        {children}
      </div>
      <div>
        <small className="float-right">&copy; 2020-2024 typeling1578</small>
      </div>
    </div>
  );
}
