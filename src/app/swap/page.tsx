"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ShineBorder } from "@/components/magicui/shine-border";
import SelectToken from "@/components/SelectTokens";

export default function SwapPage() {
  const { theme } = useTheme();
  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#D9D9D955" : "#D9D9D955"}
        className="p-0"
      >
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className=" rounded-xl" />
       
        <CardHeader className="p-4">
                  <CardTitle className=" font-bold text-xl">Swap Tokens</CardTitle>
                  <br />
          <CardTitle className=" font-semibold">From</CardTitle>
         <SelectToken/>
          <CardTitle className=" font-semibold">To</CardTitle>
         <SelectToken/>
          <CardTitle className=" font-semibold">Amount</CardTitle>
         <Input type="number" min={0} placeholder="Input amount"/>
          <CardTitle className=" font-semibold">Minimum Amount Out (Optional)</CardTitle>
         <Input type="number" min={0} placeholder="Input amount"/>
          
        </CardHeader>
        <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-400">Swap</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
