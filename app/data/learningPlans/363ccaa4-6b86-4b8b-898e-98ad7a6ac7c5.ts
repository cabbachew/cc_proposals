import { LearningPlan } from "@/app/types/LearningPlan";

const learningPlan: LearningPlan = {
  title: "Personalized Learning Plan: Medicine & Health Exploration",
  overview: {
    studentBlurb:
      "Ned is an intellectually curious 8th grader at Lakeside who has shown strong interest and aptitude in biology and molecular science through his existing mentorship. He demonstrates excellent critical thinking and has gained confidence in articulating complex scientific concepts. While currently engaged in deep academic study of biology, Ned is interested in exploring how biological sciences connect to real-world medical applications.",
    engagementBlurb:
      "This engagement will complement Ned's ongoing biology studies by introducing the practical applications of biological sciences in medicine and healthcare. Under Sean's guidance, Ned will explore the connection between molecular biology and clinical medicine through hands-on experiments, case studies, and exposure to various aspects of healthcare. The mentorship will begin with foundational concepts in anatomy and physiology while incorporating Sean's expertise in microscopy and lab techniques.",
  },
  requirements: [
    "Session recordings via CC Notetaker for detailed documentation of experiments and discussions",
    "Basic lab equipment for at-home experiments (microscope, slides, basic dissection tools)",
    "Access to online resources for anatomy and physiology visualization",
    "Documentation of experiments and observations in a digital lab notebook",
    "Regular weekend evening availability between 6-8pm",
  ],
  synthesizedGoal: {
    highLevelGoal:
      "Develop a fundamental understanding of how molecular biology translates to medical practice while gaining hands-on experience with basic laboratory techniques and medical concepts",
    subGoals: [
      {
        title: "Laboratory Skills Development",
        items: [
          "Master basic microscopy techniques and sample preparation",
          "Learn proper lab safety protocols and documentation practices",
          "Conduct simple experiments connecting molecular biology to human health",
          "Practice analyzing and interpreting experimental results",
        ],
      },
      {
        title: "Medical Science Foundation",
        items: [
          "Connect molecular biology concepts to human anatomy and physiology",
          "Understand basic principles of disease at the cellular level",
          "Explore the relationship between genetics and human health",
          "Learn about different medical specialties and career paths",
        ],
      },
      {
        title: "Healthcare Exposure",
        items: [
          "Learn about the day-to-day work of healthcare professionals",
          "Understand the path to becoming a physician",
          "Explore different areas of medicine through case studies",
          "Develop awareness of public health and healthcare systems",
        ],
      },
    ],
  },
  sessionStructure: {
    firstSessionAgenda: [
      {
        title: "Introduction (15 min)",
        items: [
          "Get to know Sean's background in research and medicine",
          "Discuss Ned's current biology studies and interests",
          "Share expectations and goals for the mentorship",
        ],
      },
      {
        title: "Core Learning (30-40 min)",
        items: [
          "Overview of molecular biology's role in medicine",
          "Introduction to basic microscopy techniques",
          "Plan initial experiments and projects",
          "Set up digital lab notebook",
        ],
      },
      {
        title: "Next Steps (5-10 min)",
        items: [
          "Review materials needed for future sessions",
          "Establish regular meeting schedule",
          "Outline homework and preparation for next session",
        ],
      },
    ],
    generalSessionAgenda: [
      {
        title: "Check-in (5-10 min)",
        items: [
          "Review previous session's concepts",
          "Discuss any questions from independent work",
          "Set goals for current session",
        ],
      },
      {
        title: "Main Activity (40-50 min)",
        items: [
          "Hands-on experiment or technique practice",
          "Case study analysis or concept exploration",
          "Connection of theory to practical applications",
          "Documentation and result analysis",
        ],
      },
      {
        title: "Wrap-up (5-10 min)",
        items: [
          "Summarize key learnings",
          "Plan next session's focus",
          "Assign relevant readings or exercises",
        ],
      },
    ],
  },
  roadmap: {
    monthlyRoadmap: [
      {
        title: "Month 1: Foundations",
        items: [
          "Master basic microscopy and lab safety",
          "Learn cell biology fundamentals in medical context",
          "Explore different types of medical imaging",
          "Complete first independent sample analysis",
        ],
      },
      {
        title: "Month 2: Human Systems",
        items: [
          "Study major organ systems and their cellular components",
          "Analyze blood samples under microscope",
          "Explore genetic factors in human health",
          "Begin case study analysis",
        ],
      },
      {
        title: "Month 3: Clinical Applications",
        items: [
          "Connect laboratory findings to medical diagnoses",
          "Study common diseases at molecular level",
          "Explore medical research methodologies",
          "Design independent research project",
        ],
      },
    ],
    weeklyRoadmap: [
      {
        title: "Sessions 1-2",
        items: [
          "Introduction to microscopy and lab safety",
          "Basic cell biology review in medical context",
          "First microscope observations",
        ],
      },
      {
        title: "Sessions 3-4",
        items: [
          "Different types of microscopy in medicine",
          "Sample preparation techniques",
          "Document first independent observations",
        ],
      },
      {
        title: "Sessions 5-6",
        items: [
          "Introduction to human organ systems",
          "Connecting molecular biology to anatomy",
          "Begin exploring medical case studies",
        ],
      },
      {
        title: "Sessions 7-8",
        items: [
          "Blood cell analysis techniques",
          "Basic principles of immunology",
          "Healthcare system overview",
        ],
      },
      {
        title: "Sessions 9-10",
        items: [
          "Genetic factors in human health",
          "DNA analysis techniques",
          "Medical research methods introduction",
        ],
      },
      {
        title: "Sessions 11-12",
        items: [
          "Disease processes at cellular level",
          "Medical diagnostic techniques",
          "Independent project planning",
        ],
      },
    ],
  },
};

export default learningPlan;
