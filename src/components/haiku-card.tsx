interface HaikuCardProps {
  title: string;
  line1: string;
  line2: string;
  line3: string;
  author?: string;
  actions?: React.ReactNode;
}

export function HaikuCard({
  title,
  line1,
  line2,
  line3,
  author,
  actions,
}: HaikuCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-haiku/10 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-haiku-dark mb-3">{title}</h3>
      <div className="space-y-1 italic text-gray-700 text-lg leading-relaxed">
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
      </div>
      {author && (
        <p className="mt-4 text-sm text-haiku">by {author}</p>
      )}
      {actions && <div className="mt-4 pt-3 border-t border-haiku/10">{actions}</div>}
    </div>
  );
}
