import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";

const CONTENT = [
  {
    title: "My experience with React Native",
    description: "Pros and con of a very interesting language",
    tags: ["React-Native", "devops", "code"],
  },
  {
    title: "Create and publish your own NPM Package",
    description:
      "A component library is basically a set of re-usable components.",
    tags: ["npm", "Typescript", "Component"],
  },
  {
    title: "Does react need keys?",
    description:
      "A component library is basically a set of re-usable components.",
    tags: ["Typescript", "React"],
  },
  {
    title: "My deep exploration into React Native",
    description:
      "A component library is basically a set of re-usable components.",
    tags: ["Typescript", "React", "React-Native"],
  },
];

export default function BlogHome() {
  return (
    <div className="flex mb-12 flex-col">
      <Heading>Blog</Heading>

      <div className="flex flex-row relative items-center">
        <Input placeholder="Search for tag or title" />
        <button className="bg-primary-foreground absolute right-1 top-1 items-center justify-center px-4 py-1 h-8 rounded">
          <span className="text-xs">Search</span>
        </button>
      </div>

      <div className="mt-12">
        {CONTENT.map((post) => {
          return (
            <div key={post.title} className="mb-6">
              <h1 className="text-2xl font-bold hover:text-primary duration-300">
                {post.title}
              </h1>
              <div className="flex flex-row my-2">
                {post.tags.map((tag, index) => {
                  return (
                    <div
                      key={`tag_${index}`}
                      className="bg-primary mr-2 rounded-md p-1 px-3 font-semibold hover:bg-orange-600 duration-500"
                    >
                      <p className="text-xs lowercase dark:text-gray-300 text-gray-100">
                        {tag}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm">{post.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
