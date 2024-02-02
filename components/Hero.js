import React from 'react';
import userData from '../constants/data';

export default function Hero() {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
        <div className="w-full md:w-4/5 mx-auto text-center md:text-left md:p-10">
                    <h1 className="text-2xl md:text-5xl lg:text-8xl pb-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Developer
                    </h1>
                    <h1 className="text-2xl md:text-5xl lg:text-8xl pb-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                        Designer
                    </h1>
                    <h1 className="text-2xl md:text-5xl lg:text-8xl font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-500 to-amber-400">
                        Digital Marketer
                    </h1>
        </div>
        <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
            <div className="w-3/4 ">
                <img src={ userData.avatarUrl } alt="avatar" className=" shadow animate-bounce" />
                <div className="flex flex-row justify-between mt-4">
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
                            <p className='font-mono'>Hey!! That's me</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
