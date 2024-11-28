import { ReactNode } from "react";


export type IStep = {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

export default function Step({icon, title, description, index}: IStep){
    return (
        <div className="flex gap-5 p-5 xl:flex-row flex-col items-center bg-transparent rounded-lg shadow-lg min-w-[300px] max-w-[400px]">
            <span className="bg-primary text-white p-5 rounded-full text-4xl hover:scale-110 transition-all duration-300 ease-out hover:text-black/50">{icon}</span>
            <div className="flex flex-col gap-5">
                <h3 className="font-semibold">{index} - {title}</h3>
                <p className="text-[15px] text-black/50 leading-[1.8]">{description}</p>
            </div>
        </div>
    )
}