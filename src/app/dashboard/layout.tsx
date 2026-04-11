import React from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  BarChart3,
  UserCog,
  Plus,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  Calendar,
  Settings,
} from "lucide-react";
import NavItem from "./principle/sideComponents/NavItem";
import { HeaderAction } from "./principle/sideComponents/HeaderAction";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-background font-sans ">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-950 flex flex-col border-r border-stone-800">
        {/* User Profile Section */}
        <div className="p-6 flex items-center gap-3 ">
          <div className="w-10 h-10 rounded-full bg-muted border border-border overflow-hidden flex items-center justify-center ">
            <img
              src="https://i.pravatar.cc/300?img=5"
              alt="User"
              className="object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-background truncate leading-none">
              Dr. Alistair Vance
            </p>
            <p className="text-[10px] text-muted-foreground mt-1 font-medium">
              Senior Faculty
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active
          />
          <NavItem icon={<Users size={18} />} label="Students" />
          <NavItem icon={<BookOpen size={18} />} label="Curriculum" />
          <NavItem icon={<GraduationCap size={18} />} label="Gradebook" />
          <NavItem icon={<BarChart3 size={18} />} label="Reports" />
          <NavItem icon={<UserCog size={18} />} label="Faculty" />
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-stone-800 space-y-2">
          <button className="w-full bg-button text-primary hover:opacity-90 transition-all py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-bold shadow-sm">
            <Plus size={18} /> New Entry
          </button>
          <div className="pt-2">
            <NavItem icon={<HelpCircle size={18} />} label="Support" />
            <NavItem icon={<LogOut size={18} />} label="Logout" />
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 flex bg-stone-950 border border-stone-800 items-center justify-between px-8 bg- backdrop-blur-md border-b ">
          <div className="flex items-center gap-12">
            <h1 className="text-xl font-bold text-background tracking-tight italic font-serif">
              Academia Elite
            </h1>

            {/* Search Bar */}
            <div className="relative hidden lg:flex items-center bg-stone-900 px-3 rounded-xl border border-stone-800 ml-4 focus-within:ring-2 focus-within:ring-primary transition-all">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-100 group-focus-within:text-primary transition-colors"
                size={16}
              />
              <input
                type="text"
                placeholder="Search archives..."
                className="bg-stone-900 bordertext-sm px-8 py-2 rounded-md w-72  outline-none transition-all text-stone-100"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <HeaderAction icon={<Bell size={20} />} hasBadge />
            <HeaderAction icon={<Calendar size={20} />} />
            <HeaderAction icon={<Settings size={20} />} />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-stone-900">
          {children}
        </main>
      </div>
    </div>
  );
}

// Helper Component for Sidebar Items

// Header Action Button Component
