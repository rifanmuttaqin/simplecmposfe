"use client"

import Image from "next/image";
import React from "react";

const PieChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
                <h1 className={'text-lg font-semibold'}> New Customer </h1>
                <Image src={'/moreDark.png'} alt={''} width={20} height={20}/>
            </div>
            <div className="">
                {/*Konten*/}
                <div className={'w-full pt-5 h-[300px]'}>

                </div>
            </div>
            <div className="flex justify-center gap-16 pt-5">
                <div className={'flex flex-col gap-1'}>

                </div>
                <div className={'flex flex-col gap-1'}>

                </div>
            </div>
        </div>
    )
}

export default PieChart;