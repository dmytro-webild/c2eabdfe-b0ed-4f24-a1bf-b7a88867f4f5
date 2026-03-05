"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
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
      title: "Navigate",      items: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Expertise", href: "/why-vintdragon" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",      items: [
        { label: "Cybersecurity", href: "/services" },
        { label: "AI Solutions", href: "/services" },
        { label: "Development", href: "/services" },
        { label: "Consulting", href: "/services" },
      ],
    },
    {
      title: "Company",      items: [
        { label: "About Us", href: "/" },
        { label: "Blog", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Press", href: "/" },
      ],
    },
    {
      title: "Legal",      items: [
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
        { label: "Security", href: "/" },
        { label: "Compliance", href: "/" },
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
            text: "Book Strategy Call",            href: "/contact"}}
          animateOnLoad={true}
        />
      </div>

      <div id="portfolio-hero" data-section="portfolio-hero">
        <HeroCentered
          title="Portfolio & Case Studies - Real Results from Real Clients"
          description="See the measurable impact VintDragon has delivered to businesses like yours. Our portfolio showcases strategic design, data-driven marketing, and tangible revenue growth."
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
          testimonial="VintDragon didn't just redesign our website—they transformed our entire digital presence. Within six months, our leads tripled and our conversion rate improved by 2x. They're true partners who genuinely care about our success."
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
        <footer className="relative w-full bg-black border-t border-white/10">
          <div className="mx-auto px-4 py-16 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-white font-semibold mb-4">Navigate</h3>
                <ul className="space-y-2">
                  {footerColumns[0].items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  {footerColumns[1].items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerColumns[2].items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {footerColumns[3].items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 VintDragon. Driving Business Growth Through Digital Excellence.</p>
                <p className="text-gray-500 text-xs">Crafted with precision for modern SaaS businesses</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
