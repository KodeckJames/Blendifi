'use client'
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import DropdownMenuButton from "./DropdownMenu"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Wallet } from "lucide-react"

export default function HeaderSection() {
    
  return (
      <nav className=" sticky top-0 z-50 shadow-2xl bg-blue-100 dark:bg-black flex flex-row justify-between items-center px-4 py-2">
          <div className=" flex flex-row items-center gap-4 ml-2">
              <Link href={'/'} className=" flex flex-row gap-1 max-sm:ml-0">
                  <Image src={'/images/blendify_logo.png'} alt="blendify_logo" height={40} width={40} className=" rounded-full" quality={100}/>
                  <h1 className=" flex font-extrabold text-lg text-blue-600 hover:shadow-purple-500 items-center dark:text-blue-400">
                      Blendify
                  </h1>
              </Link>
              <div className=" flex justify-around gap-4 text-lg font-bold max-lg:hidden max-lg:text-sm max-lg:gap-2">
                  <Link href={'/swap'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Swap</Link>
                  <Link href={'/supply'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Supply</Link>
                  <Link href={'/borrow'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Borrow</Link>
                  <Link href={'/stake'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Stake</Link>
                  <Link href={'/portfolio'} className=" text-gray-600 active:text-blue-600 dark:text-slate-100">Portfolio</Link>
              </div>
          </div>
          <div className=" flex items-center">
            <span className=" cursor-pointer max-sm:ml-4">
                <ThemeToggle />
              </span>
              
              <SignedOut>
                  <SignInButton mode="modal">
                      <ShimmerButton shimmerSize="0.09em" className=" bg-blue-600 text-white dark:text-white mr-2" >Sign In</ShimmerButton>
                  </SignInButton>
                  
              </SignedOut>
              <Button className=" bg-blue-600 max-sm:hidden">Connect Freighter</Button>
              <span className=" sm:hidden ml-2">
                  <Wallet xlinkTitle="Connect Wallet" color="blue"/>
              </span>
              <span className=" lg:hidden ml-2"><DropdownMenuButton /></span>
              <SignedIn>
                  <span className=" ml-2"><UserButton/></span>
              </SignedIn>
          </div>
          <ScrollProgress className=" top-16" />
    </nav>
  )
}
