import React, { useState } from 'react';
import { 
  Play, ExternalLink, ArrowRight, Code2, Sparkles, MapPin, 
  BookOpen, Layers, CheckCircle2, ChevronRight, GraduationCap, 
  Mail, Phone, Download, Eye, Terminal, Star, Clock, Filter, Search,
  Check, ArrowUpRight
} from 'lucide-react';
import heroAvatarImg from '../assets/images/regenerated_image_1791738598981.png';
import aboutPhotoImg from '../assets/images/regenerated_image_1791738611336.png';
import { StudentProfile, UNIVERSITY_DEPARTMENTS, ACADEMIC_RESOURCES } from '../data/studentProfile';
import { ASSIGNMENTS_LIST, AssignmentItem } from '../data/assignmentsList';

interface Props {
  profile: StudentProfile;
  onSelectAssignment: (assignment: AssignmentItem) => void;
}

export const BentoPortfolio: React.FC<Props> = ({ 
  profile, 
  onSelectAssignment 
}) => {
  // State for "How I work" interactive step switcher (Card 5)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Steps matching the "How I work" card in reference image
  const workflowSteps = [
    {
      number: '01',
      title: 'Semantic HTML5 Architecture',
      desc: 'In the first stage, I structure accessible, semantic markups adhering to university guidelines and W3C web standards. This sets the solid foundation for all practical laboratory assignments.'
    },
    {
      number: '02',
      title: 'CSS Styling & Responsive Layout',
      desc: 'I apply fluid CSS Grid and Flexbox rules, ensuring clean responsiveness across mobile, tablet, and desktop viewports without horizontal clipping or awkward layouts.'
    },
    {
      number: '03',
      title: 'Interactive DOM & JavaScript Logic',
      desc: 'I introduce stateful interactions, input validation, and event listeners to transform static markups into dynamic, responsive user experiences.'
    },
    {
      number: '04',
      title: 'Cross-Browser Verification',
      desc: 'I verify visual output, test WCAG contrast ratios, ensure proper font scaling, and eliminate deprecated legacy attributes like bgcolor and obsolete tags.'
    },
    {
      number: '05',
      title: 'Faculty Evaluation & Coursework Hub',
      desc: 'The finalized lab work is packaged with clean source code, live interactive sandboxes, and documentation for Dr. Wahid Anwar\'s review.'
    }
  ];

  // Top 3 featured assignments for the fanned card (Card 2)
  const fannedAssignments = [
    ASSIGNMENTS_LIST[0], // Diamond
    ASSIGNMENTS_LIST[1], // CV
    ASSIGNMENTS_LIST[6], // Login Portal
  ];

  // Filtering assignments for the full coursework section
  const filteredAssignments = ASSIGNMENTS_LIST.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-24 max-w-6xl mx-auto pb-16 text-zinc-900 font-sans">
      {/* =========================================================================
          1. HERO HEADER SECTION
          Exact Layout from User's Uploaded Reference Image:
          - "Hi, I'm [avatar badge] Zahid Hussain!"
          - "I'm a BS Computer Science Student at"
          - "Islamia University." [● 4th Semester 1M (Section (Morning))]
          - [Explore Coursework] button + subtext
      ========================================================================= */}
      <section id="home" className="pt-10 sm:pt-16 space-y-7 scroll-mt-24">
        <div className="space-y-3">
          {/* Line 1: Hi, I'm [avatar] Zahid Hussain! */}
          <div className="flex flex-wrap items-center gap-3 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950">
            <span>Hi, I&apos;m</span>
            
            {/* Embedded Squircle Profile Avatar (From reference image) */}
            <div className="relative inline-block align-middle mx-1">
              <img
                src={heroAvatarImg}
                alt={profile.fullName}
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-3xl object-cover ring-4 ring-amber-400/40 shadow-lg inline-block"
              />
            </div>

            <span>{profile.fullName}!</span>
          </div>

          {/* Line 2: I'm a BS Computer Science Student at */}
          <div className="text-3xl sm:text-5xl md:text-6xl tracking-tight">
            <span className="text-zinc-400 font-normal">I&apos;m a </span>
            <span className="font-extrabold text-zinc-950">BS Computer Science Student</span>
            <span className="text-zinc-400 font-normal"> at</span>
          </div>

          {/* Line 3: Islamia University. [● 4th Semester 1M (Section (Morning))] */}
          <div className="flex flex-wrap items-center gap-4 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-[#f9572a] drop-shadow-sm">
              Islamia University.
            </span>

            {/* Pill Badge with Updated Semester: 4th Semester 1M (Section (Morning)) */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs sm:text-sm font-bold text-zinc-900 shadow-sm align-middle">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>4th Semester 1M (Section (Morning))</span>
            </span>
          </div>
        </div>

        {/* CTA Button & Subtitle */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="#assignments"
            className="px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full text-sm font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
          >
            Explore Coursework
          </a>

          <p className="text-xs sm:text-sm text-zinc-600 max-w-md leading-relaxed font-medium">
            Feel free to explore my web technology assignments, practical lab tasks, and reach out — I&apos;d love to connect!
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. BENTO GRID (5 CARDS REPLICATING REFERENCE IMAGE)
      ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* CARD 1: My Experience / Journey Timeline (Left Column) */}
        <div className="bg-white rounded-3xl p-7 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 inline-block">
              My Journey
            </span>

            {/* Vertical Connected Timeline (Updated Session: 2025-2029, 4th Semester 1M) */}
            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200">
              {/* Timeline Item 1 */}
              <div className="relative space-y-1">
                <span className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-zinc-950 ring-4 ring-white" />
                <h4 className="text-xs font-bold text-zinc-950">BS Computer Science</h4>
                <p className="text-[11px] font-semibold text-amber-700">2025 – 2029 • 4th Semester 1M</p>
                <p className="text-[11px] text-zinc-500">Section (Morning) • IUB</p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative space-y-1">
                <span className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-zinc-950 ring-4 ring-white" />
                <h4 className="text-xs font-bold text-zinc-950">Web Technology Course</h4>
                <p className="text-[11px] text-zinc-500">Instructor: Dr. Wahid Anwar</p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative space-y-1">
                <span className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-zinc-950 ring-4 ring-white" />
                <h4 className="text-xs font-bold text-zinc-950">Frontend Web Developer</h4>
                <p className="text-[11px] text-zinc-500">Semantic HTML5, CSS3, JS &amp; UI</p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative space-y-1">
                <span className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-zinc-400 ring-4 ring-white" />
                <h4 className="text-xs font-bold text-zinc-600">Intermediate (F.Sc Pre-Engg)</h4>
                <p className="text-[11px] text-zinc-400">BISE Bahawalpur Board</p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs font-mono font-bold text-zinc-600 border-t border-zinc-100 flex items-center justify-between">
            <span>Roll: {profile.rollNumber}</span>
            <span className="text-amber-700 font-semibold">{profile.session}</span>
          </div>
        </div>

        {/* CARD 2: Coursework Playlist (Fanned out 3D cards) (Middle Column) */}
        <div className="bg-white rounded-3xl p-7 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 inline-block">
              Coursework Playlist
            </span>

            {/* 3D Overlapping Fanned Cards Container with Professional Photography */}
            <div className="relative h-44 flex items-center justify-center pt-2">
              {/* Left Tilted Card (Diamond) */}
              <div 
                onClick={() => onSelectAssignment(fannedAssignments[0])}
                className="absolute w-28 h-36 rounded-2xl overflow-hidden shadow-xl -rotate-12 -translate-x-12 cursor-pointer hover:scale-105 transition-all duration-200 border-2 border-white bg-cover bg-center group"
                style={{ backgroundImage: `url(${fannedAssignments[0].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-2.5 flex flex-col justify-between text-white">
                  <span className="text-[9px] font-black uppercase text-amber-300">ASSIGNMENT 01</span>
                  <span className="text-[10px] font-bold truncate">Diamond Task</span>
                </div>
              </div>

              {/* Right Tilted Card (Login) */}
              <div 
                onClick={() => onSelectAssignment(fannedAssignments[2])}
                className="absolute w-28 h-36 rounded-2xl overflow-hidden shadow-xl rotate-12 translate-x-12 cursor-pointer hover:scale-105 transition-all duration-200 border-2 border-white bg-cover bg-center group"
                style={{ backgroundImage: `url(${fannedAssignments[2].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-2.5 flex flex-col justify-between text-white">
                  <span className="text-[9px] font-black uppercase text-amber-300">ASSIGNMENT 07</span>
                  <span className="text-[10px] font-bold truncate">Login Page</span>
                </div>
              </div>

              {/* Center Top Card (Student CV) */}
              <div 
                onClick={() => onSelectAssignment(fannedAssignments[1])}
                className="absolute w-32 h-40 rounded-2xl overflow-hidden shadow-2xl z-10 cursor-pointer hover:scale-105 transition-all duration-200 border-2 border-white bg-cover bg-center group"
                style={{ backgroundImage: `url(${fannedAssignments[1].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 flex flex-col justify-between text-white">
                  <span className="text-[9px] font-black uppercase text-amber-300">ASSIGNMENT 02</span>
                  <div>
                    <p className="text-[11px] font-bold">Student CV Page</p>
                    <span className="text-[9px] text-zinc-300">Zahid Hussain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-bold text-zinc-950">Zahid&apos;s Lab Playlist</h4>
            <a
              href="#assignments"
              className="text-xs font-bold text-[#f9572a] hover:underline flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-[#f9572a]" /> View 10 Assignments
            </a>
          </div>
        </div>

        {/* CARD 3: What I'm Reading (Right Column) */}
        <div className="bg-white rounded-3xl p-7 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 inline-block">
              What I&apos;m reading
            </span>

            <div>
              <h4 className="text-base font-bold text-zinc-950 leading-tight">
                Web Technologies &amp; Design Architecture
              </h4>
              <p className="text-xs text-zinc-500 mt-1 font-medium">Dr. Wahid Anwar • W3C Standards</p>
            </div>
          </div>

          {/* 3D Angled Book Graphic (Tribute to Dieter Rams in reference image) */}
          <div className="flex justify-end pt-2">
            <div className="relative group cursor-pointer transition-transform duration-300 hover:rotate-[-4deg] hover:scale-105">
              <div 
                className="w-28 h-36 bg-gradient-to-r from-orange-600 to-[#f9572a] rounded-r-lg rounded-l-sm shadow-xl p-3 text-white flex flex-col justify-between border-l-4 border-orange-800"
                style={{
                  transform: 'perspective(600px) rotateY(-18deg)',
                  boxShadow: '10px 15px 25px -5px rgba(249, 87, 42, 0.4)'
                }}
              >
                <span className="text-[9px] font-black tracking-wider uppercase opacity-90">IUB • CS</span>
                <div className="space-y-0.5">
                  <p className="text-xs font-black uppercase tracking-tight leading-none">WEB</p>
                  <p className="text-xs font-black uppercase tracking-tight leading-none">TECH</p>
                </div>
                <span className="text-[8px] font-medium opacity-85">2025–2029</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4: Map Card (Left Bottom) */}
        <div className="bg-white rounded-3xl p-7 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 inline-block w-fit">
            Map
          </span>

          {/* Minimalist Architectural Line Map of Bahawalpur */}
          <div className="relative h-32 rounded-2xl bg-zinc-50 overflow-hidden border border-zinc-200 flex items-center justify-center p-2">
            <svg className="w-full h-full opacity-70" viewBox="0 0 200 120" fill="none" stroke="currentColor">
              <path d="M-10,30 Q60,10 110,40 T220,50" stroke="#0284c7" strokeWidth="4" />
              <path d="M20,10 L180,110 M40,5 L190,95 M5,40 L160,120" stroke="#71717a" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M10,90 L120,5 M40,110 L160,15 M80,115 L190,30" stroke="#71717a" strokeWidth="1" />
              <circle cx="100" cy="55" r="4" fill="#f9572a" />
              <circle cx="100" cy="55" r="9" stroke="#f9572a" strokeWidth="1.5" strokeOpacity="0.5" />
            </svg>
            <div className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-[10px] font-mono font-bold text-zinc-900 border border-zinc-200">
              IUB Campus
            </div>
          </div>

          <div className="text-center pt-1 space-y-0.5">
            <h4 className="text-base font-black tracking-widest text-zinc-950 uppercase">
              BAHAWALPUR
            </h4>
            <p className="text-[11px] font-bold tracking-wider text-zinc-600 uppercase">
              PAKISTAN
            </p>
            <p className="text-[10px] text-zinc-400 font-mono">
              29.3544° N, 71.6911° E
            </p>
          </div>
        </div>

        {/* CARD 5: How I Work / Workflow (Spans 2 columns) */}
        <div className="md:col-span-2 bg-white rounded-3xl p-7 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 inline-block">
              How I work
            </span>

            <div className="space-y-2 min-h-[90px]">
              <h4 className="text-xl font-bold text-zinc-950">
                {workflowSteps[currentStep - 1].number} {workflowSteps[currentStep - 1].title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl font-medium">
                {workflowSteps[currentStep - 1].desc}
              </p>
            </div>
          </div>

          {/* Interactive Step Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {workflowSteps.map((s, idx) => {
              const stepNum = idx + 1;
              const isActive = currentStep === stepNum;
              return (
                <button
                  key={stepNum}
                  onClick={() => setCurrentStep(stepNum)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-md'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  Step 0{stepNum}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MY COURSEWORK: ASSIGNMENTS & PRACTICAL WORK
          - Eyebrow: "MY COURSEWORK"
          - Heading: "Assignments & Practical Work"
          - Subhead: "Click an assignment image or link to open its file."
          - Heading Note: "WEB TECHNOLOGY"
          - Thumbnail kicker: "ASSIGNMENT 01", "ASSIGNMENT 02", etc.
          - Foot: "Assignment 01" -> "Open"
          - Professional photography assets for all 10 assignments
      ========================================================================= */}
      <section id="assignments" className="space-y-8 scroll-mt-24">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <span className="text-xs font-black tracking-widest uppercase text-amber-700">
              MY COURSEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
              Assignments &amp; Practical Work
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl font-medium">
              Click an assignment image or link to open its file.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-300 font-mono">
              WEB TECHNOLOGY
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search assignments or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-3 text-xs rounded-full border border-zinc-200 bg-white text-zinc-950 outline-none focus:ring-2 focus:ring-zinc-950 font-medium"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {[
              { id: 'all', label: 'All Tasks (10)' },
              { id: 'HTML', label: 'HTML Basics' },
              { id: 'CSS', label: 'CSS & Units' },
              { id: 'Grid', label: 'CSS Grid' },
              { id: 'Forms', label: 'Forms & UI' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-zinc-950 text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Assignment Cards Grid with Professional High-Res Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssignments.map((assignment) => (
            <div
              key={assignment.id}
              onClick={() => onSelectAssignment(assignment)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-950 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail Header with Professional Background Photography */}
                <div 
                  className="relative h-48 bg-cover bg-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${assignment.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 flex flex-col justify-between text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 font-mono">
                      {assignment.assignmentLabel}
                    </span>
                    <h4 className="text-base font-extrabold tracking-tight drop-shadow-sm">
                      {assignment.thumbTitle}
                    </h4>
                  </div>
                </div>

                {/* Card Body with High Contrast & Yellow/Amber Accents */}
                <div className="p-6 space-y-3">
                  <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 font-mono inline-block">
                    {assignment.tag}
                  </span>

                  <h3 className="text-lg font-bold text-zinc-950 group-hover:text-[#f9572a] transition-colors">
                    {assignment.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2 font-medium">
                    {assignment.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer (Assignment 01 | Open) */}
              <div className="px-6 py-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-500 font-mono">
                  {assignment.footLabel}
                </span>
                <span className="text-zinc-950 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Open <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. USEFUL LINKS / BOOKMARKED RESOURCES
          - Eyebrow: "BOOKMARKED RESOURCES"
          - Heading: "Useful Links"
          - Subhead: "Replace these example links with the websites you want to share."
          - Real Images Kept 100%:
            professor.jpeg, urdupoint.jpeg, pk_info.png, images.png, portal.png, text.jpg
      ========================================================================= */}
      <section id="useful-links" className="space-y-8 scroll-mt-24">
        <div>
          <span className="text-xs font-black tracking-widest uppercase text-amber-700">
            BOOKMARKED RESOURCES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
            Useful Links
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl font-medium">
            Replace these example links with the websites you want to share.
          </p>
        </div>

        {/* High-Fidelity Cards Grid (Original Images Preserved) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMIC_RESOURCES.map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-950 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail with original images */}
                <div 
                  className="relative h-44 bg-cover bg-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${res.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 flex items-end">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-zinc-950 shadow-md font-mono">
                      {res.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="text-base font-bold text-zinc-950 group-hover:text-[#f9572a] transition-colors flex items-center justify-between">
                    <span>{res.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    {res.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-zinc-100 text-xs font-bold text-[#f9572a] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{res.actionText}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. ABOUT ME SECTION
          - Eyebrow: "ABOUT ME"
          - Heading: "Hi, I'm Zahid Hussain."
          - Student photo with Art-card badge: "Learn • Create • Build • BSCS • IUB"
          - Bio: "I am a BS Computer Science student at the Islamia University of Bahawalpur..."
          - Checklist (Updated Session & Semester: 4th Semester 1M Morning, 2025-2029)
      ========================================================================= */}
      <section id="about" className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo Art Card */}
          <div className="relative mx-auto md:mx-0">
            <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-amber-400/40 relative group">
              <img
                src={aboutPhotoImg}
                alt={profile.fullName}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Art Badge: Learn • Create • Build • BSCS • IUB */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-zinc-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-black text-zinc-950">
                  <span>Learn</span>
                  <span>•</span>
                  <span>Create</span>
                  <span>•</span>
                  <span>Build</span>
                </div>
                <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  BSCS • IUB
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Academic Credentials */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-amber-700">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
                Hi, I&apos;m {profile.fullName}.
              </h2>
            </div>

            <p className="text-sm text-zinc-700 leading-relaxed font-medium">
              I am a BS Computer Science student at the Islamia University of Bahawalpur. 
              This website is my learning space, where I keep my Web Technology assignments, 
              practical work and useful academic links in one place.
            </p>

            <p className="text-sm text-zinc-700 leading-relaxed font-medium">
              I am learning modern web development, starting with semantic HTML, CSS styling, responsive layouts, and interactive frontend engineering.
            </p>

            {/* Academic Checklist (Updated with 4th Semester 1M (Section (Morning)) and session 2025-2029) */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-xs sm:text-sm font-bold text-zinc-900">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>BS Computer Science, Islamia University of Bahawalpur (Session: {profile.session})</span>
              </li>

              <li className="flex items-center gap-3 text-xs sm:text-sm font-bold text-zinc-900">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Course: Web Technology, taught by {profile.teacherName}</span>
              </li>

              <li className="flex items-center gap-3 text-xs sm:text-sm font-bold text-zinc-900">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Bahawalpur, {profile.semester} ({profile.section})</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DEPARTMENTS SECTION
          - Eyebrow: "FACULTY OF COMPUTING"
          - Heading: "Departments"
          - Subhead: "Use these links to open department websites."
          - 7 Department links with external arrow ↗
      ========================================================================= */}
      <section id="departments" className="space-y-8 scroll-mt-24">
        <div>
          <span className="text-xs font-black tracking-widest uppercase text-amber-700">
            FACULTY OF COMPUTING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
            Departments
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl font-medium">
            Use these links to open department websites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UNIVERSITY_DEPARTMENTS.map((dept) => (
            <a
              key={dept.slug}
              href={`https://iub.edu.pk/${dept.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white border border-zinc-200 rounded-3xl group hover:border-zinc-950 transition-all flex items-center justify-between shadow-sm"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-950 group-hover:text-[#f9572a] transition-colors">
                  {dept.name}
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5 font-medium">Faculty of Computing</p>
              </div>
              <span className="text-base font-bold text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. CONTACT / GET IN TOUCH SECTION
          - Eyebrow: "GET IN TOUCH"
          - Heading: "Thanks for visiting."
          - Subhead: "This is my academic website for assignments and useful learning resources."
          - Student Name: "Zahid Hussain / BS Computer Science"
          - Phone Number: 03454627881
          - Button: "Contact Us" (mailto)
      ========================================================================= */}
      <section id="contact" className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 scroll-mt-24">
        <div className="space-y-3">
          <span className="text-xs font-black tracking-widest uppercase text-amber-700">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950">
            Thanks for visiting.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl leading-relaxed font-medium">
            This is my academic website for assignments and useful learning resources.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <span className="text-xs font-bold font-mono text-zinc-900 bg-amber-100 px-3 py-1 rounded-full">
              {profile.fullName} / BS Computer Science
            </span>
            <span className="text-xs font-mono font-bold text-zinc-700 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-600" /> {profile.phone}
            </span>
          </div>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full text-xs font-bold transition-all shadow-xl shrink-0"
        >
          Contact Us
        </a>
      </section>

      {/* =========================================================================
          8. ULTRA-LUXURY FOOTER WITH GIANT WATERMARK WORDMARK
          Inspiration from User Uploaded Screenshot:
          - Dark luxury aesthetic with structured link columns above
          - GIANT "ZAHID HUSSAIN" WATERMARK spanning the entire width at bottom (like "weave" in screenshot!)
      ========================================================================= */}
      <footer className="relative bg-zinc-950 text-white rounded-3xl pt-16 pb-8 px-8 sm:px-14 overflow-hidden border border-zinc-800 shadow-2xl">
        <div className="relative z-10 space-y-16">
          {/* Categorized Link Columns (Matching structure from uploaded screenshot) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
            {/* Col 1: Brand & Academic Info */}
            <div className="col-span-2 md:col-span-1 space-y-3">
              <h4 className="font-bold text-sm text-white">
                {profile.fullName}
              </h4>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                BS Computer Science undergraduate at Islamia University of Bahawalpur ({profile.session}).
              </p>
              <div className="pt-2 text-zinc-400 text-[11px] space-y-1 font-mono">
                <p>Roll: {profile.rollNumber}</p>
                <p className="text-amber-400">{profile.semester}</p>
              </div>
            </div>

            {/* Col 2: Coursework Labs */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                Coursework
              </span>
              <ul className="space-y-2 text-zinc-300">
                <li><a href="#assignments" className="hover:text-amber-400 transition-colors">Assignment 01 (Diamond)</a></li>
                <li><a href="#assignments" className="hover:text-amber-400 transition-colors">Assignment 02 (CV Page)</a></li>
                <li><a href="#assignments" className="hover:text-amber-400 transition-colors">Assignment 03 (Text CSS)</a></li>
                <li><a href="#assignments" className="hover:text-amber-400 transition-colors">Assignment 04 (CSS Units)</a></li>
                <li><a href="#assignments" className="hover:text-amber-400 transition-colors">Assignment 05 (Hover Tables)</a></li>
              </ul>
            </div>

            {/* Col 3: Useful Links */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                Resources
              </span>
              <ul className="space-y-2 text-zinc-300">
                <li><a href="https://iub.edu.pk/author/khan.dostkhan" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Dr. Dost Muhammad</a></li>
                <li><a href="https://my.iub.edu.pk" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">IUB MyLMS Portal</a></li>
                <li><a href="https://www.urdupoint.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">UrduPoint Media</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Pakistan" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Pakistan Wikipedia</a></li>
                <li><a href="https://developer.mozilla.org" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">MDN Web Docs</a></li>
              </ul>
            </div>

            {/* Col 4: Faculty Departments */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                Departments
              </span>
              <ul className="space-y-2 text-zinc-300">
                <li><a href="https://iub.edu.pk/department-of-computer-science" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Computer Science</a></li>
                <li><a href="https://iub.edu.pk/department-of-artificial-intelligence" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Artificial Intelligence</a></li>
                <li><a href="https://iub.edu.pk/department-of-software-engineering" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Software Engineering</a></li>
                <li><a href="https://iub.edu.pk/department-of-data-science" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Data Science</a></li>
              </ul>
            </div>

            {/* Col 5: Socials & Phone */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                Connect
              </span>
              <ul className="space-y-2 text-zinc-300">
                <li className="font-mono text-amber-400 flex items-center gap-1.5 font-bold">
                  <Phone className="w-3.5 h-3.5" /> {profile.phone}
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} className="hover:text-amber-400 transition-colors truncate block">
                    {profile.email}
                  </a>
                </li>
                <li><a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">LinkedIn</a></li>
                <li><a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          {/* BOTTOM MASSIVE TYPOGRAPHIC WATERMARK: "ZAHID HUSSAIN"
              Exact tribute to the giant "weave" wordmark in the user's uploaded image */}
          <div className="pt-8 border-t border-zinc-800/80">
            <div className="w-full overflow-hidden select-none text-center">
              <h1 className="text-[12vw] sm:text-[13vw] font-black tracking-tighter uppercase leading-none text-zinc-800/50 hover:text-zinc-700/60 transition-colors">
                ZAHID HUSSAIN
              </h1>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
              <p>© {profile.session} {profile.fullName}. The Islamia University of Bahawalpur.</p>
              <div className="flex items-center gap-4">
                <span>Course: {profile.courseName}</span>
                <span>•</span>
                <span>Instructor: {profile.teacherName}</span>
                <span>•</span>
                <a href="#top" className="text-amber-400 font-bold hover:underline">Back to top ↑</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
