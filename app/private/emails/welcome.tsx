import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components"
import { paintings } from "@/app/constants"

interface WelcomeEmailProps {
  name: string
}

export default function WelcomeEmail({ name }: WelcomeEmailProps) {
  // Select 3 featured paintings
  const featuredPaintings = paintings.slice(0, 3)

  return (
    <Html>
      <Head />
      <Preview>Welcome to Larisa Guseva Art Gallery</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to My Art Gallery, {name}!</Heading>

          <Text style={text}>
            Thank you for reaching out! I'm excited to share my artwork with you. Here are some of my recent works that
            you might enjoy:
          </Text>

          <Section style={gallerySection}>
            {featuredPaintings.map((painting) => (
              <div key={painting.id} style={paintingContainer}>
                <Img src={painting.src} alt={painting.title} width="200" height="200" style={paintingImage} />
                <Text style={paintingTitle}>{painting.title}</Text>
              </div>
            ))}
          </Section>

          <Text style={text}>
            I've attached a high-resolution portfolio to this email for you to explore more of my work. Feel free to
            reach out if you have any questions or if you're interested in commissioning a piece.
          </Text>

          <Section style={socialSection}>
            <Link href="https://instagram.com/guseva_art" style={socialLink}>
              Instagram
            </Link>
            {" • "}
            <Link href="https://t.me/teleguseva" style={socialLink}>
              Telegram
            </Link>
          </Section>

          <Text style={footer}>
            Best regards,
            <br />
            Larisa Guseva
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "16px 0",
}

const text = {
  color: "#444",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "16px 0",
}

const gallerySection = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  margin: "32px 0",
}

const paintingContainer = {
  textAlign: "center" as const,
}

const paintingImage = {
  borderRadius: "8px",
  objectFit: "cover" as const,
}

const paintingTitle = {
  color: "#666",
  fontSize: "14px",
  margin: "8px 0",
}

const socialSection = {
  margin: "32px 0",
  textAlign: "center" as const,
}

const socialLink = {
  color: "#2563eb",
  textDecoration: "none",
}

const footer = {
  color: "#666",
  fontSize: "14px",
  margin: "48px 0 0",
}

