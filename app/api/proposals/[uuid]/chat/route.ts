import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getLearningPlan } from "@/app/utils/getLearningPlan";

export const maxDuration = 30;

export async function POST(
  req: Request,
  { params }: { params: { uuid: string } }
) {
  const { messages } = await req.json();
  const { uuid } = params;
  const learningPlan = await getLearningPlan(uuid);

  if (!learningPlan) {
    return new Response("Learning plan not found", { status: 404 });
  }

  // Create a system message with the learning plan context
  const systemMessage = {
    role: "system",
    content: `You are a helpful assistant that can answer questions about this specific learning plan. Here is the learning plan data:
${JSON.stringify(learningPlan, null, 2)}

Please help users understand the learning plan and answer any questions they have about it. Focus on being clear and concise while providing accurate information from the plan.`,
  };

  // Add system message to the beginning of the messages array
  const augmentedMessages = [systemMessage, ...messages];

  const result = streamText({
    model: openai("gpt-4"),
    messages: augmentedMessages,
  });

  return result.toDataStreamResponse();
}
