import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Applied Mathematics & Creative Engineering",
  overview: {
    studentBlurb:
      "Montana is a mathematically gifted and imaginative 10-year-old fifth grader who naturally gravitates toward building and creating. She excels academically, particularly in mathematics, and shows enthusiasm for exploring concepts beyond the traditional curriculum. In her free time, she enjoys constructing robots, digital animation, and movie making, demonstrating a natural talent for creative construction. While athletic and engaged in soccer and tennis, Montana can be shy and somewhat awkward socially, though she maintains a solid group of friends.",
    engagementBlurb:
      "This Pathfinding engagement will focus on exploring applied mathematics through creative, hands-on projects that combine Montana's love for building with her mathematical interests. The mentor will guide her in discovering practical applications of mathematical concepts through engaging projects in areas such as robotics, digital animation, or creative engineering. Given her shy nature, we'll create a supportive environment where she can build confidence while pursuing her mathematical passions.",
  },
  requirements: [
    "Session recordings via CC Notetaker for progress tracking",
    "Project documentation for portfolio development",
    "Meeting times available afternoons (3:30-5:00 PM) or after 7 PM",
    "Weekend availability as needed",
    "Materials for hands-on projects and mathematical exploration",
    "Access to appropriate software tools for chosen project direction",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Foster joy and confidence in mathematical exploration through creative, hands-on projects that combine technical skills with imaginative expression",
    subGoals: [
      {
        title: "Mathematical Discovery",
        items: [
          "Explore advanced mathematical concepts through practical applications",
          "Connect mathematical principles to creative building projects",
          "Develop problem-solving skills through project-based learning",
          "Build confidence in mathematical abilities",
        ],
      },
      {
        title: "Creative Engineering",
        items: [
          "Apply mathematical concepts to hands-on building projects",
          "Explore intersection of math with robotics, animation, or digital creation",
          "Develop technical skills in chosen project area",
          "Create portfolio of completed projects and learnings",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction & Interest Exploration (15 min)",
        items: [
          "Get to know each other through shared interests in math and building",
          "Discuss Montana's creative projects and mathematical interests",
          "Explore potential project directions",
        ],
      },
      {
        title: "Project Brainstorming (30-40 min)",
        items: [
          "Review different types of applied math projects",
          "Identify areas where math intersects with building and creation",
          "Begin narrowing down project possibilities",
        ],
      },
      {
        title: "Planning & Next Steps (5-10 min)",
        items: [
          "Select initial project direction",
          "Identify needed materials or tools",
          "Set goals for next session",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in & Review (5-10 min)",
        items: [
          "Share progress and discoveries from previous week",
          "Address any questions or challenges",
          "Review session objectives",
        ],
      },
      {
        title: "Project Work (40-50 min)",
        items: [
          "Explore new mathematical concepts",
          "Work on current project components",
          "Connect theory to practical applications",
        ],
      },
      {
        title: "Reflection & Planning (5-10 min)",
        items: [
          "Document progress and learnings",
          "Plan next steps and activities",
          "Set goals for independent exploration",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Exploration & Project Selection",
        items: [
          "Explore different areas of applied mathematics",
          "Select specific project focus area",
          "Learn fundamental concepts needed for project",
          "Begin initial project planning",
        ],
      },
      {
        title: "Month 2: Project Development",
        items: [
          "Deep dive into chosen project area",
          "Connect mathematical concepts to practical applications",
          "Develop technical skills specific to project",
          "Create initial project components",
        ],
      },
      {
        title: "Month 3: Creation & Refinement",
        items: [
          "Complete main project elements",
          "Document process and learnings",
          "Explore advanced concepts within project scope",
          "Begin planning future directions",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Explore different types of math applications",
          "Identify specific areas of interest",
          "Begin project planning",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Learn fundamental concepts for chosen project",
          "Start working with relevant tools/materials",
          "Create project outline",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Develop core project components",
          "Connect mathematical concepts to project work",
          "Build technical skills",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Expand project scope",
          "Integrate advanced concepts",
          "Document progress and learning",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Refine project elements",
          "Add creative enhancements",
          "Begin portfolio development",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Complete initial project phase",
          "Present and celebrate work",
          "Plan next exploration areas",
        ],
      },
    ],
  },
};

export default learningPlan;
