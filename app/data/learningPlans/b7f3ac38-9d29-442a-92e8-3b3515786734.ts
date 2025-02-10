import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Chemistry & Biology App Development Project",
  overview: {
    studentBlurb:
      "Shrey is an intellectually curious 8th grader at Basis Awatuki with strong academic performance across subjects, particularly excelling in chemistry and biology. He is self-motivated, detail-oriented, and values clear communication. Beyond academics, he stays active through taekwondo, basketball, and gym workouts, and has recently joined Key Club to engage in community service. While he enjoys gaming platforms like Roblox and Minecraft, he's more interested in creating practical applications that can benefit others.",
    engagementBlurb:
      "This engagement will focus on guiding Shrey to develop an app that combines his interests in chemistry, biology, and technology. Given his analytical mindset and desire for clear direction, we'll begin by exploring various biotech app concepts while building foundational programming skills. We'll incorporate pathfinding to help him discover where his interests in life sciences and technology intersect, while setting up structured project management systems to track his progress effectively.",
  },
  requirements: [
    "Session recordings via CC Notetaker to document progress and provide detailed notes to parents",
    "Project documentation including code repositories, design mockups, and development milestones",
    "Progress tracking system for both technical skill development and project completion",
    "Weekend evening availability between 6-8pm, with flexibility to pause during family travel to India",
    "Development environment setup and necessary programming tools",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Create a functional mobile application that bridges life sciences with technology, while building strong foundations in programming and project management.",
    subGoals: [
      {
        title: "Technical Skill Development",
        items: [
          "Master fundamental programming concepts through hands-on app development",
          "Learn essential tools and frameworks for mobile app creation",
          "Develop proficiency in user interface design and user experience principles",
        ],
      },
      {
        title: "Project Planning and Execution",
        items: [
          "Define clear project scope and target user base for the bio-tech application",
          "Create detailed project timeline with achievable milestones",
          "Implement effective documentation and version control practices",
        ],
      },
      {
        title: "Scientific Integration",
        items: [
          "Research existing applications in the chemistry/biology space",
          "Identify specific scientific concepts to incorporate into the app",
          "Validate app's educational or practical value through user testing",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction (15 min)",
        items: [
          "Get to know each other's backgrounds and interests",
          "Discuss Shrey's experience with programming and life sciences",
          "Share mentor's relevant experience in app development",
        ],
      },
      {
        title: "Project Exploration (30-40 min)",
        items: [
          "Brainstorm potential app ideas combining biology and chemistry",
          "Review example projects and discuss technical requirements",
          "Explore development tools and frameworks suitable for beginners",
          "Set up initial project management system",
        ],
      },
      {
        title: "Next Steps (5-10 min)",
        items: [
          "Agree on development environment setup tasks",
          "Schedule next session and set clear action items",
          "Share resources for initial learning",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in (5-10 min)",
        items: [
          "Review progress on previous action items",
          "Address any technical challenges encountered",
          "Set specific goals for current session",
        ],
      },
      {
        title: "Core Development (40-50 min)",
        items: [
          "Hands-on coding and problem-solving",
          "Design review and implementation work",
          "Testing and debugging of new features",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Document progress and learnings",
          "Define next steps and coding assignments",
          "Schedule upcoming sessions",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1",
        items: [
          "Master programming fundamentals through guided exercises",
          "Complete project planning and initial app design",
          "Set up development environment and version control",
          "Create basic UI mockups and navigation flow",
        ],
      },
      {
        title: "Month 2",
        items: [
          "Implement core app functionality and basic features",
          "Integrate first scientific concept into the application",
          "Begin user testing with small group of peers",
          "Document development process and learnings",
        ],
      },
      {
        title: "Month 3",
        items: [
          "Add advanced features and improve user interface",
          "Incorporate feedback from initial testing",
          "Prepare presentation of project progress",
          "Plan next phase of development",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Introduction to programming concepts and tools",
          "Project ideation and requirement gathering",
          "Begin basic coding exercises",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Complete project planning and timeline",
          "Start UI/UX design process",
          "Create first simple app screens",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Implement basic navigation between screens",
          "Add first interactive elements",
          "Begin integrating scientific content",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Develop core feature functionality",
          "Test and debug initial features",
          "Document progress and gather feedback",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Enhance user interface and interactions",
          "Add data storage capabilities",
          "Begin user testing preparation",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Conduct first round of user testing",
          "Make improvements based on feedback",
          "Plan next development phase",
        ],
      },
    ],
  },
};

export default learningPlan;
