"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface OverviewProps {
  overview: {
    studentBlurb: string;
    engagementBlurb: string;
  };
}

const EngagementOverview = ({ overview }: OverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose">
          <p className="text-gray-700">{overview.engagementBlurb}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngagementOverview;
