import InfoCard from "@/components/layout/panel/InfoCard";
// import BarChart from "@/components/layout/panel/Chart/BarChart";
// import PieChart from "@/components/layout/panel/Chart/PieChart";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

const DashboardPage = () => {
    return (<div className={'p-4 flex flex-col gap-4 md:flex-row'}>
        {/*LEFT*/}
        <div className={'w-full lg:w-2/3 flex flex-col gap-8'}>
            {/*InfoCard*/}
            <div className={'flex justify-between gap-4 flex-wrap'}>
                <InfoCard type={'Data 1'}/>
                <InfoCard type={'Data 2'}/>
                <InfoCard type={'Data 3'}/>
                <InfoCard type={'Data 4'}/>
            </div>
            {/*Chart side 1*/}
            <div className={'flex gap-4 flex-col lg:flex-row'}>
                <div className={'w-full lg:w-2/3 h-[500px]'}>
                    {/*<BarChart />*/}
                    <Card className={'w-full h-[500px] shadow-none'}>
                        <CardBody className={'shadow-none'}>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                    </Card>
                </div>
                <div className={'w-full lg:w-1/3 h-[500px]'}>
                    {/*<PieChart/>*/}
                    <Card className={'w-full h-[500px] shadow-none'}>
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            {/*Chart side 2*/}
            <div className={''}></div>
        </div>
        {/*RIGHT*/}
        <div className={'w-full lg:w-1/3'}>
            <div className="bg-white rounded-xl w-full p-4 h-[670px]">
                <div className="flex justify-between items-center">
                    <h1 className={'text-lg font-semibold'}> Best Customer </h1>
                    {/*<Image src={'/moreDark.png'} alt={''} width={20} height={20}/>*/}
                </div>
            </div>
        </div>
        </div>
    )
}

export default DashboardPage;