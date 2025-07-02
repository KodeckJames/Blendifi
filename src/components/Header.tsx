'use client'
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"

export default function HeaderSection() {
  return (
      <nav className=" sticky top-0 z-50 shadow-2xl bg-slate-200 dark:bg-cyan-900 flex justify-between w-full">
          <Link href={'/'} className=" flex justify-between">
              <Image src={'/images/blendify_logo.png'} alt="blendify_logo" height={40} width={40} className=" rounded-full"/>
              <h1 className=" font-extrabold text-lg text-blue-600 hover:shadow-purple-500">
                  Blendify
              </h1>
          </Link>          
          <Link href={'/swap'} className=" text-gray-600 active:text-blue-600 font-semibold dark:text-slate-100">Swap</Link>
          <Link href={'/supply'} className=" text-gray-600 active:text-blue-600 font-semibold dark:text-slate-100">supply</Link>
          <Link href={'/borrow'} className=" text-gray-600 active:text-blue-600 font-semibold dark:text-slate-100">Borrow</Link>
          <Link href={'/stake'} className=" text-gray-600 active:text-blue-600 font-semibold dark:text-slate-100">Stake</Link>
          <Link href={'/portfolio'} className=" text-gray-600 active:text-blue-600 font-semibold dark:text-slate-100">portfolio</Link>
          <ThemeToggle/>
    </nav>
  )
}
