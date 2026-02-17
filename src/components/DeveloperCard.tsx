import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { Link } from "react-router-dom";

interface DeveloperCardProps {
  id: string;
  fullName: string;
  username?: string;
  title?: string;
  avatarUrl?: string;
  skills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
}

const DeveloperCard = ({ id, fullName, username, title, avatarUrl, skills, githubUrl, linkedinUrl, twitterUrl, websiteUrl }: DeveloperCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group rounded-xl p-6 bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card text-center"
  >
    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-secondary border-2 border-border group-hover:border-primary/50 transition-colors">
      {avatarUrl ? (
        <img src={avatarUrl} alt={fullName} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-xl">
          {fullName?.charAt(0) || "?"}
        </div>
      )}
    </div>
    <Link to={`/developers/${id}`}>
      <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{fullName || "Anonymous"}</h3>
    </Link>
    {username && <p className="text-xs font-mono text-primary/70">@{username}</p>}
    {title && <p className="text-sm text-muted-foreground mt-1">{title}</p>}
    <div className="flex flex-wrap justify-center gap-1.5 mt-3">
      {skills.slice(0, 4).map((skill) => (
        <span key={skill} className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded">{skill}</span>
      ))}
    </div>
    <div className="flex justify-center gap-3 mt-4 pt-3 border-t border-border">
      {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>}
      {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>}
      {twitterUrl && <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={16} /></a>}
      {websiteUrl && <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Globe size={16} /></a>}
    </div>
  </motion.div>
);

export default DeveloperCard;
