import Link from "next/link";
import { getAllLearningPlanIds } from "@/app/utils/getAllLearningPlanIds";
import { getLearningPlan } from "@/app/utils/getLearningPlan";

export default async function IndexPage() {
  const ids = await getAllLearningPlanIds();
  const plans = await Promise.all(
    ids.map(async (id) => {
      const plan = await getLearningPlan(id);
      return {
        id,
        title: plan?.title || "Unknown Plan",
        studentName:
          plan?.overview?.studentBlurb?.split(" ")[0] || "Unknown Student",
      };
    })
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Available Learning Proposals
        </h1>
        <div className="grid gap-4">
          {plans.map((plan) => (
            <Link
              key={plan.id}
              href={`/proposals/${plan.id}`}
              className="p-4 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              <div className="font-medium">
                {plan.studentName}'s Learning Plan
              </div>
              <div className="text-sm text-gray-500">{plan.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
