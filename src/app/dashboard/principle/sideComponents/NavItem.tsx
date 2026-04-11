export default function NavItem({ icon, label, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "bg-button/40 text-white border-l-2 border-primary rounded-l-none"
          : "text-stone-400 hover:text-white"
      }`}
    >
      <span className={active ? "text-white" : "text-stone-400"}>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
