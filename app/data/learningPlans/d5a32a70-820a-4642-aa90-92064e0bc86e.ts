import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Engineering Portfolio & Physics Exploration",

  overview: {
    studentBlurb:
      "Siddharth is a motivated 9th grader at Lynbrook High School who demonstrates strong initiative in STEM fields, particularly physics and engineering. Currently exploring Arduino and coding while maintaining diverse interests including kickboxing and photography, he shows natural curiosity and self-directed learning through his engagement with physics concepts via online resources. His academic strengths in math and science are complemented by hands-on interest in building and creating.",

    engagementBlurb:
      "This engagement will focus on developing tangible engineering projects that bridge Siddharth's interests in physics, robotics, and coding. Through structured mentorship, we'll help him transform his broad technical interests into focused, impactful projects while building essential skills in hardware development and project management. The mentor will provide hands-on guidance and accountability while helping Siddharth explore potential pathways in engineering, physics, and entrepreneurship.",
  },

  requirements: [
    "Session recordings via CC Notetaker for documentation and progress tracking",
    "Project artifacts including code, prototypes, and technical documentation",
    "Progress tracking system for technical skill development and project milestones",
    "Weekend availability for consistent mentorship sessions",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Develop impactful engineering projects that demonstrate technical innovation while building foundational skills in physics and hardware development",
    subGoals: [
      {
        title: "Technical Development",
        items: [
          "Master Arduino programming and hardware interfacing",
          "Build fundamental electronics and circuit design skills",
          "Develop proficiency in relevant programming languages",
          "Learn proper documentation and project management practices",
        ],
      },
      {
        title: "Project Creation",
        items: [
          "Design and implement engineering solutions with societal impact",
          "Create portfolio-worthy projects demonstrating technical skills",
          "Develop project presentation and documentation skills",
          "Prepare projects for relevant competitions and showcases",
        ],
      },
      {
        title: "Physics & Engineering Exploration",
        items: [
          "Connect theoretical physics concepts to practical applications",
          "Explore different engineering disciplines through hands-on projects",
          "Develop research and analytical skills",
          "Build foundation for future academic opportunities",
        ],
      },
    ],
  },

  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction (15 min)",
        items: [
          "Review current technical experience and interests",
          "Discuss specific areas of physics passion",
          "Explore potential project directions",
        ],
      },
      {
        title: "Core Work (30-40 min)",
        items: [
          "Assess technical skill levels in key areas",
          "Identify initial project opportunities",
          "Review successful engineering portfolios",
          "Set up project documentation system",
          "Begin skill development plan",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Summarize action items and next steps",
          "Establish weekly meeting schedule",
          "Set initial technical learning goals",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Opening (5-10 min)",
        items: [
          "Review progress on technical tasks",
          "Address questions from independent work",
          "Set session objectives",
        ],
      },
      {
        title: "Core Work (40-50 min)",
        items: [
          "Hands-on technical development",
          "Project work and troubleshooting",
          "Review of new concepts",
          "Documentation and planning",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Summarize key learnings",
          "Plan next steps and assignments",
          "Set specific goals for coming week",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Establish core Arduino and electronics skills",
          "Complete initial technical tutorials and exercises",
          "Begin exploring project ideas with social impact",
          "Set up documentation and portfolio system",
        ],
      },
      {
        title: "Month 2: Project Development",
        items: [
          "Start first major engineering project",
          "Continue technical skill development",
          "Begin competition research and planning",
          "Develop project documentation habits",
        ],
      },
      {
        title: "Month 3: Implementation & Growth",
        items: [
          "Complete first project milestone",
          "Begin exploring advanced concepts",
          "Prepare for relevant competitions",
          "Plan next project phase",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Set up development environment",
          "Begin Arduino basics",
          "Start technical skill assessment",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Complete initial technical exercises",
          "Explore project possibilities",
          "Begin project planning",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Start first project implementation",
          "Continue skill development",
          "Begin documentation practices",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Project development and testing",
          "Address technical challenges",
          "Review progress and adjust plans",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Continue project implementation",
          "Begin competition preparation",
          "Expand technical capabilities",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Complete initial project phase",
          "Document achievements",
          "Plan next project steps",
        ],
      },
    ],
  },
};

export default learningPlan;
