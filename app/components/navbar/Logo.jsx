"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return <Image alt="voyageStay-logo" className="hidden md:block cursor-pointer"
  height="100"
  width="100"
  src="/images/Logo.png"
  onClick={()=>router.push('/')}
  />;
}

export default Logo;
