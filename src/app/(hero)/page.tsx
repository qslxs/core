import React from "react"
import homeImage from '@/assets/images/图片 15.jpg'
import Hero from "@/app/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home"
}

const heroData = 
  {
    imgUrl: homeImage,
    altText: "Home",
    content: "Professional Cloud Hosting"
  }

export default function Page() {
  return (
    <Hero imgUrl={heroData.imgUrl} altText={heroData.altText} content={heroData.content} />
  )
}

