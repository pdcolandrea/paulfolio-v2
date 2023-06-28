import Heading from "@/components/Heading";
import Image from "next/image";

export default function ProjectsHome() {
  return (
    <div className="flex flex-col mb-12">
      <Heading>Projects</Heading>
      <p className="mt-6 mb-4">
        Here&apos;s a showcase of all the work I&apos;ve done, this includes
        companies I&apos;ve worked for, personal projects, open source projects
        that I&apos;ve contributed or helped maintain, YouTube channels I use to
        run and more.
      </p>

      <div className="grid grid-cols-1 gap-y-8">
        <div className="h-48 relative rounded-lg  flex flex-col">
          <div className="bg-red-500 rounded-lg flex-1 relative border border-teal-100">
            <p>image</p>
            {/* <Image
              src="https://img.freepik.com/free-vector/dark-pattern-background_1078-81.jpg"
              alt="splash"
              fill
            /> */}
          </div>

          <div className="my-4 flex-3">
            <h1 className="text-xl font-semibold">
              How to secure your Planetbase database
            </h1>
            <p className="text-sm">May 12, 2023</p>
          </div>
        </div>
        <div className="bg-blue-500 h-40">
          <p>2</p>
        </div>
        <div className="bg-green-500 h-40">
          <p>3</p>
        </div>
        <div className="bg-yellow-500 h-40">
          <p>4</p>
        </div>
      </div>
    </div>
  );
}
