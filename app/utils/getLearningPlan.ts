import { LearningPlan } from "@/app/types/LearningPlan";
import { logger } from "@/lib/logger";

export async function getLearningPlan(
  uuid: string
): Promise<LearningPlan | null> {
  try {
    // Validate UUID format
    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(
        uuid
      )
    ) {
      logger.warn("Invalid UUID format", { uuid });
      return null;
    }

    const plan = await import(`@/app/data/learningPlans/${uuid}.ts`);
    return plan.default;
  } catch (error) {
    logger.error("Failed to load learning plan", {
      uuid,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return null;
  }
}
