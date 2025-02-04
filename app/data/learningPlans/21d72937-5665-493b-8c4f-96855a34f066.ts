import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Computer Science Exploration & Portfolio Development",

  overview: {
    studentBlurb:
      "Philip is an ambitious 8th-grade student at Jeffrey Trail Middle School who recently moved from Korea six months ago. Coming from an international school background, he's academically strong and proficient in English. While showing interest in computer science through his passion for gaming and having some basic Python experience, Philip is at an exploratory stage where he needs guidance to discover his specific interests within technology and set meaningful goals. A natural yet introverted leader in class settings, Philip plays cello in the Southern California honor orchestra and enjoys watching Liverpool soccer.",

    engagementBlurb:
      "This engagement focuses on helping Philip explore computer science through practical, hands-on projects while developing fundamental programming skills. Working with a mentor who can serve as both a technical guide and supportive brother figure, Philip will discover various aspects of computer science, with an emphasis on game development as an entry point. The program is designed to help Philip set meaningful goals, understand the evolving technology landscape, and create a personalized roadmap for his technical development. The pathfinding component will help Philip explore different areas within computer science and understand various career paths while building practical skills through projects that interest him.",
  },

  requirements: [
    "Session recordings via CC Notetaker for tracking progress and sharing updates",
    "Code repositories and project documentation for skill development",
    "Development environment setup and learning resources",
    "Project planning and documentation tools",
    "Availability: Mondays 4-5 PM PST (primary) or weekend afternoons",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Develop a strong foundation in computer science while exploring different areas of technology to set meaningful personal goals and create a clear path forward.",
    subGoals: [
      {
        title: "Technical Foundation",
        items: [
          "Master programming fundamentals through hands-on projects",
          "Learn industry-standard development practices and tools",
          "Explore different programming languages and their applications",
          "Build basic projects that demonstrate understanding and creativity",
        ],
      },
      {
        title: "Career Exploration",
        items: [
          "Research different areas within computer science and technology",
          "Understand various career paths and required skills",
          "Explore current industry trends and future directions",
          "Connect interests in gaming to potential career paths",
        ],
      },
      {
        title: "Personal Development",
        items: [
          "Set clear, achievable goals based on interests and capabilities",
          "Develop problem-solving skills and technical confidence",
          "Create a balanced approach to academic and technical growth",
          "Build motivation through engaging projects and clear progress",
        ],
      },
    ],
  },

  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Building Rapport (15 min)",
        items: [
          "Personal introductions and background sharing",
          "Discuss shared interests in gaming and technology",
          "Explore Philip's journey in computer science so far",
          "Share mentor's experiences and career path",
        ],
      },
      {
        title: "Exploration & Planning (30 min)",
        items: [
          "Review current programming knowledge and interests",
          "Discuss different areas of computer science",
          "Explore potential project ideas starting with game development",
          "Understand Philip's goals and aspirations",
        ],
      },
      {
        title: "Getting Started (15 min)",
        items: [
          "Set up initial development environment",
          "Plan first exploratory project",
          "Establish communication preferences",
          "Set expectations for next session",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in (10 min)",
        items: [
          "Personal updates and progress review",
          "Discuss any challenges or discoveries",
          "Share interesting tech news or developments",
          "Set session objectives",
        ],
      },
      {
        title: "Core Learning (35 min)",
        items: [
          "Technical concept exploration",
          "Hands-on project work",
          "Problem-solving practice",
          "Industry insights and discussions",
        ],
      },
      {
        title: "Reflection & Planning (15 min)",
        items: [
          "Review key learnings",
          "Update progress tracking",
          "Discuss next steps",
          "Set personal learning goals",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Exploration & Fundamentals",
        items: [
          "Explore different areas of computer science through discussions and demos",
          "Set up development environment and learn essential tools",
          "Begin basic game development project using Python",
          "Research current technology trends and career paths",
        ],
      },
      {
        title: "Month 2: Project Development & Goal Setting",
        items: [
          "Continue working on chosen project based on interests",
          "Explore additional programming concepts as needed",
          "Research and discuss different CS career paths",
          "Begin developing personalized learning roadmap",
        ],
      },
      {
        title: "Month 3: Skill Building & Future Planning",
        items: [
          "Complete initial project milestone",
          "Evaluate interests and set specific learning goals",
          "Explore potential next steps (competitions, new projects, etc.)",
          "Create long-term development plan",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Introduction to CS fields and career paths",
          "Setup development environment",
          "Begin exploring game development concepts",
          "Discuss different programming languages",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Start simple game project",
          "Learn basic programming concepts",
          "Explore industry tools and practices",
          "Discuss different CS applications",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Continue project development",
          "Introduce new programming concepts",
          "Explore CS education pathways",
          "Research technology trends",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Project refinement and feature addition",
          "Learn about software development practices",
          "Discuss potential specializations",
          "Evaluate interests and progress",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Complete project milestone",
          "Review learning progress",
          "Explore next project options",
          "Discuss long-term goals",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Finalize initial project",
          "Set specific future goals",
          "Create personalized roadmap",
          "Plan next development phase",
        ],
      },
    ],
  },
};

// const learningPlan: LearningPlan = {
//   title:
//     "Personalized Learning Plan: USACO Preparation & Computer Science Portfolio Development",

//   overview: {
//     studentBlurb:
//       "Philip is an ambitious 8th-grade student at Jeffrey Trail Middle School who recently moved from Korea six months ago. Coming from an international school background, he's academically strong and proficient in English. While expressing interest in computer science and aspiring to attend top universities like Stanford and Berkeley, he has basic Python programming experience but needs structure and motivation to deepen his commitment. A natural yet introverted leader in class settings, Philip plays cello in the Southern California honor orchestra, enjoys watching Liverpool soccer, and developed his interest in computer science through gaming.",

//     engagementBlurb:
//       "This personalized engagement combines focused USACO Bronze preparation with broader computer science exploration through game development projects. The program emphasizes building technical skills while incorporating pathfinding elements to help Philip explore and solidify his interests in computer science. Working with a male mentor who can serve as both a technical guide and supportive brother figure, Philip will develop a structured approach to computer science while building an engineering portfolio. The engagement is designed to provide clear milestones and direction while helping Philip build intrinsic motivation and confidence in his chosen path.",
//   },

//   requirements: [
//     "Session recordings via CC Notetaker for tracking progress and sharing updates",
//     "Code repositories and project documentation for portfolio development",
//     "Regular progress tracking toward USACO Bronze preparation",
//     "Development environment setup and learning resources",
//     "Availability: Mondays 4-5 PM PST (primary) or weekend afternoons",
//   ],

//   synthesizedGoal: {
//     highLevelGoal:
//       "Achieve USACO Bronze level while developing a strong foundation in computer science through project-based learning and portfolio development.",
//     subGoals: [
//       {
//         title: "Competition Preparation",
//         items: [
//           "Master fundamental algorithms and data structures required for USACO Bronze",
//           "Complete structured practice problems with increasing complexity",
//           "Develop problem-solving strategies and competition techniques",
//           "Build confidence through mock competitions and timed practice",
//         ],
//       },
//       {
//         title: "Technical Development",
//         items: [
//           "Strengthen Python programming skills through practical projects",
//           "Create a game development portfolio to showcase skills",
//           "Learn software development best practices",
//           "Master version control and documentation skills",
//         ],
//       },
//       {
//         title: "Personal Growth",
//         items: [
//           "Develop intrinsic motivation for computer science learning",
//           "Build confidence in technical abilities and problem-solving",
//           "Explore various aspects of computer science through projects",
//           "Create clear academic and extracurricular roadmap for high school",
//         ],
//       },
//     ],
//   },

//   sessionStructure: {
//     firstSessionAgenda: [
//       {
//         title: "Building Rapport (15 min)",
//         items: [
//           "Personal introductions and background sharing",
//           "Discuss shared interests in gaming and Liverpool soccer",
//           "Explore Philip's journey in computer science so far",
//           "Share mentor's path to computer science success",
//         ],
//       },
//       {
//         title: "Assessment & Planning (30 min)",
//         items: [
//           "Review Python knowledge and programming experience",
//           "Discuss USACO goals and competition preparation",
//           "Explore game development interests and project ideas",
//           "Assess current problem-solving approaches",
//         ],
//       },
//       {
//         title: "Getting Started (15 min)",
//         items: [
//           "Set up development environment and tools",
//           "Create study schedule and project timeline",
//           "Define first week's goals and assignments",
//           "Establish communication and meeting schedule",
//         ],
//       },
//     ],
//     generalSessionAgenda: [
//       {
//         title: "Check-in (10 min)",
//         items: [
//           "Personal updates and progress review",
//           "Discuss challenges and victories",
//           "Address any immediate concerns",
//           "Set session objectives",
//         ],
//       },
//       {
//         title: "Technical Work (35 min)",
//         items: [
//           "USACO problem practice and review",
//           "Game development project work",
//           "Code review and optimization",
//           "New concept introduction as needed",
//         ],
//       },
//       {
//         title: "Reflection & Planning (15 min)",
//         items: [
//           "Summarize key learnings",
//           "Update progress tracking",
//           "Set next session's goals",
//           "Assign practice problems and project work",
//         ],
//       },
//     ],
//   },

//   roadmap: {
//     monthlyRoadmap: [
//       {
//         title: "Month 1: Foundations & USACO Preparation",
//         items: [
//           "Establish strong Python fundamentals",
//           "Begin USACO Bronze level preparation",
//           "Start basic game development project",
//           "Create structured study routine",
//         ],
//       },
//       {
//         title: "Month 2: Problem-Solving & Project Development",
//         items: [
//           "Practice USACO Bronze level problems",
//           "Expand game project features",
//           "Learn essential algorithms",
//           "Begin portfolio documentation",
//         ],
//       },
//       {
//         title: "Month 3: Competition Focus & Portfolio Building",
//         items: [
//           "Intensive USACO preparation",
//           "Complete initial game project",
//           "Create engineering portfolio website",
//           "Prepare for first USACO attempt",
//         ],
//       },
//     ],
//     weeklyRoadmap: [
//       {
//         title: "Sessions 1-2",
//         items: [
//           "Establish mentorship relationship",
//           "Set up development environment",
//           "Begin USACO practice problems",
//           "Start game project planning",
//         ],
//       },
//       {
//         title: "Sessions 3-4",
//         items: [
//           "Review fundamental algorithms",
//           "Continue USACO practice",
//           "Begin game prototype",
//           "Learn version control basics",
//         ],
//       },
//       {
//         title: "Sessions 5-6",
//         items: [
//           "Tackle more complex USACO problems",
//           "Implement core game mechanics",
//           "Practice problem-solving strategies",
//           "Review and optimize code",
//         ],
//       },
//       {
//         title: "Sessions 7-8",
//         items: [
//           "Mock USACO contests",
//           "Add game features and polish",
//           "Debug and optimize code",
//           "Begin portfolio development",
//         ],
//       },
//       {
//         title: "Sessions 9-10",
//         items: [
//           "Intensive USACO preparation",
//           "Game testing and refinement",
//           "Portfolio documentation",
//           "Competition strategy review",
//         ],
//       },
//       {
//         title: "Sessions 11-12",
//         items: [
//           "Final USACO preparation",
//           "Complete game MVP",
//           "Finalize portfolio materials",
//           "Plan next development phase",
//         ],
//       },
//     ],
//   },
// };

export default learningPlan;
