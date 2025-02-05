"use client";

import { useChat } from "ai/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface LearningPlanChatProps {
  uuid: string;
}

export default function LearningPlanChat({ uuid }: LearningPlanChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: `/api/proposals/${uuid}/chat`,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ask AI</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-[400px] overflow-y-auto space-y-4 mb-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    m.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question about this learning plan..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
