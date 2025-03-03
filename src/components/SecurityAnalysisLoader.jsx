import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./multi-step-loader.jsx";

const loadingStates = [
  {
    text: "🐚 Cloning your awesome codebase.",
  },
  {
    text: "🔭 Identifying L1 || L2 project.",
  },
  {
    text: "🧰 Building base for Security Analysis.",
  },
  {
    text: "🍀 Looks biological presence can be found.",
  },
  {
    text: "🚀 Rocket has been lunched with report now, Connecting...",
  },
];

export function SecurityAnalysisLoader({fetchData, isLoading}) {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={isLoading} duration={1800} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        className="bg-gray-700 text-white mt-5 py-2 px-3 rounded-md text-sm font-semibold ease-in-out transition-all cursor-pointer hover:bg-gray-500"
        onClick={() => fetchData()}
        disabled={isLoading}
      >
        Import & Analyze
      </button>
    </div>
  );
}
