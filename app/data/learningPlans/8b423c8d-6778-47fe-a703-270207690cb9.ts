import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  sessionsOccurred: true,
  title:
    "Personalized Learning Plan: Academic Support with Creative Writing Development",

  overview: {
    studentBlurb:
      "Josie is a precocious 7th grader at Packer in Brooklyn who demonstrates exceptional academic strength across subjects while having specific areas she wants to improve. Through initial sessions, she has shown a particular desire to strengthen her performance in pre-algebra and science, where she's currently earning B+ grades. While maintaining strong reading and writing abilities, she prefers to focus on immediate academic needs while gradually exploring her creative interests. Her academic maturity is evident in her ability to identify areas needing support and communicate her learning preferences.",

    engagementBlurb:
      "This engagement combines focused academic support in math and science with opportunities to develop Josie's writing abilities. Sessions are structured to prioritize immediate academic needs while maintaining flexibility to explore creative writing and literary analysis when appropriate. The mentor provides targeted help with current coursework while building deeper understanding of concepts, particularly in pre-algebra and science. This balanced approach helps Josie maintain her academic excellence while creating space to explore her interests in both STEM and humanities.",
  },

  requirements: [
    "Session recordings via CC Notetaker for progress tracking",
    "Current homework assignments, study guides, and test preparation materials",
    "Access to school learning management system for assignments and deadlines",
    "Advanced notice of upcoming tests or major assignments",
    "Writing samples and literary analysis work as needed",
    "Availability: Primary meeting times Wednesday afternoons/early evenings (NY timezone)",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Support Josie's academic excellence through targeted help in math and science while nurturing her writing abilities and diverse interests.",
    subGoals: [
      {
        title: "Academic Achievement",
        items: [
          "Strengthen pre-algebra performance through systematic concept review",
          "Build confidence in science coursework and improve current B+ grade",
          "Develop effective test preparation strategies",
          "Connect mathematical concepts to practical applications",
        ],
      },
      {
        title: "Writing Development",
        items: [
          "Enhance literary analysis skills through coursework support",
          "Practice annotation and close reading techniques",
          "Build confidence in academic writing",
          "Explore creative writing opportunities when appropriate",
        ],
      },
      {
        title: "Learning Approach",
        items: [
          "Create structured approach to homework and test preparation",
          "Build self-advocacy skills in academic settings",
          "Develop confidence in asking questions and seeking clarification",
          "Balance immediate academic needs with longer-term skill development",
        ],
      },
    ],
  },

  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Check-in & Review (5-10 min)",
        items: [
          "Review math test preparation progress",
          "Discuss any challenges with linear equations practice",
          "Set specific goals for today's session",
          "Plan approach to new topics if test preparation is complete",
        ],
      },
      {
        title: "Core Learning (40-45 min)",
        items: [
          "Work through remaining pre-algebra test preparation",
          "Address any specific questions about linear equations",
          "Review homework assignments if time permits",
          "Introduce practice problems for additional reinforcement",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Summarize key concepts reviewed",
          "Confirm test preparation strategy",
          "Schedule next session",
          "Set specific practice goals for upcoming test",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in (5-10 min)",
        items: [
          "Review recent assignments and grades",
          "Discuss upcoming deadlines and assessments",
          "Address any immediate concerns",
          "Set session priorities",
        ],
      },
      {
        title: "Core Learning (40-45 min)",
        items: [
          "Focus on current coursework needs",
          "Practice problem-solving strategies",
          "Review challenging concepts",
          "Work on test preparation as needed",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Summarize progress and key learnings",
          "Define specific practice goals",
          "Preview upcoming material",
          "Schedule next session",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Building Academic Confidence",
        items: [
          "Master current pre-algebra concepts",
          "Support science coursework understanding",
          "Develop effective study strategies",
          "Practice literary analysis skills through coursework",
        ],
      },
      {
        title: "Month 2: Deepening Understanding",
        items: [
          "Tackle advanced math concepts",
          "Build science project support",
          "Enhance test preparation strategies",
          "Explore connections between subjects",
        ],
      },
      {
        title: "Month 3: Expanding Skills",
        items: [
          "Prepare for end-of-term assessments",
          "Strengthen independent problem-solving",
          "Develop long-term study strategies",
          "Consider creative writing opportunities",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Session 1 (Completed)",
        items: [
          "Established learning preferences and goals",
          "Reviewed Of Mice and Men annotations",
          "Discussed literary themes and analysis",
          "Set foundation for flexible academic support",
        ],
      },
      {
        title: "Session 2 (Completed)",
        items: [
          "Focused on pre-algebra test preparation",
          "Practiced linear equations",
          "Created word problem solving strategies",
          "Developed additional practice materials",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Review test performance and areas for growth",
          "Support current math and science assignments",
          "Build test preparation strategies",
          "Address any new academic challenges",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Deepen understanding of mathematical concepts",
          "Support science coursework progression",
          "Develop effective study habits",
          "Incorporate literary analysis practice",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Tackle advanced problem-solving",
          "Prepare for upcoming assessments",
          "Review and reinforce key concepts",
          "Build academic confidence",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Address any challenging topics",
          "Focus on areas needing improvement",
          "Strengthen independent learning skills",
          "Consider creative projects if interest exists",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Prepare for end-of-term assessments",
          "Review progress and achievements",
          "Set goals for continued growth",
          "Plan next phase of academic development",
        ],
      },
    ],
  },
};

// const learningPlan: LearningPlan = {
//   title:
//     "Personalized Learning Plan: Creative Writing Exploration and Development",

//   overview: {
//     studentBlurb:
//       "Josie is a precocious 7th grader at Packer in Brooklyn who demonstrates exceptional academic strength across all subjects. She's an advanced reader who tackles adult novels and shows remarkable writing talent for her age. While she excels in humanities, she also maintains strong performance in STEM subjects and harbors an interest in medicine. Her vibrant personality combines intellectual curiosity with social engagement, as comfortable discussing literature as she is enjoying trips to Sephora and Starbucks.",

//     engagementBlurb:
//       "This engagement focuses on developing Josie's creative writing talents while incorporating elements of pathfinding to explore her diverse interests. Working with a female mentor, Josie will receive structured guidance in crafting and refining her writing, with initial focus on preparing submissions for her school's literary magazine and potentially expanding to external publications. The mentorship will maintain flexibility to support other academic needs while fostering an environment where Josie can authentically explore both her literary and medical interests through creative projects.",
//   },

//   requirements: [
//     "Session recordings via CC Notetaker to track progress and maintain communication with family",
//     "Regular submission of writing samples, drafts, and edited work",
//     "Progress tracking system for writing projects and submissions",
//     "Access to school assignments and writing pieces Josie wants to develop",
//     "Availability: Primary meeting time Wednesdays afternoon/early evening, alternate time Tuesdays (NY timezone)",
//   ],

//   synthesizedGoal: {
//     highLevelGoal:
//       "Develop Josie's creative writing skills while nurturing her diverse academic interests, working toward publication in school and potentially external literary magazines.",
//     subGoals: [
//       {
//         title: "Writing Development",
//         items: [
//           "Polish existing school writing pieces for literary magazine submission",
//           "Develop new creative writing pieces across different genres",
//           "Master fundamental writing techniques and editing skills",
//           "Build confidence in sharing and submitting creative work",
//         ],
//       },
//       {
//         title: "Interest Exploration",
//         items: [
//           "Explore ways to combine creative writing with medical interests",
//           "Develop writing projects that reflect personal experiences and interests",
//           "Practice different writing styles and find authentic voice",
//           "Create a collection of polished writing pieces",
//         ],
//       },
//       {
//         title: "Mentorship Growth",
//         items: [
//           "Build a comfortable mentoring relationship for open discussion and questions",
//           "Develop confidence in sharing creative work and receiving feedback",
//           "Create regular writing habits and creative routines",
//           "Learn to balance creative projects with academic responsibilities",
//         ],
//       },
//     ],
//   },

//   sessionStructure: {
//     firstSessionAgenda: [
//       {
//         title: "Introduction (15 min)",
//         items: [
//           "Get to know each other's backgrounds and interests",
//           "Discuss favorite books, writing styles, and creative inspirations",
//           "Share experiences with creative writing and medical interests",
//         ],
//       },
//       {
//         title: "Writing Assessment & Planning (30 min)",
//         items: [
//           "Review any existing writing pieces Josie wants to develop",
//           "Discuss types of writing she enjoys and wants to explore",
//           "Identify potential pieces for literary magazine submission",
//           "Create initial writing goals and project ideas",
//         ],
//       },
//       {
//         title: "Next Steps & Schedule (15 min)",
//         items: [
//           "Set up organizational system for tracking writing projects",
//           "Define first writing assignment or revision task",
//           "Confirm weekly meeting time and communication preferences",
//           "Establish expectations for work between sessions",
//         ],
//       },
//     ],
//     generalSessionAgenda: [
//       {
//         title: "Check-in (5-10 min)",
//         items: [
//           "Personal updates and writing progress",
//           "Review of any current school assignments or challenges",
//           "Set session goals and priorities",
//         ],
//       },
//       {
//         title: "Core Writing Work (35-40 min)",
//         items: [
//           "Review and discuss writing completed since last session",
//           "Work on current writing project or revision",
//           "Practice specific writing techniques or skills",
//           "Brainstorming and creative exercises as needed",
//         ],
//       },
//       {
//         title: "Reflection & Planning (10-15 min)",
//         items: [
//           "Summarize progress and key learnings",
//           "Set goals and writing tasks for next session",
//           "Address any questions or concerns",
//           "Update project tracking and deadlines",
//         ],
//       },
//     ],
//   },

//   roadmap: {
//     monthlyRoadmap: [
//       {
//         title: "Month 1: Foundation & First Submission",
//         items: [
//           "Establish writing routine and project organization system",
//           "Select and begin revising first piece for school literary magazine",
//           "Practice fundamental writing techniques through creative exercises",
//           "Complete first polished piece ready for submission",
//         ],
//       },
//       {
//         title: "Month 2: Expanding Creative Horizons",
//         items: [
//           "Start new creative writing piece in chosen genre",
//           "Learn about different writing styles and techniques",
//           "Continue refining work for submission opportunities",
//           "Explore ways to incorporate medical interests into writing",
//         ],
//       },
//       {
//         title: "Month 3: Building Portfolio",
//         items: [
//           "Develop multiple pieces across different styles",
//           "Research additional submission opportunities",
//           "Create collection of polished writing samples",
//           "Begin more ambitious creative project",
//         ],
//       },
//     ],
//     weeklyRoadmap: [
//       {
//         title: "Sessions 1-2",
//         items: [
//           "Establish mentorship relationship and writing goals",
//           "Review existing writing pieces",
//           "Set up organization system",
//           "Begin first revision project",
//         ],
//       },
//       {
//         title: "Sessions 3-4",
//         items: [
//           "Complete revision of first piece",
//           "Learn editing techniques",
//           "Prepare submission materials",
//           "Start creative exercises",
//         ],
//       },
//       {
//         title: "Sessions 5-6",
//         items: [
//           "Submit first piece to literary magazine",
//           "Begin new creative writing project",
//           "Explore different writing styles",
//           "Practice descriptive writing techniques",
//         ],
//       },
//       {
//         title: "Sessions 7-8",
//         items: [
//           "Develop second piece for submission",
//           "Work on character development",
//           "Incorporate medical themes if interested",
//           "Continue creative exercises",
//         ],
//       },
//       {
//         title: "Sessions 9-10",
//         items: [
//           "Revise and polish second piece",
//           "Explore new genres or styles",
//           "Build writing portfolio",
//           "Plan longer-term project",
//         ],
//       },
//       {
//         title: "Sessions 11-12",
//         items: [
//           "Complete and submit second piece",
//           "Review progress and achievements",
//           "Set goals for next phase",
//           "Begin work on chosen long-term project",
//         ],
//       },
//     ],
//   },
// };

export default learningPlan;
