import React from 'react'
import { PrystaLogoBadge } from '../logobadge/PrystaLogoBadge'

function HeroBanner() {
    return (
        <div className="pt-[15em] w-full h-[50em] bg-home-hero-banner-bg bg-no-repeat bg-contain bg-center px-[3em]">
            <div className='flex flex-col items-start p-[3em] float-left w-1/2'>
                <PrystaLogoBadge>Prysta SDK</PrystaLogoBadge>
                <h1 className='text-[2em] font-bold mt-3'>Online Shopping</h1>
                <h1 className='text-[5em] font-bold tracking-[2px]'>Prysta</h1>
                <p className='text-[1.4em] w-[70%]'>Experience the future of online shopping with Prysta, where innovation meets convenience! 
                    Dive into a world of exclusive deals and trendsetting products at the click of a button.</p>

                <a className='py-[.8em] px-[1.3em] bg-primary-v2-5 mt-8 rounded-[1.5em] text-[1.3em] font-[700] tracking-[1px]'>Shopping now</a>
            </div>

        </div>
    )
}

export default HeroBanner