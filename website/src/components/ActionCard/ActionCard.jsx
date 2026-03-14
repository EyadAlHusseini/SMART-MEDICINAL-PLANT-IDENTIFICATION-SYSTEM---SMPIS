import React from "react";

function ActionCard({
  icon,
  title,
  description,
  shortcut,
  onClick,
  variant = "primary",
}) {
  // Variants: 'primary' (Dark Gradient) vs 'action' (Light Emerald)
  const iconStyles =
    variant === "primary"
      ? "bg-gradient-to-br from-brand-green to-brand-accent text-white"
      : "bg-emerald-100 text-brand-green";

  return (
    <div
      onClick={onClick}
      className="flex-1 bg-white border border-black/10 rounded-xl p-6 shadow-sm transition-all duration-200 cursor-pointer hover:border-brand-green hover:shadow-md group"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110 ${iconStyles}`}
      >
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-3">
        {description}
      </p>
      {shortcut && (
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
          {shortcut}
        </span>
      )}
    </div>
  );
}

export default ActionCard;
