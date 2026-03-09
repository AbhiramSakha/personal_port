import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  stars: number;
  forks: number;
  language: string;
}

const projects: Project[] = [
  {
    name: "FMML Project & Labs",
    description: "Machine Learning project and lab submissions covering supervised/unsupervised learning, neural networks, and model evaluation techniques.",
    tech: ["Python", "Jupyter", "scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/AbhiramSakha/FMML_Project_and_Labs",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
  },
  {
    name: "APSSDC CS Project Batch 2",
    description: "Comprehensive computer science project built during APSSDC training, focusing on Python-based application development and real-world problem solving.",
    tech: ["Python", "Flask", "MySQL"],
    github: "https://github.com/AbhiramSakha/APSSDC_CS-PROJECT-Batch-2",
    stars: 0,
    forks: 1,
    language: "Python",
  },
  {
    name: "APSSDC AI/ML Project Batch 3",
    description: "AI and Machine Learning project built during APSSDC training, implementing ML models for data analysis and predictions.",
    tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    github: "https://github.com/AbhiramSakha/APSSDC_AIML-PROJECT-Batch-3",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
  },
  {
    name: "ICT Academy Java",
    description: "Java programming coursework and projects from ICT Academy training, covering OOP concepts and application development.",
    tech: ["Java", "OOP", "Data Structures"],
    github: "https://github.com/AbhiramSakha/ICT_Academy_Java",
    stars: 0,
    forks: 0,
    language: "Java",
  },
  {
    name: "Colab Submissions",
    description: "Collection of Google Colab notebooks for Project Nest, featuring data analysis, ML experiments, and interactive visualizations.",
    tech: ["Python", "Colab", "NumPy", "Pandas"],
    github: "https://github.com/AbhiramSakha/Colab-Submissions-",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
  },
  {
    name: "FMML Module 5 Project",
    description: "Advanced ML module project focusing on deep learning fundamentals, model optimization, and neural network architectures.",
    tech: ["Python", "Deep Learning", "PyTorch"],
    github: "https://github.com/AbhiramSakha/FMML-Module-5-Project",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
  },
];

const langColor: Record<string, string> = {
  Python: "bg-blue-400",
  "Jupyter Notebook": "bg-orange-400",
  Java: "bg-red-400",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-tag mb-4 inline-block">{"// projects"}</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">A selection of repositories from my GitHub, showcasing AI/ML and full-stack work.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg leading-tight">
                  {project.name}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-2"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="code-tag text-xs">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${langColor[project.language] || "bg-gray-400"}`} />
                  <span>{project.language}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {project.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/AbhiramSakha?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Github className="w-4 h-4" />
            View All Repositories
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
