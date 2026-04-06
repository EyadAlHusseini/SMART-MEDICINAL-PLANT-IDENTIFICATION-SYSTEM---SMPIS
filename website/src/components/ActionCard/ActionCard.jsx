import React from "react";

function ActionCard({
  icon,
  title,
  description,
  shortcut,
  onClick,
  variant = "primary",
}) {
  const iconStyles =
    variant === "primary"
      ? "bg-gradient-to-br from-brand-green to-brand-accent text-white"
      : "bg-emerald-100 dark:bg-emerald-900/30 text-brand-green dark:text-emerald-400";

  return (
    <div
      onClick={onClick}
      className="flex-1 bg-white dark:bg-slate-900 border border-black/10 dark:border-white/5 rounded-xl p-6 shadow-sm transition-all duration-300 cursor-pointer hover:border-brand-green dark:hover:border-brand-green hover:shadow-md group"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110 ${iconStyles}`}
      >
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3 transition-colors">
        {description}
      </p>
      {shortcut && (
        <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-colors">
          {shortcut}
        </span>
      )}
    </div>
  );
}

export default ActionCard;
