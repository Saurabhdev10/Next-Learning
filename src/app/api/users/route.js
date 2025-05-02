import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import User from "../../../models/user";

await connectDB();

export async function GET() {
  // const users = [
  //   { id: 1, name: "John Doe", course: "MERN" },
  //   { id: 2, name: "Jane Doe", course: "MERN" },
  //   { id: 3, name: "John Smith", course: "MERN" },
  //   { id: 4, name: "Jane Smith", course: "MERN" },
  // ];
  // return NextResponse.json(users);

  // get all users from database
  try{
    const users = await User.find(); // Fetch all users from the database
    //console.log("Users fetched from database:", users);
    return NextResponse.json(users);
  }
  catch(error){
    console.error("Error fetching users:", error);
    return NextResponse.json({
      message:"Error in fetching users",
      status:500,
    })
  }

}

///data posting api
/// create user
export async function POST(request) {
  //console.log("Post request api Called");
  // console.log('Request body :',request.body);
  // console.log('Request headers:',request.headers);
  // console.log('Request method:',request.method);
  // console.log('Request url:',request.url);
  // console.log('Request nextUrl:',request.nextUrl.pathname);
  // console.log(`Request nextUrl searchParams:`,request.nextUrl.searchParams);

  //    const jsonData= await request.json();
  //const textData = await request.text();
  //console.log("Request text:", textData);
  //   console.log('Request jsonData:',jsonData);

  // i have comment out the jsonData because it is not working because Decide whether you need the body as JSON or plain text. If you need JSON, remove the request.text()
  // return NextResponse.json({
  //   message: "POST request successful",
  //   status: 200,
  // });

  ///fetch user data from request body
  const { name, email, password, about, profilePic } = await request.json();
  ///console.log("User data from request body:", name, email, password, about, profilePic);
  /// create user object with user model
  const user = new User({ name, email, password, about, profilePic });
  /// save user to database
  try {
    const createdUser = await user.save();

    const response = NextResponse.json(user, {
      status: 201,
      message: "User created successfully",
    });
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Error creating user", status: 500 });
  }
}

export function DELETE(request) {
  console.log("Delete request api Called");
  return NextResponse.json({ message: `User with id deleted`, status: 200 });
}
export function PUT() {}
