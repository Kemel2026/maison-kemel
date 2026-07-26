import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ClientConfirmationProps {
  firstName: string;
}

export default function ClientConfirmation({
  firstName,
}: ClientConfirmationProps) {
  return (
    <Html>
      <Head />

      <Preview>Votre demande a bien été reçue par Maison KEMEL.</Preview>

      <Body
        style={{
          backgroundColor: "#F8F5F0",
          fontFamily: "Georgia, serif",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "48px",
            maxWidth: "600px",
          }}
        >
          <Heading
            style={{
              color: "#B88A44",
              textAlign: "center",
              fontSize: "32px",
            }}
          >
            MAISON KEMEL
          </Heading>

          <Text
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "40px",
            }}
          >
            Maison de services premium
          </Text>

          <Section>
            <Text>Bonjour {firstName},</Text>

            <Text>
              Nous vous remercions sincèrement pour votre confiance.
            </Text>

            <Text>
              Votre demande a bien été reçue et notre équipe l'étudiera avec la
              plus grande attention.
            </Text>

            <Text>
              Nous reviendrons vers vous sous <strong>24 heures</strong> afin de
              vous proposer un accompagnement personnalisé.
            </Text>

            <Text>
              Dans l'attente de notre échange, nous vous remercions de votre
              confiance.
            </Text>

            <Text style={{ marginTop: "40px" }}>
              Bien cordialement,
              <br />
              <strong>L'équipe Maison KEMEL</strong>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}