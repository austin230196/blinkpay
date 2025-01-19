"use client"

import Nav from "@/components/Nav"
import { MouseEventHandler, useEffect, useState } from "react"

export default function Form(){
    const [chineseRate, setChineseRate] = useState(0)
    const [turkishRate, setTurkishRate] = useState(0)
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        (async() => {
          try{
            const res = await fetch("/api", {
              method: "GET",
              headers: {
                // "Content-Type": "application/json"
              }
            })
            const data = await res.json();
            setChineseRate(() => data.data.yen)
            setTurkishRate(() => data.data.dollar);
          }catch(e: any){
            console.log(e.message)
          }
        })()
    }, [])


    async function updateRate(e: any){
        if(e.target.disabled) return;
        setLoading(true)
        try{
            const res = await fetch("/api", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({turkishRate, chineseRate})
            })
            const data = await res.json();
            console.log({data})
        }catch(e: any){
            console.log(e.message)
        }finally{
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
            <Nav />
            <div className="w-full max-w-[600px] mx-auto py-20 px-4">
                <h2 className="text-2xl mb-8 font-bold">Update Turkish Rate</h2>
                <div className="">
                    <input onChange={e => setTurkishRate(() => parseFloat(e.target.value))} value={turkishRate} className="w-full p-2 outline-none border rounded-md border-gray-300" type="number" placeholder="Update turkish rate" />
                </div>
                <button disabled={loading} onClick={updateRate} className="disabled:cursor-not-allowed w-[1/2] mt-4 px-8 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-400 transition duration-500 ease-out">Update</button>
            </div>
            <div className="w-full mt-6 max-w-[600px] mx-auto py-20 px-4">
                <h2 className="text-2xl mb-8 font-bold">Update Chinese Rate</h2>
                <div className="">
                    <input onChange={e => setChineseRate(() => parseFloat(e.target.value))} value={chineseRate} className="w-full p-2 outline-none border rounded-md border-gray-300" type="text" placeholder="Update chinese rate" />
                </div>
                <button disabled={loading} onClick={updateRate} className="disabled:cursor-not-allowed w-[1/2] mt-4 px-8 py-2 bg-green-700 text-white rounded-md hover:bg-green-400 transition duration-500 ease-out">Update</button>
            </div>
        </div>
    )
}