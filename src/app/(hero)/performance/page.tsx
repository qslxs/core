import React from 'react'
import performanceImage from '@/assets/images/图片 16.jpg'
import Hero from '@/app/components/hero'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Performance"
}

const heroData = 
  {
    imgUrl: performanceImage,
    altText: "Performance",
    content: "Welcome to Performance"
  }

export default function Page() {
  return (
    <div>
      <Hero imgUrl={heroData.imgUrl} altText={heroData.altText} content={heroData.content} />
    </div>
  )
}
