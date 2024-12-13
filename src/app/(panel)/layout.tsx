import Navbar from "@/components/layout/panel/Navbar";
import SideBar from "@/components/layout/panel/SideBar";
import Footer from "@/components/layout/panel/Footer";

export default function PanelLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div className={'h-screen flex'}>
                {/*Sidebar*/}
                <SideBar/>
                {/*Content*/}
                <div className={'w-[86%] md:w-[92%] lg:w[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll'}>
                    <Navbar/>
                        <div className={'h-full'}>
                            {children}
                        </div>
                    <Footer/>
                </div>
            </div>
    );
}
