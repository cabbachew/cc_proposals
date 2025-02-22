import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  sessionsOccurred: true,
  title: "Personalized Learning Plan: Environmental Science & Conservation",
  overview: {
    studentBlurb:
      "Jasmine is an enthusiastic 3rd grader at Brentwood who shows a natural curiosity and strong grasp of scientific concepts. During our first two sessions, she demonstrated excellent comprehension of ecosystem interactions and expressed particular interest in endangered species, especially red pandas. Jasmine enjoys interactive learning and readily engages with complex topics, making thoughtful connections between different scientific concepts.",
    engagementBlurb:
      "This engagement combines Jasmine's love of science with her interest in wildlife conservation. Through hands-on explorations of ecosystems, food webs, and endangered species, we'll build on her strong foundation in environmental science while channeling her natural curiosity about wildlife. Sessions will maintain an interactive, discussion-based approach, incorporating drawing, modeling, and real-world examples to deepen understanding of ecological concepts.",
  },
  requirements: [
    "Session recordings via CC Notetaker for tracking scientific discussions and insights",
    "Access to drawing materials for creating ecosystem diagrams and models",
    "Project artifacts including scientific diagrams, research notes, and conservation planning documents",
    "Regular sessions on agreed schedule (currently set for specific dates)",
    "Materials for documenting observations and scientific findings",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Develop deep understanding of ecosystem relationships and conservation biology while exploring ways to protect endangered species",
    subGoals: [
      {
        title: "Scientific Knowledge Development",
        items: [
          "Master advanced ecosystem concepts including food webs and energy transfer",
          "Understand factors affecting endangered species populations",
          "Explore biodiversity and habitat preservation",
          "Learn about real-world conservation efforts and solutions",
        ],
      },
      {
        title: "Scientific Investigation Skills",
        items: [
          "Practice creating scientific diagrams and models",
          "Develop ability to analyze ecological relationships",
          "Learn to evaluate environmental impacts",
          "Build skills in presenting scientific findings",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction (15 min)",
        items: [
          "Get to know each other through icebreaker activities",
          "Create mind map of scientific interests",
          "Discuss learning goals and expectations",
          "Complete",
        ],
      },
      {
        title: "Core Learning (30-40 min)",
        items: [
          "Explore initial science concepts",
          "Begin ecosystem discussions",
          "Establish learning routines",
          "Complete",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Review key learnings",
          "Set expectations for next session",
          "Complete",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Opening Check-in (5-10 min)",
        items: [
          "Rose/Bud/Thorn activity",
          "Review previous concepts",
          "Set session objectives",
        ],
      },
      {
        title: "Core Learning (40-50 min)",
        items: [
          "Introduce new scientific concepts",
          "Hands-on activities or demonstrations",
          "Discussion and analysis",
          "Drawing or modeling activities",
        ],
      },
      {
        title: "Reflection & Planning (5-10 min)",
        items: [
          "Summarize key learnings",
          "Preview next session topics",
          "Set any exploration goals",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Ecosystem Foundations",
        items: [
          "Complete introduction to ecosystem interactions (Done)",
          "Explore biotic and abiotic factors (Done)",
          "Begin food web exploration",
          "Introduction to endangered species concepts",
        ],
      },
      {
        title: "Month 2: Conservation Biology",
        items: [
          "Study habitat requirements and adaptations",
          "Explore causes of species endangerment",
          "Learn about red panda conservation",
          "Investigate conservation success stories",
        ],
      },
      {
        title: "Month 3: Taking Action",
        items: [
          "Research local conservation efforts",
          "Develop understanding of habitat protection",
          "Create conservation action plans",
          "Present findings on chosen species",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Session 1: Introduction (Completed)",
        items: [
          "Completed introductory activities",
          "Created initial mind map",
          "Established learning goals",
          "Complete",
        ],
      },
      {
        title: "Session 2: Ecosystem Basics (Completed)",
        items: [
          "Learned about biotic vs abiotic factors",
          "Created ecosystem cycle diagrams",
          "Explored decomposition and nutrient cycling",
          "Complete",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Explore food webs and energy flow",
          "Compare different ecosystem types",
          "Study predator-prey relationships",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Introduction to endangered species",
          "Study red panda habitat and behavior",
          "Research threats to species survival",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Explore habitat destruction impacts",
          "Learn about population dynamics",
          "Study conservation strategies",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Research successful conservation cases",
          "Create habitat preservation plans",
          "Design wildlife protection strategies",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Develop conservation action ideas",
          "Create presentations on findings",
          "Plan next phase of learning",
        ],
      },
    ],
  },
};

export default learningPlan;
