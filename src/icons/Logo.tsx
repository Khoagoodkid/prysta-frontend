import Image from "next/image"

export const Logo: React.FC = ({width=100, height =100} : {width?: number, height?:number}) => {
    return (
        <Image src="/Logo.png" alt="Prysta" width={width} height={height}/>
    )
}