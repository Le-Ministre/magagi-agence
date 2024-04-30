"use client"
import React from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'

export default function page() {

    const slider = [
        {
            url: 'https://assets-global.website-files.com/6376980d89260e9c2cdee566/64df81d6200a0e03c45e823a_famous-buildings-round-the-world-travel-wallpaper.jpg'
        },
        {
            url: 'https://www.tracedirecte.com/media/static_srcset/tdfront/img/photos/accueil/srcset/slide1-Salar-Uyuni-Bolivie_Trevor-McKinnon_1920x1200.jpg.1920x1200_q85_format-jpg_upscale.jpg'
        },
        {
            url: 'https://www.tourmag.com/photo/art/default/69839010-48789880.jpg?v=1672407426'
        },
        {
            url: 'https://www.interieur.gouv.fr/sites/minint/files/styles/dsfr_32_9/public/medias/images/AdobeStock_178863677_0.jpg?h=a5327c98&itok=PKbykxSg'
        },
        {
            url: 'https://cdn.tui.be/img/static/im1000/14400/14404/14404S.JPG'
        },
    ]

    const [slide, setSlide] = useState(0)

    const prevSlide = () =>{
      const isFirstSlide = slide === 0;
      const newIndex = isFirstSlide ? slider.length - 1 : slide - 1;
      setSlide(newIndex);
    }

    const nextSlide = () =>{
      const isLastSlide = slide === slider.length - 1;
      const newIndex = isLastSlide ? 0 : slide + 1;
      setSlide(newIndex)
    }

    const goToSlide = (slideIndex: React.SetStateAction<number>) => {
      setSlide(slideIndex);
    };

  return (
    <div className='w-full h-screen  py-16 px-4 group'>
      <div style={{backgroundImage: `url(${slider[slide].url})`}} className='w-full h-full bg-center bg-cover duration-500'></div>
      {/* left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      {/* right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slider.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>

    </div>
  )
}
