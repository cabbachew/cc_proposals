import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  sessionsOccurred: true,
  title: "Personalized Learning Plan: Krishna + Meera's Podcast Project",
  overview: {
    studentBlurb:
      "Krishna and Meera are cousins collaborating on their podcast 'Cousin Coded'. Krishna is an avid reader and deep thinker who enjoys science, robotics, and gymnastics. Meera excels academically, participates in robotics and competitive gymnastics, and has shown strong leadership in their podcast's technical production. Together, they've successfully launched their podcast and published multiple episodes, developing a natural on-air dynamic and efficient production workflow.",
    engagementBlurb:
      "Building on their successful podcast launch and Halloween episode highlight, this engagement will focus on elevating their content structure, speaking skills, and audience engagement. The cousins have established clear roles - Meera typically leads editing while Krishna focuses on music selection and descriptions. Moving forward, we'll develop more structured episode formats, improve their on-air dynamics, and prepare for the NPR podcast challenge while maintaining their authentic voices and growing their audience.",
  },
  requirements: [
    "Session recordings via CC Notetaker for documentation and improvement tracking",
    "Regular access to podcast recording equipment (phones/computers with microphones)",
    "Access to Podcastle for audio editing",
    "Access to music libraries for background tracks",
    "Backup system for saving project files to Google Drive",
    "Spotify and Apple Podcast publishing credentials",
    "Standing session time on Sundays for consistent production schedule",
    "NPR Podcast Challenge submission requirements and guidelines",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Transform Cousin Coded into a structured, engaging podcast with professional-quality content and speaking skills, culminating in a strong NPR Podcast Challenge submission while building a dedicated audience base.",
    subGoals: [
      {
        title: "Content Structure and Quality",
        items: [
          "Develop consistent episode framework with clear segments and transitions",
          "Create engaging dialogue patterns to replace unstructured conversation",
          "Establish pre-production planning process for each episode",
          "Diversify content topics while maintaining audience interest",
        ],
      },
      {
        title: "Speaking and Performance Skills",
        items: [
          "Master voice modulation and projection techniques",
          "Transform bickering moments into entertaining banter",
          "Develop interviewing and guest interaction skills",
          "Practice clear articulation and professional delivery",
        ],
      },
      {
        title: "Audience Growth and Competition",
        items: [
          "Prepare compelling submission for NPR Podcast Challenge",
          "Implement promotion strategy across multiple platforms",
          "Build consistent engagement with listeners",
          "Create distinctive show identity and brand",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Performance Review (10 min)",
        items: [
          "Voice warm-up exercises",
          "Practice new dialogue techniques",
          "Review previous episode for improvement areas",
        ],
      },
      {
        title: "Content Development (40 min)",
        items: [
          "Apply episode framework to new content",
          "Record using structured format",
          "Review and adjust speaking dynamics",
        ],
      },
      {
        title: "Progress Planning (10 min)",
        items: [
          "Assign practice exercises for voice and articulation",
          "Plan next episode structure",
          "Set specific improvement goals",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Skill Building (10-15 min)",
        items: [
          "Voice and articulation exercises",
          "Dynamic interaction practice",
          "Framework review and refinement",
        ],
      },
      {
        title: "Production Work (35-40 min)",
        items: [
          "Apply structured format to recording",
          "Review and enhance speaking dynamics",
          "Implement technical improvements",
        ],
      },
      {
        title: "Strategy Review (10 min)",
        items: [
          "Assess progress on speaking goals",
          "Plan next content structure",
          "Update promotion strategy",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Phase 1: NPR Challenge Preparation",
        items: [
          "Study NPR Challenge requirements and winning entries",
          "Develop competition-ready episode framework",
          "Master voice and presentation techniques",
          "Create focused content strategy for submission",
        ],
      },
      {
        title: "Phase 2: Competition Execution",
        items: [
          "Produce and refine NPR Challenge entry",
          "Submit final entry (deadline May 2)",
          "Continue regular podcast episodes",
          "Launch promotion strategy",
        ],
      },
      {
        title: "Phase 3: Advanced Development",
        items: [
          "Expand content formats and segments",
          "Build audience engagement methods",
          "Perfect advanced podcasting techniques",
          "Plan summer content strategy",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Review NPR Challenge guidelines and past winners",
          "Brainstorm competition topic ideas",
          "Begin voice modulation training",
          "Practice structured conversation techniques",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Finalize NPR Challenge topic selection",
          "Create detailed episode outline",
          "Develop opening and closing segments",
          "Record test segments with new format",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Record NPR Challenge episode draft",
          "Refine speaking dynamics and transitions",
          "Begin editing process",
          "Continue regular podcast production",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Complete NPR Challenge episode editing",
          "Polish final audio and transitions",
          "Prepare submission materials",
          "Plan post-submission content",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Final NPR Challenge submission review",
          "Submit entry (before May 2)",
          "Launch new episode format",
          "Begin audience growth initiatives",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Implement advanced content strategies",
          "Expand show segments and formats",
          "Develop summer episode calendar",
          "Set new skill development goals",
        ],
      },
    ],
  },
};

export default learningPlan;
