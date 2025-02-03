export interface LearningPlan {
  title: string;
  overview: {
    studentBlurb: string;
    engagementBlurb: string;
  };
  requirements: string[];
  synthesizedGoal: {
    highLevelGoal: string;
    subGoals: {
      title: string;
      items: string[];
    }[];
  };
  sessionStructure: {
    firstSessionAgenda: AgendaItem[];
    generalSessionAgenda: AgendaItem[];
  };
  roadmap: {
    monthlyRoadmap: RoadmapItem[];
    weeklyRoadmap: RoadmapItem[];
  };
}

interface AgendaItem {
  title: string;
  items: string[];
}

interface RoadmapItem {
  title: string;
  items: string[];
}
