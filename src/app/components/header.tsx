'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {name: 'Performance', href: '/performance'},
  {name: 'Reliability', href: '/reliability'},
  {name: 'Scale', href: '/scale'},
]

export default function Header() {
  const pathname = usePathname()
  
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {
            links.map((link) => (
              <Link key={link.href} href={link.href} className={pathname === link.href ? 'text-purple-500' : ''}>{link.name}</Link>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}
