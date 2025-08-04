import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center py-10 md:py-0 relative overflow-hidden mx-auto">
      <Spotlight />
      <div className="relative z-10 w-full p-4 text-center">
        <h1 className="mt-20 text-4xl font-bold bg-transparent md:mt-0 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-base font-normal md:text-lg text-neutral-300">
          Dive into the comprensive music courses and transform your musical
          journey today. weather you are a beginner or looking to refine your
          skills, join us to unlock your true protential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="text-black bg-white dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
