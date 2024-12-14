"use client"
import Image from "next/image";

import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const BarChart = () => {
    const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];
    const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First Dataset",
                data: datasets,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };

    // To make configuration
    const options = {
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Y-axis Lable",
                },
                display: true,
                min: 10,
            },
            x: {
                title: {
                    display: true,
                    text: "x-axis Lable",
                },
                display: true,
            },
        },
    };

    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
                <h1 className={'text-lg font-semibold'}> Sales Marketplace </h1>
                <Image src={'/moreDark.png'} alt={''} width={20} height={20} />
            </div>
            <div className="">
                {/*Konten*/}
                <div className={'w-full pt-5'}>
                    <Line data={data} options={options}/>
                </div>
            </div>
            <div className="flex justify-center gap-16 pt-5">
                <div className={'flex flex-col gap-1'}>
                    <div className={'w-3 h-3 bg-lamaSky rounded-full'}/>
                    <h1 className={'font-bold text-sm'}>123432</h1>
                    <h2 className={'text-sm text-green-300'}>Param</h2>
                </div>
                <div className={'flex flex-col gap-1'}>
                    <div className={'w-3 h-3 bg-lamaYellow rounded-full'}/>
                    <h1 className={'font-bold text-sm'}>123432</h1>
                    <h2 className={'text-sm text-yellow-300'}>Param</h2>
                </div>
            </div>
        </div>
    );
}


export default BarChart;
