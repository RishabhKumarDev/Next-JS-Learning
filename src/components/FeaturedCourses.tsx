"use client";
import courses from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courses.courses.filter(
    (course: Courses) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-teal-700 uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((courses: Courses) => (
            <div key={courses.id} className="flex justify-center cursor-pointer">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="flex flex-col items-center flex-grow p-4 text-center sm:p-6">
                  <p className="mt-4 mb-2 text-lg text-black sm:text-xl dark:text-neutral-200 ">{courses.title}</p>
                  <p className="flex-grow text-sm text-neutral-600 dark:text-neutral-400">{courses.description}</p>
                  <Link href={`/courses/${courses.id}`}>
                  Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 duration-200 bg-white border rounded transansition border-neutral-600 text-neutral-700 hover:bg-gray-100"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
