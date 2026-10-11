export interface StudentProfile {
  fullName: string;
  rollNumber: string;
  registrationNumber: string;
  degree: string;
  department: string;
  faculty: string;
  university: string;
  campus: string;
  semester: string;
  section: string;
  session: string;
  courseName: string;
  courseCode: string;
  teacherName: string;
  teacherTitle: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  githubUrl: string;
  linkedinUrl: string;
  bio: string;
  avatarUrl: string;
  skills: string[];
}

export const DEFAULT_ZAHID_PROFILE: StudentProfile = {
  fullName: 'Zahid Hussain',
  rollNumber: 'S25BDOCS1M01181',
  registrationNumber: 'S25BDOCS1M01181',
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  department: 'Department of Computer Science',
  faculty: 'Faculty of Computing',
  university: 'The Islamia University of Bahawalpur',
  campus: 'Baghdad-ul-Jadeed Campus',
  semester: '4th Semester 1M',
  section: 'Section (Morning)',
  session: '2025-2029',
  courseName: 'Web Technology',
  courseCode: 'CS-302',
  teacherName: 'Dr. Wahid Anwar',
  teacherTitle: 'Course Instructor',
  email: 'zahid.hussain.cs@gmail.com',
  phone: '03454627881',
  city: 'Bahawalpur',
  country: 'Pakistan',
  githubUrl: 'https://github.com/zahidhussain-cs',
  linkedinUrl: 'https://linkedin.com/in/zahidhussain-cs',
  bio: 'I am a BS Computer Science student at the Islamia University of Bahawalpur. This website is my learning space, where I keep my Web Technology assignments, practical work and useful academic links in one place. I am learning modern web development, starting with HTML, CSS, and modern responsive frontend engineering.',
  avatarUrl: '/images/zahid_hussain.svg',
  skills: ['HTML5 & Semantic Structure', 'CSS3 & Modern Flexbox / Grid', 'Responsive UI & Mobile View', 'JavaScript & DOM Interactions', 'Modern Frontend Architecture', 'Web Accessibility & Typography']
};

export const UNIVERSITY_DEPARTMENTS = [
  { name: 'Artificial Intelligence', slug: 'department-of-artificial-intelligence', code: 'AI' },
  { name: 'Computer Science', slug: 'department-of-computer-science', code: 'CS' },
  { name: 'Data Science', slug: 'department-of-data-science', code: 'DS' },
  { name: 'Information Security', slug: 'department-of-information-security', code: 'IS' },
  { name: 'Information Technology', slug: 'department-of-information-technology', code: 'IT' },
  { name: 'Software Engineering', slug: 'department-of-software-engineering', code: 'SE' },
  { name: 'Statistics', slug: 'department-of-statistics', code: 'STAT' }
];

export interface AcademicResource {
  title: string;
  actionText: string;
  category: string;
  url: string;
  image: string;
  desc: string;
}

export const ACADEMIC_RESOURCES: AcademicResource[] = [
  {
    title: 'Prof. Dr. Dost Muhammad Khan',
    actionText: 'Open faculty profile',
    category: 'FACULTY PROFILE',
    url: 'https://iub.edu.pk/author/khan.dostkhan',
    image: '/images/professor.jpeg',
    desc: 'Senior Professor profile, publications, and research archive at Islamia University of Bahawalpur.'
  },
  {
    title: 'UrduPoint',
    actionText: 'Visit website',
    category: 'NEWS & MEDIA',
    url: 'https://www.urdupoint.com',
    image: '/images/urdupoint.jpeg',
    desc: 'Leading Urdu language digital media network with education, technology, and national updates.'
  },
  {
    title: 'Pakistan — Wikipedia',
    actionText: 'Read more',
    category: 'REFERENCE & HISTORY',
    url: 'https://en.wikipedia.org/wiki/Pakistan',
    image: '/images/pk_info.png',
    desc: 'Comprehensive historical, geographic, cultural, and demographic reference documentation.'
  },
  {
    title: 'Hamari Web',
    actionText: 'Visit website',
    category: 'WEB PORTAL',
    url: 'https://hamariweb.com/',
    image: '/images/images.png',
    desc: 'Popular Pakistani educational portal, directory, and computing resource hub.'
  },
  {
    title: 'IUB MyLMS Portal',
    actionText: 'Open student portal',
    category: 'UNIVERSITY LMS',
    url: 'https://my.iub.edu.pk',
    image: '/images/portal.png',
    desc: 'Official Learning Management System for course slides, submissions, and student grading.'
  },
  {
    title: 'MDN & Web Technology Docs',
    actionText: 'Explore documentation',
    category: 'DEVELOPER DOCS',
    url: 'https://developer.mozilla.org',
    image: '/images/text.jpg',
    desc: 'Standard specifications, HTML5 elements, CSS styling guides, and JavaScript APIs.'
  }
];
