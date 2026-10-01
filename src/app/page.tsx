"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesSection from "@/components/ServicesSection";
import ProjectPortfolio from "@/components/ProjectPortfolio";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProcessMethodology from "@/components/ProcessMethodology";
import CostEstimator from "@/components/CostEstimator";
import QualitySafetySection from "@/components/QualitySafetySection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Turnkey Fit-Out Execution");
  const [estimatedArea, setEstimatedArea] = useState(15000);

  const handleOpenConsultation = () => {
    setSelectedService("Turnkey Fit-Out Execution");
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleRequestSimilarProject = (projectName: string) => {
    setSelectedService(`Turnkey Fit-Out (Similar to ${projectName})`);
    setModalOpen(true);
  };

  const handleEstimateSubmit = (data: {
    spaceType: string;
    area: number;
    timeline: string;
    selectedScopes: string[];
  }) => {
    setSelectedService(`Turnkey Fit-Out for ${data.spaceType}`);
    setEstimatedArea(data.area);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08120D] text-[#F4EFEA] relative selection:bg-[#D4AF37] selection:text-[#07110C]">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Cinematic Ambient Hero with Video Background */}
      <HeroSection onOpenConsultation={handleOpenConsultation} />

      {/* Enterprise Client Marquee & Verification Strip */}
      <ClientMarquee />

      {/* Capabilities & Core Services */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Project Portfolio Showcase with Real PDF Photos */}
      <ProjectPortfolio onRequestSimilar={handleRequestSimilarProject} />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider />

      {/* 5-Step Turnkey Methodology */}
      <ProcessMethodology />

      {/* Interactive Turnkey Scope & Timeline Estimator */}
      <CostEstimator onEstimateSubmit={handleEstimateSubmit} />

      {/* Quality Assurance & HSE Safety Governance */}
      <QualitySafetySection />

      {/* Seasoned Leadership & Statutory Registrations */}
      <LeadershipSection />

      {/* Contact & Inquiries */}
      <ContactSection />

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Proposal Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillService={selectedService}
        prefillArea={estimatedArea}
      />
    </main>
  );
}
