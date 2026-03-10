import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Globe, Lightbulb, Heart } from "lucide-react";

const profileImage =
  "public/profile.png"; // <-- ADD YOUR IMAGE URL HERE

const highlights = [
  { icon: Cpu, title: "AI & ML", desc: "Building intelligent systems with Python, TensorFlow, and scikit-learn" },
  { icon: Globe, title: "Full Stack", desc: "End-to-end development with React, Flask, FastAPI, and Node.js" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Converting complex backend logic into clean, real-world applications" },
  { icon: Heart, title: "Open Source", desc: "Active contributor with 507+ contributions and 21+ public repositories" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-tag mb-4 inline-block">{"// about"}</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle max-w-3xl">
            Passionate developer and data analyst with 2+ years of coding experience, specializing in AI-powered backend development, scalable web applications, and data analytics to build intelligent, data-driven solutions.
          </p>
        </motion.div>

        {/* PROFILE + CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8 lg:col-span-2"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm currently working on AI-powered web applications, scalable REST APIs, ML-based recommendation systems, and full-stack projects using{" "}
              <span className="text-primary font-medium">Python, Flask, FastAPI, MongoDB</span>, and modern frontend tools.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm looking to collaborate on AI/ML projects, data analytics dashboards, API-driven web applications, and open-source initiatives focused on automation and real-world problem solving.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently learning Applied Machine Learning, Data Analytics, Google Cloud Platform, secure REST API development, and real-world project deployment strategies.
            </p>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={profileImage}
              alt="Abhiram Sakha"
              className="w-64 h-64 object-cover rounded-2xl border border-primary/30 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

        </div>

        {/* CODE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-xl p-8 font-mono text-sm mb-12"
        >
          <div className="text-muted-foreground mb-2">
            <span className="text-accent">const</span>{" "}
            <span className="text-primary">developer</span> = {"{"}
          </div>

          <div className="pl-4 space-y-1">
            <div><span className="text-muted-foreground">name:</span> <span className="text-green-400">"Abhiram Sakha"</span>,</div>
            <div><span className="text-muted-foreground">role:</span> <span className="text-green-400">"Full Stack Developer & AI Engineer"</span>,</div>
            <div><span className="text-muted-foreground">location:</span> <span className="text-green-400">"India"</span>,</div>
            <div><span className="text-muted-foreground">experience:</span> <span className="text-yellow-400">2</span><span className="text-muted-foreground">+</span> <span className="text-green-400">"years"</span>,</div>
            <div><span className="text-muted-foreground">repos:</span> <span className="text-yellow-400">21</span>,</div>
            <div><span className="text-muted-foreground">contributions:</span> <span className="text-yellow-400">507</span>,</div>
            <div><span className="text-muted-foreground">passions:</span> [<span className="text-green-400">"AI/ML"</span>, <span className="text-green-400">"APIs"</span>, <span className="text-green-400">"Open Source"</span>],</div>
            <div><span className="text-muted-foreground">status:</span> <span className="text-green-400">"Open to Opportunities"</span></div>
          </div>

          <div className="text-muted-foreground">{"}"}</div>
        </motion.div>

        {/* HIGHLIGHTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;