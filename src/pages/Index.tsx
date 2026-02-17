import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, BookOpen, Users, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import DeveloperCard from "@/components/DeveloperCard";
import { mockProjects, mockBlogs, mockDevelopers, stats } from "@/lib/mock-data";

const features = [
  { icon: Code2, title: "Ship Projects", desc: "Showcase your work with rich project pages, live demos, and source links." },
  { icon: BookOpen, title: "Write Blogs", desc: "Share knowledge through articles, tutorials, and technical deep-dives." },
  { icon: Users, title: "Build Community", desc: "Connect with developers, collaborate on ideas, and grow together." },
  { icon: Zap, title: "Get Discovered", desc: "Featured content, search, and filters help your work reach the right audience." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20 rounded-full mb-6">
              Developer Ecosystem
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
              Where Developers<br />
              <span className="text-gradient">Build & Shine</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Create your profile, publish projects, write blogs, and represent KARSWA — a community of builders shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/auth?mode=signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
              >
                Join KARSWA <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-secondary transition-colors"
              >
                Explore Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading label="Why KARSWA" title="Everything Developers Need" description="A complete ecosystem to showcase your skills, share knowledge, and connect with peers." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <f.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading label="Projects" title="Featured Work" description="Discover outstanding projects built by our community." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading label="Blog" title="Latest Articles" description="Insights, tutorials, and stories from our developers." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockBlogs.slice(0, 4).map((b) => (
              <BlogCard key={b.id} {...b} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              Read All Articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading label="Community" title="Our Developers" description="Meet the builders behind KARSWA." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDevelopers.slice(0, 6).map((d) => (
              <DeveloperCard key={d.id} {...d} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/developers" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              View All Developers <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-card border border-border p-12 md:p-16 text-center animate-pulse-glow">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to <span className="text-gradient">Build & Share</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Join KARSWA today and become part of a thriving developer community.
            </p>
            <Link
              to="/auth?mode=signup"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 text-sm font-semibold rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
