import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Math Exploration & Self-Discovery Journey",
  overview: {
    studentBlurb:
      "Juliet is a highly competitive third grader at The Greene School who thrives in structured environments and excels in analytical thinking. She has a natural aptitude for mathematics and technology, and actively participates in tennis, golf, and softball. While she demonstrates strong capabilities in objective subjects, she currently struggles with creative writing and tends to seek help before fully attempting to solve problems independently. Her competitive spirit serves as a powerful motivator, though her teachers note she sometimes focuses more on results than the learning process.",
    engagementBlurb:
      "This Pathfinding engagement with Executive Functioning support will harness Juliet's competitive nature and love for structure to build mathematical confidence and independent problem-solving skills. The mentor will create engaging, gamified learning experiences that encourage both analytical thinking and creative exploration, helping Juliet develop a growth mindset and discover the joy in the learning process. Through structured self-reflection and goal-setting activities, we'll work on building her confidence in approaching new challenges independently.",
  },
  requirements: [
    "Session recordings via CC Notetaker for tracking progress and strategies",
    "Regular documentation of goal-setting and achievement",
    "Evening availability around 7:00 PM for weekly sessions",
    "Materials for math practice and creative exercises",
    "Access to self-reflection and goal-tracking tools",
    "Standard 4 sessions per month commitment, with flexibility",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Develop confidence in independent problem-solving while fostering creativity and self-reflection through structured exploration of mathematical concepts and personal interests",
    subGoals: [
      {
        title: "Mathematical Independence",
        items: [
          "Build confidence in approaching new math concepts independently",
          "Develop systematic problem-solving strategies",
          "Practice reading and understanding problems fully before seeking help",
          "Create personal toolkit for tackling challenging problems",
        ],
      },
      {
        title: "Personal Growth & Creativity",
        items: [
          "Learn to set and achieve SMART goals",
          "Balance competitive drive with appreciation for the learning process",
          "Explore creative approaches to problem-solving",
          "Develop comfort with open-ended questions and multiple solutions",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction & Goal Setting (15 min)",
        items: [
          "Get to know each other through shared interests in math and technology",
          "Discuss Juliet's approach to problem-solving",
          "Establish initial SMART goals together",
        ],
      },
      {
        title: "Baseline Assessment (30-40 min)",
        items: [
          "Explore current problem-solving strategies",
          "Identify strengths and areas for growth",
          "Introduce gamified learning elements",
        ],
      },
      {
        title: "Action Planning (5-10 min)",
        items: [
          "Set specific goals for next session",
          "Create initial strategy toolkit",
          "Confirm regular meeting schedule",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Progress Check (5-10 min)",
        items: [
          "Review weekly achievements",
          "Discuss challenges encountered",
          "Set session objectives",
        ],
      },
      {
        title: "Skill Building (40-50 min)",
        items: [
          "Practice new problem-solving strategies",
          "Work through engaging mathematical challenges",
          "Incorporate creative thinking exercises",
        ],
      },
      {
        title: "Reflection & Planning (5-10 min)",
        items: [
          "Celebrate progress and learning moments",
          "Set goals for upcoming week",
          "Plan independent practice activities",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Establish baseline problem-solving strategies",
          "Introduce SMART goal framework",
          "Develop initial confidence-building techniques",
          "Create personalized progress tracking system",
        ],
      },
      {
        title: "Month 2: Strategy Development",
        items: [
          "Expand problem-solving toolkit",
          "Practice independent approach to new concepts",
          "Integrate creative thinking exercises",
          "Build comfort with open-ended problems",
        ],
      },
      {
        title: "Month 3: Independence & Growth",
        items: [
          "Master self-checking strategies",
          "Apply skills to new mathematical concepts",
          "Balance competition with learning process",
          "Celebrate progress and plan next steps",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Establish baseline abilities and goals",
          "Create initial problem-solving toolkit",
          "Begin confidence-building exercises",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Develop systematic approach to problems",
          "Practice reading comprehension strategies",
          "Introduce creative problem-solving games",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Expand independent problem-solving strategies",
          "Work on challenging math concepts",
          "Integrate competitive elements constructively",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Build comfort with open-ended problems",
          "Practice self-reflection techniques",
          "Develop growth mindset strategies",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Apply skills to new mathematical challenges",
          "Strengthen independent problem-solving",
          "Create personal achievement portfolio",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Review and celebrate progress",
          "Solidify confidence-building strategies",
          "Plan next phase of learning journey",
        ],
      },
    ],
  },
};

export default learningPlan;
