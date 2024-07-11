import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { TailwindIndicator } from "@/components/TailwindIndicator";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Recruitment App",
  description: "A recruitment app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
        <TailwindIndicator/>
      </body>
    </html>
  );
}
