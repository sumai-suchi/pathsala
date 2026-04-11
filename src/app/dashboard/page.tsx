// src/components/DashboardHome.tsx
export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Welcome back, Dr. Vance.</h1>
          <p className="text-gray-400 mt-1 italic">
            "Education is the kindling of a flame, not the filling of a vessel."
            — Socrates
          </p>
        </div>

        <div className="hidden md:block w-48 h-32 bg-[#2a2a2a] rounded-xl overflow-hidden border border-gray-700">
          {/* Coat of Arms / Logo Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-amber-900 to-slate-700 flex items-center justify-center text-amber-400 text-5xl font-serif">
            🛡️
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="bg-[#e07a5f] hover:bg-[#d86a4f] transition-colors px-5 py-3 rounded-xl flex items-center gap-2 font-medium">
          📝 New Assessment
        </button>
        <button className="bg-[#3d3d3d] hover:bg-[#4a4a4a] transition-colors px-5 py-3 rounded-xl flex items-center gap-2 font-medium">
          ✅ Record Attendance
        </button>
        <button className="bg-[#3d3d3d] hover:bg-[#4a4a4a] transition-colors px-5 py-3 rounded-xl flex items-center gap-2 font-medium">
          📢 Post Announcement
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Today's Timetable */}
        <div className="lg:col-span-7 bg-[#2a2a2a] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🕒</span>
              <h2 className="text-xl font-semibold">Today's Timetable</h2>
            </div>
            <div className="bg-[#3d3d3d] text-sm px-4 py-1.5 rounded-lg">
              October 24, 2023
            </div>
          </div>

          <div className="space-y-6">
            {/* Class 1 */}
            <div className="flex gap-6 items-start border-l-4 border-[#e07a5f] pl-4">
              <div className="w-20 text-right">
                <p className="font-mono">09:00</p>
                <p className="text-xs text-gray-500">AM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Advanced Classical Literature</p>
                <p className="text-sm text-gray-400">Year 12 • Section B</p>
              </div>
              <div className="text-right text-sm">
                <p>Room 402</p>
                <p className="text-gray-500">Lec. Hall A</p>
              </div>
            </div>

            {/* Class 2 */}
            <div className="flex gap-6 items-start border-l-4 border-[#60a5fa] pl-4">
              <div className="w-20 text-right">
                <p className="font-mono">11:30</p>
                <p className="text-xs text-gray-500">AM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Introduction to Rhetoric</p>
                <p className="text-sm text-gray-400">Year 10 • Honors</p>
              </div>
              <div className="text-right text-sm">
                <p>Library Annex</p>
                <p className="text-gray-500">Seminar Room</p>
              </div>
            </div>

            {/* Meeting */}
            <div className="flex gap-6 items-start border-l-4 border-gray-500 pl-4">
              <div className="w-20 text-right">
                <p className="font-mono">02:00</p>
                <p className="text-xs text-gray-500">PM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Faculty Board Meeting</p>
                <p className="text-sm text-gray-400">Department Heads Only</p>
              </div>
              <div className="text-right text-sm">
                <p>The High Hall</p>
                <p className="text-gray-500">Conf. Room 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grading Queue */}
        <div className="lg:col-span-5 bg-[#2a2a2a] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-3">
              📊 Grading Queue
            </h2>
            <span className="text-sm text-gray-400">View All (5)</span>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-rose-400 font-medium">HIGH PRIORITY</span>
                <span className="text-gray-400">Due in 2h</span>
              </div>
              <p className="font-medium">The Iliad Essays</p>
              <p className="text-xs text-gray-500">24 Pending Submissions</p>
              <div className="h-1.5 bg-gray-700 rounded mt-3">
                <div className="h-1.5 bg-rose-400 w-[85%] rounded"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-amber-400 font-medium">STANDARD</span>
                <span className="text-gray-400">Due Tomorrow</span>
              </div>
              <p className="font-medium">Rhetoric Midterm Exam</p>
              <p className="text-xs text-gray-500">42 Pending Submissions</p>
              <div className="h-1.5 bg-gray-700 rounded mt-3">
                <div className="h-1.5 bg-amber-400 w-[65%] rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Performance */}
        <div className="lg:col-span-7 bg-[#2a2a2a] rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
            📈 Student Performance
          </h2>
          <div className="h-64 bg-[#222] rounded-xl flex items-end justify-around gap-4 p-6">
            {["MON", "TUE", "WED", "THU", "FRI"].map((day, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className={`w-full bg-[#e07a5f] rounded-t transition-all ${i === 3 ? "h-40" : i === 1 ? "h-32" : i === 4 ? "h-28" : "h-24"}`}
                />
                <p className="text-xs text-gray-400 mt-3">{day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Journal */}
        <div className="lg:col-span-5 bg-[#2a2a2a] rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-5">📖 Faculty Journal</h2>

          <div className="space-y-5 text-sm">
            <div className="flex gap-4">
              <div className="text-blue-400 mt-0.5">📄</div>
              <div>
                <p className="font-medium">
                  Grant Approval: New Humanities Wing Research Laboratory
                </p>
                <p className="text-xs text-gray-500">
                  Institutional News • 3 hours ago
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-emerald-400 mt-0.5">🔖</div>
              <div>
                <p className="font-medium">
                  Digital Archive Migration: All citations must follow 2023
                  ELITE standards.
                </p>
                <p className="text-xs text-gray-500">
                  Research Notice • Yesterday
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-purple-400 mt-0.5">🏆</div>
              <div>
                <p className="font-medium">
                  Prof. Henderson awarded the Crown of Excellence in Philology.
                </p>
                <p className="text-xs text-gray-500">
                  Faculty Achievement • 2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
