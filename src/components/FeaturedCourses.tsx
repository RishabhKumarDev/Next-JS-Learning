import courses from "@/data/music_courses.json"
import Link from "next/link"
function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
        <div className="">
            <div className="text-center">
                <h2 className="text-base font-semibold tracking-wide text-teal-700 uppercase">Featured Courses</h2>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">Learn with the Best</p>
            </div>
        </div>
        <div className="">2</div>
        <div className="mt-20 text-center">
           <Link href={"/courses"}
           className="px-4 py-2 transition duration-200 bg-white border rounded border-neutral-600 text-neutral-700 hover:bg-gray-100"
           >
           View All Courses
           </Link> 
        </div>

    </div>
  )
}

export default FeaturedCourses