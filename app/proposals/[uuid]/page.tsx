import { notFound } from "next/navigation";
import { getLearningPlan } from "@/app/utils/getLearningPlan";
import { getAllLearningPlansWithTitles } from "@/app/utils/getAllLearningPlansWithTitles";

import StudentOverview from "@/app/components/StudentOverview";
import EngagementOverview from "@/app/components/EngagementOverview";
import Requirements from "@/app/components/Requirements";
import GoalsSection from "@/app/components/GoalsSection";
import SessionStructure from "@/app/components/SessionStructure";
import ProjectRoadmap from "@/app/components/ProjectRoadmap";
import Tabs from "@/app/components/Tabs";

export async function generateStaticParams() {
  const plans = await getAllLearningPlansWithTitles();
  return plans.map((plan) => ({
    uuid: String(plan.id),
  }));
}

type Params = Promise<{ uuid: string }>;

export default async function LearningPlanPage({ params }: { params: Params }) {
  const { uuid } = await params;
  const learningPlan = await getLearningPlan(uuid);

  if (!learningPlan) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{learningPlan.title}</h1>
        <p className="text-gray-600 italic mb-8">
          This is a beta product. The learning plan below is subject to change
          once a mentor has been selected and may be adjusted during the
          evaluation period to clarify learning goals with mentor and student
          input.
        </p>

        <Tabs
          labels={[
            "Overview",
            "Goals",
            "Requirements",
            "Roadmap",
            "Session Structure",
          ]}
        >
          <div className="space-y-4">
            <StudentOverview overview={learningPlan.overview} />
            <EngagementOverview overview={learningPlan.overview} />
          </div>
          <GoalsSection goals={learningPlan.synthesizedGoal} />
          <Requirements requirements={learningPlan.requirements} />
          <ProjectRoadmap roadmap={learningPlan.roadmap} />
          <SessionStructure structure={learningPlan.sessionStructure} />
        </Tabs>
      </div>
    </div>
  );
}
