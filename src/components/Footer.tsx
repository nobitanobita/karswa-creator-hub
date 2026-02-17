import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <span className="text-xl font-bold text-gradient font-mono">{"<KARSWA/>"}</span>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            A developer ecosystem where builders create, share, and grow together.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Platform</h4>
          <div className="flex flex-col gap-2">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
            <Link to="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blogs</Link>
            <Link to="/developers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Developers</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Organization</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Developers</h4>
          <div className="flex flex-col gap-2">
            <Link to="/auth?mode=signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Join Us</Link>
            <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KARSWA. Building the future, together.
      </div>
    </div>
  </footer>
);

export default Footer;
