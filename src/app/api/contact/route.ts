import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { error } = await supabase
      .from("contact_requests")
      .insert([
        {
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          phone: body.phone,
          country: body.country,
          company: body.company,
          subject: body.subject,
          message: body.message,
        },
      ]);

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    // Notification à Maison KEMEL
    const clientEmail = await resend.emails.send({
      from: "Maison KEMEL <onboarding@resend.dev>",
      to: "mewetie@gmail.com",
      subject: "Nouvelle demande Maison KEMEL",
      html: `
        <h2>Nouvelle demande reçue</h2>

        <p><strong>Prénom :</strong> ${body.first_name}</p>
        <p><strong>Nom :</strong> ${body.last_name}</p>
        <p><strong>Email :</strong> ${body.email}</p>
        <p><strong>Téléphone :</strong> ${body.phone}</p>
        <p><strong>Pays :</strong> ${body.country}</p>
        <p><strong>Entreprise :</strong> ${body.company || "-"}</p>
        <p><strong>Objet :</strong> ${body.subject}</p>

        <hr />

        <p>${body.message}</p>
      `,
    });

    console.log("Réponse Resend (client) :", clientEmail);

    // Confirmation envoyée au client
   await resend.emails.send({
  from: "Maison KEMEL <onboarding@resend.dev>",
  to: body.email,
  subject: "Votre demande a bien été reçue – Maison KEMEL",

  html: `
  <div style="background:#F8F5F0;padding:50px;font-family:Georgia,serif;">
    <div style="max-width:650px;margin:auto;background:#fff;padding:50px;border-radius:12px;">

      <h1 style="text-align:center;color:#B88A44;margin-bottom:0;">
        MAISON KEMEL
      </h1>

      <p style="text-align:center;color:#777;">
        Maison de services premium
      </p>

      <br>

      <p>Bonjour ${body.first_name},</p>

      <p>
        Nous vous remercions sincèrement pour votre confiance.
      </p>

      <p>
        Votre demande a bien été reçue.
      </p>

      <p>
        Notre équipe l'étudiera avec la plus grande attention
        et reviendra vers vous sous 24 heures.
      </p>

      <br>

      <p>
        Bien cordialement,
      </p>

      <p>
        <strong>L'équipe Maison KEMEL</strong>
      </p>

    </div>
  </div>
  `,
});

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Erreur serveur.",
      },
      {
        status: 500,
      }
    );
  }
}