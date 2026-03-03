import React from "react";

function ActionCard({ icon, title, description, bullets = [], onClick }) {
  return (
    <div
      onClick={onClick}
      /* Changed 'rounded-card' to 'rounded-xl' (standard 12px) */
      className="flex-1 bg-white border border-black/10 rounded-xl p-7 shadow-sm transition-all duration-200 cursor-pointer hover:border-brand-green hover:shadow-md group"
    >
      {/* Icon Wrapper */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-accent flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">
        {description}
      </p>

      <ul className="pl-4 text-sm text-slate-500 space-y-2 list-disc">
        {bullets.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionCard;
