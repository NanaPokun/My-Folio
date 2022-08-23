import React from 'react'
import userData from '../constants/data'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Designs() {
  return (
    <div className='container px-4 mx-auto'>
        <h1 className=" text-6xl md:text-6xl font-bold py-10 text-center">My Designs</h1>
        <Carousel className='mt-6 text-gray-800 dark:text-white'>
            <div>
                <img src={ userData.design1 } alt="Bread flyer" />
                <p>Chef Chelsea</p>
            </div>
            <div>
                <img src={ userData.design2 } alt="Kelewele" />
                <p>Kelewele House</p>
            </div>
            <div>
                <img src={ userData.design3 } alt="GNS" />
                <p>Ghana Nuclear Society</p>
            </div>
            <div>
                <img src={ userData.design4 } alt="Google" />
                <p>Google Listing</p>
            </div>
            {/* <div>
                <img src={ userData.design5 } alt="Barbie's" />
                <p>Barbie's Bite</p>
            </div> */}
        </Carousel>
        <div className="flex flex-row space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-90deg-up"
                            viewBox="0 0 16 16"
                        >
                            <path
                            fillRule="evenodd"
                            d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                            />
                        </svg>
                            <p className='font-mono'>Click or tap to view next design</p>
                    </div>
    </div>
  )
}
