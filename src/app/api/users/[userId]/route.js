import { NextResponse } from "next/server";

let users=[
    {id:1, name:'John Doe',course:'MERN'},
    {id:2, name:'Jane Doe',course:'MERN'},  
    {id:3, name:'John Smith',course:'MERN'},
    {id:4, name:'Jane Smith',course:'MERN'},
]
export function DELETE(request,{params}){
    console.log("Delete request api Called")
    const {userId}=params;
    console.log('params:',params)
    users=users.filter((user)=>user.id!=userId)
    return NextResponse.json({message:`User with id ${userId} deleted`, status:200})
}