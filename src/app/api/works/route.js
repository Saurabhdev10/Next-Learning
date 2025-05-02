import { NextResponse } from "next/server";

export function GET() {
   return NextResponse.json(
    {message:'Hello from works api', status:200})
}
export function POST(){

}
export function DELETE(){

}
export function PUT(){}