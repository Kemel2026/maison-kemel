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
    const adminEmail = await resend.emails.send({
      from: "Maison KEMEL <contact@maison-kemel.com>",
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

    console.log("Réponse Resend (admin) :", adminEmail);

    // Confirmation envoyée au client
    await resend.emails.send({
      from: "Maison KEMEL <contact@maison-kemel.com>",
      to: body.email,
      subject: "Merci pour votre confiance | Maison KEMEL",

      html: `
      <div style="background:#F8F5F0;padding:50px 20px;font-family:Georgia,serif;">
        <div style="max-width:650px;margin:auto;background:#ffffff;padding:50px;border-radius:12px;border:1px solid #ECE7DE;">

          <h1 style="text-align:center;color:#B88A44;margin:0;font-size:30px;letter-spacing:2px;">
            MAISON KEMEL
          </h1>

          <p style="text-align:center;color:#777;margin-top:8px;font-size:15px;">
            Maison de services premium
          </p>

          <hr style="border:none;border-top:1px solid #E5E5E5;margin:35px 0;">

          <p style="font-size:16px;color:#333;">
            Bonjour <strong>${body.first_name}</strong>,
          </p>

          <p style="font-size:16px;color:#333;line-height:1.8;">
            Merci pour votre confiance.
          </p>

          <p style="font-size:16px;color:#333;line-height:1.8;">
            Nous avons bien reçu votre demande et vous remercions d'avoir choisi
            <strong>Maison KEMEL</strong>.
          </p>

          <p style="font-size:16px;color:#333;line-height:1.8;">
            Nous allons étudier votre demande avec la plus grande attention afin de vous proposer un accompagnement sur mesure, pensé pour répondre au mieux à vos attentes.
          </p>

          <p style="font-size:16px;color:#333;line-height:1.8;">
            Un conseiller reviendra vers vous dans les meilleurs délais, généralement sous
            24 heures, afin d'échanger avec vous et de vous accompagner dans votre projet.
          </p>

          <p style="font-size:16px;color:#333;line-height:1.8;">
            En attendant, si vous souhaitez apporter une précision à votre demande, il vous suffit de répondre à cet e-mail.
          </p>

          <p style="font-size:16px;color:#333;margin-top:35px;">
            Au plaisir de vous accompagner,
          </p>

          <p style="font-size:16px;color:#333;margin-bottom:0;">
            <strong>Maison KEMEL</strong>
          </p>

          <p style="color:#777;font-size:14px;margin-top:5px;">
            Maison de services premium
          </p>

          <hr style="border:none;border-top:1px solid #E5E5E5;margin:35px 0 20px;">

          <p style="text-align:center;color:#999;font-size:13px;line-height:1.6;margin:0;">
            Maison KEMEL<br>
            L'excellence du service, avec discrétion et exigence.
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