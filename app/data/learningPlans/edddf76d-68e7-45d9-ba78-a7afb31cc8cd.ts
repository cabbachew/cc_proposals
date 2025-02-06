import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title:
    "Personalized Learning Plan: Creative Exploration & Confidence Building",

  overview: {
    studentBlurb:
      "Riley is a thoughtful and empathetic sixth-grader at Hillview School who shows natural talent in reading, art, and creative writing. She has a caring personality and strong sense of humor, balancing extroverted activities like basketball and Scouts with her need for quiet time to read and create art. While excelling in humanities, Riley expresses hesitation about math and public speaking, preferring to work through challenges at her own pace.",

    engagementBlurb:
      "This engagement focuses on nurturing Riley's creative interests while gradually building confidence and resilience across all areas. Through personalized mentorship, we'll help Riley explore potential passions, develop a growth mindset, and learn to embrace challenges in a supportive environment. The mentor will create a safe space for creative exploration while gently encouraging Riley to step outside her comfort zone, using her love of reading and art as foundations for building wider interests and self-assurance.",
  },

  requirements: [
    "Session recordings via CC Notetaker for documentation and progress tracking",
    "Project artifacts, creative work samples, and drafts to document progress",
    "Progress tracking system for personal growth milestones",
    "Saturday afternoon availability preferred to maintain a relaxed schedule",
  ],

  synthesizedGoal: {
    highLevelGoal:
      "Foster curiosity, build confidence, and develop resilience through creative exploration and guided self-discovery",
    subGoals: [
      {
        title: "Creative Development",
        items: [
          "Explore and expand creative interests through reading and writing",
          "Develop personal creative projects that align with current interests",
          "Build confidence in sharing creative work with others",
          "Create a supportive environment for artistic expression",
        ],
      },
      {
        title: "Personal Growth",
        items: [
          "Cultivate a growth mindset when facing challenges",
          "Practice taking small, calculated risks in safe environments",
          "Develop strategies for managing frustration during difficult tasks",
          "Build confidence in self-expression and public speaking",
        ],
      },
      {
        title: "Discovery & Exploration",
        items: [
          "Nurture natural curiosity through guided exploration",
          "Develop comfort with asking questions and seeking deeper understanding",
          "Identify potential areas of passion through varied activities",
          "Create connections between different areas of interest",
        ],
      },
    ],
  },

  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction (15 min)",
        items: [
          "Get to know each other through favorite books and creative interests",
          "Share fun experiences and establish comfortable rapport",
          "Discuss preferred learning styles and environment",
        ],
      },
      {
        title: "Core Work (30-40 min)",
        items: [
          "Explore potential areas of interest through engaging activities",
          "Identify initial project ideas that spark excitement",
          "Set up comfortable communication and feedback system",
          "Establish safe space for trying new things",
          "Create initial roadmap for exploration",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Reflect on session highlights",
          "Confirm next session scheduling",
          "Set light, engaging activities for the week ahead",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Opening (5-10 min)",
        items: [
          "Relaxed check-in and sharing of weekly highlights",
          "Review of creative explorations from previous week",
          "Set comfortable goals for session",
        ],
      },
      {
        title: "Core Work (40-50 min)",
        items: [
          "Engage in creative activities and exploration",
          "Practice building confidence through small challenges",
          "Work on ongoing projects and interests",
          "Introduce new concepts through engaging methods",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Celebrate session achievements",
          "Plan next session's activities",
          "Set manageable goals for coming week",
        ],
      },
    ],
  },

  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation & Comfort",
        items: [
          "Establish comfortable mentoring relationship through shared interests",
          "Explore current favorite books and creative activities",
          "Begin identifying potential areas for creative projects",
          "Start building confidence through small, achievable challenges",
        ],
      },
      {
        title: "Month 2: Exploration & Growth",
        items: [
          "Start experimenting with different creative mediums",
          "Develop strategies for approaching challenging tasks",
          "Practice asking questions about topics of interest",
          "Begin working on a chosen creative project",
        ],
      },
      {
        title: "Month 3: Building Momentum",
        items: [
          "Deepen engagement with chosen creative projects",
          "Expand comfort zone through gradual challenges",
          "Develop stronger self-expression skills",
          "Begin sharing work in comfortable settings",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Build rapport through shared interests in reading and art",
          "Explore favorite books and creative activities",
          "Begin identifying potential project directions",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Start experimenting with different creative exercises",
          "Introduce simple confidence-building activities",
          "Explore potential project ideas",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Choose initial creative project direction",
          "Develop comfortable working style",
          "Practice small risk-taking in safe environment",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Begin work on chosen creative project",
          "Introduce new challenge activities",
          "Build strategies for managing frustration",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Continue project development",
          "Practice sharing work in comfortable settings",
          "Expand exploration of interests",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Progress on creative projects",
          "Reflect on growth and confidence gains",
          "Plan next phase of exploration",
        ],
      },
    ],
  },
};

export default learningPlan;
