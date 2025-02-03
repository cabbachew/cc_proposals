"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface RoadmapProps {
  roadmap: {
    monthlyRoadmap: RoadmapItem[];
    weeklyRoadmap: RoadmapItem[];
  };
}

interface RoadmapItem {
  title: string;
  items: string[];
}

const ProjectRoadmap = ({ roadmap }: RoadmapProps) => {
  const [showWeekly, setShowWeekly] = useState(false);
  const currentView = showWeekly
    ? roadmap.weeklyRoadmap
    : roadmap.monthlyRoadmap;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Project Roadmap</CardTitle>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Monthly</span>
            <Switch checked={showWeekly} onCheckedChange={setShowWeekly} />
            <span className="text-sm text-gray-600">Weekly</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {currentView.map((phase, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectRoadmap;
