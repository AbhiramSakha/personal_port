import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Globe, Send } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", value: "abhiramsakhaa@gmail.com", href: "mailto:abhiramsakhaa@gmail.com" },
  { icon: Github, label: "GitHub", value: "AbhiramSakha", href: "https://github.com/AbhiramSakha" },
  { icon: Linkedin, label: "LinkedIn", value: "sakha-abhiram", href: "https://www.linkedin.com/in/sakha-abhiram-60b138289/" },
  { icon: Globe, label: "Portfolio", value: "portfoliosakhabhiram", href: "https://portfoliosakhabhiram.netlify.app/" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-tag mb-4 inline-block">{"// contact"}</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">Let's collaborate! Reach out for opportunities or just to say hello.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all group block"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">{s.label}</div>
                  <div className="text-sm text-foreground font-medium">{s.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground font-mono mb-1.5 block">Name</label>
              <input
                type="text"
                required
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-mono mb-1.5 block">Email</label>
              <input
                type="email"
                required
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-mono mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                submitted
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-primary text-primary-foreground glow-primary hover:opacity-90"
              }`}
            >
              {submitted ? (
                <>✓ Message Sent!</>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
