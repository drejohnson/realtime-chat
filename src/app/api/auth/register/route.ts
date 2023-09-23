import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import * as z from "zod";

// Input validation schema
const inputSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(30),
  lastName: z.string().min(1, "Last name is required").max(30),
  userName: z.string().min(1, "Username is required").max(30),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, userName, email, password } =
      inputSchema.parse(body);

    const exists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userName,
        email,
        password: await hash(password, 10),
      },
    });

    const { password: hashedPassword, ...rest } = user;

    return NextResponse.json({
      user: rest,
      message: "User Account Successfully Created",
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
