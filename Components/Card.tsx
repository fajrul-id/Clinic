/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'

interface cardProps {
  id: number;
  title: string;
  desc?: React.ReactNode;
  img: string;
}
export const Card = ({ props }: {props : cardProps}) => {
  return (
    <div className="max-w-screen-lg mx-auto w-full md:flex min-h-[200px] shadow-md">
        <div className="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${props.img})`}} title={props.title}>
        </div>
        <div className="lg:w-2/3 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-primary font-bold text-xl mb-2">{props.title}</div>
            <div className="text-secondary text-base">
              {props.desc}
            </div>
          </div>
        </div>
      </div>
  )
}

export const CardKecil = ({ props }: {props : cardProps}) => {
  return (
    <div className="max-w-lg w-full h-fit shadow-md">
        <div className="w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center" title={props.title}>
          <img src={props.img} alt="" />
        </div>
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="">
            <div className="text-primary font-bold text-xl mb-2 text-center">{props.title}</div>
          </div>
        </div>
      </div>
  )
}
