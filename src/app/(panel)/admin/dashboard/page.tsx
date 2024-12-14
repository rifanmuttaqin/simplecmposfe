import InfoCard from "@/components/layout/panel/InfoCard";
import BarChart from "@/components/layout/panel/Chart/BarChart";
import PieChart from "@/components/layout/panel/Chart/PieChart";

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
                    <BarChart />
                </div>
                <div className={'w-full lg:w-1/3 h-[500px]'}>
                    <PieChart/>
                </div>
            </div>
            {/*Chart side 2*/}
            <div className={''}></div>
        </div>
        {/*RIGHT*/}
        <div className={'w-full lg:w-1/3 bg-red-100'}></div>
    </div>)
}

export default DashboardPage;