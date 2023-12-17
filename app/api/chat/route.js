import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const body = await request.json();
        const { message } = body;
        // if (form == "adduser") {
        const newMessage = await prisma.message.create({
            data: {
                message: message,

            }
        });
        return NextResponse.json(newMessage);
        // }

    } catch (err) {
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
};