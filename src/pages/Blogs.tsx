import { useState } from "react";
import { Search } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { mockBlogs } from "@/lib/mock-data";

const Blogs = () => {
  const [search, setSearch] = useState("");

  const filtered = mockBlogs.filter(
    (b) => b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading label="Read" title="Blog" description="Insights, tutorials, and stories from our developer community." />

        <div className="relative max-w-md mx-auto mb-10">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((b) => (
            <BlogCard key={b.id} {...b} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-mono">No articles found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
