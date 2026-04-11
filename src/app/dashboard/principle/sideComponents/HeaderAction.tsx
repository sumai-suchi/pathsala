export function HeaderAction({ icon, hasBadge }) {
  return (
    <button className="p-2 active:opacity-80 transition-opacity text-rose-400 hover:bg-stone-800 rounded-full relative group">
      {icon}
      {hasBadge && (
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-card group-hover:border-secondary transition-all"></span>
      )}
    </button>
  );
}
