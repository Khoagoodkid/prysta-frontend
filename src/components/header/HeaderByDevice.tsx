import { DesktopHeader } from "./DesktopHeader"
import { MobileHeader } from "./MobileHeader"
import { NavItem, linkSources } from "./linkSources";

export const links: NavItem[] = Object.values(linkSources);
export const HeaderByDevice = ({setIsLoading}:{setIsLoading:any}) => {
    return (
        <div className="absolute top-0 z-[1000] w-full">
            <div className="hidden lg:block">
                <DesktopHeader links = {links} setIsLoading = {setIsLoading}/>
            </div>
            <div className="block lg:hidden">
                <MobileHeader/>
            </div>
        </div>
    )
}