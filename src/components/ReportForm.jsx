import { useState } from "react";
import { MapPin, Tag, Calendar, Camera, Upload, User, Phone, Mail } from "lucide-react";

export default function ReportForm({ onSubmit, onClose }) {
  const [type, setType] = useState("found");
  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: crypto.randomUUID(),
      ...form,
      type,
      createdAt: new Date().toISOString(),
    };
    onSubmit?.(payload);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl border">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-gray-900">Create a report</h3>
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-md text-sm">
            <button
              onClick={() => setType("found")}
              className={`px-3 py-1 rounded ${type === "found" ? "bg-white shadow" : "text-gray-600"}`}
            >
              Found
            </button>
            <button
              onClick={() => setType("lost")}
              className={`px-3 py-1 rounded ${type === "lost" ? "bg-white shadow" : "text-gray-600"}`}
            >
              Lost
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input name="title" value={form.title} onChange={handleChange} required className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="e.g., Black leather wallet" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2"><Tag className="h-4 w-4" /> Category</label>
            <input name="category" value={form.category} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Wallet, Keys, Electronics" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2"><Calendar className="h-4 w-4" /> Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2"><MapPin className="h-4 w-4" /> Location</label>
            <input name="location" value={form.location} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Where was it lost/found?" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Details that help identify the item" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2"><User className="h-4 w-4" /> Contact name</label>
            <input name="contactName" value={form.contactName} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2"><Phone className="h-4 w-4" /> Phone</label>
            <input name="contactPhone" value={form.contactPhone} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2"><Mail className="h-4 w-4" /> Email</label>
            <input type="email" name="contactEmail" value={form.contactEmail} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2"><Camera className="h-4 w-4" /> Photo URL</label>
            <div className="flex items-center gap-2">
              <input name="imageUrl" value={form.imageUrl} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Paste an image link (optional)" />
              <button type="button" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border bg-white text-gray-700"><Upload className="h-4 w-4" /> Upload</button>
            </div>
          </div>
          <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Submit report</button>
          </div>
        </form>
      </div>
    </div>
  );
}
