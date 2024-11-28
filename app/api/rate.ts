import fs from "fs";
import path from "path";

import { NextApiRequest, NextApiResponse } from "next";



export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try{
        //read the data from the file
        const data = fs.readFileSync(path.join(__dirname, "../data.json"), {encoding: "utf-8"});
        console.log(data);
        return res.status(200).json({
            "message": "Rates fetched successfully",
            "status": "success",
            "data": JSON.parse(data)
        })
    }catch(e: any){
        return res.status(500).json({
            "message": e.message,
            "status": "error"
        })
    }
}