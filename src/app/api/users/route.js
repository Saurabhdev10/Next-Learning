import { NextResponse } from "next/server";

export function GET() {
  const users = [
    { id: 1, name: "John Doe", course: "MERN" },
    { id: 2, name: "Jane Doe", course: "MERN" },
    { id: 3, name: "John Smith", course: "MERN" },
    { id: 4, name: "Jane Smith", course: "MERN" },
  ];
  return NextResponse.json(users);
}
export async function POST(request) {
    console.log("Post request api Called");
            // console.log('Request body :',request.body);
            // console.log('Request headers:',request.headers);
            // console.log('Request method:',request.method);
            // console.log('Request url:',request.url);
            // console.log('Request nextUrl:',request.nextUrl.pathname);
            // console.log(`Request nextUrl searchParams:`,request.nextUrl.searchParams);         
         
        //    const jsonData= await request.json();
           const textData= await request.text();    
              console.log('Request text:',textData);
            //   console.log('Request jsonData:',jsonData);

            // i have comment out the jsonData because it is not working because Decide whether you need the body as JSON or plain text. If you need JSON, remove the request.text()
  return NextResponse.json({
    message: "POST request successful",
    status: 200,
  });
}

export function DELETE(request) {
  console.log("Delete request api Called");
  return NextResponse.json({ message: `User with id deleted`, status: 200 });
}
export function PUT() {}
