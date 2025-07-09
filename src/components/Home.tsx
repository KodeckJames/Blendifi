'use client'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { MorphingText } from '@/components/magicui/morphing-text'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import { AuroraText } from '@/components/magicui/aurora-text'
import { Twitter } from 'lucide-react'
import Image from 'next/image'
import { MarqueeSlide } from './ReviewCard'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { Globe } from '@/components/magicui/globe'
import { cn } from '@/lib/utils'
import { DotPattern } from '@/components/magicui/dot-pattern'
import AnimatedBeamSection from './AnimatedBeam'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="  min-h-screen">
      <section className=" flex pl-10 dark:bg-black min-h-screen max-lg:justify-center ">
        <DotPattern
          glow={true}
          className={cn(
            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
          )}
        />
        <div className=" z-10">
          <h1 className=" mt-20 mb-0 font-extrabold text-3xl sm:text-5xl max-sm:mx-2 dark:text-white">
            A DeFi hub on {''}
            <AuroraText>Stellar</AuroraText>
          </h1>
          <h1
            className=" text-3xl sm:text-4xl max-sm:mx-2  font-extrabold dark:text-white
      "
          >
            That allows you to:
          </h1>
          <MorphingText
            className=" dark:text-white"
            texts={['Swap', 'Supply', 'Borrow', 'Stake']}
          />
          <VelocityScroll
            className=" text-xl max-w-96 max-sm:max-w-60"
            defaultVelocity={3}
            numRows={1}
          >
            <span className=" text-pink-600"> XLM</span>{'  '}
            <span className=" text-green-600"> BLND</span>{'  '}
            <span className=" text-purple-600"> USDC</span>{'  '}
            <span className=" text-orange-600"> wETH</span>{'  '}
            <span className=" text-yellow-400"> wBTC</span>
          </VelocityScroll>
          <div className=" flex justify-between max-sm:w-0.5 max-sm:mx-auto gap-20 max-sm:gap-2 mt-8">
            <RainbowButton className=" !bg-blue-600 dark:text-black p-6 rounded-full text-lg ">
              <Link href={'/swap'}>Start Trading</Link>
            </RainbowButton>
            <RainbowButton className=" !bg-blue-600 dark:text-black p-6 rounded-full text-lg ">
              <Link href={'/portfolio'}>View portfolio</Link>
            </RainbowButton>
          </div>
        </div>
        <div>
          <Globe className=" mr-0 mt-5 max-lg:hidden z-10" />
        </div>
      </section>

      <section className=" dark:bg-black">
        <AnimatedBeamSection />
      </section>

      <section id="features" className="py-20 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Everything you need for DeFi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience the full power of decentralized finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⇄</span>
              </div>
              <h3 className="text-xl dark:text-white font-bold mb-2">Swap</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instantly swap between supported tokens with minimal fees
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">+</span>
              </div>
              <h3 className="text-xl dark:text-white font-bold mb-2">Supply</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn competitive yields by supplying tokens to liquidity pools
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">↓</span>
              </div>
              <h3 className="text-xl dark:text-white font-bold mb-2">Borrow</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access instant liquidity by borrowing against your collateral
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">★</span>
              </div>
              <h3 className="text-xl dark:text-white font-bold mb-2">Stake</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stake tokens to earn rewards and help secure the network
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tokens" className="py-20 dark:bg-black">
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
          )}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Supported Tokens
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trade with premium crypto assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: 'XLM',
                fullName: 'Stellar',
                price: '$0.12',
                change: '+2.5%',
                color: 'bg-blue-600',
              },
              {
                name: 'BLND',
                fullName: 'Blend',
                price: '$1.85',
                change: '+5.2%',
                color: 'bg-purple-600',
              },
              {
                name: 'USDC',
                fullName: 'USD Coin',
                price: '$1.00',
                change: '0.0%',
                color: 'bg-green-600',
              },
              {
                name: 'wETH',
                fullName: 'Wrapped ETH',
                price: '$2,340',
                change: '+1.8%',
                color: 'bg-gray-600',
              },
              {
                name: 'wBTC',
                fullName: 'Wrapped BTC',
                price: '$43,250',
                change: '+3.1%',
                color: 'bg-orange-600',
              },
            ].map((token, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${token.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <span className="text-white font-bold text-sm">
                    {token.name}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-center mb-1 dark:text-white">
                  {token.fullName}
                </h3>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">
                    {token.price}
                  </div>
                  <div className="text-green-600 text-sm">{token.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" grid justify-items-center dark:bg-white bg-white">
        <TypingAnimation>Customer Reviews</TypingAnimation>
        <MarqueeSlide />
      </section>

      <footer id="about" className="dark:bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 ml-5 flex items-center justify-center">
                 <Link href={'/'} className=" flex flex-row gap-1">
                  <Image src={'/images/blendify_logo.png'} alt="blendify_logo" height={40} width={40} className=" rounded-full" quality={100}/>
                  <h1 className=" flex font-extrabold text-lg text-blue-600 hover:shadow-purple-500 items-center dark:text-blue-400">
                      Blendify
                  </h1>
              </Link>
                </div>
              </div>
              <p className="text-black dark:text-white leading-relaxed">
                Enabling Swaping, Supply, Borrowing and Staking of tokens
                seamlessly.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black dark:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black dark:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/Lady_Hygeia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-400 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-black dark:text-white mb-4 md:mb-0">
              © 2025 Blendify. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-black dark:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-black dark:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-black dark:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
