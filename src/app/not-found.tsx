import RootElement from "@/components/RootElement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
}

export default function NotFound() {
  return (
    <RootElement>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-[32px] font-bold">404 Not Found</h1>
        <div className="font-medium">The requested resource could not be found.</div>
      </div>
    </RootElement>
  );
}
