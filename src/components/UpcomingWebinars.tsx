import Link from "next/link";
import { CardHoverEffect } from "./CardHoverEffect";

function UpcomingWebinars() {
  return (
    <div className=" p-12 bg-gray-900">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-teal-700 uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className=" mt-10">
          <CardHoverEffect/>
        </div>
        <div className="mt-10 text-center">  
          {" "}
          <Link
            href={"/webinars"}
            className="px-4 py-2 duration-200 bg-white border rounded transansition border-neutral-600 text-neutral-700 hover:bg-gray-100"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
