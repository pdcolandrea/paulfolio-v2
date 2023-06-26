import Image from "next/image";

interface AvatarProps {
  height: number;
  width: number;
  border?: boolean;
}

function Avatar({ border, ...rest }: AvatarProps) {
  if (border) {
    return (
      <div className="flex w-fit border duration-300 border-teal-100 dark:border-teal-900 rounded-full bg-white">
        <AvatarImage {...rest} />
      </div>
    );
  }

  return <AvatarImage {...rest} />;
}

const AvatarImage = ({ height, width }: { height: number; width: number }) => {
  return (
    <Image
      className="rounded-full"
      height={height}
      width={width}
      src="/memoji.jpeg"
      alt="selfie"
    />
  );
};

export default Avatar;
