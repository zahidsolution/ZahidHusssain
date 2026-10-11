export interface AssignmentItem {
  id: string;
  orderNumber: string;
  assignmentLabel: string;
  footLabel: string;
  title: string;
  tag: string;
  category: string;
  shortDesc: string;
  thumbTitle: string;
  image: string;
  learningObjectives: string[];
  codeSnippet: string;
}

export const ASSIGNMENTS_LIST: AssignmentItem[] = [
  {
    id: 'diamond-assignment',
    orderNumber: '01',
    assignmentLabel: 'ASSIGNMENT 01',
    footLabel: 'Assignment 01',
    title: 'Diamond Assignment',
    tag: 'HTML BASICS',
    category: 'HTML Shapes & Basics',
    shortDesc: 'A colourful diamond pattern made using HTML horizontal rule elements and modern CSS.',
    thumbTitle: 'HTML Shapes & Colours',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Document structure, horizontal rules, and alignment',
      'Centering content and block element widths',
      'Creating geometric symmetry using modern CSS transformations'
    ],
    codeSnippet: `<!-- Assignment 01: Diamond Shape -->
<div class="diamond-container">
  <div class="diamond-shape"></div>
</div>

<style>
.diamond-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
.diamond-shape {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #eab308, #ca8a04);
  transform: rotate(45deg);
  border-radius: 8px;
  box-shadow: 0 10px 25px -5px rgba(234, 179, 8, 0.4);
  transition: transform 0.3s ease;
}
.diamond-shape:hover {
  transform: rotate(45deg) scale(1.08);
}
</style>`
  },
  {
    id: 'cv-assignment',
    orderNumber: '02',
    assignmentLabel: 'ASSIGNMENT 02',
    footLabel: 'Assignment 02',
    title: 'CV Assignment',
    tag: 'HTML LINKS',
    category: 'HTML Links & Tables',
    shortDesc: 'A student Curriculum Vitae and web page practice task showcasing education, skills, and links.',
    thumbTitle: 'Student CV Page',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Structuring academic qualifications into accessible tables',
      'Hyperlinking contact information, email, and social profiles',
      'Semantic document hierarchy with headers, sections, and lists'
    ],
    codeSnippet: `<!-- Assignment 02: Student CV -->
<article class="student-cv">
  <header>
    <h1>Zahid Hussain</h1>
    <p>BS Computer Science • Islamia University of Bahawalpur</p>
  </header>
  <section class="education">
    <h2>Education</h2>
    <table>
      <thead>
        <tr><th>Degree</th><th>Institute</th><th>Session</th></tr>
      </thead>
      <tbody>
        <tr><td>BSCS</td><td>IUB Bahawalpur</td><td>2025-2029</td></tr>
        <tr><td>F.Sc</td><td>BISE Bahawalpur</td><td>2022-2024</td></tr>
      </tbody>
    </table>
  </section>
</article>`
  },
  {
    id: 'text-formatting',
    orderNumber: '03',
    assignmentLabel: 'ASSIGNMENT 03',
    footLabel: 'Assignment 03',
    title: 'Text Formatting Practice',
    tag: 'CSS TEXT',
    category: 'CSS Typography',
    shortDesc: 'Practise web typography, fonts, uppercase text transform, letter spacing, and line heights.',
    thumbTitle: 'Text Styling with CSS',
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Applying font-family, font-size, and font-weight',
      'Text transformation (uppercase, capitalize) and letter-spacing',
      'Line heights, contrast ratios, and typographic balance'
    ],
    codeSnippet: `/* Assignment 03: Text Formatting */
.typography-showcase {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  line-height: 1.6;
  text-transform: capitalize;
  color: #18181b;
}`
  },
  {
    id: 'css-units',
    orderNumber: '04',
    assignmentLabel: 'ASSIGNMENT 04',
    footLabel: 'Assignment 04',
    title: 'PX, EM and Percentage',
    tag: 'CSS UNITS',
    category: 'CSS Measurement Units',
    shortDesc: 'Explore common CSS measurement units and compare absolute vs relative scaling.',
    thumbTitle: 'PX, EM and Percentage',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Absolute units (px) vs relative scalable units (em, rem, %)',
      'Parent-relative inheritance with em vs root-relative rem',
      'Responsive percentage widths for fluid layouts'
    ],
    codeSnippet: `/* Assignment 04: CSS Measurement Units */
:root {
  font-size: 16px; /* 1rem = 16px */
}
.box-fixed {
  width: 250px;
}
.box-relative {
  font-size: 1.5em; /* 1.5x parent font size */
  padding: 1.25rem; /* 1.25x root font size */
  width: 80%; /* 80% of container width */
}`
  },
  {
    id: 'hover-and-tables',
    orderNumber: '05',
    assignmentLabel: 'ASSIGNMENT 05',
    footLabel: 'Assignment 05',
    title: 'Hover and Table Styling',
    tag: 'CSS EFFECTS',
    category: 'CSS Pseudo-classes & Tables',
    shortDesc: 'A practice task for hover effects, table formatting, and smooth pseudo-class transitions.',
    thumbTitle: 'Hover & Table Effects',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Applying the :hover pseudo-class with smooth CSS transitions',
      'Zebra striping tables with nth-child(even)',
      'Preventing layout shift during interactive states'
    ],
    codeSnippet: `/* Assignment 05: Hover & Table Styling */
.academic-table {
  width: 100%;
  border-collapse: collapse;
}
.academic-table th, 
.academic-table td {
  padding: 12px 16px;
  text-align: left;
}
.academic-table tbody tr {
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.academic-table tbody tr:hover {
  background-color: #fef08a;
  transform: translateX(4px);
}`
  },
  {
    id: 'department-directory',
    orderNumber: '06',
    assignmentLabel: 'ASSIGNMENT 06',
    footLabel: 'Assignment 06',
    title: 'My Assignment Portal',
    tag: 'COURSE HUB',
    category: 'Academic Portal Architecture',
    shortDesc: 'A unified academic portal connecting coursework, department links, and student resources.',
    thumbTitle: 'Academic Portal Hub',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Single-page application layout and semantic section navigation',
      'Designing academic dashboards for university students',
      'Responsive header, footer, and navigation architecture'
    ],
    codeSnippet: `<!-- Assignment 06: Student Hub -->
<nav class="portal-nav">
  <div class="brand">Zahid Hussain</div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#assignments">Assignments</a></li>
    <li><a href="#useful-links">Useful Links</a></li>
    <li><a href="#departments">Departments</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>`
  },
  {
    id: 'login-portal',
    orderNumber: '07',
    assignmentLabel: 'ASSIGNMENT 07',
    footLabel: 'Assignment 07',
    title: 'Login Page',
    tag: 'FORM & UI',
    category: 'Interactive Forms',
    shortDesc: 'A styled login form with responsive card layout, input fields, and validation states.',
    thumbTitle: 'Student Login Form',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'HTML form elements, inputs, labels, and submit actions',
      'Client-side form validation and password visibility controls',
      'Accessible focus rings and modern card styling'
    ],
    codeSnippet: `<!-- Assignment 07: Authentication Form -->
<form class="login-card">
  <h2>Student Login</h2>
  <div class="field">
    <label for="roll">Roll Number</label>
    <input type="text" id="roll" required placeholder="S25BDOCS1M01181">
  </div>
  <div class="field">
    <label for="pass">Password</label>
    <input type="password" id="pass" required>
  </div>
  <button type="submit">Sign In</button>
</form>`
  },
  {
    id: 'responsive-grid',
    orderNumber: '08',
    assignmentLabel: 'ASSIGNMENT 08',
    footLabel: 'Assignment 08',
    title: 'Mobile View Layout',
    tag: 'CSS GRID',
    category: 'Responsive CSS Grid',
    shortDesc: 'A grid layout that automatically adapts cleanly for mobile, tablet, and desktop screens.',
    thumbTitle: 'Mobile View Layout',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'CSS Grid layout with display: grid and grid-template-columns',
      'Fluid responsive columns using repeat(auto-fit, minmax(280px, 1fr))',
      'Media queries and mobile-first responsive architecture'
    ],
    codeSnippet: `/* Assignment 08: Responsive Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
@media (max-width: 640px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}`
  },
  {
    id: 'modern-ticker',
    orderNumber: '09',
    assignmentLabel: 'ASSIGNMENT 09',
    footLabel: 'Assignment 09',
    title: 'Moving Text and Images',
    tag: 'CSS ANIMATION',
    category: 'CSS Keyframe Animation',
    shortDesc: 'Continuous smooth announcement ticker and animated marquee using performant CSS keyframes.',
    thumbTitle: 'Moving Text & Marquee',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Creating smooth infinite scrolling animations via CSS @keyframes',
      'Pause-on-hover interaction for enhanced user experience',
      'Modern accessible replacement for the deprecated HTML <marquee> tag'
    ],
    codeSnippet: `/* Assignment 09: Smooth Announcement Ticker */
@keyframes marqueeScroll {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 25s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}`
  },
  {
    id: 'fixed-background',
    orderNumber: '10',
    assignmentLabel: 'ASSIGNMENT 10',
    footLabel: 'Assignment 10',
    title: 'Scrolling Fixed Background',
    tag: 'BACKGROUND',
    category: 'CSS Backgrounds',
    shortDesc: 'Text scrolls smoothly while the background image stays fixed in place.',
    thumbTitle: 'Scrolling Fixed Background',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'CSS background-attachment: fixed and background-size: cover',
      'Overlay gradients for readable contrast with white typography',
      'Parallax scrolling visual depth for academic presentations'
    ],
    codeSnippet: `/* Assignment 10: Fixed Background */
.fixed-hero {
  background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}`
  }
];
