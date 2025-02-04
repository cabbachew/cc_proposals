import fs from "fs";
import path from "path";
import { LearningPlan } from "@/app/types/LearningPlan";

export async function getAllLearningPlansWithTitles(): Promise<
  Array<{ id: string; title: string }>
> {
  const learningPlansDirectory = path.join(
    process.cwd(),
    "app/data/learningPlans"
  );
  const fileNames = fs.readdirSync(learningPlansDirectory);

  const plans = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".ts"))
      .map(async (fileName) => {
        const id = fileName.replace(/\.ts$/, "");
        const plan = await import(`@/app/data/learningPlans/${fileName}`);
        return {
          id,
          title: (plan.default as LearningPlan).title,
        };
      })
  );

  return plans;
}
