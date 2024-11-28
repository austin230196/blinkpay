import Image from "next/image";

export default function Footer(){
    return (
        <div className="w-full bg-[#5b5b5b] py-5 text-white">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex">
                    <p>Copyright © 2024 <b>BlinkPay</b></p>
                </div>

                <div className="flex gap-4">
                    <span className="bg-white px-2 py-1 cursor-pointer hover:scale-105 transition-all duration-500 hover:opacity-80 ease-out rounded-md">
                    <Image src="/visa.svg" alt="visa" width={50} height={50} />
                    </span>
                    <span className="bg-white px-2 py-1 cursor-pointer hover:scale-105 transition-all duration-500 hover:opacity-80 ease-out rounded-md">
                    <Image src="/master-card.svg" alt="mastercard" width={50} height={50} />
                    </span>
                </div>
            </div>
        </div>
    )
}