import React from 'react'
import scaleImage from '@/assets/images/图片 18.jpg'
import Hero from '@/app/components/hero'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scale"
}

const heroData = 
  {
    imgUrl: scaleImage,
    altText: "Scale",
    content: "Welcome to Scale"
  }

export default function Page() {
  return (
    <Hero imgUrl={heroData.imgUrl} altText={heroData.altText} content={heroData.content} />
  )
}
