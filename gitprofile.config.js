// gitprofile.config.js

const config = {
  github: {
    username: 'ThomasOli', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'thomasolinger',
    medium: 'Thomasolinger29',
    dev: 'thomasoli',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '9044816920',
    email: 'tolingerjiang@ufl.edu',
  },
  social: {
    linkedin: 'thomasolinger',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'thomasolinger29',
    dev: 'thomasoli',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '9044816920',
    email: 'olingerthomas95@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1BlLqf71Uc2-9A2a-6LZJlncj959MhmYR/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C++',
    'JavaScript',
    'TypeScript',
    'Java',
    'C',
    'C#',
    'Swift',
    'Dart',
    'React.js',
    'Node.js',
    'Firestore',
    'SQL',
    'Flutter',
    'ReactNative',
    'Firebase',
    'Git',
    'HTML',
    'CSS',
    'Unity',
    'Numpy & Pandas',
    'Redux',
    'MongoDB',
    'Express.js',
    'Next.js',
    'Material-UI',
    'Postman',
    'Vite',
    'Numpy & Pandas'
  ],
  experiences: [
    {
      company: 'The University of Florida ',
      position: 'Software Engineer',
      from: 'November 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'The BioVision Lab at the Florida Museum of Natural History ',
      position: 'Software Engineer',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.biovisionlab.com/',
    },
     {
      company: 'Florida Community Innovation',
      position: 'Software Engineering Intern',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://floridainnovation.org/',
    },
    {
      company: 'Dream Team Engineering ',
      position: 'Unity Software Lead',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://www.ufdreamteameng.org/',
    },
  ],
  certifications: [
    {
      name: 'Harvard\'s CS 50',
      body: 'Finished a comprehensive 11-week course on Introduction to Computer Science. The course includes labs, exams, and projects on C, Python, SQL, and JavaScript plus CSS and HTML',
      year: 'July 2020',
      link: 'https://pll.harvard.edu/course/cs50-introduction-computer-science'
    },
     {
      name: 'The Complete 2021 Flutter Development Bootcamp with Dart',
      body: 'Comprehensive course covering Flutter app development using Dart programming. Hands-on learning with real-world projects, UI design, backend integration, and more.Mastered responsive UI design, Firebase integration, and Flutter packages utilization. Published and deployed apps to both the Apple App Store and Google Play Store.',
      year: 'May 2022',
      link: 'https://appbrewery.com/courses/548873/certificate'
    },
     {
      name: 'iOS & Swift - The Complete iOS App Development Bootcamp',
      body: 'Comprehensive course covering iOS app development using Swift programming. Extensive hands-on experience in building real-world apps from scratch. Proficient in creating interactive user interfaces, animations, and responsive designs. In-depth knowledge of integrating APIs, databases, and backend functionality. Successfully published and deployed apps to the App Store, showcasing practical skills.',
      year: 'April 2023',
      link: 'https://www.udemy.com/certificate/UC-a8abe2e8-3494-4ab9-af99-535276ca1fee/'
    },
  ], 
  education: [
    {
      institution: 'University of Florida',
      degree: 'Computer Science',
      from: '2022',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Vocabulary & Pronounciation Learning App for English',
      description:
        'A Flutter application created for English learners to improve their vocabulary through an infinite list of difficult everyday words that can be saved to their own personal vocabulary list.',
      imageUrl: 'https://i.ibb.co/M6yS9sW/Wordy-App-Cover-Photo.png',
      link: 'https://www.youtube.com/watch?v=j5PxOFxjtL0',
    },
    {
      title: 'Image Generation Web Application',
      description:
        'A Full Stack MERN Dall-E image generation web-application using OpenAi\'s APi. The website features a community showcase where users can upload their generated images for the community to see and search through. ',
      imageUrl: 'https://i.ibb.co/6smHMxB/Screenshot-2023-08-30-191225.png',
      link: 'https://github.com/ThomasOli/FullStack-Dall-E',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Copyright © 2023 Thomas Olinger`
};

export default config;
