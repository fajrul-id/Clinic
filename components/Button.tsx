import Link from 'next/link';
import React from 'react'

export const ButtonContact = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <Link href={"/kontak"} className="b relative h-10 w-40 flex justify-center items-center">
            <div className="i h-10 w-40 bg-blue items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-105 hover:scale-y-105 transition duration-300 ease-out">
            </div>
            <p className="text-center text-white font-semibold z-10 pointer-events-none">{children}</p>
            <span className="absolute flex h-4 w-4 top-0 right-0 transform -translate-y-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75" />
              <span className="absolute inline-flex rounded-full h-4 w-4 bg-green" />
            </span>
          </Link>
  )
}

export const Button = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div className="b relative h-10 w-40 flex justify-center items-center">
            <div className="i h-10 w-40 bg-blue items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
            </div>
            <a className="text-center text-white font-semibold z-10 pointer-events-none">{children}</a>
          </div>
  )
}

