import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title: "Personalized Learning Plan: Spanish Language Development",
  overview: {
    studentBlurb:
      "Owen Cooper is a motivated 6th grade student in New York City who shows enthusiasm for Spanish language learning. While he demonstrates natural curiosity and drive to improve, he currently seeks support in building confidence with reading comprehension and written expression. Owen's dual identity as both someone working to overcome current challenges and someone eager to accelerate his learning makes him an ideal candidate for focused language mentorship.",
    engagementBlurb:
      "This engagement combines Spanish language academic support with executive functioning strategies, creating a structured approach to language learning. The mentor will guide Owen through systematic skill-building exercises while helping him develop strong study habits and organizational strategies. Sessions will focus on reading comprehension and written expression, with activities designed to build practical communication skills that extend beyond the classroom. Given Owen's interest in mentorship, we'll emphasize building a supportive relationship that encourages asking questions and taking risks with the language.",
  },
  requirements: [
    "Session recordings via CC Notetaker for tracking progress and reviewing key concepts",
    "Access to current Spanish class materials, textbooks, and assignments",
    "Regular writing samples and reading comprehension exercises",
    "Progress tracking system for vocabulary and grammar development",
    "Evening availability after 7pm EST for consistent weekly sessions",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Strengthen Spanish language proficiency through focused development of reading comprehension and writing skills, while building effective study habits and learning strategies that support long-term language acquisition.",
    subGoals: [
      {
        title: "Reading Comprehension Enhancement",
        items: [
          "Build confidence in approaching Spanish texts at grade level",
          "Develop effective strategies for understanding context clues",
          "Expand active reading vocabulary through regular practice",
          "Master key reading comprehension techniques specific to Spanish",
        ],
      },
      {
        title: "Written Expression Development",
        items: [
          "Improve grammar accuracy in written responses",
          "Expand written vocabulary usage through structured practice",
          "Develop clear and coherent writing style in Spanish",
          "Build confidence in independent writing tasks",
        ],
      },
      {
        title: "Study Skills and Organization",
        items: [
          "Create effective vocabulary and grammar study systems",
          "Establish regular practice routines for language learning",
          "Develop strategies for managing language assignments",
          "Build confidence in independent learning approaches",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction (15 min)",
        items: [
          "Get to know each other and establish rapport",
          "Discuss Owen's experience with Spanish learning",
          "Review current classroom materials and expectations",
          "Set comfortable baseline for Spanish communication",
        ],
      },
      {
        title: "Assessment and Planning (30 min)",
        items: [
          "Evaluate current reading and writing comfort levels",
          "Review recent assignments and challenges",
          "Identify specific areas for improvement",
          "Discuss study habits and organization strategies",
        ],
      },
      {
        title: "Next Steps (15 min)",
        items: [
          "Establish weekly session schedule",
          "Set clear expectations for practice between sessions",
          "Preview first week's learning activities",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Warm-up (10 min)",
        items: [
          "Review homework and practice activities",
          "Address any immediate questions or concerns",
          "Quick vocabulary or grammar review",
        ],
      },
      {
        title: "Core Learning (40 min)",
        items: [
          "Focused reading comprehension or writing practice",
          "New concept introduction or skill development",
          "Interactive language activities and feedback",
          "Real-world application exercises",
        ],
      },
      {
        title: "Wrap-up (10 min)",
        items: [
          "Summarize key learnings",
          "Assign practice activities",
          "Set goals for next session",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Establish baseline reading comprehension strategies",
          "Develop basic writing templates and structures",
          "Create personalized vocabulary study system",
          "Build confidence with current classroom material",
        ],
      },
      {
        title: "Month 2: Skill Development",
        items: [
          "Introduce advanced reading comprehension techniques",
          "Expand written response capabilities",
          "Refine study strategies and organization",
          "Begin independent reading projects",
        ],
      },
      {
        title: "Month 3: Mastery and Application",
        items: [
          "Master grade-level reading strategies",
          "Develop confidence in longer writing assignments",
          "Solidify independent study routines",
          "Apply skills to real-world Spanish content",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Baseline assessment and goal setting",
          "Introduction to key reading strategies",
          "Establish vocabulary study system",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Practice basic comprehension techniques",
          "Begin structured writing exercises",
          "Develop homework organization system",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Expand reading strategy toolkit",
          "Introduce paragraph writing templates",
          "Refine study routine effectiveness",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Begin independent reading exercises",
          "Develop creative writing skills",
          "Master vocabulary study techniques",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Practice complex reading comprehension",
          "Work on longer writing assignments",
          "Strengthen independent study habits",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Apply skills to authentic Spanish materials",
          "Refine writing style and grammar",
          "Evaluate progress and adjust goals",
        ],
      },
    ],
  },
};

export default learningPlan;
