import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  demoUrl?: string;
  sourceUrl?: string;
  authorName?: string;
  isFeatured?: boolean;
}

const ProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  techStack,
  demoUrl,
  sourceUrl,
  authorName,
  isFeatured,
}: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group relative rounded-xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow"
  >
    {isFeatured && (
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
        <Star size={12} /> Featured
      </div>
    )}
    <div className="aspect-video bg-secondary overflow-hidden">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-sm">
          {"{ project }"}
        </div>
      )}
    </div>
    <div className="p-5">
      <Link to={`/projects/${id}`}>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
      </Link>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
        {authorName && <span className="text-xs text-muted-foreground">{authorName}</span>}
        <div className="flex gap-2 ml-auto">
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={16} />
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
