export interface Skill {
  name: string;
  category: 'design' | 'tools' | 'development' | 'methodology';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  projectId: string;
  title: string;
  category: string;
  overview: string;
  problem: string;
  role: string;
  tools: string[];
  process: string[];
  outcome: string;
  screens: string[];
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'linkedin';
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const PROFILE = {
  name: 'Senthil Arunachalam',
  title: 'UI / UX Designer',
  tagline: 'Crafting intuitive digital experiences that delight users and drive business goals.',
  summary: `Innovative and detail-oriented UI Designer with over 10+ years of experience crafting intuitive and engaging user interfaces for web and mobile applications. Adept at transforming complex requirements into elegant designs that enhance user experience and drive business goals. Proven track record of collaborating with cross-functional teams and stakeholders to deliver high-quality design solutions on time and within budget.`,
  experience: '10+',
  currentRole: 'Senior UI Designer',
  currentCompany: 'KGISL Technologies Pvt Ltd',
  location: 'Coimbatore, India',
  education: 'B.E (ECE) — Anna University (2008–2012)',
  certifications: [
    'Figma UI UX Design Essentials — Udemy, July 2024',
    'Figma UI UX Design Advanced — Udemy, Aug 2024',
  ],
};

export const SKILLS: Skill[] = [
  { name: 'Prototyping', category: 'design' },
  { name: 'Wireframing', category: 'design' },
  { name: 'Visual Design', category: 'design' },
  { name: 'Interaction Design', category: 'design' },
  { name: 'Design Thinking', category: 'methodology' },
  { name: 'Agile', category: 'methodology' },
  { name: 'Lean UX', category: 'methodology' },
  { name: 'Figma', category: 'tools' },
  { name: 'Adobe XD', category: 'tools' },
  { name: 'Photoshop', category: 'tools' },
  { name: 'Illustrator', category: 'tools' },
  { name: 'Visio', category: 'tools' },
  { name: 'Canva', category: 'tools' },
  { name: 'Draw.io', category: 'tools' },
  { name: 'Balsamiq', category: 'tools' },
  { name: 'HTML', category: 'development' },
  { name: 'CSS / SCSS', category: 'development' },
  { name: 'JavaScript', category: 'development' },
  { name: 'TypeScript', category: 'development' },
  { name: 'Angular', category: 'development' },
];

export const PROJECTS: Project[] = [
  {
    id: 'dolphin-design-system',
    title: 'Dolphin AI Design System',
    category: 'Design System',
    description: 'Comprehensive UI component library featuring 20+ reusable components, a cohesive color system, typography scale, and design guidelines.',
    thumbnail: 'images/design-system/cover-page.png',
    tags: ['Figma', 'Design Tokens', 'Component Library'],
  },
  {
    id: 'depository',
    title: 'Depository',
    category: 'Web Application',
    description: 'Digital document management platform with intuitive file organization, smart search, and collaborative features for enterprise teams.',
    thumbnail: 'images/depository/dashboard.png',
    tags: ['Figma', 'Photoshop', 'Web App'],
  },
  {
    id: 'conversational-ai',
    title: 'Conversational AI',
    category: 'Web Dashboard',
    description: 'AI-powered chatbot interface with conversation flow builder, real-time analytics dashboard, and intent management system.',
    thumbnail: 'images/conversational/analyse.png',
    tags: ['Figma', 'Draw.io', 'Dashboard'],
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant',
    category: 'Web Application',
    description: 'Voice-enabled virtual assistant with task management, smart recommendations, and seamless calendar integration.',
    thumbnail: 'images/virtual-assistant-admin-panel/dashboard.png',
    tags: ['Adobe XD', 'Illustrator', 'Web App'],
  },
  {
    id: 'camera-mobile-app',
    title: 'Camera Mobile App',
    category: 'Mobile Application',
    description: 'Feature-rich camera app with AI-powered filters, professional editing tools, and social sharing capabilities.',
    thumbnail: 'images/mobile-app/file-cover.png',
    tags: ['Figma', 'Photoshop', 'Mobile'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-dolphin',
    projectId: 'dolphin-design-system',
    title: 'Dolphin AI Design System',
    category: 'Design System',
    overview: 'Built a comprehensive design system with 20+ reusable components, design tokens, and documentation to unify the product experience across multiple teams.',
    problem: 'Multiple product teams were designing independently, leading to inconsistent user experiences, duplicated effort, and slow design-to-development handoff.',
    role: 'Lead UI Designer — responsible for component design, token architecture, and documentation.',
    tools: ['Figma', 'Adobe XD'],
    process: [
      'Audited existing UI patterns across 3 products to identify common components and inconsistencies.',
      'Defined design tokens for colors, typography, spacing, and elevation to establish a shared visual language.',
      'Designed and documented 20+ components including Alerts, Buttons, Cards, Forms, Modals, Tables, and Navigation elements.',
      'Created usage guidelines and interaction specifications for each component to ensure correct implementation.',
    ],
    outcome: 'Reduced design-to-development handoff time by 40%. The system was adopted across 3 product teams, improving UI consistency and accelerating feature delivery.',
    screens: [
      'images/design-system/cover-page.png',
      'images/design-system/Components.png',
      'images/design-system/Typography.png',
    ],
  },
  {
    id: 'cs-depository',
    projectId: 'depository',
    title: 'Depository',
    category: 'Web Application',
    overview: 'Designed an enterprise document management platform that simplifies file organization, search, and team collaboration.',
    problem: 'Enterprise users struggled with existing file management tools — poor search, confusing folder hierarchies, and no collaboration features led to lost documents and wasted time.',
    role: 'UI/UX Designer — conducted user research, created wireframes and prototypes, and iterated based on usability testing.',
    tools: ['Figma', 'Photoshop'],
    process: [
      'Conducted user interviews with 15 enterprise users to understand pain points in document management workflows.',
      'Created information architecture and sitemap to organize document categories and navigation flows.',
      'Designed low-fidelity wireframes for key screens: dashboard, document viewer, search results, and upload flows.',
      'Built high-fidelity interactive prototypes and conducted 3 rounds of usability testing, iterating on feedback.',
    ],
    outcome: 'Improved document retrieval time by 60%. Achieved 92% user satisfaction score in post-launch surveys.',
    screens: [
      'images/depository/dashboard.png',
      'images/depository/ECN-View.png',
      'images/depository/ECN-Upload.png',
    ],
  },
  {
    id: 'cs-conversational-ai',
    projectId: 'conversational-ai',
    title: 'Conversational AI',
    category: 'Web Dashboard',
    overview: 'Designed an AI chatbot management platform with a visual conversation flow builder and real-time analytics dashboard.',
    problem: 'Business users needed to configure chatbot conversation flows without technical knowledge, but existing tools required coding expertise and lacked visibility into chatbot performance.',
    role: 'UI Designer — designed the flow builder interface, analytics dashboard, and intent management screens.',
    tools: ['Figma', 'Draw.io'],
    process: [
      'Interviewed stakeholders and analyzed competitor chatbot platforms to identify feature gaps and opportunities.',
      'Mapped user journeys for chatbot configuration, testing, and performance monitoring workflows.',
      'Designed a drag-and-drop visual flow builder with node-based conversation paths and conditional logic.',
      'Created a real-time analytics dashboard with conversation metrics, intent accuracy, and user satisfaction scores.',
    ],
    outcome: 'Reduced chatbot setup time by 50%. The dashboard was adopted by 200+ enterprise clients for monitoring chatbot performance.',
    screens: [
      'images/conversational/bot.png',
      'images/conversational/Build.png',
      'images/conversational/Deploy.png',
    ],
  },
  {
    id: 'cs-virtual-assistant',
    projectId: 'virtual-assistant',
    title: 'Virtual Assistant',
    category: 'Web Application',
    overview: 'Designed a voice-enabled virtual assistant interface with task management, smart recommendations, and calendar integration.',
    problem: 'Users needed a unified assistant that could manage tasks, provide contextual recommendations, and integrate with their calendar — but existing tools were fragmented and lacked voice input.',
    role: 'UI/UX Designer — conducted competitive analysis, created user personas, designed prototypes, and ran A/B tests.',
    tools: ['Adobe XD', 'Illustrator'],
    process: [
      'Analyzed 8 competitor virtual assistant products to identify strengths, weaknesses, and differentiation opportunities.',
      'Created 3 user personas based on research to guide design decisions for different use cases.',
      'Designed wireframes and high-fidelity prototypes for voice input, task management, and recommendation interfaces.',
      'Conducted A/B testing on 2 navigation patterns with 50 users to optimize task completion rates.',
    ],
    outcome: '35% increase in daily active users after launch. Task completion rate improved by 45% compared to the previous interface.',
    screens: [
      'images/virtual-assistant-admin-panel/dashboard.png',
      'images/virtual-assistant-admin-panel/Conversation.png',
      'images/virtual-assistant-admin-panel/survey-onboard.png',
    ],
  },
  {
    id: 'cs-camera-app',
    projectId: 'camera-mobile-app',
    title: 'Camera Mobile App',
    category: 'Mobile Application',
    overview: 'Designed a feature-rich mobile camera app with AI-powered filters, professional editing tools, and social sharing.',
    problem: 'Users wanted a single camera app that combined professional-grade editing with fun AI filters and easy social sharing, without the complexity of desktop editing software.',
    role: 'UI Designer — conducted market research, designed mockups, and iterated through user testing.',
    tools: ['Figma', 'Photoshop'],
    process: [
      'Researched top 10 camera apps on iOS and Android to identify feature trends and UX patterns.',
      'Sketched initial concepts for camera viewfinder, filter browser, editing workspace, and sharing flow.',
      'Created wireframes and high-fidelity mockups with focus on thumb-friendly controls and gesture-based editing.',
      'Conducted user testing sessions with 20 participants, iterating on filter discovery and editing tool placement.',
    ],
    outcome: '4.6-star app store rating at launch. 100K+ downloads in the first quarter with 72% 30-day retention rate.',
    screens: [
      'images/mobile-app/Reviews.png',
      'images/mobile-app/Checkout.png',
      'images/mobile-app/Confirmation.png',
    ],
  },
];

export const CONTACTS: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'senthiluideveloper@gmail.com',
    href: 'mailto:senthiluideveloper@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+91 9750912819',
    href: 'tel:+919750912819',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'Senthil Arunachalam',
    href: 'https://www.linkedin.com/in/senthil-arunachalam-a90067bb/',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z',
  },
];

export const EXPERIENCES = [
  {
    role: 'Senior UI Designer',
    company: 'KGISL Technologies Pvt Ltd',
    period: 'August 2016 — Present',
    location: 'Coimbatore',
    highlights: [
      'Collaborate closely with product managers, developers, and UX researchers to ensure seamless integration of UI elements and functionality.',
      'Created wireframes, prototypes, and high-fidelity designs using industry-standard tools such as Adobe XD and Figma.',
      'Mentor junior designers, providing guidance on best practices and design techniques.',
      'Developed and maintained a comprehensive design system to ensure consistency across products.',
    ],
  },
  {
    role: 'UI Designer',
    company: 'Genuine Infotech Pvt Ltd',
    period: 'August 2013 — 2016',
    location: 'Coimbatore',
    highlights: [
      'Designed and implemented user interfaces for web and mobile applications, contributing to a 25% increase in user retention.',
      'Participated in design reviews and provided constructive feedback to peers.',
      'Assisted in the creation of marketing materials and branding assets.',
    ],
  },
  {
    role: 'Website Designer',
    company: 'Univedge Technologies',
    period: 'August 2012 — 2013',
    location: 'Coimbatore',
    highlights: [
      'Created innovative website designs aligned with brand guidelines and client requirements.',
      'Converted PSD designs into high-quality, responsive HTML/CSS code with pixel-perfect accuracy.',
      'Employed semantic HTML5 elements to enhance structure and accessibility.',
    ],
  },
];
