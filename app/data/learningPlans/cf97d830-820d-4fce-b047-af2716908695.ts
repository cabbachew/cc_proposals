import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  sessionsOccurred: true,
  title:
    "Personalized Learning Plan: Engineering Innovation & Community Impact Project",
  overview: {
    studentBlurb:
      'Rishi is a driven and academically accomplished 10th grader at Northview High School with impressive technical capabilities and initiative. Having developed sophisticated projects including a machine learning research paper on breast cancer prediction and an iOS stress management app ("Calm and Conquer"), he demonstrates strong execution abilities. Currently involved in robotics team electrical engineering and fabrication, ranked in U.S. Squash (Under 17), and teaching refugees through Fora, Rishi brings both technical prowess and community engagement mindset. While technically adept, Rishi seeks to develop his creative ideation skills and translate his combined interests in computer science, aerospace engineering, and community service into meaningful impact.',
    engagementBlurb:
      "This engagement will focus on establishing an aerospace engineering club at Northview High School while concurrently developing a STEM education nonprofit. The aerospace club will pursue two parallel tracks: preparation for the NASA CubeSat Launch Initiative and participation in the American Rocketry Challenge. Given Rishi's strong execution abilities but desire for creative guidance, we'll focus first on securing school sponsorship and developing compelling proposals that demonstrate student leadership while minimizing teacher burden. The nonprofit component will explore innovative ways to bring hands-on STEM education to younger students, potentially through after-school programs at local elementary schools.",
  },
  requirements: [
    "Session recordings via CC Notetaker for documenting project progress and maintaining detailed session notes",
    "Project documentation including NASA CubeSat proposal drafts, club establishment materials, and nonprofit planning documents",
    "Teacher sponsorship confirmation (exploring Mr. Kemp as primary candidate) and club application materials meeting Northview's requirements (15 member signatures, clear school benefit statement)",
    "Access to engineering lab space and equipment for potential after-school club activities",
    "Weekend availability (Saturday/Sunday) for regular mentorship sessions, with flexibility during robotics competition season",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Establish sustainable STEM initiatives combining aerospace engineering and education through parallel development of a high school aerospace club and community-focused nonprofit, while building a compelling portfolio for future academic pursuits.",
    subGoals: [
      {
        title: "School Club Establishment",
        items: [
          "Secure teacher sponsorship with minimal oversight requirements",
          "Develop compelling club application highlighting student leadership",
          "Gather required 15 member signatures and organizational documentation",
          "Create detailed proposals for both CubeSat and rocketry initiatives",
          "Establish sustainable leadership structure for club continuity",
        ],
      },
      {
        title: "Technical Project Development",
        items: [
          "Research NASA CubeSat Launch Initiative requirements and deadlines",
          "Prepare for American Rocketry Challenge participation",
          "Develop project timeline accounting for school year constraints",
          "Create resource and equipment requirements list",
          "Build mentor network including local technical experts",
        ],
      },
      {
        title: "Community Education Initiative",
        items: [
          "Identify target elementary schools and after-school programs",
          "Develop hands-on STEM curriculum suitable for available spaces",
          "Create implementation plan utilizing existing after-school infrastructure",
          "Build partnerships with local educational institutions",
          "Design sustainable program that combines CS and aerospace components",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "CubeSat Documentation Review (20 min)",
        items: [
          "Discuss key findings from NASA documentation review",
          "Identify critical requirements and deadlines",
          "Map out proposal development timeline",
        ],
      },
      {
        title: "Club Establishment Strategy (25 min)",
        items: [
          "Review prioritized list of potential teacher sponsors",
          "Develop pitch focusing on student leadership",
          "Create action plan for approaching Mr. Kemp",
        ],
      },
      {
        title: "Nonprofit Planning (15 min)",
        items: [
          "Explore after-school program implementation options",
          "Identify potential elementary school partners",
          "Outline initial curriculum ideas",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Progress Review (10 min)",
        items: [
          "Review action items from previous session",
          "Address any blockers or challenges",
          "Update project timelines",
        ],
      },
      {
        title: "Core Development (40 min)",
        items: [
          "Focus area work based on current priorities",
          "Documentation and proposal development",
          "Planning and resource identification",
          "Stakeholder communication strategy",
        ],
      },
      {
        title: "Next Steps (10 min)",
        items: [
          "Define specific action items",
          "Set timeline for next milestones",
          "Schedule any needed coordination",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Complete NASA CubeSat and rocketry competition documentation review",
          "Secure teacher sponsorship commitment",
          "Develop initial project proposals",
          "Begin member recruitment planning",
          "Research local STEM education landscape",
        ],
      },
      {
        title: "Month 2: Initiative Launch",
        items: [
          "Submit club application with required signatures",
          "Start CubeSat proposal development",
          "Create club structure and meeting plans",
          "Identify community education pilot location",
          "Begin curriculum development",
        ],
      },
      {
        title: "Month 3: Program Development",
        items: [
          "Establish regular club meeting schedule",
          "Continue CubeSat proposal preparation",
          "Begin rocketry competition preparation",
          "Launch pilot education program",
          "Build mentor and partner network",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2 (Completed)",
        items: [
          "Introduced engagement structure and goals",
          "Explored NASA CubeSat and rocketry initiatives",
          "Discussed project feasibility and constraints",
          "Identified key school requirements",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Review NASA documentation findings",
          "Develop teacher sponsorship strategy",
          "Create club proposal outline",
          "Research after-school program options",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Refine project proposals",
          "Begin member recruitment",
          "Develop curriculum framework",
          "Identify additional resources needed",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Finalize club application",
          "Create detailed project timelines",
          "Begin technical documentation",
          "Plan pilot program implementation",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Launch club activities",
          "Continue proposal development",
          "Establish partner relationships",
          "Begin program execution",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Review initiative progress",
          "Adjust plans based on feedback",
          "Document early successes",
          "Plan next phase of development",
        ],
      },
    ],
  },
};

// const learningPlan: LearningPlan = {
//   title:
//     "Personalized Learning Plan: Engineering Innovation & Social Impact Project",
//   overview: {
//     studentBlurb:
//       "Rishi is a driven and academically accomplished 10th grader at Northview High School with a strong foundation in mathematics and engineering. With a 101+ GPA and multiple AP courses including Calculus BC, he demonstrates exceptional academic ability. Beyond academics, Rishi is a well-rounded student who ranks in U.S. Squash (Under 17), has played tabla for 6-7 years, and actively teaches refugees through Fora. While technically proficient in app development and engaged in robotics, Rishi is looking to develop his creative ideation skills and translate his technical abilities into meaningful impact.",
//     engagementBlurb:
//       "This engagement will focus on developing an innovative technical project that combines Rishi's interests in computer science, aerospace engineering, and community service. Given his strong execution abilities but desire for creative guidance, we'll begin by exploring various project possibilities that align with his skills and interests. The pathfinding component will help identify opportunities that bridge his technical expertise with social impact, while building toward a concrete portfolio piece that strengthens his college aspirations.",
//   },
//   requirements: [
//     "Session recordings via CC Notetaker for documenting project progress and maintaining detailed session notes",
//     "Development environment setup for programming and engineering tools",
//     "Project documentation including technical specifications, design documents, and progress updates",
//     "GitHub repository or similar platform for code management and portfolio development",
//     "Weekend availability (Saturday/Sunday) for regular mentorship sessions",
//   ],
//   synthesizedGoal: {
//     highLevelGoal:
//       "Develop and launch a technology-driven community initiative that demonstrates original thinking, leverages Rishi's technical skills, and creates meaningful social impact while building a compelling portfolio for future academic pursuits.",
//     subGoals: [
//       {
//         title: "Project Ideation and Planning",
//         items: [
//           "Explore intersection of computer science, aerospace, and community service",
//           "Evaluate 3-4 potential project concepts for feasibility and impact",
//           "Define specific technical requirements and learning objectives",
//           "Create detailed project timeline with measurable milestones",
//         ],
//       },
//       {
//         title: "Technical Skill Development",
//         items: [
//           "Identify and master key technologies needed for project implementation",
//           "Build proof-of-concept prototypes to validate approach",
//           "Document technical learning and development process",
//           "Create portfolio materials showcasing technical achievements",
//         ],
//       },
//       {
//         title: "Community Impact and Leadership",
//         items: [
//           "Define target community and specific problem to address",
//           "Develop plan for community engagement and feedback",
//           "Create framework for measuring project impact",
//           "Build sustainability plan for long-term project maintenance",
//         ],
//       },
//     ],
//   },
//   sessionStructure: {
//     firstSessionAgenda: [
//       {
//         title: "Introduction (15 min)",
//         items: [
//           "Share backgrounds and establish rapport",
//           "Discuss Rishi's technical experience and interests",
//           "Review successful examples of similar student projects",
//         ],
//       },
//       {
//         title: "Project Exploration (30 min)",
//         items: [
//           "Brainstorm potential project directions",
//           "Evaluate initial ideas for feasibility",
//           "Identify required resources and potential constraints",
//           "Begin narrowing down project focus",
//         ],
//       },
//       {
//         title: "Planning & Next Steps (15 min)",
//         items: [
//           "Outline action items for project research",
//           "Set up project documentation system",
//           "Schedule next session and define preparation tasks",
//         ],
//       },
//     ],
//     generalSessionAgenda: [
//       {
//         title: "Progress Review (10 min)",
//         items: [
//           "Review work completed since last session",
//           "Address any blockers or challenges",
//           "Discuss any new insights or ideas",
//         ],
//       },
//       {
//         title: "Core Development (40 min)",
//         items: [
//           "Technical work on current project phase",
//           "Skill development and knowledge transfer",
//           "Testing and refinement of implementations",
//           "Documentation and portfolio updates",
//         ],
//       },
//       {
//         title: "Planning & Reflection (10 min)",
//         items: [
//           "Summarize session achievements",
//           "Set specific goals for next week",
//           "Update project timeline and milestones",
//         ],
//       },
//     ],
//   },
//   roadmap: {
//     monthlyRoadmap: [
//       {
//         title: "Month 1: Project Foundation",
//         items: [
//           "Complete project ideation and feasibility analysis",
//           "Research similar initiatives and technical requirements",
//           "Create detailed project specification",
//           "Begin basic prototype development",
//           "Set up development environment and documentation system",
//         ],
//       },
//       {
//         title: "Month 2: Core Development",
//         items: [
//           "Implement core technical components",
//           "Develop basic user interface or interaction model",
//           "Create project website or documentation",
//           "Begin community outreach and feedback collection",
//           "Complete first milestone demonstration",
//         ],
//       },
//       {
//         title: "Month 3: Impact & Refinement",
//         items: [
//           "Expand project features based on feedback",
//           "Implement impact measurement system",
//           "Create presentation materials and documentation",
//           "Begin planning for project sustainability",
//           "Prepare initial portfolio materials",
//         ],
//       },
//     ],
//     weeklyRoadmap: [
//       {
//         title: "Sessions 1-2",
//         items: [
//           "Explore and evaluate project ideas",
//           "Research technical requirements",
//           "Begin project specification document",
//           "Set up development environment",
//         ],
//       },
//       {
//         title: "Sessions 3-4",
//         items: [
//           "Finalize project concept",
//           "Create detailed technical plan",
//           "Begin prototype development",
//           "Set up documentation system",
//         ],
//       },
//       {
//         title: "Sessions 5-6",
//         items: [
//           "Continue core development",
//           "Implement basic features",
//           "Create project website",
//           "Begin user testing plan",
//         ],
//       },
//       {
//         title: "Sessions 7-8",
//         items: [
//           "Complete basic prototype",
//           "Start community feedback collection",
//           "Refine technical implementation",
//           "Update portfolio materials",
//         ],
//       },
//       {
//         title: "Sessions 9-10",
//         items: [
//           "Implement advanced features",
//           "Continue user testing",
//           "Refine documentation",
//           "Plan for project expansion",
//         ],
//       },
//       {
//         title: "Sessions 11-12",
//         items: [
//           "Complete core functionality",
//           "Prepare presentation materials",
//           "Finalize initial documentation",
//           "Plan next phase of development",
//         ],
//       },
//     ],
//   },
// };

export default learningPlan;
