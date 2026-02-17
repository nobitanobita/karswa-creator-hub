import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading = ({ label, title, description, className = "" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`text-center mb-12 ${className}`}
  >
    {label && (
      <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full mb-4">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
