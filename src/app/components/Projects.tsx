import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────── */
interface Project {
  title: string;
  tags: string[];
  description: string;
  url: string;
  impact?: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const featured: Project = {
  title: "CareerFlow — AI Career & Interview Preparation Platform",
  tags: ["Python",
    "Flask",
    "MySQL",
    "LangGraph",
    "LangChain",
    "HuggingFace LLm"],
  description:"An AI-powered career platform that helps users manage interview records, analyze performance, identify skill gaps, and generate personalized study plans using LangGraph agent workflows and HuggingFace LLM. ",
    url: "https://github.com/Akshaykompally/CareerFlow",
  impact: "⚡ AI-Powered Interview Analysis · LangGraph Agents",
};

const bentoProjects: (Project & { colSpan: number; rowSpan: number; isLarge?: boolean; problemSolution?: { problem: string; solution: string } })[] = [
  {
    title: "Facial Age Estimation Using Deep Learning",
    tags: ["Python",
    "Flask",
    "OpenCV",
    "NumPy",
    "Deep Learning",
    "Matplotlib"],
    description:
    "An AI-powered web application that estimates a person's age from facial images using deep learning and computer vision techniques. Features automated face detection, image preprocessing, and real-time age prediction through an intuitive Flask interface.",
    url: "#",
    impact: "🧠 Computer Vision · Deep Learning + OpenCV",
    colSpan: 4,
    rowSpan: 2,
    isLarge: true,
    problemSolution: {
      problem:
      "Estimating a person's age from facial images is challenging due to variations in lighting, facial expressions, pose, and image quality, making manual estimation subjective and inconsistent.",
      solution:
      "Built an AI-powered facial age estimation system using Python, OpenCV, NumPy, and Flask. Implemented automated face detection, image preprocessing, and deep learning-based age prediction to deliver accurate real-time results through an interactive web application.",
    },
  },
  {
    title: "VisionCraft-AI — AI Image Generation Platform",
    tags: ["Python",
    "Flask",
    "MySQL",
    "ClipDrop API",
    "REST API",
    "Prompt Engineering"],
    description:
    "A full-stack AI image generation platform that transforms text prompts into high-quality images using the ClipDrop Text-to-Image API. Features secure authentication, prompt history, multiple artistic styles, and a responsive user experience.",
    url: "https://github.com/Akshaykompally/VisionCraft-AI",
    impact: "↗ Live on Tableau Public · Kaggle dataset",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
    "Creating high-quality AI-generated images often requires complex tools, technical expertise, and lacks a centralized platform for securely managing prompts, generated images, and user history.",
      solution:
    "Built VisionCraft-AI, a full-stack AI image generation platform using Flask, MySQL, and the ClipDrop Text-to-Image API. Implemented secure user authentication, prompt engineering, image history management, and support for multiple artistic styles through a responsive web interface.",
    },
  },
  {
    title: "ScheduChat — WhatsApp Message Scheduler",
    tags: ["Python",
    "Flask",
    "PyWhatKit",
    "HTML5",
    "CSS3",
    "PYWhatKit",
    "Automation"],
    description:
    "A Flask-based web application that enables users to securely schedule WhatsApp messages for automatic delivery through WhatsApp Web. Features a user-friendly dashboard, authentication, and real-time message scheduling using PyWhatKit.",
    url: "https://github.com/Akshaykompally/ScheduChat",
    impact: "💬 Web Automation · Flask + PyWhatKit",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "CineAgent — AI Movie Recommendation System",
    tags: ["Python",
    "LangGraph",
    "LangChain",
    "Mistral AI",
    "Streamlit",
    "OMDb API"],
    description:
    "An AI-powered movie recommendation system that analyzes user-selected movies, recommends similar titles, explains similarities, checks OTT platform availability, and suggests the top five movies using a parallel LangGraph workflow powered by Mistral AI.",
    url: "https://github.com/Akshaykompally/CineAgent",
    impact: "🎥 Smart Recommendations · LangChain + Streamlit",
    colSpan: 3,
    rowSpan: 1,
  },
  {
    title: "HeadlineForge — AI News Summarizer",
    tags: ["Python",
    "LangChain",
    "Mistral AI",
    "Tavily Search",
    "Streamlit",
    "LLMs"],
    description:
    "An AI-powered news summarization application that retrieves the latest news articles based on user queries and generates concise, easy-to-read summaries using Mistral AI, LangChain, and Tavily Search through an interactive Streamlit interface.",
    url:"https://github.com/Akshaykompally/HeadlineForge",
    impact: "📰 AI-Powered News Insights · Tavily + Mistral AI",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
      "Keeping up with breaking news requires reading multiple lengthy articles from different sources, making it difficult to quickly understand current events and extract the most relevant information.",
      solution:
      "Developed HeadlineForge, an AI-powered news summarization platform using LangChain, Mistral AI, Tavily Search, and Streamlit. The application retrieves real-time news articles, processes them with an LLM, and generates concise, bullet-point summaries while also displaying the original search results for transparency.",
    },
  },
];

/* ─── Animated Stats Ticker ─────────────────────────────── */
function StatsTicker() {
  const stats = [
    "~86% Accuracy",
    "Real-time Prediction",
    "Face Detection",
    "Classify the AGe Group"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [stats.length]);
  
  return (
    <div
      style={{
        background: "#00B4D8",
        padding: "12px 16px",
        marginTop: 10,
        marginBottom: 10,
        position: "relative",
        overflow: "hidden",
        height: "42px",
      }}
    >
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: "12px",
            left: "16px",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 700,
            color: "#ffffff",
            textTransform: "uppercase",
            opacity: currentIndex === index ? 1 : 0,
            animation: currentIndex === index ? "fadeInOut 2s ease-in-out" : "none",
          }}
        >
          &gt; {stat}
        </div>
      ))}
    </div>
  );
}

/* ─── Shared button ──────────────────────────────────────── */
function ViewBtn({ url }: { url: string }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: "3px 3px 0px #1A1A1A", fontFamily: "var(--font-mono)" }}
      className="inline-flex items-center gap-2 bg-transparent border-[2px] border-[#1A1A1A] py-2 px-4 text-xs font-bold uppercase tracking-wider"
      whileHover={{ y: -2, boxShadow: "5px 5px 0px #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
    >
      View Project <ExternalLink className="w-3 h-3" />
    </motion.a>
  );
}

/* ─── Bento card ─────────────────────────────────────────── */
function BentoCard({ project, index }: { project: typeof bentoProjects[0]; index: number }) {
  return (
    <motion.div
      className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col overflow-hidden"
      style={{
        gridColumn: `span ${project.colSpan}`,
        gridRow: `span ${project.rowSpan}`,
        boxShadow: "3px 3px 0 #1A1A1A",
        borderRadius: 0,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            style={{ fontFamily: "var(--font-mono)", fontSize: 10, border: "1.5px solid #1A1A1A", background: "#ffffff" }}
            className="px-2 py-[2px] font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-base sm:text-lg mb-2 leading-tight">
        {project.title}
      </h3>

      {/* AgriVision accent block */}
      {project.isLarge && (
        <div
          style={{
            background: "#00B4D8",
            border: "none",
            borderRadius: 0,
            padding: "12px 16px",
            marginTop: 10,
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
           DL + Image Processing Techniques 
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#1A1A1A", opacity: 0.7, marginTop: 2 }}>
            ~86% Accuracy
          </span>
        </div>
      )}

      {/* Description */}
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, marginBottom: project.isLarge ? "16px" : "8px" }} className="leading-relaxed">
        {project.description}
      </p>

      {/* Animated Stats Ticker — AgriVision only */}
      {project.isLarge && (
        <div style={{ marginBottom: "16px" }}>
          <StatsTicker />
        </div>
      )}

      {/* Problem / Solution — College Food only */}
      {project.problemSolution && (
        <div style={{ 
          marginTop: project.isLarge ? "20px" : "10px", 
          marginBottom: project.isLarge ? "20px" : "10px",
          paddingTop: 10, 
          borderTop: "1px solid rgba(26,26,26,0.12)", 
          fontFamily: "var(--font-mono)", 
          fontSize: 10, 
          lineHeight: 1.6 
        }} className="flex-1">
          <p style={{ marginBottom: 6 }}>
            <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>PROBLEM — </span>
            <span style={{ opacity: 0.85, fontWeight: 400 }}>{project.problemSolution.problem}</span>
          </p>
          <p>
            <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>SOLUTION — </span>
            <span style={{ opacity: 0.85, fontWeight: 400 }}>{project.problemSolution.solution}</span>
          </p>
        </div>
      )}

      {/* Impact */}
      {project.impact && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-3">
          {project.impact}
        </p>
      )}

      <ViewBtn url={project.url} />
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="absolute -left-4 -top-8 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
          >
            05
          </span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="relative z-10 font-black text-4xl sm:text-5xl">
            Projects
          </h2>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12 }} className="mt-2 opacity-50">
            Things I've built and shipped.
          </p>
        </motion.div>

        {/* ── FEATURED CARD ── */}
        <motion.div
          className="project-card border-[3px] border-[#1A1A1A] bg-[#F5F0E8] overflow-hidden mb-5 flex flex-col sm:flex-row"
          style={{ boxShadow: "7px 7px 0px #1A1A1A", minHeight: 180 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, boxShadow: "10px 10px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
        >
          {/* Yellow accent block — top on mobile, right on desktop */}
          <div
            className="w-full sm:w-[40%] sm:order-last flex flex-col items-center justify-center py-8 sm:py-0"
            style={{ background: "#00B4D8", borderLeft: "0", borderBottom: "3px solid #1A1A1A" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 700, color: "#1A1A1A" }}>
              LangGraph + LLM
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#1A1A1A" }} className="opacity-70 mt-1">
              HuggingFace - meta-llama/Llama-3.1-8B-Instruct
            </span>
          </div>

          {/* Left content */}
          <div className="flex-1 p-6 flex flex-col justify-between" style={{ borderRight: "3px solid #1A1A1A" }}>
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em" }}
                className="uppercase opacity-50 mb-2"
              >
                Featured Project
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700 }} className="mb-3 leading-tight">
                {featured.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#00B4D8",
                      border: "2px solid #1A1A1A",
                      padding: "2px 8px",
                      color: "#1A1A1A",
                    }}
                    className="uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: 12 }} className="leading-relaxed mb-2">
                {featured.description}
              </p>

              {/* Problem / Solution */}
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(26,26,26,0.12)", fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.6 }} className="mb-2">
                <p style={{ marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>PROBLEM — </span>
                  <span style={{ opacity: 0.85, fontWeight: 400 }}>Job seekers often struggle to track interview progress, identify skill gaps, and prepare effectively due to scattered notes, lack of personalized feedback, and no structured roadmap for interview preparation.</span>
                </p>
                <p>
                  <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>SOLUTION — </span>
                  <span style={{ opacity: 0.85, fontWeight: 400 }}>Developed CareerFlow, an AI-powered career and interview preparation platform using Flask, MySQL, LangGraph, and HuggingFace LLM. Built an AI agent workflow to analyze interview performance, identify strengths and weaknesses, generate personalized study plans and career recommendations, while providing secure interview management through CRUD operations and an interactive dashboard.
</span>
                </p>
              </div>

              {featured.impact && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-4">
                  {featured.impact}
                </p>
              )}
            </div>
            <ViewBtn url={featured.url} />
          </div>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}
          className="uppercase opacity-45 mb-3"
        >
          More Projects
        </p>

        {/* Desktop: 6-col CSS grid */}
        <div
          className="hidden sm:grid gap-[14px]"
          style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {bentoProjects.map((project, index) => (
            <BentoCard key={index} project={project} index={index} />
          ))}
          {/* Always building tile */}
          <motion.div
            className="bg-[#00B4D8] border-[2px] border-[#1A1A1A] p-4 flex flex-col justify-between"
            style={{ gridColumn: "span 1", gridRow: "span 1", boxShadow: "3px 3px 0 #1A1A1A", borderRadius: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }} className="opacity-50 mb-1">
                MORE COMING
              </p>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-4">
                Always building.
              </h3>
            </div>
            <motion.a
              href="https://github.com/Akshaykompally"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", boxShadow: "3px 3px 0 #1A1A1A" }}
              className="inline-flex items-center gap-1 border-[2px] border-[#1A1A1A] bg-transparent py-2 px-4 text-xs font-bold uppercase tracking-wider self-start"
              whileHover={{ y: -2, boxShadow: "5px 5px 0 #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
            >
              GitHub ↗
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-4 sm:hidden">
          {bentoProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col"
              style={{ boxShadow: "3px 3px 0 #1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10, border: "1.5px solid #1A1A1A", background: "#ffffff" }}
                    className="px-2 py-[2px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-2">
                {project.title}
              </h3>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 12 }} className="leading-relaxed mb-2 flex-1">
                {project.description}
              </p>
              {project.impact && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-3">
                  {project.impact}
                </p>
              )}
              <ViewBtn url={project.url} />
            </motion.div>
          ))}
          {/* Always building — mobile */}
          <div
            className="bg-[#00B4D8] border-[2px] border-[#1A1A1A] p-4 flex flex-col gap-3"
            style={{ boxShadow: "3px 3px 0 #1A1A1A" }}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }} className="opacity-50">
              MORE COMING
            </p>
            <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg">
              Always building.
            </h3>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 12 }} className="leading-relaxed">
              New projects ship regularly. Check GitHub for latest work.
            </p>
            <motion.a
              href="https://github.com/Sridattasai18"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", boxShadow: "3px 3px 0 #1A1A1A" }}
              className="inline-flex items-center gap-1 border-[2px] border-[#1A1A1A] bg-transparent py-2 px-4 text-xs font-bold uppercase tracking-wider self-start"
              whileHover={{ y: -2, boxShadow: "5px 5px 0 #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
            >
              GitHub ↗
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
