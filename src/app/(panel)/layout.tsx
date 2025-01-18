"use client";
import Navbar from "@/components/layout/panel/Navbar";
import SideBar from "@/components/layout/panel/SideBar";
import Footer from "@/components/layout/panel/Footer";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {SessionProvider} from "next-auth/react";

export default function PanelLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NextUIProvider>
            <SessionProvider>
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
            </SessionProvider>
        </NextUIProvider>
    );
}
