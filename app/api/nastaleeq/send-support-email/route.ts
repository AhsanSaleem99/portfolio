import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    // 1. Capture the exact payload sent by your extension
    const incomingPayload = await request.json();

    // 2. Forward it directly to Maileroo, seamlessly injecting the secure environment key
    const r = await fetch("https://smtp.maileroo.com/api/v2/emails", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.NASTALEEQ_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(incomingPayload),
    });

    const data = await r.json();

    return NextResponse.json(data, {
      status: r.ok ? 200 : 500,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error("Extension API Proxy Error:", err);
    return NextResponse.json(
      { error: "Internal processing error" },
      { status: 400, headers: corsHeaders },
    );
  }
}
