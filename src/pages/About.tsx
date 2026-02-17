import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DeveloperCard from "@/components/DeveloperCard";
import { mockDevelopers } from "@/lib/mock-data";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We build with purpose — every project, blog, and contribution moves us forward." },
  { icon: Eye, title: "Open & Transparent", desc: "Open source at heart. We share knowledge freely and build in public." },
  { icon: Heart, title: "Community First", desc: "We lift each other up. Mentorship, collaboration, and support define us." },
  { icon: Users, title: "Inclusive", desc: "Everyone is welcome. We celebrate diverse backgrounds, skills, and perspectives." },
];

const About = () => (
  <div className="py-20">
    <div className="container mx-auto px-6">
      {/* Mission */}
      <section className="max-w-3xl mx-auto text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            We Are <span className="text-gradient">KARSWA</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            KARSWA is a developer ecosystem built by developers, for developers. We believe in the power of community, 
            open collaboration, and the idea that every developer has something valuable to share. Our platform is a 
            space to create, learn, and grow — together.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <SectionHeading label="Our Values" title="What We Stand For" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-6 rounded-xl bg-gradient-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <v.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Team */}
      <section>
        <SectionHeading label="Team" title="Core Members" description="The people driving KARSWA forward." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDevelopers.slice(0, 3).map((d) => (
            <DeveloperCard key={d.id} {...d} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default About;
