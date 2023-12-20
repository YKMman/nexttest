import { NextRequest, NextResponse } from "next/server";

import { TDataMaterial } from "@/types/type";
import conn from "@/config/db";

export async function GET(
    req:NextRequest, 
    res:NextResponse<TDataMaterial[]>
    ) {

    try {
        const result = await conn.query('SELECT * FROM material');
        return NextResponse.json(result.rows);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
