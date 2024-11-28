import { ReactNode } from "react"



export type IFeature = {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function Feature({icon, title, description}: IFeature){
    return (
        <div className="flex flex-col gap-5 bg-white p-10 border-b-[8px] border-primary/80 rounded-lg shadow-lg items-center justify-center w-[270px] h-[350px]">
            <span className="text-primary text-5xl">{icon}</span>
            <h3 className="font-semibold text-[20px] text-center">{title}</h3>
            <p className="text-center text-[15px] text-black/50 leading-[1.8]">{description}</p>
        </div>
    )
}