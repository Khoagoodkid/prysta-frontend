"use client"
import { isBrowser } from "react-device-detect"
import { DesktopHeader } from "./components/header/DesktopHeader"
import { MobileHeader } from "./components/header/MobileHeader"
import { Footer } from "./components/footer/Footer"
import clsx from "clsx"
import { useState, type ReactNode } from 'react';
import { HeaderByDevice } from "./components/header/HeaderByDevice"
import { Loader } from "./components/loader/Loader"
type PageProps = {
    children: ReactNode,
    includeHeader?: boolean,
    includeFooter?: boolean,
}

export const Page: React.FC<PageProps> = ({
    children,
    includeHeader = true,
    includeFooter = true,
}) => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="w-screen z-[100] ">
            {includeHeader && <HeaderByDevice setIsLoading={setIsLoading} />}
            <div className="absolute top-0 left-0 right-0 ">
                <div
                    className={clsx('h-screen ', {
                        'pb-[149px] md:pb-[112px]': !includeFooter,
                    })}>
                    {children}
                    {includeFooter && <Footer />}
                </div>
            </div>
            <Loader isLoading={isLoading} />
        </div>
    )
}