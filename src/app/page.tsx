import Image from "next/image";
import Link from "next/link";
import { Send as FSend } from "react-feather";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Link
          href="https://google.com"
          className="w-fit focus:ring-4 rounded-full focus:ring-offset-2 dark:ring-offset-black border-none my-2 ring-[#f54bff] duration-300 outline-none font-semibold"
        >
          <div className="flex items-center p-1 text-sm px-3 w-fit rounded-full text-white bg-[#f54bff]">
            <FSend className="mr-2" size={15} />
            Sarasota, FL
          </div>
        </Link>
      </div>
    </>
  );
}
