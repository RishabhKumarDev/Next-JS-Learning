import { InfiniteMovingCardsComponent } from "./InfiniteMovingCards";
import { cn } from "@/utils/utils";

function MusicSchoolTestimonial() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black">
     <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <h2 className="z-10 mb-8 text-3xl font-bold text-center">Hear Our Harmony</h2>
      <div className="flex justify-center w-full py-4 overflow-hidden sm:py-6 lg:py-8">
        <div className="w-full max-w-6xl ">
          <InfiniteMovingCardsComponent />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonial;
