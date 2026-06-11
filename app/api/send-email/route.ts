import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const apiKey = process.env.MAILEROO_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key missing on server" },
        { status: 500 },
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 },
      );
    }

    // 🚀 THE CORRECT MAILEROO API ENDPOINT
    const response = await fetch("https://smtp.maileroo.com/api/v2/emails", {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: {
          address: "admin@asaleem.com",
          display_name: "ASaleem Support",
        },
        to: [
          {
            address: "admin@asaleem.com",
          },
        ],

        subject: `Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<h3>New Portfolio Message</h3>
           <p><strong>Name:</strong> ${name}</p>

           <!-- 🚀 THE ULTIMATE FIX: This link ensures NO 'Re:' will ever be generated -->
           <p><strong>Email:</strong>
              <a href="mailto:${email}?from=admin@asaleem.com&subject=Regarding your inquiry - ASaleem Support&body=Hi ${name},%0A%0A">
                 ${email}
              </a>
           </p>

           <p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    const contentType = response.headers.get("content-type");
    let result: Record<string, unknown> = {};

    // Pura content handling structure bilkul safe bina kisi rawText unused error ke
    if (contentType && contentType.includes("application/json")) {
      const jsonParsed = await response.json();
      if (jsonParsed && typeof jsonParsed === "object") {
        result = jsonParsed as Record<string, unknown>;
      }
    } else {
      // rawText ko yahan se mukammal khatam kar diya hai
      return NextResponse.json(
        {
          error: `Server responded with status ${response.status}. Please verify your Maileroo dashboard permissions.`,
        },
        { status: response.status },
      );
    }
    const isMailerooSuccess =
      result.success === true ||
      result.status === "success" ||
      result.status === true;
    const mailerooMessage =
      typeof result.message === "string" ? result.message : "";
    const mailerooErrors = result.errors
      ? JSON.stringify(result.errors)
      : "Maileroo transaction tracking error";

    if (response.ok && isMailerooSuccess) {
      return NextResponse.json({ success: true, message: "Email sent!" });
    } else {
      // Unused vars ko yahan inject kar diya taake warnings khatam ho jayen
      return NextResponse.json(
        {
          error: mailerooMessage || mailerooErrors,
        },
        { status: response.status },
      );
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown internal crash occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
