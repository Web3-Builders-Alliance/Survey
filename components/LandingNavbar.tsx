"use client";

import Image from "next/image";
import Link from "next/link";

const LandingNavbar = () => {
  return (
    <div className="flex w-5/6 items-center justify-between xs:h-24 sm:h-36">
      <Link href="/" className="flex w-[14%] min-w-[10%] justify-start">
        <Image
          src="/formigo_logo.png"
          alt="formigo logo"
          width={65}
          height={12}
        />
      </Link>
      <div className="flex w-1/2 max-w-md items-center justify-around font-semibold xs:text-sm sm:text-lg">
        <Link href="/about" className="rounded-xl p-1 hover:bg-formigo-grey">
          About
        </Link>
        <Link href="/features" className="rounded-xl p-1 hover:bg-formigo-grey">
          Features
        </Link>
        <Link href="/faq" className="rounded-xl p-1 hover:bg-formigo-grey">
          FAQ
        </Link>
      </div>
      <div className="flex w-[14%] justify-end">
        <button className="min-w-fit rounded-xl bg-formigo-blue p-3 text-white hover:brightness-110 xs:w-fit xs:text-xs sm:w-1/2 sm:text-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingNavbar;
