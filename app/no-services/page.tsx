import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <div className='w-full h-96 bg-black bg-fixed bg-center bg-cover '>

        </div>

      <div className=' flex flex-col  w-4/6 mx-auto'>
      <div className="flex flex-col md:flex-row  mt-4  justify-center items-center" data-aos="fade-up-right">
        <Image
          className="w-2/4"
          src={"/vol1.jpeg"}
          width={800}
          height={100}
          alt={"section  one"}
        />
        <p className="text-center  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
          eum, soluta dolor ratione nobis eius laborum nam autem optio? Et
          excepturi nobis ducimus soluta cupiditate dolor fugit nostrum quidem!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 ">
        <p className=" text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
          eum, soluta dolor ratione nobis eius laborum nam autem optio? Et
          excepturi nobis ducimus soluta cupiditate dolor fugit nostrum quidem!
        </p>
        <Image
          className="w-2/4"
          src={"/vol1.jpeg"}
          width={800}
          height={100}
          alt={"section  one"}
        />
      </div>
      <div className="flex flex-col md:flex-row  mt-4 justify-center items-center">
        <Image
          className="w-2/4"
          src={"/vol1.jpeg"}
          width={800}
          height={100}
          alt={"section  one"}
        />
        <p className="text-center  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
          eum, soluta dolor ratione nobis eius laborum nam autem optio? Et
          excepturi nobis ducimus soluta cupiditate dolor fugit nostrum quidem!
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center mt-4 ">
        <p className=" text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
          eum, soluta dolor ratione nobis eius laborum nam autem optio? Et
          excepturi nobis ducimus soluta cupiditate dolor fugit nostrum quidem!
        </p>
        <Image
          className="w-2/4"
          src={"/vol1.jpeg"}
          width={800}
          height={100}
          alt={"section  one"}
        />
      </div>
      </div>
    </div>
  )
}
