import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ItemsGrid from "./components/ItemsGrid";
import ReportForm from "./components/ReportForm";
import Footer from "./components/Footer";

const seedItems = [
  {
    id: "1",
    type: "found",
    title: "Set of car keys",
    category: "Keys",
    date: new Date().toISOString(),
    location: "Library parking lot",
    description: "Key fob with a blue tag and two metal keys.",
    contactName: "Jordan",
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1640&auto=format&fit=crop",
  },
  {
    id: "2",
    type: "lost",
    title: "Black leather wallet",
    category: "Wallet",
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    location: "Downtown cafe",
    description: "Contains ID and student card. Reward offered.",
    contactName: "Sam",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1640&auto=format&fit=crop",
  },
  {
    id: "3",
    type: "found",
    title: "AirPods case",
    category: "Electronics",
    date: new Date(Date.now() - 86400000 * 5).toISOString(),
    location: "Gym front desk",
    description: "White charging case. Provide serial to confirm.",
    contactName: "Front Desk",
    imageUrl: "https://images.unsplash.com/photo-1590658006821-04e09b444acd?q=80&w=1640&auto=format&fit=crop",
  },
];

function App() {
  const [items, setItems] = useState(seedItems);
  const [activeTab, setActiveTab] = useState("found");
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = useMemo(() => {
    return items
      .filter((i) => i.type === activeTab)
      .filter((i) => {
        const q = query.toLowerCase();
        if (!q) return true;
        return (
          i.title?.toLowerCase().includes(q) ||
          i.category?.toLowerCase().includes(q) ||
          i.location?.toLowerCase().includes(q) ||
          i.description?.toLowerCase().includes(q) ||
          i.contactName?.toLowerCase().includes(q)
        );
      });
  }, [items, activeTab, query]);

  const counts = useMemo(() => ({
    found: items.filter((i) => i.type === "found").length,
    lost: items.filter((i) => i.type === "lost").length,
  }), [items]);

  const handleCreate = (payload) => {
    setItems((prev) => [payload, ...prev]);
    setActiveTab(payload.type);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar onNewReportClick={() => setShowForm(true)} onSearchChange={setQuery} />
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} counts={counts} />

      <main className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{activeTab === "found" ? "Recently found" : "Recently lost"}</h2>
          <button onClick={() => setShowForm(true)} className="text-blue-600 hover:text-blue-700 font-medium">Create report</button>
        </div>
        <ItemsGrid items={filtered} />
      </main>

      <Footer />

      {showForm && (
        <ReportForm onSubmit={handleCreate} onClose={() => setShowForm(false)} />)
      }
    </div>
  );
}

export default App;
