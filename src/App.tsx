/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import headerAvatarImg from './assets/images/regenerated_image_1791738605637.png';
import { DEFAULT_ZAHID_PROFILE, StudentProfile } from './data/studentProfile';
import { ASSIGNMENTS_LIST, AssignmentItem } from './data/assignmentsList';
import { BentoPortfolio } from './components/BentoPortfolio';
import { AssignmentModal } from './components/AssignmentModal';

export default function App() {
  const [profile] = useState<StudentProfile>(DEFAULT_ZAHID_PROFILE);
  const [selectedAssignment, setSelectedAssignment] = useState<AssignmentItem | null>(null);

  return (
    <div id="top" className="min-h-screen bg-[#fafafb] text-zinc-900 selection:bg-amber-200 selection:text-zinc-950 font-sans">
      {/* Top Academic Navigation Bar - Pure Clean Light Mode */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/90 border-b border-zinc-200/80 transition-colors shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Signature */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="relative">
              <img
                src={headerAvatarImg}
                alt={profile.fullName}
                className="w-11 h-11 rounded-2xl object-cover ring-2 ring-amber-400/40 shadow-sm transition-transform group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-zinc-950">
                {profile.fullName}
              </span>
              <p className="text-[11px] font-bold text-amber-700 tracking-wider font-mono">
                BS COMPUTER SCIENCE • IUB
              </p>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-zinc-700">
            <a href="#home" className="hover:text-[#f9572a] transition-colors">Home</a>
            <a href="#assignments" className="hover:text-[#f9572a] transition-colors">Assignments</a>
            <a href="#useful-links" className="hover:text-[#f9572a] transition-colors">Useful Links</a>
            <a href="#departments" className="hover:text-[#f9572a] transition-colors">Departments</a>
            <a href="#about" className="hover:text-[#f9572a] transition-colors">About Me</a>
            <a href="#contact" className="hover:text-[#f9572a] transition-colors">Contact</a>
          </nav>

          {/* Right Action: Direct Phone & Coursework CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${profile.phone}`}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{profile.phone}</span>
            </a>

            <a
              href="#assignments"
              className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-1.5"
            >
              <span>10 Assignments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Single Page Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <BentoPortfolio
          profile={profile}
          onSelectAssignment={(assignment) => setSelectedAssignment(assignment)}
        />
      </main>

      {/* Interactive Assignment Modal Sandbox */}
      {selectedAssignment && (
        <AssignmentModal
          assignment={selectedAssignment}
          profile={profile}
          onClose={() => setSelectedAssignment(null)}
        />
      )}
    </div>
  );
}
