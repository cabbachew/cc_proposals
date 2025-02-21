import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  sessionsOccurred: true,
  title: "Personalized Learning Plan: Sound Science & Technology Exploration",
  overview: {
    studentBlurb:
      "Oliver is an enthusiastic and academically accomplished 8th grader at Harvard Westlake who demonstrates strong initiative in pursuing STEM activities. Already involved in math club and a venture economics club, he shows both intellectual curiosity and time management skills. Oliver has expressed particular fascination with acoustics and sound applications, demonstrating quick understanding of circuit concepts during initial Arduino discussions. His natural curiosity and willingness to learn are evident in his thoughtful questions about breadboards, resistors, and LEDs.",
    engagementBlurb:
      "This engagement will focus on building hands-on electronics skills through Arduino projects while exploring acoustic science applications. We'll begin with fundamental circuit skills through LED projects before progressing to sound-related projects like radar/sonar. In parallel, we're laying groundwork for science fair participation in early high school, with concrete plans to compete in the LA County Science Fair by spring 2026. Special emphasis will be placed on documentation and project management to develop strong engineering practices early.",
  },
  requirements: [
    "Session recordings via CC Notetaker for documenting progress and maintaining detailed notes",
    "Arduino Uno Rev3 and basic electronics components (breadboard, jumper wires, LEDs, resistors)",
    "Phone/camera setup for sharing circuit work during remote sessions",
    "Project documentation including circuit diagrams and code",
    "Timeline tracking through Notion for science fair planning",
    "Weekend availability for regular mentorship sessions",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Develop strong fundamentals in electronics and acoustic science while preparing for successful science fair participation in early high school years.",
    subGoals: [
      {
        title: "Technical Skill Development",
        items: [
          "Master basic circuit concepts through LED projects",
          "Learn Arduino programming fundamentals",
          "Progress to sound/acoustic-based projects",
          "Develop proper documentation habits",
        ],
      },
      {
        title: "Science Fair Preparation",
        items: [
          "Complete LA County Science Fair registration by December 2025",
          "Secure teacher sponsorship before summer 2025",
          "Develop competitive project proposal",
          "Create detailed project timeline",
        ],
      },
      {
        title: "Extracurricular Planning",
        items: [
          "Explore Science Olympiad participation for high school",
          "Research additional STEM competition opportunities",
          "Consider summer program options",
          "Build foundation for engineering-focused activities",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Arduino Project Setup (30 min)",
        items: [
          "Review purchased components",
          "Set up development environment",
          "Test basic circuit connections",
          "Begin LED project implementation",
        ],
      },
      {
        title: "Circuit Theory (20 min)",
        items: [
          "Cover fundamental circuit concepts",
          "Discuss voltage, current, and resistance",
          "Review LED circuit requirements",
          "Practice breadboard usage",
        ],
      },
      {
        title: "Planning & Next Steps (10 min)",
        items: [
          "Document initial progress",
          "Define homework assignments",
          "Set specific goals for next session",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Progress Review (10 min)",
        items: [
          "Review homework completion",
          "Discuss any challenges",
          "Check component functionality",
        ],
      },
      {
        title: "Project Work (40 min)",
        items: [
          "Build and test circuits",
          "Debug any issues",
          "Document progress",
          "Cover relevant theory",
        ],
      },
      {
        title: "Wrap-up (10 min)",
        items: [
          "Summarize key learnings",
          "Plan next steps",
          "Assign any preparation work",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Electronics Foundations",
        items: [
          "Complete basic LED circuit project",
          "Master breadboard and component usage",
          "Learn Arduino programming basics",
          "Begin radar/sonar project planning",
        ],
      },
      {
        title: "Month 2: Sound Project Development",
        items: [
          "Build and test radar/sonar circuit",
          "Develop data collection capabilities",
          "Create project documentation",
          "Explore acoustic applications",
        ],
      },
      {
        title: "Month 3: Project Planning",
        items: [
          "Research potential science fair projects",
          "Identify required materials and support",
          "Draft initial project proposals",
          "Contact potential teacher sponsors",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2 (Completed)",
        items: [
          "Introduced engagement structure",
          "Planned science fair timeline",
          "Discussed Arduino components",
          "Covered basic circuit concepts",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Build LED circuit",
          "Write basic Arduino code",
          "Test circuit functionality",
          "Document process",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Start radar/sonar project",
          "Learn sensor interfacing",
          "Begin data collection",
          "Explore acoustic principles",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Complete radar/sonar build",
          "Analyze collected data",
          "Document findings",
          "Plan next project phase",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Research science fair options",
          "Begin project brainstorming",
          "Identify required resources",
          "Draft project outline",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Finalize project direction",
          "Create detailed timeline",
          "Plan summer preparation",
          "Set long-term goals",
        ],
      },
    ],
  },
};

// const learningPlan: LearningPlan = {
//   title: "Personalized Learning Plan: Sound Science & Technology Exploration",
//   overview: {
//     studentBlurb:
//       "Oliver is an enthusiastic and well-rounded 8th grader at Harvard Westlake in Los Angeles who demonstrates strong academic abilities, particularly in math and science. As an active student-athlete participating in soccer, golf, and cross country, while also engaging in STEM club, debate team, and Model UN, Oliver shows both intellectual curiosity and diverse interests. He has expressed particular fascination with acoustics and sound applications, while seeking to develop deeper interests outside the classroom and find inspiring role models.",
//     engagementBlurb:
//       "This engagement will focus on exploring the science of acoustics through both theoretical understanding and practical applications. Given Oliver's natural curiosity and desire for guidance, we'll begin by examining fascinating real-world applications of sound technology while building foundational knowledge. The pathfinding component will help identify potential long-term projects and future involvement opportunities in engineering and technology fields, particularly those involving acoustic applications.",
//   },
//   requirements: [
//     "Session recordings via CC Notetaker for documenting progress and maintaining detailed notes",
//     "Access to scientific articles and educational materials about acoustics and sound applications",
//     "Project documentation including research notes, exploration summaries, and potential project ideas",
//     "Regular discussion materials about real-world applications of acoustics (submarines, ultrasound, etc.)",
//     "Weekend availability for consistent mentorship sessions",
//   ],
//   synthesizedGoal: {
//     highLevelGoal:
//       "Develop a strong foundation in acoustic science while identifying specific areas of interest and potential future involvement opportunities in engineering and technology fields.",
//     subGoals: [
//       {
//         title: "Acoustic Science Exploration",
//         items: [
//           "Build fundamental understanding of sound physics and acoustics",
//           "Examine real-world applications like submarine sonar and medical ultrasound",
//           "Analyze current technological developments in acoustics",
//           "Connect theoretical concepts to practical applications",
//         ],
//       },
//       {
//         title: "Project and Interest Development",
//         items: [
//           "Identify 2-3 specific areas of interest within acoustics",
//           "Research potential hands-on project opportunities",
//           "Explore acoustic-related engineering career paths",
//           "Document learning journey and discoveries",
//         ],
//       },
//       {
//         title: "Future Opportunity Planning",
//         items: [
//           "Research relevant non-profit and organizational opportunities for 10th-12th grade",
//           "Identify summer programs and internship possibilities",
//           "Create timeline for future involvement",
//           "Build network of contacts in acoustics field",
//         ],
//       },
//     ],
//   },
//   sessionStructure: {
//     firstSessionAgenda: [
//       {
//         title: "Introduction (15 min)",
//         items: [
//           "Get to know each other's backgrounds and interests",
//           "Discuss Oliver's fascination with sound and acoustics",
//           "Share examples of interesting acoustic applications",
//         ],
//       },
//       {
//         title: "Interest Exploration (30 min)",
//         items: [
//           "Review fundamental concepts of sound and acoustics",
//           "Discuss various applications and fields of study",
//           "Identify specific areas of interest to explore further",
//           "Begin creating learning roadmap",
//         ],
//       },
//       {
//         title: "Planning & Next Steps (15 min)",
//         items: [
//           "Set specific goals for next session",
//           "Identify initial research topics",
//           "Schedule regular meeting time",
//         ],
//       },
//     ],
//     generalSessionAgenda: [
//       {
//         title: "Check-in and Review (10 min)",
//         items: [
//           "Discuss previous week's discoveries",
//           "Share any new interests or questions",
//           "Review progress toward goals",
//         ],
//       },
//       {
//         title: "Core Learning (40 min)",
//         items: [
//           "Explore new acoustic concepts or applications",
//           "Review relevant articles or materials",
//           "Discuss real-world connections",
//           "Document key learnings and interests",
//         ],
//       },
//       {
//         title: "Reflection and Planning (10 min)",
//         items: [
//           "Summarize key takeaways",
//           "Set next session's focus",
//           "Define any research tasks",
//         ],
//       },
//     ],
//   },
//   roadmap: {
//     monthlyRoadmap: [
//       {
//         title: "Month 1: Foundations",
//         items: [
//           "Establish baseline understanding of acoustic principles",
//           "Explore various applications of sound technology",
//           "Begin identifying specific areas of interest",
//           "Create initial list of potential future opportunities",
//           "Start documenting learning journey",
//         ],
//       },
//       {
//         title: "Month 2: Deep Dive",
//         items: [
//           "Focus on 2-3 selected areas of interest",
//           "Research specific applications in detail",
//           "Explore potential project ideas",
//           "Investigate summer program opportunities",
//           "Build resource library",
//         ],
//       },
//       {
//         title: "Month 3: Future Planning",
//         items: [
//           "Develop concrete project proposals",
//           "Research relevant organizations and non-profits",
//           "Create timeline for future involvement",
//           "Outline next steps for continued learning",
//           "Plan long-term engagement strategy",
//         ],
//       },
//     ],
//     weeklyRoadmap: [
//       {
//         title: "Sessions 1-2",
//         items: [
//           "Introduction to sound physics and acoustics",
//           "Overview of real-world applications",
//           "Initial interest assessment",
//           "Begin resource collection",
//         ],
//       },
//       {
//         title: "Sessions 3-4",
//         items: [
//           "Deep dive into selected applications",
//           "Research current developments",
//           "Begin identifying specific interests",
//           "Explore potential projects",
//         ],
//       },
//       {
//         title: "Sessions 5-6",
//         items: [
//           "Study specific case studies",
//           "Research future opportunities",
//           "Develop project ideas",
//           "Begin opportunity mapping",
//         ],
//       },
//       {
//         title: "Sessions 7-8",
//         items: [
//           "Analyze potential career paths",
//           "Research organizations and programs",
//           "Refine areas of interest",
//           "Update learning roadmap",
//         ],
//       },
//       {
//         title: "Sessions 9-10",
//         items: [
//           "Focus on specific project planning",
//           "Research involvement opportunities",
//           "Build contact network",
//           "Document progress",
//         ],
//       },
//       {
//         title: "Sessions 11-12",
//         items: [
//           "Finalize initial project proposals",
//           "Create opportunity timeline",
//           "Plan next phase of learning",
//           "Set long-term goals",
//         ],
//       },
//     ],
//   },
// };

export default learningPlan;
