"use client";

import { useState } from "react";

interface TabProps {
  labels: string[];
  children: React.ReactNode[];
}

const Tabs = ({ labels, children }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b">
        {labels.map((label, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === index ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-4">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
