"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface OverviewProps {
  overview: {
    studentBlurb: string;
    engagementBlurb: string;
  };
}

const StudentOverview = ({ overview }: OverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose">
          <p className="text-gray-700">{overview.studentBlurb}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentOverview;
