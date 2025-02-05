import { notFound } from "next/navigation";
import { getLearningPlan } from "@/app/utils/getLearningPlan";
import { getAllLearningPlansWithTitles } from "@/app/utils/getAllLearningPlansWithTitles";

import StudentOverview from "@/app/components/StudentOverview";
import EngagementOverview from "@/app/components/EngagementOverview";
import Requirements from "@/app/components/Requirements";
import GoalsSection from "@/app/components/GoalsSection";
import SessionStructure from "@/app/components/SessionStructure";
import ProjectRoadmap from "@/app/components/ProjectRoadmap";
import LearningPlanChat from "@/app/components/LearningPlanChat";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <StudentOverview overview={learningPlan.overview} />
            <EngagementOverview overview={learningPlan.overview} />
            <GoalsSection goals={learningPlan.synthesizedGoal} />
            <Requirements requirements={learningPlan.requirements} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ProjectRoadmap roadmap={learningPlan.roadmap} />
            <SessionStructure
              structure={learningPlan.sessionStructure}
              sessionsOccurred={learningPlan.sessionsOccurred}
            />
          </div>
        </div>
        <div className="w-full mt-8">
          <LearningPlanChat uuid={uuid} />
        </div>
      </div>
    </div>
  );
}
