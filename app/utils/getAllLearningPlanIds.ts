import fs from "fs";
import path from "path";

export async function getAllLearningPlanIds(): Promise<string[]> {
  const learningPlansDirectory = path.join(
    process.cwd(),
    "app/data/learningPlans"
  );
  const fileNames = fs.readdirSync(learningPlansDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".ts"))
    .map((fileName) => fileName.replace(/\.ts$/, ""));
}
