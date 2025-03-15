import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-2 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">

      <div className="relative p-[2px] overflow-hidden rounded-full bg-linear-to-r from-orange-200 via-orange-500 to-orange-800 animate-gradient-x group cursor-default">
        <Badge
          variant={"secondary"}
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
        >
          <Sparkles className="size-6 mr-2 text-orange-600 animate-pulse" />
          <p className="text-orange-600">Powered by AI</p>
        </Badge>
      </div>

      <h1 className="text-4xl font-bold py-6 text-center">
        Transform Crypto White Paper PDFs into {' '}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span className="absolute inset-0 bg-orange-200/50 -rotate-2 rounded-sm transform -skew-y-1"></span>
        </span>{' '}
        summaries
      </h1>

      <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">Get a beautiful summary reel of any white paper in seconds.</h2>

      <Button
        variant={"link"}
        className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-orange-500 hover:from-orange-500 hover:to-slate-900 font-semibold hover:no-underline transition-colors ease-linear"
      >
        <Link href="/#pricing" className="flex gap-2 items-center">
          <span>Try Summoria</span>
          <ArrowRight className="animate-pulse text-white" />
        </Link>
      </Button>
    </section>
  );
}
