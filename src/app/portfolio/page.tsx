"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import {
  TrendingUp,
  DollarSign,
  Target,
  Search,
  Phone,
  Trophy,
} from "lucide-react";

export default function PortfolioPage() {
  const navItems = [
    { name: "Services", id: "/services" },
    { name: "Why Us", id: "/why-vintdragon" },
    { name: "Portfolio", id: "/portfolio" },
    { name: "Process", id: "/process" },
  ];

  const footerColumns = [
    {
      title: "Services",      items: [
        { label: "Web Design & Development", href: "/services" },
        { label: "Digital Marketing Strategy", href: "/services" },
        { label: "SEO & Search Visibility", href: "/services" },
        { label: "Paid Advertising", href: "/services" },
        { label: "AI Optimization", href: "/services" },
      ],
    },
    {
      title: "Company",      items: [
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",      items: [
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
            text: "Book Strategy Call",            href: "/contact"}}
          animateOnLoad={true}
        />
      </div>

      <div id="portfolio-hero" data-section="portfolio-hero">
        <HeroCentered
          title="Portfolio & Case Studies - Real Results from Real Clients"
          description="See the measurable impact Vintdragon has delivered to businesses like yours. Our portfolio showcases strategic design, data-driven marketing, and tangible revenue growth."
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",              alt: "Success stories"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",              alt: "Client success"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-male-business-1772731419967-22cbf118.png",              alt: "Growth achieved"},
          ]}
          avatarText="50+ thriving business partnerships"
          buttons={[
            { text: "Schedule Your Strategy Call", href: "/contact" },
            { text: "Back to Home", href: "/" },
          ]}
          background={{ variant: "downward-rays-static-grid" }}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="case-studies" data-section="case-studies">
        <FeatureBento
          title="Featured Case Studies"
          description="Transformations driven by strategic design, AI-powered optimization, and data-driven marketing. These are real businesses achieving measurable growth."
          tag="Success Stories"
          tagIcon={Trophy}
          features={[
            {
              title: "E-Commerce Platform Redesign",              description:
                "Complete strategic overhaul of an outdated e-commerce platform. New design, improved UX, and conversion optimization delivered extraordinary results.",              bentoComponent: "media-stack",              items: [
                {
                  imageSrc:
                    "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/before-and-after-comparison-of-a-corpora-1772731419773-dd5a6bf8.png?_wi=2",                  imageAlt: "Before and after redesign"},
                {
                  imageSrc:
                    "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/e-commerce-website-showcase-with-modern--1772731420444-ca39301f.png?_wi=2",                  imageAlt: "Modern e-commerce showcase"},
                {
                  imageSrc:
                    "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-services-website-redesign-s-1772731420366-1e377798.png?_wi=2",                  imageAlt: "Success transformation"},
              ],
            },
            {
              title: "B2B Services Lead Generation",              description:
                "Strategic website redesign combined with integrated digital marketing. Generated qualified leads at scale with significant ROI improvement.",              bentoComponent: "icon-info-cards",              items: [
                { icon: TrendingUp, label: "Lead Growth", value: "420%" },
                { icon: DollarSign, label: "Cost Per Lead", value: "-55%" },
                { icon: Target, label: "Marketing ROI", value: "12x" },
              ],
            },
            {
              title: "Local Market Dominance",              description:
                "Comprehensive local SEO and paid advertising strategy. Achieved #1 rankings across all target keywords and consistent client flow.",              bentoComponent: "3d-task-list",              items: [
                { icon: Search, label: "Google Rankings", time: "Month 3" },
                { icon: Phone, label: "Appointment Calls", time: "Month 4" },
                { icon: DollarSign, label: "Revenue Impact", time: "$2M+" },
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="client-testimonial" data-section="client-testimonial">
        <TestimonialCardFifteen
          testimonial="Vintdragon didn't just redesign our website—they transformed our entire digital presence. Within six months, our leads tripled and our conversion rate improved by 2x. They're true partners who genuinely care about our success."
          rating={5}
          author="Michael Chen, Founder of Growth Ventures"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",              alt: "Client testimonial"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",              alt: "Team feedback"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-male-business-1772731419967-22cbf118.png",              alt: "Satisfied partner"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-mar-1772731419935-167676be.png",              alt: "Success verification"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",              alt: "Additional testimonial"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",              alt: "Client team member"},
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
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