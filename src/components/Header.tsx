'use client'
import Link from "next/link"
import Image from "next/image"

export default function HeaderSection() {
  return (
      <nav>
          <Link href={'/'} className=" flex justify-between">
              <Image src={'/images/blendify_logo.png'} alt="blendify_logo" height={40} width={40} />
              <h1 className=" font-extrabold text-lg text-blue-600 hover:shadow-purple-500">
                  Blendify
              </h1>
          </Link>          
          <Link href={'/swap'} className=" text-gray-600 active:text-blue-600 font-semibold">Swap</Link>
          <Link href={'/supply'} className=" text-gray-600 active:text-blue-600 font-semibold">supply</Link>
          <Link href={'/borrow'} className=" text-gray-600 active:text-blue-600 font-semibold">Borrow</Link>
          <Link href={'/stake'} className=" text-gray-600 active:text-blue-600 font-semibold">Stake</Link>
          <Link href={'/portfolio'} className=" text-gray-600 active:text-blue-600 font-semibold">portfolio</Link>
    </nav>
  )
}
