import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Activity, GitCommit, Star, BookOpen, Users, Code } from "lucide-react";

const languages = [
  { name: "Python", pct: 40, color: "bg-blue-500" },
  { name: "Jupyter Notebook", pct: 35, color: "bg-orange-500" },
  { name: "Java", pct: 15, color: "bg-red-500" },
  { name: "JavaScript", pct: 7, color: "bg-yellow-400" },
  { name: "Other", pct: 3, color: "bg-gray-400" },
];

const GITHUB_USERNAME = "AbhiramSakha";

const GitHubSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [stats, setStats] = useState([
    { icon: BookOpen, label: "Public Repos", value: "—" },
    { icon: GitCommit, label: "Contributions", value: "—" },
    { icon: Users, label: "Followers", value: "—" },
    { icon: Star, label: "Stars Earned", value: "—" },
  ]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const user = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const repos = await reposRes.json();

        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0)
          : 0;

        setStats([
          { icon: BookOpen, label: "Public Repos", value: String(user.public_repos ?? "—") },
          { icon: GitCommit, label: "Contributions", value: "507+" },
          { icon: Users, label: "Followers", value: "1+" },
          { icon: Star, label: "Stars Earned", value: "3+" },
        ]);
      } catch {
        // keep defaults on error
      }
    };
    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-tag mb-4 inline-block">{"// github"}</span>
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">My open-source contributions and coding activity overview.</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Contribution Graph
            </h3>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true&area=true&bg_color=transparent`}
              alt="GitHub contribution graph"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </motion.div>

          {/* Language Usage + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              Language Usage
            </h3>

            <div className="flex h-4 rounded-full overflow-hidden mb-6">
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className={`${lang.color}`}
                  title={`${lang.name}: ${lang.pct}%`}
                />
              ))}
            </div>

            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${lang.color}`} />
                    <span className="text-sm text-foreground">{lang.name}</span>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{lang.pct}%</span>
                </div>
              ))}
            </div>

            {/* GitHub Stats Card */}
          <div className="mt-6">
            <img
              src={"https://github-readme-stats.vercel.app/api?username=AbhiramSakha&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=true&show_icons=true}
              alt="GitHub stats"
              className="w-full rounded-lg"
              loading="lazy"
          />
      </div>
            
          {/* GitHub Streak Stats */}
        <div className="mt-4">
          <img
            src={`https://nirzak-streak-stats.vercel.app/?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&ring=34d399&fire=34d399&currStreakLabel=34d399&t=${Date.now()}`}
            alt="GitHub Streak Stats"
            className="w-full rounded-lg"
            loading="lazy"
          />
    </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
