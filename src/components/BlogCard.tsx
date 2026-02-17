import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImageUrl?: string;
  tags: string[];
  authorName?: string;
  readingTime?: number;
  createdAt: string;
}

const BlogCard = ({ id, title, excerpt, coverImageUrl, tags, authorName, readingTime, createdAt }: BlogCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group rounded-xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card"
  >
    {coverImageUrl && (
      <div className="aspect-[2/1] overflow-hidden">
        <img src={coverImageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    )}
    <div className="p-5">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs font-mono text-primary bg-primary/10 rounded-full">{tag}</span>
        ))}
      </div>
      <Link to={`/blogs/${id}`}>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
      </Link>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
        <span>{authorName}</span>
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>{readingTime ?? 5} min read</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default BlogCard;
