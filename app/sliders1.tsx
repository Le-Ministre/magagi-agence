import { url } from 'inspector'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Page from './contact/page'

export default function sliders1() {

    const slides = [
        {
            rul : 'https://studyopportunities.online/wp-content/uploads/2020/10/university-of-Turku.jpg'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Turun_yliopisto.jpg/1200px-Turun_yliopisto.jpg'
        },
        {
            url: 'https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/c_fill/w_1280/element/11/115436_ICT-Kesa-Copy2.jpg'
        },
        {
            url: 'https://www.hamari.pro/site/assets/files/1496/aurum-auditorio-kuva-2-lowres-min.jpg'
        },
        {
            url: 'https://www.interieur.gouv.fr/sites/minint/files/styles/dsfr_32_9/public/medias/images/AdobeStock_178863677_0.jpg?h=a5327c98&itok=PKbykxSg'
        },
        {
            url: 'https://www.utu.fi/sites/default/files/styles/hero_xl/public/media/qbank/uudet-opiskelijat-2015-7_hires.jpg?itok=1a1JQ7pm'
        },
    ]

  return (
    <div className='w-full '>
        {/* <Page >
            {
                slides.map((s) =>{
                    <Image src={'s'} alt={'s'} />
                })
            }
        </Page> */}
    </div>
  )
}
