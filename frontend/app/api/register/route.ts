import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const response = await fetch("http://backend:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      
      return NextResponse.json(
        { message: "Informations de connexion incorrectes" },
        { status: response.status }
      );
    }

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    
    return NextResponse.json(
      { message: "Erreur lors de l'inscription", error: String(error) },
      { status: 500 }
    );
  }
}
