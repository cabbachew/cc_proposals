import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  sessionsOccurred: true,
  title:
    "Personalized Learning Plan: Building Confidence Through Science and Core Skills",

  overview: {
    studentBlurb:
      "Maddie is a caring and curious 6th-grade homeschooled student from South Atlanta who shows natural enthusiasm for hands-on science and engineering experiments. While excelling in project-based learning, she's working to rebuild confidence in math and English following pandemic-related learning challenges. A passionate dancer who enjoys comics and creative activities, Maddie combines artistic interests with scientific curiosity. She dreams of pursuing a career in the medical field and is eager to explore science through engaging experiments while strengthening her foundational academic skills. Through her first session, Maddie has demonstrated she is a visual learner who benefits from seeing problems written out and uses counting strategies to process mathematical concepts.",

    engagementBlurb:
      "This personalized engagement combines core academic support with hands-on science exploration to create an enjoyable learning experience. Working with a supportive mentor, Maddie will strengthen her math and English foundations while engaging in exciting science experiments that spark curiosity and build confidence. The program emphasizes creating a safe, positive environment where Maddie can develop communication skills, explore her interests, and gain self-assurance through balanced academic growth. Sessions will be structured to accommodate her visual learning style and incorporate multiple approaches to problem-solving, allowing her to process information in ways that work best for her.",
  },

  requirements: [
    "Session recordings via CC Notetaker for progress tracking",
    "Visual aids and written examples for both math and English practice",
    "Materials and instructions for hands-on science experiments",
    "Regular progress updates on core subject development",
    "Flexible scheduling around existing homeschool commitments",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Build academic confidence and communication skills through engaging science experiments while strengthening core math and English foundations.",
    subGoals: [
      {
        title: "Academic Growth",
        items: [
          "Master multiplication facts through visual and hands-on learning approaches",
          "Develop understanding of grammar concepts like subject and predicate",
          "Connect science experiments to core subject learning",
          "Build study skills and learning strategies that match her learning style",
        ],
      },
      {
        title: "Science Exploration",
        items: [
          "Conduct engaging hands-on experiments and engineering projects",
          "Learn scientific method and documentation skills",
          "Explore connections between science and medical field",
          "Develop project planning and execution abilities",
        ],
      },
      {
        title: "Personal Development",
        items: [
          "Build self-confidence through academic achievements",
          "Reduce second-guessing through positive reinforcement",
          "Develop positive learning attitudes and habits",
          "Create safe space for questions and exploration",
        ],
      },
    ],
  },

  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Opening Check-in (5-10 min)",
        items: [
          "Review multiplication tables practice from previous week",
          "Discuss any challenges or successes with assigned practice",
          "Set specific goals for today's session",
          "Overview of session structure changes (math/English split)",
        ],
      },
      {
        title: "Core Learning (45 min)",
        items: [
          "Math Practice (25 min): Review and strengthen 9 and 12 times tables with visual aids",
          "English Practice (20 min): Introduction to subject and predicate through interactive examples",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Reflect on session progress and learnings",
          "Schedule next session",
          "Define action items (multiplication practice, simple grammar exercises)",
          "Preview next session's activities",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Opening Check-in (5 min)",
        items: [
          "Friendly conversation and updates",
          "Review homework and practice progress",
          "Address any questions or concerns",
          "Set session goals",
        ],
      },
      {
        title: "Core Learning (50 min)",
        items: [
          "Math practice (25 minutes)",
          "English practice (25 minutes)",
          "Visual aids and interactive activities",
          "Confidence-building exercises",
        ],
      },
      {
        title: "Wrap-up (5 min)",
        items: [
          "Summarize key learnings",
          "Set practice goals",
          "Preview next session",
          "Positive reinforcement",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Building Foundations",
        items: [
          "Master multiplication tables through visual learning",
          "Develop understanding of basic grammar concepts",
          "Build confidence in learning strategies",
          "Introduce simple science connections",
        ],
      },
      {
        title: "Month 2: Skill Development",
        items: [
          "Expand to multi-digit multiplication",
          "Deepen grammar understanding with complex sentences",
          "Begin science experiment documentation",
          "Strengthen independent work habits",
        ],
      },
      {
        title: "Month 3: Integration & Growth",
        items: [
          "Apply math skills to scientific measurements",
          "Create written descriptions of experiments",
          "Develop presentation skills",
          "Build confidence in academic abilities",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Session 1 (Completed)",
        items: [
          "Established baseline with multiplication tables",
          "Practiced 9 times tables with visual aids",
          "Used Jeopardy game for engagement",
          "Introduced 12 times tables practice",
        ],
      },
      {
        title: "Session 2",
        items: [
          "Review and strengthen 9 and 12 times tables",
          "Introduction to subject and predicate",
          "Visual sentence structure activities",
          "Set foundation for split session structure",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Begin multi-digit multiplication",
          "Practice identifying sentence parts",
          "Introduce simple science vocabulary",
          "Interactive grammar games",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Word problems with measurements",
          "Complex sentence structure practice",
          "Begin basic experiment documentation",
          "Reading comprehension activities",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Math in scientific contexts",
          "Writing experiment descriptions",
          "Grammar in scientific writing",
          "Build presentation confidence",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Advanced problem-solving strategies",
          "Creative writing with scientific themes",
          "Independent experiment planning",
          "Presentation preparation",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Review and solidify math concepts",
          "Polish writing and grammar skills",
          "Complete demonstration project",
          "Celebrate progress and set new goals",
        ],
      },
    ],
  },
};

// const learningPlan: LearningPlan = {
//   title:
//     "Personalized Learning Plan: Building Confidence Through Science and Core Skills",

//   overview: {
//     studentBlurb:
//       "Maddie is a caring and curious 6th-grade homeschooled student from South Atlanta who shows natural enthusiasm for hands-on science and engineering experiments. While excelling in project-based learning, she's working to rebuild confidence in math and English following pandemic-related learning challenges. A passionate dancer who enjoys comics and creative activities, Maddie combines artistic interests with scientific curiosity. She dreams of pursuing a career in the medical field and is eager to explore science through engaging experiments while strengthening her foundational academic skills.",

//     engagementBlurb:
//       "This personalized engagement combines core academic support with hands-on science exploration to create an enjoyable learning experience. Working with a supportive mentor, Maddie will strengthen her math and English foundations while engaging in exciting science experiments that spark curiosity and build confidence. The program emphasizes creating a safe, positive environment where Maddie can develop communication skills, explore her interests, and gain self-assurance through balanced academic growth.",
//   },

//   requirements: [
//     "Session recordings via CC Notetaker for progress tracking",
//     "Materials and instructions for hands-on science experiments",
//     "Regular progress updates on core subject development",
//     "Flexible scheduling around existing homeschool commitments",
//     "Communication tools for sharing assignments and next steps",
//   ],

//   synthesizedGoal: {
//     highLevelGoal:
//       "Build academic confidence and communication skills through engaging science experiments while strengthening core math and English foundations.",
//     subGoals: [
//       {
//         title: "Academic Growth",
//         items: [
//           "Strengthen foundational math skills through practical applications",
//           "Develop clear written and verbal communication abilities",
//           "Connect science experiments to core subject learning",
//           "Build study skills and learning strategies",
//         ],
//       },
//       {
//         title: "Science Exploration",
//         items: [
//           "Conduct engaging hands-on experiments and engineering projects",
//           "Learn scientific method and documentation skills",
//           "Explore connections between science and medical field",
//           "Develop project planning and execution abilities",
//         ],
//       },
//       {
//         title: "Personal Development",
//         items: [
//           "Build self-confidence through academic achievements",
//           "Improve communication and self-expression",
//           "Develop positive learning attitudes and habits",
//           "Create safe space for questions and exploration",
//         ],
//       },
//     ],
//   },

//   sessionStructure: {
//     firstSessionAgenda: [
//       {
//         title: "Getting to Know Each Other (15 min)",
//         items: [
//           "Share interests, hobbies, and favorite activities",
//           "Discuss experiences with science experiments",
//           "Explore learning preferences and styles",
//           "Create comfortable environment for open communication",
//         ],
//       },
//       {
//         title: "Learning Assessment & Planning (30 min)",
//         items: [
//           "Review current academic strengths and challenges",
//           "Explore favorite types of science experiments",
//           "Discuss learning goals and preferences",
//           "Plan first science project",
//         ],
//       },
//       {
//         title: "Getting Started (15 min)",
//         items: [
//           "Set up communication and sharing tools",
//           "Preview first experiment materials needed",
//           "Establish session routine and expectations",
//           "Schedule next session time",
//         ],
//       },
//     ],
//     generalSessionAgenda: [
//       {
//         title: "Check-in & Review (10 min)",
//         items: [
//           "Friendly conversation and updates",
//           "Review previous session's concepts",
//           "Address any questions or concerns",
//           "Set session goals",
//         ],
//       },
//       {
//         title: "Core Learning (35 min)",
//         items: [
//           "Hands-on science experiment or project work",
//           "Integration with math and English skills",
//           "Practice problem-solving strategies",
//           "Document learning and observations",
//         ],
//       },
//       {
//         title: "Wrap-up & Preview (15 min)",
//         items: [
//           "Summarize key learnings",
//           "Preview next session's activities",
//           "Set clear action items",
//           "Celebrate progress and achievements",
//         ],
//       },
//     ],
//   },

//   roadmap: {
//     monthlyRoadmap: [
//       {
//         title: "Month 1: Foundation Building",
//         items: [
//           "Establish mentorship relationship and trust",
//           "Begin simple science experiments with clear documentation",
//           "Review and strengthen basic math concepts",
//           "Practice clear written and verbal communication",
//         ],
//       },
//       {
//         title: "Month 2: Skill Development",
//         items: [
//           "Increase complexity of science projects",
//           "Connect experiments to math applications",
//           "Develop scientific writing skills",
//           "Build confidence through achievements",
//         ],
//       },
//       {
//         title: "Month 3: Integration & Growth",
//         items: [
//           "Lead more independent science investigations",
//           "Apply math skills to experimental analysis",
//           "Create detailed project documentation",
//           "Explore medical science connections",
//         ],
//       },
//     ],
//     weeklyRoadmap: [
//       {
//         title: "Sessions 1-2",
//         items: [
//           "Build rapport and establish routine",
//           "Complete first simple science experiment",
//           "Review current math skills",
//           "Practice basic documentation",
//         ],
//       },
//       {
//         title: "Sessions 3-4",
//         items: [
//           "Introduce new science concepts",
//           "Connect math to experimental measurements",
//           "Develop observation skills",
//           "Build confidence in asking questions",
//         ],
//       },
//       {
//         title: "Sessions 5-6",
//         items: [
//           "Explore engineering-based project",
//           "Practice math problem-solving",
//           "Improve experiment documentation",
//           "Celebrate early successes",
//         ],
//       },
//       {
//         title: "Sessions 7-8",
//         items: [
//           "Start medical science exploration",
//           "Apply math to data analysis",
//           "Create detailed project write-ups",
//           "Build independent work skills",
//         ],
//       },
//       {
//         title: "Sessions 9-10",
//         items: [
//           "Design original experiments",
//           "Strengthen mathematical thinking",
//           "Develop presentation skills",
//           "Set new learning goals",
//         ],
//       },
//       {
//         title: "Sessions 11-12",
//         items: [
//           "Complete capstone project",
//           "Review math progress",
//           "Present project findings",
//           "Plan next learning phase",
//         ],
//       },
//     ],
//   },
// };

export default learningPlan;
