"use client";

import Image from "next/image";

function Avatar({ src }) {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/Placeholder.png"}
    />
  );
}

export default Avatar;
