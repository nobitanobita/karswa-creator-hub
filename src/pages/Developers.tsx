import { useState } from "react";
import { Search } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DeveloperCard from "@/components/DeveloperCard";
import { mockDevelopers } from "@/lib/mock-data";

const Developers = () => {
  const [search, setSearch] = useState("");

  const filtered = mockDevelopers.filter(
    (d) =>
      d.fullName.toLowerCase().includes(search.toLowerCase()) ||
      d.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading label="Community" title="Developers" description="Meet the talented builders in our ecosystem." />

        <div className="relative max-w-md mx-auto mb-10">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <DeveloperCard key={d.id} {...d} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-mono">No developers found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Developers;
