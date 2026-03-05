"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { Sparkles, Mail, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Services", id: "/services" },
    { name: "Why Us", id: "/why-vintdragon" },
    { name: "Portfolio", id: "/portfolio" },
    { name: "Process", id: "/process" },
  ];

  const footerColumns = [
    {
      title: "Services",
      items: [
        { label: "Web Design & Development", href: "/services" },
        { label: "Digital Marketing Strategy", href: "/services" },
        { label: "SEO & Search Visibility", href: "/services" },
        { label: "Paid Advertising", href: "/services" },
        { label: "AI Optimization", href: "/services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Disclaimer", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={navItems}
          brandName="VintDragon"
          button={{
            text: "Book Strategy Call",
            href: "/contact",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact-hero" data-section="contact-hero">
        <HeroCentered
          title="Let's Build Your Digital Success Story"
          description="Ready to transform your business through strategic design and marketing? Schedule a free consultation with our team. We'll analyze your current situation, identify growth opportunities, and outline your path to measurable results."
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",
              alt: "Consultation ready",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",
              alt: "Expert team",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-male-business-1772731419967-22cbf118.png",
              alt: "Ready to help",
            },
          ]}
          avatarText="Available for strategic partnerships"
          buttons={[
            { text: "Schedule Now", href: "#contact-form" },
            { text: "View Portfolio", href: "/portfolio" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactCenter
          tag="Let's Connect"
          title="Book Your Free 30-Minute Strategy Call"
          description="Share your business challenges and growth goals. Our team will provide personalized insights, identify opportunities, and outline a clear path to digital success. No pressure, just genuine strategic advice."
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "downward-rays-animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="your@company.com"
          buttonText="Schedule Consultation"
          termsText="We respect your privacy. We'll use your email only to schedule your strategy call and send relevant business growth insights. Unsubscribe anytime."
          onSubmit={(email) => {
            console.log("Contact form submitted with email:", email);
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2025 VintDragon. Driving Business Growth Through Digital Excellence."
        />
      </div>
    </ThemeProvider>
  );
}