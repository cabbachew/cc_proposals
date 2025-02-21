import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  sessionsOccurred: true,
  title:
    "Personalized Learning Plan: Aerospace Engineering & Project Development",
  overview: {
    studentBlurb:
      "Aryan is a focused and analytical high school student from Belmont, CA who demonstrates exceptional dedication to physics, math, and aerospace engineering. Already having a patent-pending project and showing strong capabilities in sustained focus, he excels at diving deep into subjects while developing his own ways of understanding complex concepts. Through initial sessions, Aryan has demonstrated genuine enthusiasm for hands-on engineering projects and a desire to create long-term, meaningful work that can span 1-1.5 years.",
    engagementBlurb:
      "This engagement will focus on developing a sophisticated ground station project for tracking and receiving signals from satellites, including the International Space Station (ISS). The project combines Aryan's interests in physics and engineering while building executive functioning skills through structured project management. We'll work towards potential science fair participation, with specific focus on the LA County Science Fair and Regeneron ISEF in spring 2026. The pathfinding component will help identify additional opportunities in aerospace/engineering, including connecting with the broader aerospace community through organizations like AIAA.",
  },
  requirements: [
    "Session recordings via CC Notetaker for documenting progress",
    "Software-defined radio (SDR) and associated hardware components",
    "GNU Radio software environment and Linux subsystem setup",
    "Project tracking through Notion for timeline management",
    "Access to backyard space for ground station setup",
    "Background readings on radio communications and satellite tracking",
    "Weekend afternoon/evening availability for mentorship sessions",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Design, build and operate a satellite ground station capable of tracking and receiving signals from the International Space Station while developing strong engineering documentation and project management skills suitable for science fair competition.",
    subGoals: [
      {
        title: "Technical Development",
        items: [
          "Master fundamentals of software-defined radio",
          "Build and configure ground station hardware",
          "Develop satellite tracking capabilities",
          "Create documentation of technical process",
        ],
      },
      {
        title: "Competition Preparation",
        items: [
          "Research science fair requirements and deadlines",
          "Identify teacher sponsor by end of school year",
          "Develop research question around ground station",
          "Create project timeline aligned with competition dates",
        ],
      },
      {
        title: "Professional Development",
        items: [
          "Join AIAA student membership program",
          "Connect with aerospace community",
          "Research mentorship opportunities",
          "Build portfolio of engineering work",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Hardware Planning (25 min)",
        items: [
          "Review required equipment list",
          "Discuss component specifications",
          "Plan purchase timeline",
          "Consider setup requirements",
        ],
      },
      {
        title: "Software Setup (25 min)",
        items: [
          "Install Linux subsystem",
          "Configure GNU Radio",
          "Review basic radio concepts",
          "Test initial setup",
        ],
      },
      {
        title: "Project Planning (10 min)",
        items: [
          "Update project timeline",
          "Set specific goals",
          "Define next steps",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Progress Review (10 min)",
        items: [
          "Review completed tasks",
          "Address technical challenges",
          "Update project timeline",
          "Check hardware status",
        ],
      },
      {
        title: "Technical Development (40 min)",
        items: [
          "Build/configure components",
          "Test functionality",
          "Debug issues",
          "Document progress",
        ],
      },
      {
        title: "Planning (10 min)",
        items: [
          "Set next milestones",
          "Define action items",
          "Schedule next steps",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Project Foundation",
        items: [
          "Order ground station components",
          "Set up software environment",
          "Begin learning radio fundamentals",
          "Create detailed project plan",
          "Join AIAA student membership",
        ],
      },
      {
        title: "Month 2: Initial Build",
        items: [
          "Assemble basic ground station",
          "Configure software-defined radio",
          "Test basic signal reception",
          "Document build process",
          "Research science fair requirements",
        ],
      },
      {
        title: "Month 3: Advanced Development",
        items: [
          "Implement tracking capabilities",
          "Begin ISS signal reception attempts",
          "Develop research question",
          "Contact potential teacher sponsors",
          "Plan competition strategy",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2 (Completed)",
        items: [
          "Explored project options",
          "Selected ground station project",
          "Discussed science fair timeline",
          "Created initial component list",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Complete component purchase list",
          "Begin software environment setup",
          "Review background materials",
          "Plan antenna placement",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Start hardware assembly",
          "Configure SDR software",
          "Test basic functionality",
          "Document initial setup",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Implement basic tracking",
          "Test signal reception",
          "Troubleshoot issues",
          "Begin research planning",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Enhance tracking capabilities",
          "Develop automation features",
          "Document procedures",
          "Plan science fair approach",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Test ISS tracking",
          "Refine automation",
          "Prepare documentation",
          "Define next project phase",
        ],
      },
    ],
  },
};

// const learningPlan: LearningPlan = {
//   title:
//     "Personalized Learning Plan: Aerospace Engineering & Project Development",
//   overview: {
//     studentBlurb:
//       "Aryan is a focused and analytical high school student from Belmont, CA who demonstrates exceptional dedication to physics, math, and aerospace engineering. With a patent-pending project already under his belt, he shows strong capabilities in sustained focus and project completion. As a perfectionist who learns quickly and develops his own ways of understanding complex concepts, Aryan excels at diving deep into subjects. While academically strong, he seeks to develop better time management and task transition skills to channel his perfectionist tendencies more effectively.",
//     engagementBlurb:
//       "This engagement will focus on developing structured approaches to engineering projects while building executive functioning skills. Given Aryan's natural inclination for deep focus and perfectionism, we'll implement systems to help balance thoroughness with progress. The pathfinding component will help identify and evaluate strategic extracurricular opportunities in aerospace/aeronautical engineering, while the executive functioning focus will provide concrete tools for project management and time allocation.",
//   },
//   requirements: [
//     "Session recordings via CC Notetaker for documenting progress and maintaining detailed notes",
//     "Project management and tracking tools for developing executive functioning skills",
//     "Documentation templates for engineering projects and research",
//     "Progress tracking system for balancing depth with forward momentum",
//     "Weekend afternoon/evening availability for mentorship sessions",
//   ],
//   synthesizedGoal: {
//     highLevelGoal:
//       "Develop effective project management and executive functioning skills while pursuing meaningful initiatives in aerospace engineering, creating a strong foundation for future academic and professional pursuits.",
//     subGoals: [
//       {
//         title: "Executive Functioning Development",
//         items: [
//           "Create structured checklist systems for project planning",
//           "Implement time management strategies for task transitions",
//           "Develop balanced approaches to depth vs. progress",
//           "Build sustainable organizational habits",
//         ],
//       },
//       {
//         title: "Engineering Project Development",
//         items: [
//           "Identify strategic project opportunities in aerospace",
//           "Create structured development timelines",
//           "Document research and progress systematically",
//           "Build portfolio of engineering achievements",
//         ],
//       },
//       {
//         title: "Academic Planning",
//         items: [
//           "Research relevant extracurricular opportunities",
//           "Identify summer programs and internships",
//           "Plan long-term project progression",
//           "Build connections in aerospace field",
//         ],
//       },
//     ],
//   },
//   sessionStructure: {
//     firstSessionAgenda: [
//       {
//         title: "Introduction & Goal Setting (15 min)",
//         items: [
//           "Review current projects and interests",
//           "Discuss specific areas for growth",
//           "Identify immediate priorities",
//           "Establish communication preferences",
//         ],
//       },
//       {
//         title: "Systems Development (30 min)",
//         items: [
//           "Introduce project management tools",
//           "Create initial tracking systems",
//           "Set up documentation templates",
//           "Define progress metrics",
//         ],
//       },
//       {
//         title: "Planning & Next Steps (15 min)",
//         items: [
//           "Outline immediate action items",
//           "Schedule regular check-ins",
//           "Define preparation for next session",
//         ],
//       },
//     ],
//     generalSessionAgenda: [
//       {
//         title: "Progress Review (10 min)",
//         items: [
//           "Review completed tasks",
//           "Assess time management",
//           "Address any challenges",
//           "Celebrate successes",
//         ],
//       },
//       {
//         title: "Core Development (40 min)",
//         items: [
//           "Work on current project phase",
//           "Apply organizational strategies",
//           "Document progress",
//           "Problem-solve obstacles",
//         ],
//       },
//       {
//         title: "Planning (10 min)",
//         items: [
//           "Set next session goals",
//           "Update project timeline",
//           "Define action items",
//         ],
//       },
//     ],
//   },
//   roadmap: {
//     monthlyRoadmap: [
//       {
//         title: "Month 1: Foundation Building",
//         items: [
//           "Establish project management systems",
//           "Create documentation templates",
//           "Identify key project opportunities",
//           "Begin initial research phase",
//           "Develop time management strategies",
//         ],
//       },
//       {
//         title: "Month 2: Project Development",
//         items: [
//           "Launch primary engineering project",
//           "Implement tracking systems",
//           "Research relevant opportunities",
//           "Build initial portfolio materials",
//           "Refine time management approach",
//         ],
//       },
//       {
//         title: "Month 3: Growth & Expansion",
//         items: [
//           "Evaluate project progress",
//           "Research summer opportunities",
//           "Plan next project phase",
//           "Document achievements",
//           "Adjust systems as needed",
//         ],
//       },
//     ],
//     weeklyRoadmap: [
//       {
//         title: "Sessions 1-2",
//         items: [
//           "Create organizational systems",
//           "Set up tracking tools",
//           "Define project scope",
//           "Begin preliminary research",
//         ],
//       },
//       {
//         title: "Sessions 3-4",
//         items: [
//           "Review research findings",
//           "Develop project timeline",
//           "Create documentation structure",
//           "Set specific milestones",
//         ],
//       },
//       {
//         title: "Sessions 5-6",
//         items: [
//           "Begin project implementation",
//           "Test tracking systems",
//           "Adjust timeframes as needed",
//           "Document initial progress",
//         ],
//       },
//       {
//         title: "Sessions 7-8",
//         items: [
//           "Continue project development",
//           "Review time management",
//           "Update documentation",
//           "Plan next phase",
//         ],
//       },
//       {
//         title: "Sessions 9-10",
//         items: [
//           "Evaluate system effectiveness",
//           "Adjust strategies as needed",
//           "Research opportunities",
//           "Update portfolio materials",
//         ],
//       },
//       {
//         title: "Sessions 11-12",
//         items: [
//           "Review overall progress",
//           "Plan next project phase",
//           "Document achievements",
//           "Set long-term goals",
//         ],
//       },
//     ],
//   },
// };

export default learningPlan;
