import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title: "Personalized Learning Plan: Engineering Portfolio Development",
  overview: {
    studentBlurb:
      "Vinay is a 9th grade student at Princeton High School with a strong aptitude for STEM subjects, particularly math and engineering. He's currently taking accelerated geometry and plans to pursue AP Computer Science and AP Physics next year. Vinay demonstrates remarkable determination when interested in a topic - he taught himself typing to become exceptionally fast and enjoys building keyboards and computers. He's active in ultimate frisbee and mountain biking but lacks structured extracurricular activities tied to his academic interests. While technically inclined, Vinay sometimes struggles with organization, procrastination, and confidence in his abilities. He needs guidance to channel his natural engineering interests into tangible projects and a clear roadmap for his academic journey.",
    engagementBlurb:
      "This Passion Project mentorship will focus on helping Vinay explore his interests in engineering, computer science, and mathematics through hands-on projects while incorporating Pathfinding to discover potential career directions. We'll emphasize building a portfolio of engineering projects that demonstrate his technical abilities and creativity, starting with smaller achievable goals to build confidence and momentum. Since Vinay responds well to clear accountability and structure from someone other than his parents, sessions will balance technical guidance with relationship-building and consistent check-ins. The mentor will help Vinay develop organizational skills, break large projects into manageable milestones, and guide him toward finding genuine enjoyment in his work rather than viewing it solely as a college application requirement.",
  },
  requirements: [
    "Session recordings via CC Notetaker to document progress and create detailed session notes",
    "Project artifacts, including code repositories, design documents, prototypes, and completed projects",
    "Progress tracking for key portfolio milestones with clear deadlines and accountability check-ins",
    "Digital workspace for organizing project materials, resources, and documentation",
    "Scheduling consistency with weekly sessions, with flexibility for Tuesdays or weekends as preferred",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Create a portfolio of engineering and computer science projects that showcase Vinay's technical abilities, problem-solving skills, and creativity while helping him discover his specific interests within STEM and develop the organizational habits needed for long-term success.",
    subGoals: [
      {
        title: "Develop Technical Skills & Project Portfolio",
        items: [
          "Complete at least two engineering or computer science projects demonstrating different technical skills",
          "Create a personal website/digital portfolio to showcase projects and technical abilities",
          "Learn to document the development process to demonstrate problem-solving approach",
          "Explore both hardware and software projects to identify preference areas",
        ],
      },
      {
        title: "Build Organizational & Planning Skills",
        items: [
          "Establish effective project management techniques for breaking down complex tasks",
          "Develop consistent work habits with accountability structures",
          "Create systems for organizing resources, code, and documentation",
          "Practice setting and meeting deadlines and milestones independently",
        ],
      },
      {
        title: "Explore Engineering & CS Career Pathways",
        items: [
          "Research different fields within engineering and computer science to identify areas of strongest interest",
          "Connect technical projects to potential future applications and careers",
          "Explore summer programs, competitions, or extracurricular opportunities that align with interests",
          "Identify potential internship opportunities for following summers",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction & Rapport Building (15 min)",
        items: [
          "Personal introductions and establishing communication style",
          "Discuss mutual interests in engineering, computer science, and building things",
          "Share experiences with previous projects (keyboards, computers, etc.)",
          "Establish mentor-mentee expectations and relationship dynamics",
        ],
      },
      {
        title: "Interest & Skill Assessment (20-25 min)",
        items: [
          "Review Vinay's technical experience and current skill level",
          "Identify specific areas of interest within engineering and computer science",
          "Discuss learning style preferences and motivational factors",
          "Explore project ideas that spark genuine interest and enthusiasm",
        ],
      },
      {
        title: "Goal Setting & Planning (15-20 min)",
        items: [
          "Discuss learning roadmap and potential project sequence",
          "Outline initial project options and choose a starting point",
          "Establish organizational systems for project management",
          "Review portfolio development approach and documentation methods",
        ],
      },
      {
        title: "Wrap-up & Next Steps (5-10 min)",
        items: [
          "Summarize session and decisions made",
          "Establish weekly meeting time (preference for Tuesdays)",
          "Set specific action items before next session",
          "Share initial resources to explore before next meeting",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in & Progress Review (5-10 min)",
        items: [
          "Review progress on previous action items",
          "Discuss challenges encountered during the week",
          "Address any organizational or procrastination issues",
          "Set specific goals for current session",
        ],
      },
      {
        title: "Project Work & Skill Development (40-45 min)",
        items: [
          "Dive into hands-on project work with technical guidance",
          "Teach new concepts or techniques relevant to current project phase",
          "Troubleshoot issues and problem-solve together",
          "Discuss engineering principles and best practices",
          "Document progress and important learning moments",
        ],
      },
      {
        title: "Planning & Accountability (5-10 min)",
        items: [
          "Recap session achievements and learning points",
          "Break down next steps into clear, manageable tasks",
          "Set specific, measurable goals for the coming week",
          "Review organization of project materials and documentation",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Complete skill assessment and finalize first project selection",
          "Set up project management system and documentation approach",
          "Begin first small-scale engineering project (hardware or software-based)",
          "Establish GitHub repository and initial portfolio structure",
          "Research different engineering fields to identify specific interests",
        ],
      },
      {
        title: "Month 2: First Project Completion",
        items: [
          "Complete first engineering project with comprehensive documentation",
          "Develop initial personal portfolio website to showcase work",
          "Identify and begin planning second project based on refined interests",
          "Research summer programs and opportunities in identified interest areas",
          "Implement organizational systems for academic and project work",
        ],
      },
      {
        title: "Month 3: Portfolio Expansion & Exploration",
        items: [
          "Begin development of second project with increased complexity",
          "Enhance portfolio website with improved documentation and presentation",
          "Explore competitions or challenges related to engineering interests",
          "Create roadmap for summer activities and potential internship preparation",
          "Refine project management and organizational skills through practical application",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2: Discovery & Initialization",
        items: [
          "Establish mentor-student relationship and communication approach",
          "Complete technical skills inventory and interest assessment",
          "Research and select first small-scale project with high completion probability",
          "Set up development environment and necessary tools",
          "Create project management system (Trello, GitHub, etc.)",
        ],
      },
      {
        title: "Sessions 3-4: Project Foundations",
        items: [
          "Begin first project implementation with clear scope definition",
          "Learn fundamentals of documentation and project organization",
          "Establish initial GitHub repository structure for code management",
          "Research engineering fields related to selected project",
          "Develop basic troubleshooting and problem-solving strategies",
        ],
      },
      {
        title: "Sessions 5-6: Project Development",
        items: [
          "Continue implementation of first project with increasing independence",
          "Address technical challenges and implement solutions",
          "Begin basic portfolio website setup (GitHub Pages or similar)",
          "Practice breaking down complex tasks into manageable steps",
          "Explore engineering principles relevant to current project",
        ],
      },
      {
        title: "Sessions 7-8: Project Completion & Documentation",
        items: [
          "Finalize first project implementation and testing",
          "Create comprehensive project documentation with process notes",
          "Complete initial portfolio page for first project showcase",
          "Research and brainstorm second project possibilities",
          "Investigate summer programs and opportunities in engineering",
        ],
      },
      {
        title: "Sessions 9-10: Second Project Initialization",
        items: [
          "Select and define scope for second project with increased complexity",
          "Begin implementation of second project utilizing lessons learned",
          "Enhance portfolio website with improved structure and design",
          "Develop more advanced organizational systems for project management",
          "Explore engineering competitions or challenges of interest",
        ],
      },
      {
        title: "Sessions 11-12: Progress & Future Planning",
        items: [
          "Make significant progress on second project implementation",
          "Update portfolio with ongoing documentation of second project",
          "Create summer action plan for continued skill development",
          "Evaluate organizational systems and refine for improved efficiency",
          "Reflect on interests discovered and define focus areas for future exploration",
        ],
      },
    ],
  },
};

export default learningPlan;
