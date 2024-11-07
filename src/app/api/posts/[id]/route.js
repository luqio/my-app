import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const {id} = params;
  try {
    await connect();
    const posts = await Post.findById(id);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Data base error", { status: 500 });
  }
};
