import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: USACO Preparation & Computer Science Portfolio Development",

  overview: {
    studentBlurb:
      "Philip is an ambitious 8th-grade student at Jeffrey Trail Middle School who recently moved from Korea six months ago. Coming from an international school background, he's academically strong and proficient in English. While expressing interest in computer science and aspiring to attend top universities like Stanford and Berkeley, he has basic Python programming experience but needs structure and motivation to deepen his commitment. A natural yet introverted leader in class settings, Philip plays cello in the Southern California honor orchestra, enjoys watching Liverpool soccer, and developed his interest in computer science through gaming.",

    engagementBlurb:
      "This personalized engagement combines focused USACO Bronze preparation with broader computer science exploration through game development projects. The program emphasizes building technical skills while incorporating pathfinding elements to help Philip explore and solidify his interests in computer science. Working with a male mentor who can serve as both a technical guide and supportive brother figure, Philip will develop a structured approach to computer science while building an engineering portfolio. The engagement is designed to provide clear milestones and direction while helping Philip build intrinsic motivation and confidence in his chosen path.",
  },

  requirements: [
    "Session recordings via CC Notetaker for tracking progress and sharing updates",
    "Code repositories and project documentation for portfolio development",
    "Regular progress tracking toward USACO Bronze preparation",
    "Development environment setup and learning resources",
    "Availability: Mondays 4-5 PM PST (primary) or weekend afternoons",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Achieve USACO Bronze level while developing a strong foundation in computer science through project-based learning and portfolio development.",
    subGoals: [
      {
        title: "Competition Preparation",
        items: [
          "Master fundamental algorithms and data structures required for USACO Bronze",
          "Complete structured practice problems with increasing complexity",
          "Develop problem-solving strategies and competition techniques",
          "Build confidence through mock competitions and timed practice",
        ],
      },
      {
        title: "Technical Development",
        items: [
          "Strengthen Python programming skills through practical projects",
          "Create a game development portfolio to showcase skills",
          "Learn software development best practices",
          "Master version control and documentation skills",
        ],
      },
      {
        title: "Personal Growth",
        items: [
          "Develop intrinsic motivation for computer science learning",
          "Build confidence in technical abilities and problem-solving",
          "Explore various aspects of computer science through projects",
          "Create clear academic and extracurricular roadmap for high school",
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
          "Discuss shared interests in gaming and Liverpool soccer",
          "Explore Philip's journey in computer science so far",
          "Share mentor's path to computer science success",
        ],
      },
      {
        title: "Assessment & Planning (30 min)",
        items: [
          "Review Python knowledge and programming experience",
          "Discuss USACO goals and competition preparation",
          "Explore game development interests and project ideas",
          "Assess current problem-solving approaches",
        ],
      },
      {
        title: "Getting Started (15 min)",
        items: [
          "Set up development environment and tools",
          "Create study schedule and project timeline",
          "Define first week's goals and assignments",
          "Establish communication and meeting schedule",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in (10 min)",
        items: [
          "Personal updates and progress review",
          "Discuss challenges and victories",
          "Address any immediate concerns",
          "Set session objectives",
        ],
      },
      {
        title: "Technical Work (35 min)",
        items: [
          "USACO problem practice and review",
          "Game development project work",
          "Code review and optimization",
          "New concept introduction as needed",
        ],
      },
      {
        title: "Reflection & Planning (15 min)",
        items: [
          "Summarize key learnings",
          "Update progress tracking",
          "Set next session's goals",
          "Assign practice problems and project work",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundations & USACO Preparation",
        items: [
          "Establish strong Python fundamentals",
          "Begin USACO Bronze level preparation",
          "Start basic game development project",
          "Create structured study routine",
        ],
      },
      {
        title: "Month 2: Problem-Solving & Project Development",
        items: [
          "Practice USACO Bronze level problems",
          "Expand game project features",
          "Learn essential algorithms",
          "Begin portfolio documentation",
        ],
      },
      {
        title: "Month 3: Competition Focus & Portfolio Building",
        items: [
          "Intensive USACO preparation",
          "Complete initial game project",
          "Create engineering portfolio website",
          "Prepare for first USACO attempt",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Establish mentorship relationship",
          "Set up development environment",
          "Begin USACO practice problems",
          "Start game project planning",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Review fundamental algorithms",
          "Continue USACO practice",
          "Begin game prototype",
          "Learn version control basics",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Tackle more complex USACO problems",
          "Implement core game mechanics",
          "Practice problem-solving strategies",
          "Review and optimize code",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Mock USACO contests",
          "Add game features and polish",
          "Debug and optimize code",
          "Begin portfolio development",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Intensive USACO preparation",
          "Game testing and refinement",
          "Portfolio documentation",
          "Competition strategy review",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Final USACO preparation",
          "Complete game MVP",
          "Finalize portfolio materials",
          "Plan next development phase",
        ],
      },
    ],
  },
};

export default learningPlan;
