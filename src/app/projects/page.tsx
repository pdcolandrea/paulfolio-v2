import ComingSoon from "@/components/ComingSoon";
import Heading from "@/components/Heading";
import Image from "next/image";

// motivation: https://jahir.dev/projects
export default function ProjectsHome() {
  return (
    <div className="flex flex-col mb-12">
      {/* <Heading>Projects</Heading> */}
      <ComingSoon />
    </div>
  );
}
