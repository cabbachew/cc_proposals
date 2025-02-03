import { notFound } from "next/navigation";
import { getLearningPlan } from "@/app/utils/getLearningPlan";
import { getAllLearningPlanIds } from "@/app/utils/getAllLearningPlanIds";
import StudentOverview from "@/app/components/StudentOverview";
import EngagementOverview from "@/app/components/EngagementOverview";
import Requirements from "@/app/components/Requirements";
import GoalsSection from "@/app/components/GoalsSection";
import SessionStructure from "@/app/components/SessionStructure";
import ProjectRoadmap from "@/app/components/ProjectRoadmap";

export async function generateStaticParams() {
  const ids = await getAllLearningPlanIds();
  return ids.map((uuid) => ({
    uuid,
  }));
}

interface PageProps {
  params: Promise<{
    uuid: string;
  }>;
}

export default async function LearningPlanPage({ params }: PageProps) {
  const resolvedParams = await params;
  const learningPlan = await getLearningPlan(resolvedParams.uuid);

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
            <SessionStructure structure={learningPlan.sessionStructure} />
          </div>
        </div>
      </div>
    </div>
  );
}
