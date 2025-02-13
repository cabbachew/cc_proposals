import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title: "Personalized Learning Plan: Pre-Med Research and Career Exploration",
  overview: {
    studentBlurb:
      "Aashni is a motivated 9th grade student at Independence High School in Frisco, Texas who demonstrates strong academic performance, particularly in math and science. A talented musician who plays trumpet in the school band and piano, she also shows remarkable creativity through complex Lego building. While somewhat introverted in large group settings, Aashni is self-determined and focused when she sets her mind to a goal. She maintains a strong academic record with most grades in the 90-95 range, though she occasionally faces challenges with time management across her various commitments.",
    engagementBlurb:
      "This engagement will focus on helping Aashni explore and develop her interests in medicine and psychology through guided research opportunities while building essential organizational skills. Given her self-determined personality and preference to lead her own learning journey, our approach will emphasize student-driven exploration with structured guidance. We'll work together to identify and pursue meaningful summer opportunities, explore various STEM career paths, and develop effective time management strategies to balance her rigorous academic schedule with band commitments. Sessions will be held twice monthly to accommodate her busy schedule while maintaining consistent progress toward her goals.",
  },
  requirements: [
    "Session recordings via CC Notetaker for documentation and progress tracking",
    "Project artifacts including research notes, outreach emails, and application materials",
    "Progress tracking system for research milestones and opportunities",
    "Access to school materials including course syllabi and assignment deadlines",
    "Bi-monthly sessions to accommodate band schedule and academic commitments",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Develop a strong foundation in pre-medical research and exploration while discovering various STEM career pathways, supported by effective time management strategies to balance academic excellence with extracurricular commitments.",
    subGoals: [
      {
        title: "Research Experience Development",
        items: [
          "Identify and pursue appropriate research opportunities for high school students",
          "Learn fundamental research methodologies and scientific writing",
          "Develop outreach strategies for connecting with research labs and mentors",
          "Create a research project timeline aligned with summer availability",
        ],
      },
      {
        title: "Career Path Exploration",
        items: [
          "Explore various medical and psychology career paths through informational interviews",
          "Investigate public health and alternative STEM careers",
          "Research summer programs and volunteering opportunities in healthcare",
          "Document findings and insights to inform future academic choices",
        ],
      },
      {
        title: "Academic Organization",
        items: [
          "Create effective systems for managing band and academic commitments",
          "Develop study strategies that maximize limited time",
          "Establish priority-setting frameworks for busy periods",
          "Build proactive planning habits for long-term projects",
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
          "Discuss mentor's pre-med journey and experiences",
          "Understand Aashni's specific interests in medicine and psychology",
        ],
      },
      {
        title: "Goal Setting (30 min)",
        items: [
          "Review and refine learning plan objectives",
          "Identify immediate opportunities and priorities",
          "Create organizational system for tracking progress",
          "Set up communication and documentation tools",
        ],
      },
      {
        title: "Next Steps (15 min)",
        items: [
          "Establish bi-monthly meeting schedule",
          "Define clear action items for next session",
          "Share initial resources for exploration",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in (10 min)",
        items: [
          "Review progress on previous action items",
          "Discuss any challenges or discoveries",
          "Set specific goals for current session",
        ],
      },
      {
        title: "Core Work (40 min)",
        items: [
          "Deep dive into current focus area (research, career exploration, or organization)",
          "Hands-on work with specific tasks or applications",
          "Problem-solving and strategy development",
          "Document progress and insights",
        ],
      },
      {
        title: "Wrap-up (10 min)",
        items: [
          "Summarize key takeaways and decisions",
          "Set concrete action items for next two weeks",
          "Confirm next session date and focus",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Create comprehensive database of summer research programs and deadlines",
          "Develop basic research skills through guided exercises",
          "Establish organizational system for managing commitments",
          "Begin informational interviews with professionals in medicine/psychology",
        ],
      },
      {
        title: "Month 2: Opportunity Development",
        items: [
          "Draft outreach emails to potential research mentors",
          "Create summer opportunity application materials",
          "Refine time management strategies based on early experiences",
          "Explore public health career paths and requirements",
        ],
      },
      {
        title: "Month 3: Implementation",
        items: [
          "Submit summer program applications",
          "Begin initial research project or literature review",
          "Evaluate and adjust organizational systems",
          "Plan for upcoming academic year course selection",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Establish mentorship foundations and communication systems",
          "Create initial database of summer opportunities",
          "Develop basic organizational tools and templates",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Research skill building workshops",
          "Begin professional outreach preparation",
          "Create weekly planning system around band schedule",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Draft and review program applications",
          "Conduct first informational interviews",
          "Evaluate and adjust time management strategies",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Finalize summer program applications",
          "Explore psychology and public health career paths",
          "Develop long-term project planning skills",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Begin research project or literature review",
          "Create academic year planning framework",
          "Review and optimize organizational systems",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Evaluate progress and adjust goals as needed",
          "Plan next phase of research or projects",
          "Develop summer preparation strategy",
        ],
      },
    ],
  },
};

export default learningPlan;
