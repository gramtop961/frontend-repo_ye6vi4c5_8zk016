export default function Hero({ activeTab, setActiveTab, counts }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Reunite people with their belongings
            </h1>
            <p className="mt-3 text-gray-600 md:text-lg">
              Post what you’ve lost or found, search the feed, and connect safely
              to return items to their owners.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 p-1 bg-white rounded-lg border shadow-sm">
              <button
                onClick={() => setActiveTab("found")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === "found"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Found items ({counts.found})
              </button>
              <button
                onClick={() => setActiveTab("lost")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === "lost"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Lost items ({counts.lost})
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-indigo-200/40 blur-2xl" />
            <div className="relative rounded-2xl border bg-white/70 backdrop-blur p-6 shadow">
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Create a report in seconds</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-500" /> Search by item, date, or location</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Message the finder or owner</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-500" /> Verify with photos and details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
