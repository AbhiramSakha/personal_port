import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Code, BookOpen, Rocket } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Started Coding Journey",
    desc: "Created GitHub account and began learning Python, data structures, and programming fundamentals.",
    icon: Code,
  },
  {
    year: "2023-24",
    title: "FMML & ML Foundations",
    desc: "Completed FMML projects and labs covering machine learning, supervised/unsupervised learning, and neural networks.",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "APSSDC Training Programs",
    desc: "Participated in multiple APSSDC batches covering Computer Science projects, AI/ML applications, and Python development.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Full Stack & AI Development",
    desc: "Building AI-powered web apps with Flask, FastAPI, React, and deploying on cloud platforms. Open to opportunities.",
    icon: Calendar,
  },
  {
    year: "2026",
    title: "ICT Academy & Advanced Projects",
    desc: "Java training at ICT Academy. 507+ contributions, 21 repositories, continuous learning in cloud and ML optimization.",
    icon: Rocket,
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-tag mb-4 inline-block">{"// journey"}</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">A timeline of my developer growth and milestones.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 md:mt-0 z-10 glow-primary" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="font-mono text-xs text-primary">{item.year}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
