"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function navbar() {
  const [click, SetClick] = useState(false);
  const [nav, setNav] = useState(false)
  const handelNav = () =>{
    setNav(!nav);
  }
  const handleClick = (e: any) => {
    SetClick(!click);
  };
  console.log(click);

  return (
    <div>
      <div className="navbar fixed z-10  w-full flex bg-gray-100 justify-between">
        <div className="flex-none">
          <div className="mt-2 ml-6">
            <Image
              src="/magagi-logo.jpg"
              width={100}
              height={50}
              alt="logo magagi"
            />
          </div>
        </div>
       <div className="sm:flex-col">
       <button onClick={handelNav}>
          {nav ? ( <AiOutlineClose className="me-4"  size={30}/>) : (
          <AiOutlineMenu className="block md:hidden mt-1 me-4" size={30} />
        )}
          
        </button>
        {nav && (
            <div className="relative text-black flex flex-col justify-between    ">
              <Link className="hover:font-bold" href={"/"}>Accueil</Link>
              <Link className="hover:font-bold" href={"../apropos"}>A Propos</Link>
              <Link className="hover:font-bold" href={"../no-services"}>Service</Link>
              <Link className="hover:font-bold" href={"../contact"}>Contact</Link>
            </div>          
        )}
       </div>

        <div className="mobile-menu hidden md:block lg:w-1/3 me-4 md:w-1/2 ">
          <div className=" flex justify-between w-full  mt-4 me-6 ">
            <Link href={"/"} className="transition-all hover:font-bold">
              Accueil
            </Link>
            <Link href={"../apropos"} className="transition-all hover:font-bold">
              A Propos
            </Link>
            <Link href={"../no-services"} className="transition-all hover:font-bold">
              Service
            </Link>
            <Link href={"../contact"} className="transition-all hover:font-bold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
