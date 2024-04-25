import Card from '@/app/components/miniComponents/presaleCard/page'
import React from 'react'



export default function page() {
  return (
    <>
      <div className="container mt-[5rem] mx-auto p-4">
        <div className='grid md:grid-cols-2 grid-cols-1  md:gap-0 gap-10 text-white'>
          <div className=' flex-col flex items-center justify-center'>
            <h2 className=' text-5xl font-bold  '>Unleash the Future of Finance with BOO COIN</h2>
            <p>Our Initial Coin Offering (ICO) is your exclusive opportunity to be a pioneer in the crypto revolution. By participating in our ICO, you become a key player in the growth of InfinitiCoin, an innovative platform at the intersection of DeFi, NFTs, and Gold Investment.</p>
          </div>
          <div className=' flex items-center justify-center'><Card /></div>
        </div>
      </div>
    </>
  )
}
