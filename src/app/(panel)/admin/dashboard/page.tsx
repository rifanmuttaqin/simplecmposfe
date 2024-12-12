import InfoCard from "@/components/layout/panel/InfoCard";

const DashboardPage = () => {
    return (<div className={'p-4 flex flex-col gap-4 md:flex-row'}>
        {/*LEFT*/}
        <div className={'w-full lg:w-2/3 bg-yellow-100'}>
            {/*InfoCard*/}
            <div className={'flex justify-between gap-4 flex-wrap'}>
                <InfoCard type={'Data 1'}/>
                <InfoCard type={'Data 2'}/>
                <InfoCard type={'Data 3'}/>
                <InfoCard type={'Data 4'}/>
            </div>
        </div>
        {/*RIGHT*/}
        <div className={'w-full lg:w-1/3 bg-red-100'}></div>
    </div>)
}

export default DashboardPage;