"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { Sparkles, Zap, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
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

      <div id="about-hero" data-section="about-hero">
        <HeroCentered
          title="About VintDragon - Your Digital Growth Partner"
          description="Founded on the principle that great design and marketing strategy drive measurable business results. We combine creative excellence with data-driven methodology to transform digital presence into competitive advantage."
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",
              alt: "Team leadership",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",
              alt: "Team member",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-male-business-1772731419967-22cbf118.png",
              alt: "Team expertise",
            },
          ]}
          avatarText="Building digital excellence since 2020"
          buttons={[
            { text: "Book Your Strategy Call", href: "/contact" },
            { text: "View Our Portfolio", href: "/portfolio" },
          ]}
          background={{ variant: "radial-gradient" }}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="our-story" data-section="our-story">
        <FeatureBento
          title="Our Story & Mission"
          description="VintDragon was founded on the conviction that every business deserves world-class digital solutions. We started small—just a passionate team of designers and marketers. Today, we've helped 50+ companies achieve exponential growth through strategic thinking and technical excellence."
          tag="About Us"
          tagIcon={Sparkles}
          features={[
            {
              title: "Founded on Results",
              description:
                "We didn't start as a design agency—we started as marketing strategists solving real client problems. This foundation shapes everything we do. Revenue and ROI aren't afterthoughts; they're core to our process.",
              bentoComponent: "reveal-icon",
              icon: Target,
            },
            {
              title: "Obsessed with Excellence",
              description:
                "Every project reflects our obsession with perfection. From pixel-perfect design to optimized code performance, we sweat the details because the details drive results.",
              bentoComponent: "orbiting-icons",
              centerIcon: Award,
              items: [
                { icon: Zap, ring: 1 },
                { icon: Users, ring: 2 },
              ],
            },
            {
              title: "Proven Track Record",
              description:
                "Our portfolio speaks for itself. 245% average increase in online sales for clients. 420% average increase in lead generation. Real businesses, real results, real growth.",
              bentoComponent: "line-chart",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="our-values" data-section="our-values">
        <FeatureBorderGlow
          title="Our Core Values"
          description="These principles guide everything we do and define how we work with clients to achieve exceptional results."
          tag="Values"
          tagIcon={Award}
          features={[
            {
              icon: Target,
              title: "Results-Driven",
              description:
                "We obsess over measurable outcomes. Every strategy, design decision, and marketing campaign is evaluated by its impact on your business growth and ROI.",
            },
            {
              icon: Zap,
              title: "Innovation First",
              description:
                "We stay ahead of industry trends, embrace cutting-edge technology, and constantly push the boundaries of what's possible with digital marketing and web design.",
            },
            {
              icon: Users,
              title: "True Partnership",
              description:
                "We don't treat clients as projects—we treat them as partners. Your success is our success. We're invested in your long-term growth and digital dominance.",
            },
            {
              icon: Sparkles,
              title: "Excellence & Attention",
              description:
                "Detail matters. Pixel-perfect design, error-free code, strategic copywriting—we never compromise on quality because excellence drives superior results.",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
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