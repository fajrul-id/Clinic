"use client";
import { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="pt-4 px-8 pb-6 sm:px-6 lg:px-8">
      <div className="flex gap-2 md:gap-8 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "bg-blue text-white scale-110"
                : "bg-gray-300 text-gray-700"
            }ml-1 p-2 md:ml-2 md:py-2 md:px-4 focus:outline-none rounded-t-md hover:scale-110 hover:bg-slate-500 transition-all duration-300`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-b-md">
        <div className="md:max-w-[400px]">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
