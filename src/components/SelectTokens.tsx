'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectToken() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Token" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tokens</SelectLabel>
          <SelectItem value="apple">BLND</SelectItem>
          <SelectItem value="banana">USDC</SelectItem>
          <SelectItem value="blueberry">wETH</SelectItem>
          <SelectItem value="grapes">wBTC</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
