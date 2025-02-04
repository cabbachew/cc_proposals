import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Building Confidence Through Science and Core Skills",

  overview: {
    studentBlurb:
      "Maddie is a caring and curious 6th-grade homeschooled student from South Atlanta who shows natural enthusiasm for hands-on science and engineering experiments. While excelling in project-based learning, she's working to rebuild confidence in math and English following pandemic-related learning challenges. A passionate dancer who enjoys comics and creative activities, Maddie combines artistic interests with scientific curiosity. She dreams of pursuing a career in the medical field and is eager to explore science through engaging experiments while strengthening her foundational academic skills.",

    engagementBlurb:
      "This personalized engagement combines core academic support with hands-on science exploration to create an enjoyable learning experience. Working with a supportive mentor, Maddie will strengthen her math and English foundations while engaging in exciting science experiments that spark curiosity and build confidence. The program emphasizes creating a safe, positive environment where Maddie can develop communication skills, explore her interests, and gain self-assurance through balanced academic growth.",
  },

  requirements: [
    "Session recordings via CC Notetaker for progress tracking",
    "Materials and instructions for hands-on science experiments",
    "Regular progress updates on core subject development",
    "Flexible scheduling around existing homeschool commitments",
    "Communication tools for sharing assignments and next steps",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Build academic confidence and communication skills through engaging science experiments while strengthening core math and English foundations.",
    subGoals: [
      {
        title: "Academic Growth",
        items: [
          "Strengthen foundational math skills through practical applications",
          "Develop clear written and verbal communication abilities",
          "Connect science experiments to core subject learning",
          "Build study skills and learning strategies",
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
          "Improve communication and self-expression",
          "Develop positive learning attitudes and habits",
          "Create safe space for questions and exploration",
        ],
      },
    ],
  },

  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Getting to Know Each Other (15 min)",
        items: [
          "Share interests, hobbies, and favorite activities",
          "Discuss experiences with science experiments",
          "Explore learning preferences and styles",
          "Create comfortable environment for open communication",
        ],
      },
      {
        title: "Learning Assessment & Planning (30 min)",
        items: [
          "Review current academic strengths and challenges",
          "Explore favorite types of science experiments",
          "Discuss learning goals and preferences",
          "Plan first science project",
        ],
      },
      {
        title: "Getting Started (15 min)",
        items: [
          "Set up communication and sharing tools",
          "Preview first experiment materials needed",
          "Establish session routine and expectations",
          "Schedule next session time",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in & Review (10 min)",
        items: [
          "Friendly conversation and updates",
          "Review previous session's concepts",
          "Address any questions or concerns",
          "Set session goals",
        ],
      },
      {
        title: "Core Learning (35 min)",
        items: [
          "Hands-on science experiment or project work",
          "Integration with math and English skills",
          "Practice problem-solving strategies",
          "Document learning and observations",
        ],
      },
      {
        title: "Wrap-up & Preview (15 min)",
        items: [
          "Summarize key learnings",
          "Preview next session's activities",
          "Set clear action items",
          "Celebrate progress and achievements",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Establish mentorship relationship and trust",
          "Begin simple science experiments with clear documentation",
          "Review and strengthen basic math concepts",
          "Practice clear written and verbal communication",
        ],
      },
      {
        title: "Month 2: Skill Development",
        items: [
          "Increase complexity of science projects",
          "Connect experiments to math applications",
          "Develop scientific writing skills",
          "Build confidence through achievements",
        ],
      },
      {
        title: "Month 3: Integration & Growth",
        items: [
          "Lead more independent science investigations",
          "Apply math skills to experimental analysis",
          "Create detailed project documentation",
          "Explore medical science connections",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Build rapport and establish routine",
          "Complete first simple science experiment",
          "Review current math skills",
          "Practice basic documentation",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Introduce new science concepts",
          "Connect math to experimental measurements",
          "Develop observation skills",
          "Build confidence in asking questions",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Explore engineering-based project",
          "Practice math problem-solving",
          "Improve experiment documentation",
          "Celebrate early successes",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Start medical science exploration",
          "Apply math to data analysis",
          "Create detailed project write-ups",
          "Build independent work skills",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Design original experiments",
          "Strengthen mathematical thinking",
          "Develop presentation skills",
          "Set new learning goals",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Complete capstone project",
          "Review math progress",
          "Present project findings",
          "Plan next learning phase",
        ],
      },
    ],
  },
};

export default learningPlan;
