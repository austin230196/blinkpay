import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest, res: NextResponse) {
    try{
        //read the data from the file
        let filepath = path.join("data.json");
        const data = fs.readFileSync(filepath, {encoding: "utf-8"});
        return new Response(
            JSON.stringify({
                "message": "Rates fetched successfully",
                "status": "success",
                "data": JSON.parse(data)
            }),
            {
                status: 200,
            }
        )
    }catch(e: any){
        return new Response(
            JSON.stringify({
                "message": e.message,
                "status": "error"
            }),
            {
                status: 500,
            }
        )
    }
}


export async function POST(req: NextRequest, res: NextResponse) {
    const { turkishRate, chineseRate } = await req.json();
    console.log({turkishRate, chineseRate});
    let filepath = path.join("data.json");
    const data = fs.readFileSync(filepath, {encoding: "utf-8"});
    const parsedData = JSON.parse(data);
    parsedData.dollar = turkishRate;
    parsedData.yen = chineseRate;
    fs.writeFileSync(filepath, JSON.stringify(parsedData, null, 2));

    return new Response(
        JSON.stringify({
            "message": "Rate updated successfully",
            "status": "success"
        }),
        {
            status: 200,
        }
    )
}