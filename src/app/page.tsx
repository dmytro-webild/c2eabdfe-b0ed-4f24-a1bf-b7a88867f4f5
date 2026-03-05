"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import {
  Layout,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  Zap,
  Award,
  Brain,
  Eye,
  CheckCircle,
  RefreshCw,
  Cpu,
  Sparkles,
  Trophy,
  DollarSign,
  Phone,
  Workflow,
  Rocket,
  Palette,
} from "lucide-react";

export default function HomePage() {
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
          brandName="VintDragon"
          button={{
            text: "Book Strategy Call",            href: "/contact"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Grow Your Business Through High-Performance Digital Marketing & Web Development"
          description="VintDragon helps scaling companies generate more leads, dominate their markets, and drive measurable revenue growth through strategic web design, AI-powered marketing, and data-driven optimization."
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",              alt: "VintDragon client success"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",              alt: "Satisfied business partner"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-male-business-1772731419967-22cbf118.png",              alt: "Case study participant"},
          ]}
          avatarText="Trusted by 50+ growing businesses"
          buttons={[
            { text: "Book Your Free Strategy Call", href: "/contact" },
            { text: "View Our Portfolio", href: "/portfolio" },
          ]}
          background={{ variant: "downward-rays-static-grid" }}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBorderGlow
          title="Comprehensive Digital Solutions for Growth"
          description="From premium website design to AI-powered marketing automation, we deliver integrated services that work together to maximize your ROI and establish digital dominance."
          tag="Services"
          tagIcon={Zap}
          features={[
            {
              icon: Layout,
              title: "Website Design & Development",              description:
                "Conversion-focused websites built for results. Strategic design, fast performance, and seamless user experience designed to turn visitors into customers."},
            {
              icon: Lightbulb,
              title: "Digital Marketing Strategy",              description:
                "Data-driven strategies tailored to your business goals. We research your market, analyze competitors, and build a comprehensive growth plan with measurable KPIs."},
            {
              icon: Search,
              title: "SEO & Search Visibility",              description:
                "Dominate Google rankings and organic traffic. Technical SEO, content strategy, and continuous optimization to ensure your business is found by your ideal customers."},
            {
              icon: Target,
              title: "Paid Advertising (Google & Social)",              description:
                "Precision-targeted campaigns maximizing ROI. Expert management of Google Ads, Meta, LinkedIn, and more with continuous optimization and performance tracking."},
            {
              icon: TrendingUp,
              title: "Conversion Optimization",              description:
                "Turn more visitors into leads and sales. A/B testing, user behavior analysis, and strategic improvements that boost your conversion rates and revenue."},
            {
              icon: Zap,
              title: "AI-Powered Website Optimization",              description:
                "Leverage cutting-edge AI to personalize experiences, automate optimization, and predictively enhance performance. Future-proof your digital presence with intelligent technology."},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-vintdragon" data-section="why-vintdragon">
        <FeatureBento
          title="Why Choose VintDragon"
          description="We're not just a design agency. We're strategic growth partners obsessed with your results. Here's what sets us apart:"
          tag="Our Approach"
          tagIcon={Award}
          features={[
            {
              title: "Strategy First, Not Just Design",              description:
                "Every project starts with deep discovery. We understand your business, market, and goals before creating anything. Your success metrics drive every decision.",              bentoComponent: "reveal-icon",              icon: Brain,
            },
            {
              title: "Conversion-Focused Websites",              description:
                "Beautiful design means nothing without results. Every pixel, every CTA, every interaction is strategically placed to maximize conversions and revenue.",              bentoComponent: "orbiting-icons",              centerIcon: Target,
              items: [
                { icon: Eye, ring: 1 },
                { icon: CheckCircle, ring: 2 },
                { icon: TrendingUp, ring: 3 },
              ],
            },
            {
              title: "Data-Driven Decisions",              description:
                "We don't guess. Every marketing decision is backed by analytics, testing, and measurable data. ROI and performance are constantly tracked and optimized.",              bentoComponent: "animated-bar-chart"},
            {
              title: "Fast & Modern Performance",              description:
                "Website speed impacts rankings and conversions. Our sites load lightning-fast with optimized performance, modern architecture, and excellent Core Web Vitals.",              bentoComponent: "line-chart"},
            {
              title: "Continuous Optimization",              description:
                "Your digital presence doesn't stop after launch. We provide ongoing optimization, monitoring, and strategic improvements to keep you ahead of the competition.",              bentoComponent: "marquee",              centerIcon: RefreshCw,
              variant: "text",              texts: [
                "A/B Testing",                "Performance Monitoring",                "Conversion Tracking",                "Competitor Analysis"],
            },
            {
              title: "AI-Enhanced Solutions",              description:
                "We leverage artificial intelligence for predictive analytics, personalization, automation, and intelligent optimization. Gain competitive advantage with advanced technology.",              bentoComponent: "3d-stack-cards",              items: [
                {
                  icon: Cpu,
                  title: "Machine Learning",                  subtitle: "Predictive Analytics",                  detail: "AI-driven insights"},
                {
                  icon: Zap,
                  title: "Automation",                  subtitle: "Smart Workflows",                  detail: "24/7 optimization"},
                {
                  icon: Sparkles,
                  title: "Personalization",                  subtitle: "Smart Experience",                  detail: "Individual journey"},
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="VintDragon transformed our online presence completely. Within 6 months, our leads tripled and our website now converts at 2x the industry average. Their team is professional, responsive, and genuinely invested in our success. They don't just deliver projects—they deliver real business growth."
          rating={5}
          author="Sarah Martinez, CEO at TechScale Inc."
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",              alt: "Sarah Martinez"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",              alt: "Client team member 1"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-male-business-1772731419967-22cbf118.png",              alt: "Client team member 2"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-mar-1772731419935-167676be.png",              alt: "Client team member 3"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-confident-bus-1772731415869-4f91450a.png",              alt: "Client team member 4"},
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-headshot-of-a-female-entrep-1772731418645-6ba957ca.png",              alt: "Client team member 5"},
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <FeatureBento
          title="Portfolio & Case Studies"
          description="Real results from real clients. See how we've helped businesses like yours achieve measurable growth through strategic design and marketing."
          tag="Success Stories"
          tagIcon={Trophy}
          features={[
            {
              title: "E-Commerce Platform Redesign",              description:
                "From outdated to conversion machine. 245% increase in online sales, 3.8x improvement in average order value, and 180% boost in mobile traffic.",              bentoComponent: "media-stack",              items: [
                {
                  imageSrc:
                    "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/before-and-after-comparison-of-a-corpora-1772731419773-dd5a6bf8.png?_wi=1",                  imageAlt: "Before and after website redesign"},
                {
                  imageSrc:
                    "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/e-commerce-website-showcase-with-modern--1772731420444-ca39301f.png?_wi=1",                  imageAlt: "E-commerce platform improvement"},
                {
                  imageSrc:
                    "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/professional-services-website-redesign-s-1772731420366-1e377798.png?_wi=1",                  imageAlt: "Final portfolio showcase"},
              ],
            },
            {
              title: "B2B Services Website & Lead Gen",              description:
                "Strategic overhaul generated qualified leads at scale. 420% increase in monthly leads, 55% reduction in cost-per-lead, and 12x ROI on digital marketing spend.",              bentoComponent: "icon-info-cards",              items: [
                {
                  icon: TrendingUp,
                  label: "Lead Growth",                  value: "420%"},
                {
                  icon: DollarSign,
                  label: "Cost Per Lead",                  value: "-55%"},
                {
                  icon: Target,
                  label: "Marketing ROI",                  value: "12x"},
              ],
            },
            {
              title: "Results Timeline",              description:
                "Dominant local rankings and consistent client flow. #1 Google position in all target keywords, 890% increase in monthly appointments, and $2M+ generated revenue.",              bentoComponent: "3d-task-list",              items: [
                {
                  icon: Search,
                  label: "Google Rankings",                  time: "Month 3"},
                {
                  icon: Phone,
                  label: "Appointment Calls",                  time: "Month 4"},
                {
                  icon: DollarSign,
                  label: "Revenue Generated",                  time: "Ongoing"},
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Explore Full Portfolio", href: "/portfolio" }]}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureBorderGlow
          title="Our 4-Step Growth Process"
          description="A proven methodology that transforms vision into measurable results. From discovery to sustained growth, we guide you every step of the way."
          tag="Methodology"
          tagIcon={Workflow}
          features={[
            {
              icon: Lightbulb,
              title: "Discovery & Strategy",              description:
                "Deep dive into your business, market, competitors, and goals. We research, analyze, and build a comprehensive strategic roadmap with clear KPIs and success metrics."},
            {
              icon: Palette,
              title: "Design & Build",              description:
                "Strategic design meets technical excellence. We create stunning, high-converting websites and marketing assets optimized for performance and user experience."},
            {
              icon: Rocket,
              title: "Launch & Optimization",              description:
                "Careful deployment with rigorous testing. Post-launch optimization, performance monitoring, and immediate refinements ensure optimal results from day one."},
            {
              icon: TrendingUp,
              title: "Growth & Marketing",              description:
                "Strategic marketing execution and continuous optimization. Data-driven campaigns, ongoing improvements, and sustainable growth are our focus for long-term success."},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="cta-section" data-section="cta-section">
        <ContactCenter
          tag="Ready to Grow?"
          title="Let's Build Your Digital Success Story"
          description="Book a free 30-minute strategy call with our team. We'll analyze your current situation, identify growth opportunities, and outline a clear path to measurable results."
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "downward-rays-animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="you@company.com"
          buttonText="Schedule Strategy Call"
          termsText="We respect your privacy. We'll only reach out to discuss your business growth strategy. Unsubscribe anytime."
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