'use client'
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"

export default function HeaderSection() {
  return (
      <nav className=" sticky top-0 z-50 shadow-2xl bg-blue-100 dark:bg-black flex flex-row justify-between items-center px-4 py-2">
          <div className=" flex flex-row items-center gap-4 ml-2">
              <Link href={'/'} className=" flex flex-row gap-1">
                  <Image src={'/images/blendify_logo.png'} alt="blendify_logo" height={40} width={40} className=" rounded-full" quality={100}/>
                  <h1 className=" flex font-extrabold text-lg text-blue-600 hover:shadow-purple-500 items-center dark:text-blue-400">
                      Blendify
                  </h1>
              </Link>
              <Link href={'/swap'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Swap</Link>
              <Link href={'/supply'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Supply</Link>
              <Link href={'/borrow'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Borrow</Link>
              <Link href={'/stake'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Stake</Link>
              <Link href={'/portfolio'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Portfolio</Link>
          </div>
          <div className=" flex items-center">
              <Button className=" bg-blue-600 dark:bg-blue-400 hover:bg-blue-400">Connect Freighter</Button>
              <ThemeToggle />
          </div>
    </nav>
  )
}
