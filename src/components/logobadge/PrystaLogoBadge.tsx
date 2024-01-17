import { Logo } from "@/icons/Logo"

export const PrystaLogoBadge = ({children}: {children:string}) => {
    return (
        <div className="flex flex-row items-center py-[0em] px-[1em] border-[1px] border-black rounded-[50px] gap-[.2em] w-auto">
            <Logo width={50} height={50}/>
            <span className="font-bold text-[1.2em]">{children}</span>
        </div>
    )
}