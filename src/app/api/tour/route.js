import Tour from "@/model/Tour";
import { NextResponse } from "next/server";

export async function GET(req){
    const allTours = await Tour.find();

    return NextResponse.json({
        status: 200,
        length: allTours.length,
        tours: allTours
    })
}

export async function POST(req){
    const body = await req.json()
    const { name, price, difficulty } = body;

    const newTour = await Tour.create({ name, price: +price, difficulty })

    return NextResponse.json({
        status: 200,
        data: newTour
    });
}