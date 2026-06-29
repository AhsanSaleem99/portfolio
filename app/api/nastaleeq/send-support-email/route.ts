import { NextResponse } from "next/server";

// Reusable CORS headers to allow your vanilla extension to talk to Next.js
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// 1. Handles the automatic browser security handshake (Preflight)
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// 2. Handles the actual email sending
export async function POST(request: Request) {
  try {
    const { email, subject, body } = await request.json();

    const r = await fetch("https://smtp.maileroo.com/api/v2/emails", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.NASTALEEQ_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { address: "no-reply@asaleem.com" },
        to: [{ address: "nastaleeq-support@asaleem.com" }],
        subject: subject || "Extension Support",
        text: `From: ${email}\n\n${body}`,
      }),
    });

    const data = await r.json();

    return NextResponse.json(data, {
      status: r.ok ? 200 : 500,
      headers: corsHeaders,
    });
  } catch (err) {
    // Fixed: 'err' is now logged so the TypeScript compiler won't complain about unused variables
    console.error("Extension API Route Error:", err);

    return NextResponse.json(
      { error: "Internal processing error" },
      { status: 400, headers: corsHeaders },
    );
  }
}
