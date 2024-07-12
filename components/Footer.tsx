import Link from "next/link";
import { Button } from "./ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About Us",
      href: "/about",
    },
    {
      text: "Contact Us",
      href: "/contact",
    },
    {
      text: "Terms & Conditions",
      href: "/terms",
    },
    {
      text: "Privacy Policy",
      href: "/privacy",
    },
  ];

  const socials = [
    {
      icon: <Facebook size={24} strokeWidth={1.5} />,
      href: "https://facebook.com",
    },
    {
      icon: <Twitter size={24} strokeWidth={1.5} />,
      href: "https://twitter.com",
    },
    {
      icon: <Instagram size={24} strokeWidth={1.5} />,
      href: "https://instagram.com",
    },
    {
      icon: <Linkedin size={24} strokeWidth={1.5} />,
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground p-16 gap-8">
      <h1 className="font-semibold text-2xl">AltRecruit</h1>
      <div>
        {links.map((link) => (
          <Button
            variant="link"
            key={link.text}
            className="text-primary-foreground text-lg"
          >
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          </Button>
        ))}
      </div>
      <div>
        {socials.map((social) => (
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground text-lg hover:bg-muted-foreground/50 hover:text-primary-foreground"
            key={social.href}
          >
            <Link href={social.href}>{social.icon}</Link>
          </Button>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} AltRecruit. All rights reserved.</p>
    </div>
  );
}
