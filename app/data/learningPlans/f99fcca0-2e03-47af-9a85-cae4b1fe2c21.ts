import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title: "Personalized Learning Plan: Robotics Engineering and Design",
  overview: {
    studentBlurb:
      "Jack is a highly motivated 7th grader in NYC with a deep passion for robotics, engineering, and coding. He demonstrates strong academic abilities across subjects, particularly excelling in math and science. An intellectually curious student, Jack takes initiative in pursuing his interests, as shown by his recent acquisition of a 3D printer and his proactive outreach to robotics professionals. He combines technical interests with creative pursuits, showing a well-rounded approach to learning.",
    engagementBlurb:
      "This engagement will focus on developing hands-on robotics and engineering skills through project-based learning. Taking advantage of Jack's current flexible schedule, we'll establish an immersive learning experience that combines theoretical foundations with practical application. The mentor will guide Jack through increasingly complex robotics projects, starting with foundational concepts and building toward his goal of constructing a sophisticated robot. Sessions will emphasize hands-on experimentation while incorporating elements of CAD design, programming, and engineering principles.",
  },
  requirements: [
    "Session recordings via CC Notetaker for documentation and progress tracking",
    "Project artifacts including CAD designs, code repositories, build documentation, and progress photos/videos",
    "Access to 3D printer and basic robotics components/tools",
    "Multiple weekly sessions (initially available after 2 PM on weekdays)",
    "Progress tracking system for project milestones and skill development",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Design and construct a functioning robot while building fundamental knowledge in mechanical engineering, electronics, and programming",
    subGoals: [
      {
        title: "Technical Foundation Building",
        items: [
          "Master basic CAD design principles for creating 3D-printable components",
          "Learn fundamental electronics concepts and circuit design",
          "Develop programming skills necessary for robot control",
          "Understand core mechanical engineering principles for robotics",
        ],
      },
      {
        title: "Project Development",
        items: [
          "Complete a series of small-scale robotic builds to practice key concepts",
          "Design and document a complex robot project from concept to completion",
          "Create a portfolio showcasing the development process and final results",
          "Practice problem-solving and iterative design improvements",
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
          "Discuss experience with robotics, coding, and 3D printing",
          "Share successful robotics projects and possibilities",
        ],
      },
      {
        title: "Project Planning (30-40 min)",
        items: [
          "Review available tools and resources",
          "Explore potential robot project ideas",
          "Assess current knowledge and identify learning priorities",
          "Begin creating a project roadmap",
        ],
      },
      {
        title: "Next Steps (5-10 min)",
        items: [
          "Establish regular meeting schedule",
          "Define initial learning objectives",
          "List required materials or software",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Progress Review (5-10 min)",
        items: [
          "Review progress since last session",
          "Address any challenges encountered",
          "Outline session objectives",
        ],
      },
      {
        title: "Core Work (40-50 min)",
        items: [
          "Hands-on project work",
          "Technical instruction and demonstration",
          "Problem-solving and troubleshooting",
          "Documentation of progress",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Summarize key learnings",
          "Plan next steps and assignments",
          "Update project timeline",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundations",
        items: [
          "Learn basic CAD design principles and create first 3D printed components",
          "Introduction to electronics and circuit design fundamentals",
          "Setup development environment for robot programming",
          "Complete first simple robotic mechanism build",
        ],
      },
      {
        title: "Month 2: Core Skills",
        items: [
          "Design and build more complex mechanical systems",
          "Program basic movement and sensor interactions",
          "Create project documentation structure",
          "Begin main robot project design phase",
        ],
      },
      {
        title: "Month 3: Project Development",
        items: [
          "Construct core robot components",
          "Implement control systems and basic automation",
          "Test and iterate on initial prototypes",
          "Document progress and learning outcomes",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Introduction to CAD software and basic design principles",
          "Create and print first 3D component",
          "Setup project documentation system",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Electronics basics: circuits, components, and safety",
          "First simple circuit build and testing",
          "Introduction to microcontrollers",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Programming fundamentals for robotics",
          "Basic motor control and sensor reading",
          "Simple mechanism design and assembly",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Integration of mechanical and electronic components",
          "Program basic movement sequences",
          "Testing and troubleshooting procedures",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Main project planning and initial design",
          "Component selection and materials list",
          "Create project timeline and milestones",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Begin main robot construction",
          "Implement core functionalities",
          "Document progress and initial results",
        ],
      },
    ],
  },
};

export default learningPlan;
