import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML5 / CSS3", percentage: 90, category: "Frontend" },
  { name: "JavaScript", percentage: 80, category: "Frontend" },
  { name: "React", percentage: 75, category: "Frontend" },
  { name: "Angular", percentage: 60, category: "Frontend" },
  { name: "React Native", percentage: 55, category: "Frontend" },
  { name: "TailwindCSS", percentage: 80, category: "Frontend" },
  // Backend
  { name: "Python", percentage: 92, category: "Backend" },
  { name: "Flask", percentage: 85, category: "Backend" },
  { name: "FastAPI", percentage: 80, category: "Backend" },
  { name: "Node.js", percentage: 65, category: "Backend" },
  { name: "Java", percentage: 70, category: "Backend" },
  // AI/ML
  { name: "scikit-learn", percentage: 78, category: "AI / ML" },
  { name: "TensorFlow", percentage: 65, category: "AI / ML" },
  { name: "PyTorch", percentage: 60, category: "AI / ML" },
  { name: "Pandas / NumPy", percentage: 88, category: "AI / ML" },
  { name: "Matplotlib", percentage: 82, category: "AI / ML" },
  // Databases
  { name: "MongoDB", percentage: 80, category: "Databases" },
  { name: "MySQL", percentage: 78, category: "Databases" },
  { name: "SQL", percentage: 85, category: "Databases" },
  // DevOps & Tools
  { name: "Git / GitHub", percentage: 88, category: "DevOps & Tools" },
  { name: "Google Cloud", percentage: 55, category: "DevOps & Tools" },
  { name: "Vercel / Netlify", percentage: 75, category: "DevOps & Tools" },
  { name: "Power BI", percentage: 70, category: "DevOps & Tools" },
];

const getBarColor = (pct: number): string => {
  if (pct >= 85) return "from-emerald-400 to-cyan-400";
  if (pct >= 70) return "from-blue-400 to-indigo-400";
  if (pct >= 55) return "from-amber-400 to-orange-400";
  return "from-red-400 to-rose-400";
};

const categories = ["Frontend", "Backend", "AI / ML", "Databases", "DevOps & Tools"];

const SkillBar = ({ skill, delay, inView }: { skill: Skill; delay: number; inView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0.6 }}
          className="text-xs font-mono text-muted-foreground"
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${getBarColor(skill.percentage)} transition-shadow ${
            hovered ? "shadow-lg shadow-primary/20" : ""
          }`}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-tag mb-4 inline-block">{"// skills"}</span>
          <h2 className="section-title">
            Tech Stack & <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies I work with, extracted from my GitHub activity and projects.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={catIdx * 0.1 + i * 0.05}
                      inView={inView}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
