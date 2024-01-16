"use client"
import { usePathname, useRouter } from 'next/navigation'
import { linkSources } from './linkSources'
import { NavItem } from './linkSources'
import Link from 'next/link'
import { Logo } from '@/icons/Logo'
import { Loader } from '../loader/Loader'
type HeaderProps = {
    stickyHeader?: boolean,
    links: NavItem[],
    setIsLoading: any
}
type HeaderLinkProps = {
    link: NavItem,
    setIsLoading: any
}
const NAVIGATING_WATING_TIME = 3000
const HeaderLink: React.FC<HeaderLinkProps> = ({ link, setIsLoading }) => {
    const pathname = usePathname()
    const router = useRouter()
    const isActive = pathname?.includes(link.id)
    const navigate = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            router.push(link.url || '   ')
        }, NAVIGATING_WATING_TIME);
    }
    return (
        <div onClick={() => navigate()} >

            <a className={`py-[8px] px-[16px] cursor-pointer ${isActive && 'bg-base-v2-6 rounded-[12px] text-black '}`}>
                {link.text}
            </a>

        </div>
    )
}

export const DesktopHeader: React.FC<HeaderProps> = ({ stickyHeader = false, links, setIsLoading }) => {

    return (
        <header className={`w-full bg-transparent py-[32px] text-black px-[32px] flex font-bold text-[24px] items-center justify-around ${stickyHeader && 'fixed top-0 bg-white-50'}`}>
            <div>
                <Logo />
            </div>
            <div className='flex gap-[24px]'>
                {links.map((link: NavItem, index) => {
                    return (
                        <HeaderLink link={link} key={index} setIsLoading={setIsLoading} />
                    )
                })}
            </div>
            <div>
                Login

            </div>
        </header>
    )
}