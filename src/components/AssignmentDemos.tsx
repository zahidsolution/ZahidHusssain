import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, Copy, Check, Eye, EyeOff, RotateCcw, 
  Search, Sliders, Smartphone, Tablet, Monitor, Info, GraduationCap,
  Mail, Phone, MapPin, ExternalLink, Award, FileCode, Play
} from 'lucide-react';
import { StudentProfile } from '../data/studentProfile';
import cvPhotoImg from '../assets/images/regenerated_image_1791744605378.png';

interface DemoProps {
  assignmentId: string;
  profile: StudentProfile;
}

export const AssignmentDemos: React.FC<DemoProps> = ({ assignmentId, profile }) => {
  switch (assignmentId) {
    case 'diamond-assignment':
      return <DiamondDemo />;
    case 'cv-assignment':
      return <CVDemo profile={profile} />;
    case 'text-formatting':
      return <TextFormattingDemo />;
    case 'css-units':
      return <CssUnitsDemo />;
    case 'hover-and-tables':
      return <HoverAndTablesDemo />;
    case 'login-portal':
      return <LoginDemo profile={profile} />;
    case 'responsive-grid':
      return <ResponsiveGridDemo />;
    case 'modern-ticker':
      return <MarqueeDemo />;
    case 'fixed-background':
      return <FixedBackgroundDemo profile={profile} />;
    case 'department-directory':
      return <DepartmentDirectoryDemo />;
    default:
      return <div className="p-8 text-center text-zinc-500 font-bold">Assignment preview loading...</div>;
  }
};

/* 1. DIAMOND PATTERN DEMO */
function DiamondDemo() {
  const [mode, setMode] = useState<'modern' | 'classic'>('modern');
  const [size, setSize] = useState<number>(7);
  const [color, setColor] = useState<string>('#eab308');

  // Generate widths for the classic HR diamond
  const steps: number[] = [];
  for (let i = 1; i <= size; i++) steps.push(i * 18);
  for (let i = size - 1; i >= 1; i--) steps.push(i * 18);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('modern')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              mode === 'modern' ? 'bg-zinc-950 text-white shadow-md' : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            CSS Geometric Diamond
          </button>
          <button
            onClick={() => setMode('classic')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              mode === 'classic' ? 'bg-amber-600 text-white shadow-md' : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            Classic HTML Pattern
          </button>
        </div>

        <div className="flex items-center gap-5 text-xs font-bold text-zinc-800">
          <label className="flex items-center gap-2">
            <span>Pattern Scale ({size}):</span>
            <input
              type="range"
              min="3"
              max="11"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-24 accent-zinc-950 cursor-pointer"
            />
          </label>
          <label className="flex items-center gap-2">
            <span>Color:</span>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-8 h-8 rounded-lg border border-zinc-300 cursor-pointer p-0.5 bg-white"
            />
          </label>
        </div>
      </div>

      {mode === 'modern' ? (
        <div className="flex flex-col items-center justify-center py-16 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-inner">
          <div 
            className="transition-all duration-300 hover:rotate-90 hover:scale-110 cursor-pointer shadow-2xl"
            style={{
              width: `${size * 22}px`,
              height: `${size * 22}px`,
              backgroundColor: color,
              transform: 'rotate(45deg)',
              borderRadius: '12px',
              boxShadow: `0 0 40px ${color}88`
            }}
          />
          <p className="mt-8 text-xs text-zinc-300 font-mono font-bold tracking-wider">
            CSS transform: rotate(45deg) • Hover to rotate
          </p>
        </div>
      ) : (
        <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl text-center">
          <h4 className="text-xs font-bold text-zinc-700 uppercase tracking-widest mb-4">
            HTML Diamond Structure ({steps.length} Lines)
          </h4>
          <div className="flex flex-col items-center gap-1.5 py-4">
            {steps.map((w, idx) => (
              <div
                key={idx}
                style={{
                  width: `${w}px`,
                  height: '8px',
                  backgroundColor: color,
                  borderRadius: '3px'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* 2. CV DEMO */
function CVDemo({ profile }: { profile: StudentProfile }) {
  return (
    <div className="bg-white text-zinc-900 p-8 rounded-3xl border border-zinc-200 shadow-sm max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-zinc-200">
        <img
          src={cvPhotoImg}
          alt={profile.fullName}
          className="w-24 h-24 rounded-2xl object-cover ring-4 ring-amber-400/30 shadow-md"
        />
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-2xl font-extrabold text-zinc-950">{profile.fullName}</h2>
          <p className="text-sm font-bold text-[#f9572a]">{profile.degree}</p>
          <p className="text-xs text-zinc-600 font-medium">{profile.university} • {profile.campus}</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs font-mono">
            <span className="flex items-center gap-1 font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              <GraduationCap className="w-3.5 h-3.5 text-amber-700" /> Roll: {profile.rollNumber}
            </span>
            <span className="flex items-center gap-1 font-bold text-zinc-800 bg-zinc-100 px-2 py-0.5 rounded">
              <Phone className="w-3.5 h-3.5 text-amber-600" /> {profile.phone}
            </span>
            <span className="flex items-center gap-1 font-medium text-zinc-600">
              <Mail className="w-3.5 h-3.5 text-amber-600" /> {profile.email}
            </span>
            <span className="flex items-center gap-1 font-medium text-zinc-600">
              <MapPin className="w-3.5 h-3.5 text-amber-600" /> {profile.city}, {profile.country}
            </span>
          </div>
        </div>
      </div>

      {/* Bio / Objective */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">Academic Profile</h3>
        <p className="text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-200 font-medium">
          {profile.bio}
        </p>
      </div>

      {/* Education Table */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">Education Timeline</h3>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-100 text-zinc-800 uppercase font-bold">
              <tr>
                <th className="p-3">Degree / Program</th>
                <th className="p-3">Institute</th>
                <th className="p-3">Session</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 font-medium">
              <tr>
                <td className="p-3 font-bold text-zinc-950">BS Computer Science</td>
                <td className="p-3">Islamia University of Bahawalpur</td>
                <td className="p-3 font-mono font-bold text-amber-800">{profile.session}</td>
                <td className="p-3"><span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold">{profile.semester}</span></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-zinc-950">Intermediate (F.Sc Pre-Engg)</td>
                <td className="p-3">BISE Bahawalpur Board</td>
                <td className="p-3 font-mono text-zinc-600">2022 – 2024</td>
                <td className="p-3">Grade A+ (Distinction)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-zinc-950">Matriculation (Science)</td>
                <td className="p-3">BISE Bahawalpur Board</td>
                <td className="p-3 font-mono text-zinc-600">2020 – 2022</td>
                <td className="p-3">Grade A+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold rounded-xl border border-amber-200">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-700 font-medium">
        <span>Course Instructor: <strong className="text-zinc-950">{profile.teacherName}</strong> ({profile.courseName})</span>
        <span className="font-mono font-bold text-amber-800">{profile.section}</span>
      </div>
    </div>
  );
}

/* 3. TEXT FORMATTING DEMO */
function TextFormattingDemo() {
  const [fontFamily, setFontFamily] = useState('system-ui');
  const [fontSize, setFontSize] = useState(24);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textTransform, setTextTransform] = useState<'none' | 'uppercase' | 'capitalize' | 'lowercase'>('none');
  const [isBold, setIsBold] = useState(true);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs font-bold text-zinc-800">
        <div>
          <label className="block text-zinc-700 mb-1.5">Font Family</label>
          <select 
            value={fontFamily} 
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-950 font-bold focus:ring-2 focus:ring-zinc-950 outline-none"
          >
            <option value="system-ui">System UI (Modern Sans)</option>
            <option value="serif">Playfair / Serif</option>
            <option value="monospace">Fira Code (Monospace)</option>
            <option value="cursive">Cursive Script</option>
          </select>
        </div>

        <div>
          <label className="block text-zinc-700 mb-1.5">Font Size: {fontSize}px</label>
          <input
            type="range"
            min="16"
            max="42"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full accent-zinc-950 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-zinc-700 mb-1.5">Letter Spacing: {letterSpacing}px</label>
          <input
            type="range"
            min="-2"
            max="10"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full accent-zinc-950 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-zinc-700 mb-1.5">Text Transform</label>
          <select 
            value={textTransform} 
            onChange={(e) => setTextTransform(e.target.value as any)}
            className="w-full p-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-950 font-bold focus:ring-2 focus:ring-zinc-950 outline-none"
          >
            <option value="none">Normal</option>
            <option value="uppercase">UPPERCASE</option>
            <option value="capitalize">Capitalize Words</option>
            <option value="lowercase">lowercase</option>
          </select>
        </div>
      </div>

      <div className="p-10 bg-white border border-zinc-200 rounded-3xl flex flex-col items-center justify-center min-h-[200px] shadow-sm">
        <p
          style={{
            fontFamily,
            fontSize: `${fontSize}px`,
            letterSpacing: `${letterSpacing}px`,
            textTransform,
            fontWeight: isBold ? '700' : '400',
            lineHeight: 1.4
          }}
          className="text-center text-zinc-950 max-w-xl transition-all"
        >
          Web Technology &amp; Frontend Engineering at Islamia University of Bahawalpur
        </p>
      </div>

      <div className="p-3 bg-zinc-950 text-amber-300 font-mono text-xs rounded-xl overflow-x-auto">
        <code>
          {`font-family: ${fontFamily}; font-size: ${fontSize}px; letter-spacing: ${letterSpacing}px; text-transform: ${textTransform};`}
        </code>
      </div>
    </div>
  );
}

/* 4. CSS UNITS DEMO */
function CssUnitsDemo() {
  const [rootFontSize, setRootFontSize] = useState<number>(16);
  const [parentFontSize, setParentFontSize] = useState<number>(20);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs font-bold text-zinc-800">
        <label className="space-y-1.5">
          <span>Root HTML Font Size: <span className="font-mono text-amber-700 font-black">{rootFontSize}px</span></span>
          <input
            type="range"
            min="12"
            max="24"
            value={rootFontSize}
            onChange={(e) => setRootFontSize(Number(e.target.value))}
            className="w-full accent-zinc-950 cursor-pointer"
          />
        </label>

        <label className="space-y-1.5">
          <span>Parent Container Font Size: <span className="font-mono text-amber-700 font-black">{parentFontSize}px</span></span>
          <input
            type="range"
            min="14"
            max="32"
            value={parentFontSize}
            onChange={(e) => setParentFontSize(Number(e.target.value))}
            className="w-full accent-zinc-950 cursor-pointer"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Pixel */}
        <div className="p-5 bg-white border border-zinc-200 rounded-2xl space-y-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-amber-800 uppercase tracking-wider">Pixels (px)</span>
            <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">Fixed</span>
          </div>
          <p className="text-2xl font-black font-mono text-zinc-950">24px</p>
          <p className="text-xs text-zinc-600 font-medium">Absolute measurement. Does not react to parent font scale.</p>
          <div style={{ fontSize: '24px' }} className="p-2 border border-zinc-300 rounded-xl bg-zinc-50 font-bold text-zinc-950 truncate">
            Sample text (24px)
          </div>
        </div>

        {/* EM */}
        <div className="p-5 bg-white border border-zinc-200 rounded-2xl space-y-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-amber-800 uppercase tracking-wider">Parent Relative (em)</span>
            <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">1.5em</span>
          </div>
          <p className="text-2xl font-black font-mono text-zinc-950">{parentFontSize * 1.5}px</p>
          <p className="text-xs text-zinc-600 font-medium">Calculated as: 1.5 × parent ({parentFontSize}px) = {parentFontSize * 1.5}px</p>
          <div style={{ fontSize: `${parentFontSize * 1.5}px` }} className="p-2 border border-zinc-300 rounded-xl bg-zinc-50 font-bold text-zinc-950 truncate">
            Sample text (1.5em)
          </div>
        </div>

        {/* REM */}
        <div className="p-5 bg-white border border-zinc-200 rounded-2xl space-y-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-amber-800 uppercase tracking-wider">Root Relative (rem)</span>
            <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">1.5rem</span>
          </div>
          <p className="text-2xl font-black font-mono text-zinc-950">{rootFontSize * 1.5}px</p>
          <p className="text-xs text-zinc-600 font-medium">Calculated as: 1.5 × root ({rootFontSize}px) = {rootFontSize * 1.5}px</p>
          <div style={{ fontSize: `${rootFontSize * 1.5}px` }} className="p-2 border border-zinc-300 rounded-xl bg-zinc-50 font-bold text-zinc-950 truncate">
            Sample text (1.5rem)
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. HOVER & TABLES DEMO */
function HoverAndTablesDemo() {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { roll: 'S25BDOCS1M01181', name: 'Zahid Hussain', marks: 96, grade: 'A+', status: 'Distinction' },
    { roll: 'S25BDOCS1M01182', name: 'Bilal Ahmed', marks: 88, grade: 'A', status: 'Passed' },
    { roll: 'S25BDOCS1M01183', name: 'Ali Raza', marks: 92, grade: 'A+', status: 'Distinction' },
    { roll: 'S25BDOCS1M01184', name: 'Hamza Tariq', marks: 82, grade: 'B+', status: 'Passed' },
    { roll: 'S25BDOCS1M01185', name: 'Fatima Noor', marks: 95, grade: 'A+', status: 'Distinction' },
  ];

  const filtered = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
        <span className="text-xs font-bold text-zinc-800">
          Student Information Table with Smooth Hover
        </span>

        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-zinc-400" />
          <input
            type="text"
            placeholder="Search student or roll..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-3 py-2 text-xs rounded-xl bg-white border border-zinc-300 font-medium text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-950"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-zinc-100 text-zinc-800 font-bold uppercase">
            <tr>
              <th className="p-3.5">Roll Number</th>
              <th className="p-3.5">Student Name</th>
              <th className="p-3.5">Lab Marks</th>
              <th className="p-3.5">Grade</th>
              <th className="p-3.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 font-medium bg-white">
            {filtered.map((s) => (
              <tr
                key={s.roll}
                className="hover:bg-amber-50 hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                <td className="p-3.5 font-mono font-bold text-zinc-950">{s.roll}</td>
                <td className="p-3.5 font-bold text-zinc-900">{s.name}</td>
                <td className="p-3.5 font-mono font-black text-amber-700">{s.marks}/100</td>
                <td className="p-3.5 font-bold text-zinc-900">{s.grade}</td>
                <td className="p-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* 6. LOGIN DEMO */
function LoginDemo({ profile }: { profile: StudentProfile }) {
  const [role, setRole] = useState<'student' | 'faculty'>('student');
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState(profile.rollNumber);
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-3xl border border-zinc-200 shadow-xl space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-extrabold text-zinc-950">University Portal Login</h3>
        <p className="text-xs text-zinc-600 font-medium">The Islamia University of Bahawalpur</p>
      </div>

      <div className="grid grid-cols-2 p-1 bg-zinc-100 rounded-xl text-xs font-bold">
        <button
          type="button"
          onClick={() => { setRole('student'); setUsername(profile.rollNumber); }}
          className={`py-2 rounded-lg transition-all ${role === 'student' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-600'}`}
        >
          Student Portal
        </button>
        <button
          type="button"
          onClick={() => { setRole('faculty'); setUsername('wahid.anwar@iub.edu.pk'); }}
          className={`py-2 rounded-lg transition-all ${role === 'faculty' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-600'}`}
        >
          Faculty Portal
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-800 mb-1">
            {role === 'student' ? 'Roll Number / Student ID' : 'Faculty Email / ID'}
          </label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 bg-white text-xs font-bold text-zinc-950 focus:ring-2 focus:ring-zinc-950 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-800 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 bg-white text-xs font-bold text-zinc-950 focus:ring-2 focus:ring-zinc-950 outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-2.5 text-zinc-500 hover:text-zinc-800"
            >
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2"
        >
          {submitted ? <CheckCircle2 className="w-4 h-4" /> : <Play className="w-3.5 h-3.5" />}
          {submitted ? 'Authenticated Successfully!' : 'Sign In to Portal'}
        </button>
      </form>
    </div>
  );
}

/* 7. RESPONSIVE GRID DEMO */
function ResponsiveGridDemo() {
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const widthClasses = {
    mobile: 'max-w-xs',
    tablet: 'max-w-md',
    desktop: 'w-full'
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-2 p-2 bg-zinc-100 rounded-2xl w-fit mx-auto text-xs font-bold">
        <button
          onClick={() => setViewport('mobile')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${viewport === 'mobile' ? 'bg-white shadow text-zinc-950' : 'text-zinc-600'}`}
        >
          <Smartphone className="w-3.5 h-3.5" /> Mobile (320px)
        </button>
        <button
          onClick={() => setViewport('tablet')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${viewport === 'tablet' ? 'bg-white shadow text-zinc-950' : 'text-zinc-600'}`}
        >
          <Tablet className="w-3.5 h-3.5" /> Tablet (480px)
        </button>
        <button
          onClick={() => setViewport('desktop')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${viewport === 'desktop' ? 'bg-white shadow text-zinc-950' : 'text-zinc-600'}`}
        >
          <Monitor className="w-3.5 h-3.5" /> Desktop (100%)
        </button>
      </div>

      <div className="p-6 bg-zinc-100 rounded-3xl flex justify-center overflow-x-auto min-h-[300px] border border-zinc-200">
        <div className={`transition-all duration-300 p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm ${widthClasses[viewport]}`}>
          <p className="text-xs text-zinc-500 font-mono font-bold mb-4 text-center uppercase tracking-wider">
            Simulated Viewport: {viewport}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center space-y-1">
                <span className="text-xs font-black text-amber-800">Card 0{num}</span>
                <p className="text-[11px] text-zinc-700 font-bold">CSS Grid Cell</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 8. MARQUEE DEMO - 100% CLEAN HIGH-CONTRAST LIGHT MODE */
function MarqueeDemo() {
  const [speed, setSpeed] = useState(20);
  const [customText, setCustomText] = useState('The Islamia University of Bahawalpur • Department of Computer Science • Web Technology Coursework • Zahid Hussain');

  return (
    <div className="space-y-6">
      {/* High-contrast Light Mode Controls */}
      <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 mb-1.5">
            Ticker Announcement Text:
          </label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full p-3 rounded-xl bg-white border-2 border-zinc-300 text-zinc-950 font-bold text-xs outline-none focus:border-zinc-950"
          />
        </div>

        <div className="flex items-center justify-between text-xs font-bold text-zinc-900">
          <span>Animation Speed: {speed}s</span>
          <input
            type="range"
            min="10"
            max="40"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-36 accent-zinc-950 cursor-pointer"
          />
        </div>
      </div>

      {/* Infinite scrolling ticker container */}
      <div className="relative overflow-hidden py-4 bg-zinc-950 text-white rounded-2xl shadow-xl">
        <div 
          className="flex whitespace-nowrap gap-10 text-xs sm:text-sm font-bold tracking-wide"
          style={{
            animation: `marqueeScroll ${speed}s linear infinite`
          }}
        >
          <span className="text-amber-400">⚡ {customText}</span>
          <span className="text-emerald-400">🎓 {customText}</span>
          <span className="text-white">🚀 {customText}</span>
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* 9. FIXED BACKGROUND DEMO */
function FixedBackgroundDemo({ profile }: { profile: StudentProfile }) {
  return (
    <div className="space-y-4">
      <div 
        className="relative min-h-[360px] rounded-3xl overflow-hidden flex flex-col justify-center items-center text-center p-8 text-white shadow-2xl"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-xl space-y-3 z-10">
          <span className="px-3.5 py-1 bg-amber-500 text-zinc-950 rounded-full text-xs font-black uppercase tracking-wider">
            {profile.faculty}
          </span>
          <h2 className="text-3xl font-black">{profile.university}</h2>
          <p className="text-sm text-zinc-200 leading-relaxed font-medium">
            {profile.department} • Academic Coursework &amp; Software Design
          </p>
          <div className="pt-3 flex items-center justify-center gap-3 text-xs font-mono font-bold text-amber-300">
            <span>Student: {profile.fullName}</span>
            <span>•</span>
            <span>Roll: {profile.rollNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 10. DEPARTMENT DIRECTORY DEMO */
function DepartmentDirectoryDemo() {
  const depts = [
    { name: 'Artificial Intelligence', code: 'AI', programs: 'BS AI, MS AI', icon: '🤖' },
    { name: 'Computer Science', code: 'CS', programs: 'BSCS, MS CS, PhD CS', icon: '💻' },
    { name: 'Data Science', code: 'DS', programs: 'BS DS, MS DS', icon: '📊' },
    { name: 'Information Security', code: 'IS', programs: 'BS IS, MS Cyber Security', icon: '🛡️' },
    { name: 'Information Technology', code: 'IT', programs: 'BS IT, MS IT', icon: '🌐' },
    { name: 'Software Engineering', code: 'SE', programs: 'BS SE, MS SE', icon: '⚙️' },
    { name: 'Statistics', code: 'STAT', programs: 'BS Stat, M.Phil', icon: '📈' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {depts.map((d) => (
        <a
          key={d.code}
          href={`https://iub.edu.pk/department-of-${d.name.toLowerCase().replace(/\s+/g, '-')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-950 hover:shadow-md transition-all group flex items-start gap-3.5"
        >
          <span className="text-2xl">{d.icon}</span>
          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold text-zinc-950 group-hover:text-[#f9572a] transition-colors">
                {d.name}
              </h4>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950" />
            </div>
            <p className="text-[11px] text-zinc-500 font-medium">{d.programs}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
