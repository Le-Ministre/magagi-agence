"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function navbar() {
  const [click, SetClick] = useState(false);
  const [nav, setNav] = useState(false)
const [color, setColor] = useState('transparent')
const [textColor, setTextColor] = useState('white')



  const handelNav = () =>{
    setNav(!nav);
  }


  useEffect(() => {
    const changeColor = () =>{
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff')
      }
    };
    window.addEventListener('scroll', changeColor)
  }, []);

  const handleClick = (e: any) => {
    SetClick(!click);
  };

  return (

      <div style={{backgroundColor: `${color}`}} className="navbar fixed z-10  w-full flex justify-between">
        <div className="flex-none">
          <div className="mt-2 ml-6">
            <Image
              src="/magagi-r.png"
              width={100}
              height={10}
              alt="logo magagi"
            />
          </div>
        </div>
       <div className="sm:flex-col">
       <div onClick={handelNav}>
          {nav ? ( <AiOutlineClose className="me-4 mt-10 text-white"  size={30} style={{color: `${textColor}`}} />) : (
          <AiOutlineMenu className="block md:hidden mt-10 me-4" size={30} style={{color: `${textColor}`}} />
        )}
          
        </div>
        {nav && (
            <div style={{color: `${textColor}`}} className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300  ">
              <Link className="hover:font-bold" href={"/"}>Accueil</Link>
              <Link className="hover:font-bold" href={"../apropos"}>A Propos</Link>
              <Link className="hover:font-bold" href={"../no-services"}>Service</Link>
              <Link className="hover:font-bold" href={"../contact"}>Contact</Link>
            </div>          
        )}
       </div>

        <div className="mobile-menu hidden md:block lg:w-1/3 me-4 md:w-1/2 ">
          <div style={{color: `${textColor}`}}  className=" flex justify-between w-full  mt-12 me-6 ">
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

  );
}
