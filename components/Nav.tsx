import Link from "next/link";

export default function Nav(){
    return (
        <div className="flex w-full sticky top-0 bg-white shadow-md z-50 items-center justify-between">
            <div className="flex items-center justify-between max-w-[1200px] lg:px-0 px-6 w-full mx-auto py-4 border-b border-gray-200">
                <Link href="/" className="flex flex-col">
                    <p className="text-3xl font-extrabold">BlinkPay</p>
                    <small className="text-xs uppercase font-mono">fast.safe.reliable</small>
                </Link>

                <div className="flex items-center gap-4">
                    <button className="bg-primary border-none text-white text-[12px] px-4 py-2 rounded-md hover:bg-primary/80 hover:scale-105 transition-all ease-out duration-300">Pay Turkish suppliers</button>
                </div>
            </div>
        </div>
    )
}