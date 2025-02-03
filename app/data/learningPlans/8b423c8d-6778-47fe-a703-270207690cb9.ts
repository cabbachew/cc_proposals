import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Creative Writing Exploration and Development",

  overview: {
    studentBlurb:
      "Josie is a precocious 7th grader at Packer in Brooklyn who demonstrates exceptional academic strength across all subjects. She's an advanced reader who tackles adult novels and shows remarkable writing talent for her age. While she excels in humanities, she also maintains strong performance in STEM subjects and harbors an interest in medicine. Her vibrant personality combines intellectual curiosity with social engagement, as comfortable discussing literature as she is enjoying trips to Sephora and Starbucks.",

    engagementBlurb:
      "This engagement focuses on developing Josie's creative writing talents while incorporating elements of pathfinding to explore her diverse interests. Working with a female mentor, Josie will receive structured guidance in crafting and refining her writing, with initial focus on preparing submissions for her school's literary magazine and potentially expanding to external publications. The mentorship will maintain flexibility to support other academic needs while fostering an environment where Josie can authentically explore both her literary and medical interests through creative projects.",
  },

  requirements: [
    "Session recordings via CC Notetaker to track progress and maintain communication with family",
    "Regular submission of writing samples, drafts, and edited work",
    "Progress tracking system for writing projects and submissions",
    "Access to school assignments and writing pieces Josie wants to develop",
    "Availability: Primary meeting time Wednesdays afternoon/early evening, alternate time Tuesdays (NY timezone)",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Develop Josie's creative writing skills while nurturing her diverse academic interests, working toward publication in school and potentially external literary magazines.",
    subGoals: [
      {
        title: "Writing Development",
        items: [
          "Polish existing school writing pieces for literary magazine submission",
          "Develop new creative writing pieces across different genres",
          "Master fundamental writing techniques and editing skills",
          "Build confidence in sharing and submitting creative work",
        ],
      },
      {
        title: "Interest Exploration",
        items: [
          "Explore ways to combine creative writing with medical interests",
          "Develop writing projects that reflect personal experiences and interests",
          "Practice different writing styles and find authentic voice",
          "Create a collection of polished writing pieces",
        ],
      },
      {
        title: "Mentorship Growth",
        items: [
          "Build a comfortable mentoring relationship for open discussion and questions",
          "Develop confidence in sharing creative work and receiving feedback",
          "Create regular writing habits and creative routines",
          "Learn to balance creative projects with academic responsibilities",
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
          "Discuss favorite books, writing styles, and creative inspirations",
          "Share experiences with creative writing and medical interests",
        ],
      },
      {
        title: "Writing Assessment & Planning (30 min)",
        items: [
          "Review any existing writing pieces Josie wants to develop",
          "Discuss types of writing she enjoys and wants to explore",
          "Identify potential pieces for literary magazine submission",
          "Create initial writing goals and project ideas",
        ],
      },
      {
        title: "Next Steps & Schedule (15 min)",
        items: [
          "Set up organizational system for tracking writing projects",
          "Define first writing assignment or revision task",
          "Confirm weekly meeting time and communication preferences",
          "Establish expectations for work between sessions",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in (5-10 min)",
        items: [
          "Personal updates and writing progress",
          "Review of any current school assignments or challenges",
          "Set session goals and priorities",
        ],
      },
      {
        title: "Core Writing Work (35-40 min)",
        items: [
          "Review and discuss writing completed since last session",
          "Work on current writing project or revision",
          "Practice specific writing techniques or skills",
          "Brainstorming and creative exercises as needed",
        ],
      },
      {
        title: "Reflection & Planning (10-15 min)",
        items: [
          "Summarize progress and key learnings",
          "Set goals and writing tasks for next session",
          "Address any questions or concerns",
          "Update project tracking and deadlines",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation & First Submission",
        items: [
          "Establish writing routine and project organization system",
          "Select and begin revising first piece for school literary magazine",
          "Practice fundamental writing techniques through creative exercises",
          "Complete first polished piece ready for submission",
        ],
      },
      {
        title: "Month 2: Expanding Creative Horizons",
        items: [
          "Start new creative writing piece in chosen genre",
          "Learn about different writing styles and techniques",
          "Continue refining work for submission opportunities",
          "Explore ways to incorporate medical interests into writing",
        ],
      },
      {
        title: "Month 3: Building Portfolio",
        items: [
          "Develop multiple pieces across different styles",
          "Research additional submission opportunities",
          "Create collection of polished writing samples",
          "Begin more ambitious creative project",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Establish mentorship relationship and writing goals",
          "Review existing writing pieces",
          "Set up organization system",
          "Begin first revision project",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Complete revision of first piece",
          "Learn editing techniques",
          "Prepare submission materials",
          "Start creative exercises",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Submit first piece to literary magazine",
          "Begin new creative writing project",
          "Explore different writing styles",
          "Practice descriptive writing techniques",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Develop second piece for submission",
          "Work on character development",
          "Incorporate medical themes if interested",
          "Continue creative exercises",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Revise and polish second piece",
          "Explore new genres or styles",
          "Build writing portfolio",
          "Plan longer-term project",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Complete and submit second piece",
          "Review progress and achievements",
          "Set goals for next phase",
          "Begin work on chosen long-term project",
        ],
      },
    ],
  },
};

export default learningPlan;
