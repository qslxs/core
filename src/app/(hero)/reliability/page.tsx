import React from 'react'
import reliabilityImage from '@/assets/images/图片 17.jpg'
import Hero from '@/app/components/hero'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reliability"
}

const heroData = 
  {
    imgUrl: reliabilityImage,
    altText: "Reliability",
    content: "Welcome to Reliability"
  }

export default function Page() {
  return (
    <Hero imgUrl={heroData.imgUrl} altText={heroData.altText} content={heroData.content} />
  )
}
