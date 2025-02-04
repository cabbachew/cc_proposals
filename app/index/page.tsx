import { getAllLearningPlanIds } from "@/app/utils/getAllLearningPlanIds";
import Link from "next/link";

export default async function Home() {
  const learningPlanIds = await getAllLearningPlanIds();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Learning Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPlanIds.map((id) => (
            <Link
              key={id}
              href={`/proposals/${id}`}
              className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="font-medium">Learning Plan {id.slice(0, 8)}</div>
              <div className="text-sm text-gray-500 mt-2">
                Click to view details
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
