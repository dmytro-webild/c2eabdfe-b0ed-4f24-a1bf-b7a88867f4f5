"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureBenterGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import {
  Layout,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  Zap,
  BarChart3,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
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
          brandName="Vintdragon"
          button={{
            text: "Book Strategy Call",
            href: "/contact",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="services-hero" data-section="services-hero">
        <HeroCentered
          title="Comprehensive Digital Services for Your Growth"
          description="We deliver integrated, results-driven digital solutions. From stunning website design to AI-powered marketing, every service is strategically aligned to maximize your ROI and market dominance."
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",
              alt: "Service expertise",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",
              alt: "Team capabilities",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-male-business-1772731419967-22cbf118.png",
              alt: "Expert solutions",
            },
          ]}
          avatarText="Expert delivery across all digital channels"
          buttons={[
            { text: "Schedule Your Discovery Call", href: "/contact" },
            { text: "Learn Our Process", href: "/" },
          ]}
          background={{ variant: "animated-grid" }}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="detailed-services" data-section="detailed-services">
        <FeatureBento
          title="Our Service Offerings"
          description="Strategic solutions designed to transform your digital presence and drive measurable business growth. Each service is meticulously crafted to deliver exceptional ROI."
          tag="Services"
          tagIcon={Zap}
          features={[
            {
              title: "Website Design & Development",
              description:
                "Conversion-focused websites built for results. Strategic design, lightning-fast performance, and seamless user experience that turns visitors into customers.",
              bentoComponent: "animated-bar-chart",
            },
            {
              title: "Digital Marketing Strategy",
              description:
                "Data-driven strategies tailored to your unique business goals. Market research, competitor analysis, and comprehensive growth roadmaps with clear KPIs.",
              bentoComponent: "icon-info-cards",
              items: [
                { icon: Target, label: "Market Focus", value: "100%" },
                { icon: TrendingUp, label: "Growth Target", value: "325%" },
                { icon: CheckCircle, label: "Metric Tracking", value: "Real-time" },
              ],
            },
            {
              title: "SEO & Search Visibility",
              description:
                "Dominate Google rankings and generate consistent organic traffic. Technical optimization, content strategy, and continuous performance improvements.",
              bentoComponent: "line-chart",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Start Your Project", href: "/contact" }]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2025 Vintdragon. Driving Business Growth Through Digital Excellence."
        />
      </div>
    </ThemeProvider>
  );
}