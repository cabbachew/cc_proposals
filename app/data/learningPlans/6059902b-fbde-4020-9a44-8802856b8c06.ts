import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Product Design Portfolio & Research Development",

  overview: {
    studentBlurb:
      "Chloe is an ambitious 11th grader at HSPVA with extensive experience in digital and graphic design, demonstrated through her leadership of the Design Club and internships at Glacial School of Art and Contemporary Art Museum. She excels in STEM subjects while maintaining a creative focus, showing particular initiative in securing design opportunities and creating platforms for others to engage with design.",

    engagementBlurb:
      "This engagement focuses on expanding Chloe's design expertise from graphic design into technical hardware and human-computer interaction, while developing impactful projects that serve community needs. Through structured mentorship, we'll help Chloe bridge her strong digital design foundation with physical product development, particularly in areas like prosthetics or educational technology. The mentor will guide her in creating portfolio-worthy projects while building technical skills that align with top design program requirements.",
  },

  requirements: [
    "Session recordings via CC Notetaker for documentation and progress tracking",
    "Project artifacts including design iterations, prototypes, and documentation",
    "Progress tracking system for portfolio development and technical skill acquisition",
    "Friday and Saturday availability, with specific timing to be confirmed post-February 10th",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Develop innovative product design solutions that demonstrate technical proficiency and human-centered impact, while building a comprehensive portfolio for top design programs",
    subGoals: [
      {
        title: "Technical Skill Development",
        items: [
          "Master key hardware design principles and prototyping methods",
          "Develop proficiency in technical product development tools",
          "Build experience with physical product iteration and testing",
          "Learn human-computer interaction research methodologies",
        ],
      },
      {
        title: "Project Development",
        items: [
          "Create tangible solutions addressing community needs",
          "Document design process and decision-making",
          "Build functional prototypes demonstrating technical skills",
          "Develop user testing and feedback frameworks",
        ],
      },
      {
        title: "Portfolio & Content Creation",
        items: [
          "Create compelling documentation of design process",
          "Develop video content showcasing project development",
          "Build confidence in presenting design work",
          "Establish professional online presence",
        ],
      },
    ],
  },

  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction (15 min)",
        items: [
          "Review current design experience and portfolio",
          "Discuss specific interests in hardware and HCI",
          "Explore target areas for community impact",
        ],
      },
      {
        title: "Core Work (30-40 min)",
        items: [
          "Assess technical skill needs for project goals",
          "Map potential project directions",
          "Review successful design portfolios",
          "Establish documentation systems",
          "Create initial project timeline",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Confirm project direction and next steps",
          "Set up communication channels",
          "Plan initial skill-building activities",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Opening (5-10 min)",
        items: [
          "Review progress and challenges",
          "Address technical questions",
          "Set session objectives",
        ],
      },
      {
        title: "Core Work (40-50 min)",
        items: [
          "Technical skill development",
          "Project work and iteration",
          "Portfolio development",
          "Documentation review",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Review progress and learnings",
          "Define next action items",
          "Schedule additional support if needed",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation & Project Planning",
        items: [
          "Define specific project scope and community impact goals",
          "Begin technical skill development in hardware design",
          "Research similar solutions and design approaches",
          "Create initial project timeline and milestones",
        ],
      },
      {
        title: "Month 2: Development & Testing",
        items: [
          "Start prototype development",
          "Document design process through video and photography",
          "Begin user research and feedback collection",
          "Continue technical skill development",
        ],
      },
      {
        title: "Month 3: Refinement & Documentation",
        items: [
          "Iterate on prototypes based on feedback",
          "Create comprehensive project documentation",
          "Develop portfolio materials",
          "Begin planning for design competitions",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Define project scope and impact goals",
          "Create skill development plan",
          "Begin technical training",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Start initial prototyping",
          "Develop documentation strategy",
          "Begin user research",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Continue prototype development",
          "Create initial content pieces",
          "Gather preliminary feedback",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Refine prototypes",
          "Expand technical capabilities",
          "Document progress",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Implement user feedback",
          "Create portfolio materials",
          "Plan competition entries",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Finalize initial prototypes",
          "Complete documentation",
          "Plan next project phase",
        ],
      },
    ],
  },
};

export default learningPlan;
