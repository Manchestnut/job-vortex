import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const recaptchaRes = await fetch(recaptchaUrl, { method: "POST" });
  const recaptchaData = await recaptchaRes.json();

  return NextResponse.json({ success: recaptchaData.success });
}
