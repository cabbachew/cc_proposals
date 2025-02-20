import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title: "Personalized Learning Plan: Building Academic Confidence and Skills",
  overview: {
    studentBlurb:
      "Henry is a bright and compassionate third grader at St. Andrews in Boca Raton, FL. A natural athlete who swims, plays tennis, and recently joined basketball, he demonstrates quick learning abilities across multiple domains. He has a particular passion for history (especially World War II) and science, and reads frequently. While academically capable, Henry tends to be self-critical and struggles with confidence, particularly in math. His genuine care for others and quick learning ability are complemented by his natural curiosity and enthusiasm for trying new things.",
    engagementBlurb:
      "This engagement will focus on developing strong academic and executive functioning skills while fostering self-confidence and resilience. Given Henry's tendency to be hard on himself, especially when facing new challenges, our approach will emphasize positive reinforcement and growth mindset strategies. The mentor will help Henry channel his natural curiosity and enthusiasm into effective learning practices, while providing supportive guidance to help him navigate academic and social challenges. Sessions will incorporate his interests in history and sports to make learning engaging and relevant.",
  },
  requirements: [
    "Session recordings via CC Notetaker for progress tracking and reflection",
    "Access to current school materials and assignments",
    "Progress tracking system for academic and executive functioning skills",
    "Documentation of strategies and successes to build confidence",
    "Sessions scheduled during available times: Wednesdays after 3pm ET, Mondays around 5pm ET, or Saturday afternoons",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Develop strong executive functioning skills and academic confidence while fostering resilience and positive self-talk, particularly in challenging learning situations.",
    subGoals: [
      {
        title: "Executive Function Development",
        items: [
          "Create effective organizational systems for managing schoolwork",
          "Build strategies for maintaining focus during challenging tasks",
          "Develop patience and persistence when facing academic challenges",
          "Establish productive routines for homework and studying",
        ],
      },
      {
        title: "Confidence Building",
        items: [
          "Cultivate positive self-talk strategies",
          "Develop growth mindset approaches to learning",
          "Build resilience when facing academic challenges",
          "Create tools for managing peer interactions positively",
        ],
      },
      {
        title: "Academic Skill Enhancement",
        items: [
          "Strengthen math confidence through engaging practice",
          "Connect interests in history and science to other subjects",
          "Develop effective problem-solving strategies",
          "Build on natural curiosity to deepen learning",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction and Connection (15 min)",
        items: [
          "Get to know each other through shared interests in sports and history",
          "Discuss favorite subjects and learning experiences",
          "Establish comfortable communication style",
          "Share stories of overcoming challenges",
        ],
      },
      {
        title: "Goal Setting and Planning (30 min)",
        items: [
          "Identify specific areas where Henry wants to improve",
          "Discuss strategies for building confidence",
          "Create initial organizational system",
          "Set realistic first-week goals",
        ],
      },
      {
        title: "Wrap-up and Next Steps (15 min)",
        items: [
          "Review session highlights and achievements",
          "Plan engaging activities for next session",
          "Establish regular meeting schedule",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in and Review (10 min)",
        items: [
          "Celebrate recent successes and progress",
          "Address any current challenges",
          "Set session goals and priorities",
        ],
      },
      {
        title: "Core Learning (40 min)",
        items: [
          "Work on specific academic or organizational skills",
          "Practice confidence-building strategies",
          "Engage in interest-based learning activities",
          "Apply executive functioning tools to current tasks",
        ],
      },
      {
        title: "Reflection and Planning (10 min)",
        items: [
          "Summarize key learnings and victories",
          "Set manageable goals for the week ahead",
          "Plan next session focus",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundation Building",
        items: [
          "Establish basic organizational systems and routines",
          "Introduce positive self-talk strategies",
          "Create confidence-building toolkit",
          "Begin incorporating interests into learning activities",
        ],
      },
      {
        title: "Month 2: Skill Development",
        items: [
          "Strengthen academic confidence through targeted practice",
          "Expand executive functioning strategies",
          "Develop advanced problem-solving approaches",
          "Build resilience in challenging situations",
        ],
      },
      {
        title: "Month 3: Integration and Growth",
        items: [
          "Apply confidence strategies independently",
          "Master organizational systems",
          "Connect learning across different subjects",
          "Demonstrate growth mindset in new challenges",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Build rapport and establish routines",
          "Create basic organizational system",
          "Identify confidence-building opportunities",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Develop positive self-talk strategies",
          "Practice focus and attention techniques",
          "Integrate interests into learning activities",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Strengthen academic problem-solving skills",
          "Expand organizational strategies",
          "Build confidence through targeted practice",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Apply growth mindset to challenging tasks",
          "Refine study and homework routines",
          "Practice peer interaction strategies",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Develop advanced learning techniques",
          "Strengthen independent problem-solving",
          "Build academic resilience",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Review and reinforce successful strategies",
          "Celebrate growth and progress",
          "Plan next phase of development",
        ],
      },
    ],
  },
};

export default learningPlan;
