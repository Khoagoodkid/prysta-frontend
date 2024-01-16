import { Logo } from "@/icons/Logo"

export const PrystaLogoBadge = ({children}: {children:string}) => {
    return (
        <div className="flex flex-row items-center py-[.5em] px-[1.5em] border-[1px] border-black rounded-[50px] gap-[.2em]">
            <Logo width={50} height={50}/>
            <span className="font-bold text-[1.2em]">{children}</span>
        </div>
    )
}