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
export function POST(request) {
    console.log("Post request api Called");
    console.log('Request body :',request.body);

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
