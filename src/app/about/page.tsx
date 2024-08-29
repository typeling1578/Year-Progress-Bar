import RootElement from "@/components/RootElement";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
}

export default function About() {
  return (
    <RootElement>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-[32px] font-bold">About</h1>
        <div className="font-medium">
          This site displays the progress of the year.
          <br />
          <br />
          <Link className="underline" target="_blank" href="https://github.com/typeling1578/Year-Progress-Bar">Source Code</Link>
        </div>
      </div>
    </RootElement>
  );
}
