import { MapPin, Calendar, Package } from "lucide-react";

function ItemCard({ item }) {
  return (
    <div className="group rounded-xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      {item.imageUrl ? (
        <img src={item.imageUrl} alt={item.title} className="h-40 w-full object-cover" />
      ) : (
        <div className="h-40 w-full bg-gray-100 grid place-items-center text-gray-400">
          <Package className="h-8 w-8" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">{item.title}</h3>
            <p className="text-xs mt-1 inline-flex px-2 py-0.5 rounded bg-gray-100 text-gray-700">{item.category || "General"}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            item.type === "found" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
          }`}>
            {item.type === "found" ? "Found" : "Lost"}
          </span>
        </div>
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          {item.location && (
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gray-400" /> {item.location}</div>
          )}
          {item.date && (
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gray-400" /> {new Date(item.date).toLocaleDateString()}</div>
          )}
        </div>
        {item.description && (
          <p className="mt-3 text-sm text-gray-700 line-clamp-2">{item.description}</p>
        )}
        {item.contactName && (
          <div className="mt-3 text-xs text-gray-500">Contact: {item.contactName}</div>
        )}
      </div>
    </div>
  );
}

export default function ItemsGrid({ items }) {
  if (!items.length) {
    return (
      <div className="text-center text-gray-600 p-10 border rounded-xl bg-white">
        No items yet. Be the first to create a report.
      </div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
