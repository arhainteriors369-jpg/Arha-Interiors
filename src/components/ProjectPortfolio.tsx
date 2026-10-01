"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_GALLERY, ProjectItem } from "@/data/companyData";
import { MapPin, ArrowUpRight, X, Layers, CheckCircle, ExternalLink, Sparkles, Building2 } from "lucide-react";

interface ProjectPortfolioProps {
  onRequestSimilar: (projectName: string) => void;
}

export default function ProjectPortfolio({ onRequestSimilar }: ProjectPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Corporate Workplaces", value: "corporate" },
    { label: "Executive Suites", value: "executive" },
    { label: "Breakout & Recreation", value: "breakout" },
    { label: "Turnkey Architecture", value: "turnkey" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-[#07110C] overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#1E3B2C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Executed Project Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight">
              Selected Turnkey Workspaces
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A3997E] max-w-md">
            Representative turnkey project photography reproduced directly from our verified company portfolio across corporate IT parks and business hubs in Bengaluru.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#1E3B2C]/60 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-[#D4AF37] text-[#07110C] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  : "bg-[#0E1E16] text-[#A3997E] hover:text-[#F4EFEA] hover:bg-[#14291F] border border-[#1E3B2C]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel rounded-2xl overflow-hidden group cursor-pointer border border-[#2B4E3C]/60 hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-lg"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1610]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1912] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Client Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#07110C]/85 backdrop-blur-md border border-[#D4AF37]/30 text-[11px] font-semibold text-[#E5C365]">
                  {project.client}
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#07110C]/80 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center text-[#F4EFEA] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#E5C365]" />
                </div>

                {/* Location Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#C5B899]">
                  <span className="flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3 text-[#E5C365]" />
                    {project.location}
                  </span>
                  {project.area && (
                    <span className="bg-[#14291F]/90 px-2 py-0.5 rounded border border-[#2B4E3C] font-mono text-[10px] text-emerald-300">
                      {project.area}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Meta Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F4EFEA] group-hover:text-[#E5C365] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A3997E] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Scope Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E3B2C]/40">
                  {project.scope.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#12241A] text-[#C5B899] border border-[#234232]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.scope.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#A3997E]">
                      +{project.scope.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Project Deep Dive */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative max-w-4xl w-full bg-[#0B1912] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#07110C]/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#E5DFC5] hover:text-white hover:bg-[#1E3B2C] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-black shrink-0 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1912] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#07110C] text-xs font-bold uppercase tracking-wider">
                  {selectedProject.client}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF8F1]">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#E5C365]">
                  <span className="flex items-center gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedProject.location}
                  </span>
                  {selectedProject.area && (
                    <span className="font-mono bg-[#14291F] px-2.5 py-1 rounded border border-[#2B4E3C]">
                      {selectedProject.area}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#E5DFC5]/90 font-light leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E5C365] mb-3">
                  Scope of Turnkey Works Delivered:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedProject.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#14291F] border border-[#2B4E3C] text-xs text-[#E5DFC5]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#E5C365] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E3B2C]">
                <div className="text-xs text-[#A3997E]">
                  Ready to achieve this benchmark for your workspace?
                </div>
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onRequestSimilar(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:scale-105 transition-all cursor-pointer"
                >
                  Request Fit-Out Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
