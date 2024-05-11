import React from "react";
import Image from "next/image";
import "../globals.css";

export default function accueil() {
  
  return (
    <div className="bg-white ">
      <div className=" w-full section1 min-h-screen  bg-fixed bg-center bg-cover">
        {/* <div className="absolute top-0 left-0 bottom-0 right-0  bg-black/20"/> */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70" />
        <h2 className="text-5xl font-bold text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          MAgagi Vous Souhaite la Bienvenue
        </h2>
      </div>
      <div className="bg-gray-500 text-center ">
        <p className="text-center mt-4 py-24 justify-center items-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
          eum, soluta dolor ratione nobis eius laborum nam autem optio? Et
          excepturi nobis ducimus soluta cupiditate dolor fugit nostrum quidem!
        </p>
      </div>

      <div className=" w-4/6 mx-auto justify-center">
        <h2 className="p-4 text-5xl font-bold">what we do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* cards  1*/}
          <div className=" shadow-lg">
            <div className="p-4  flex flex-col">
              <div className=" overflow-hidden">
                <Image src={"/famille.jpg"} width={800} height={100} alt={""} />
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  Voyage en famille
                </h5>
                <p className="text-slate-500 text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, rerum, nisi provident minus voluptas ut labore, quo
                  officia adipisci ipsum et amet sunt vitae assumenda
                  accusantium rem soluta modi eos!
                </p>
              </div>
            </div>
          </div>

          {/* cards 2 */}
          <div className=" shadow-lg">
            <div className="p-5 flex flex-col">
              <div className=" overflow-hidden">
                <Image src={"/famille.jpg"} width={800} height={100} alt={""} />
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  Voyage en famille
                </h5>
                <p className="text-slate-500 text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, rerum, nisi provident minus voluptas ut labore, quo
                  officia adipisci ipsum et amet sunt vitae assumenda
                  accusantium rem soluta modi eos!
                </p>
              </div>
            </div>
          </div>

          {/* cards 3 */}
          <div className=" shadow-lg">
            <div className="p-5 flex flex-col">
              <div className=" overflow-hidden">
                <Image src={"/famille.jpg"} width={800} height={100} alt={""} />
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  Voyage en famille
                </h5>
                <p className="text-slate-500 text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, rerum, nisi provident minus voluptas ut labore, quo
                  officia adipisci ipsum et amet sunt vitae assumenda
                  accusantium rem soluta modi eos!
                </p>
              </div>
            </div>
          </div>
          {/* cards 4 */}
          <div className=" shadow-lg">
            <div className="p-5 flex flex-col">
              <div className=" overflow-hidden">
                <Image src={"/famille.jpg"} width={800} height={100} alt={""} />
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  Voyage en famille
                </h5>
                <p className="text-slate-500 text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, rerum, nisi provident minus voluptas ut labore, quo
                  officia adipisci ipsum et amet sunt vitae assumenda
                  accusantium rem soluta modi eos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-gray-500 mt-4  text-center ">
        <p className="py-24">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
          eum, soluta dolor ratione nobis eius laborum nam autem optio? Et
          excepturi nobis ducimus soluta cupiditate dolor fugit nostrum quidem!
        </p>
      </div>
      <div className="relative mt-8 w-full section1 min-h-screen">
        <p className="text-center text-white">
          MAgagi Vous Souhaite la Bienvenue
        </p>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-md shadow-md">
          Bienvenue
        </button>
      </div>

      <div className=" flex justify-center mt-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* cards  1*/}
          <div className="rounded-xl shadow-lg">
            <div className="p-5  flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={"/famille.jpg"} width={800} height={100} alt={""} />
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  Voyage en famille
                </h5>
                <p className="text-slate-500 text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, rerum, nisi provident minus voluptas ut labore, quo
                  officia adipisci ipsum et amet sunt vitae assumenda
                  accusantium rem soluta modi eos!
                </p>
              </div>
            </div>
          </div>

          {/* cards 2 */}
          <div className="rounded-xl shadow-lg">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={"/famille.jpg"} width={800} height={100} alt={""} />
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  Voyage en famille
                </h5>
                <p className="text-slate-500 text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, rerum, nisi provident minus voluptas ut labore, quo
                  officia adipisci ipsum et amet sunt vitae assumenda
                  accusantium rem soluta modi eos!
                </p>
              </div>
            </div>
          </div>

          {/* cards 3 */}
          <div className="rounded-xl shadow-lg">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={"/famille.jpg"} width={800} height={100} alt={""} />
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  Voyage en famille
                </h5>
                <p className="text-slate-500 text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, rerum, nisi provident minus voluptas ut labore, quo
                  officia adipisci ipsum et amet sunt vitae assumenda
                  accusantium rem soluta modi eos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-500 text-center  mt-6  ">
        <p className=" py-24">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
          eum, soluta dolor ratione nobis eius laborum nam autem optio? Et
          excepturi nobis ducimus soluta cupiditate dolor fugit nostrum quidem!
        </p>
      </div>

     
    </div>
  );
}
