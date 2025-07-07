import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function DropdownMenuButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Menu className=" dark:text-white cursor-pointer"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Services</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={'/swap'}>Swap</Link>
            <DropdownMenuShortcut>⇵</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
             <Link href={'/supply'}>Supply</Link>
            <DropdownMenuShortcut>↪↩</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
             <Link href={'/borrow'}>Borrow</Link>
            <DropdownMenuShortcut>ɮ</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
             <Link href={'/stake'}>Stake</Link>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
             <Link href={'/portfolio'}>Portfolio</Link>
            <DropdownMenuShortcut>⋇</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
                
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
