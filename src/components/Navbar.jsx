import { Search, PlusCircle } from "lucide-react";

export default function Navbar({ onNewReportClick, onSearchChange }) {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">LF</div>
          <span className="font-semibold text-gray-900">Lost & Found</span>
        </div>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search items, locations, or contact..."
              className="w-full pl-10 pr-3 py-2 rounded-lg border bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={onNewReportClick}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium"
        >
          <PlusCircle className="h-4 w-4" />
          Report
        </button>
      </div>
    </header>
  );
}
