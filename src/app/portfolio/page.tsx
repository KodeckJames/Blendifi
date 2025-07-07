'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from 'next-themes'
import { ShineBorder } from '@/components/magicui/shine-border'

export default function PortfolioPage() {
  const { theme } = useTheme()
  return (
    <div className=' flex dark:bg-black justify-center items-center min-h-screen'>
      <Card className="p-0 max-w-sm w-full shadow-none border-none">
        <MagicCard
          gradientColor={theme === 'dark' ? '#D9D9D955' : '#D9D9D955'}
          className="p-0"
        >
          <ShineBorder
            shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
            className=" rounded-xl"
          />
          <CardHeader className="p-4">
            <CardTitle className=" font-bold text-xl">Portfolio</CardTitle>
            <CardDescription>
              Connect your wallet to view tour portfolio
            </CardDescription>
          </CardHeader>
        </MagicCard>
      </Card>
    </div>
  )
}
