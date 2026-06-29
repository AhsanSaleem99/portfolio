import { NextResponse } from "next/server";

// 1. Handle CORS Preflight requests from your extension
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allows your vanilla extension to communicate
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

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
      headers: { "Access-Control-Allow-Origin": "*" }, // Required for extension access
    });
  } catch (err) {
    // Fixed: Using 'err' inside the response so TypeScript is happy
    return NextResponse.json(
      {
        error: "Malformed request body",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 400, headers: { "Access-Control-Allow-Origin": "*" } },
    );
  }
}
