"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Code2,
  Brain,
  LineChart,
  Waves,
  Network,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  X,
  Trophy,
  GraduationCap,
  Star,
  ArrowRight,
} from "lucide-react";

// Modal Component
function Modal({
  isOpen,
  onClose,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-2xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          <X size={20} className="text-[#71717a]" />
        </button>
        <h3 className="text-xl font-semibold mb-6">{title}</h3>
        <div className="min-h-[200px] flex items-center justify-center text-[#71717a]">
          <p className="text-center">
            Detailed content coming soon...
            <br />
            <span className="text-sm mt-2 block opacity-60">
              This section will be expanded as the research progresses.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  title,
  description,
  onReadMore,
}: {
  title: string;
  description: string;
  onReadMore: () => void;
}) {
  return (
    <div className="glass-card p-6 flex flex-col h-full border-gradient">
      <h3 className="text-lg font-medium mb-3 text-[#e5e5e7]">{title}</h3>
      <p className="text-[#a1a1aa] text-sm leading-relaxed flex-grow mb-4">
        {description}
      </p>
      <button
        onClick={onReadMore}
        className="btn-primary self-start flex items-center gap-2 group"
      >
        Read More
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

// Skill Badge Component
function SkillBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="skill-badge">
      <Icon size={16} className="text-[#6366f1]" />
      <span>{label}</span>
    </div>
  );
}

// Highlight Card Component  
function HighlightCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-[#6366f1]/10 shrink-0">
          <Icon size={18} className="text-[#6366f1]" />
        </div>
        <div>
          <h3 className="font-medium text-[#e5e5e7] mb-1">{title}</h3>
          <p className="text-sm text-[#71717a] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const projects = [
    {
      title: "Graph-Based Exploration of Social Structures",
      description:
        "An exploratory study using graph representations and spectral methods to understand clustering and community structure in social networks.",
    },
    {
      title: "Mathematical Perspectives on Algorithmic Fairness",
      description:
        "Investigating how basic tools from probability and analysis can be used to reason about bias and stability in recommendation-style algorithms.",
    },
    {
      title: "Signal Processing Approaches to Noisy Urban Data",
      description:
        "Applying filtering and denoising ideas from DSP to sparse and irregular mobility-related datasets.",
    },
  ];

  const skills = [
    { icon: Code2, label: "Python" },
    { icon: Code2, label: "C++" },
    { icon: Brain, label: "Data Structures & Algorithms" },
    { icon: LineChart, label: "Linear Algebra" },
    { icon: FlaskConical, label: "Probability & Real Analysis" },
    { icon: Waves, label: "Signals & Systems" },
  ];

  const interests = [
    "Quantitative & Mathematical Modeling",
    "Stochastic Processes (Foundational)",
    "Graphs and Network Analysis",
    "Computational Social Science",
    "Data-driven Systems Analysis",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366f1]/3 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-20" id="hero">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Profile Picture */}
            <div className="shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden profile-glow">
                <Image
                  src="/pfp.jpeg"
                  alt="Lavanya Patil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                Lavanya Patil
              </h1>
              <p className="text-[#6366f1] font-medium mb-4">
                Electronics & Communication Design @ IIIT Hyderabad
              </p>
              <p className="text-[#a1a1aa] max-w-xl leading-relaxed">
                An ECD undergraduate with a strong mathematical foundation and a
                growing interest in research at the intersection of computation,
                data, and social systems. Particularly drawn to problems where
                Linear Algebra, probability, and algorithms meet real-world
                structure.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Highlights */}
        <section className="mb-16" id="academics">
          <h2 className="section-title">Academic Highlights</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <HighlightCard
              icon={Trophy}
              title="JEE Main 2023"
              description="99.7 Percentile"
            />
            <HighlightCard
              icon={Star}
              title="NSEA"
              description="National Standard Examination in Astronomy — Stage 1 Qualified"
            />
            <HighlightCard
              icon={GraduationCap}
              title="Core Mathematics"
              description="Strong academic performance in Linear Algebra and introductory Real Analysis"
            />
          </div>
        </section>

        {/* Skills & Foundations */}
        <section className="mb-16" id="skills">
          <h2 className="section-title">Skills & Foundations</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </section>

        {/* Projects & Explorations */}
        <section className="mb-16" id="projects">
          <h2 className="section-title">Projects & Explorations</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                onReadMore={() => openModal(project.title)}
              />
            ))}
          </div>
        </section>

        {/* Technical & Research Interests */}
        <section className="mb-20" id="interests">
          <h2 className="section-title">Technical & Research Interests</h2>
          <div className="glass-card p-6">
            <ul className="grid gap-3 md:grid-cols-2">
              {interests.map((interest, index) => (
                <li key={index} className="flex items-center gap-3 text-[#a1a1aa]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                  <span className="text-sm">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[#71717a]">
              © {new Date().getFullYear()} Lavanya Patil
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/MagnesiumGlycinate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#71717a] link-hover text-sm"
              >
                <Github size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/lavanya-patil-782077378/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#71717a] link-hover text-sm"
              >
                <Linkedin size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:lavanya.patil@students.iiit.ac.in"
                className="flex items-center gap-2 text-[#71717a] link-hover text-sm"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">IIIT Webmail</span>
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle} />
    </div>
  );
}
