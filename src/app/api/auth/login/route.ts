// import { userLogin } from "@/utils/auth.services/auth.service";
import { NextRequest, NextResponse } from "next/server";
import { userLogin } from "@/services/auth/auth.services";
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const resp = await userLogin(body);
    const data = await resp.json();
    const cookies = resp.headers.get("set-cookie");
    return new NextResponse(JSON.stringify(data), {
      headers: {
        "set-cookie": cookies || "",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
