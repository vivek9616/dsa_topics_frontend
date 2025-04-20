import React, { useState } from "react";
import Problem from "./Problem";
import './Chapter.css'; 
const Chapter = ({ topicId, chapter, handleCheckboxChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="chapter">
      <h3
        onClick={toggleExpand}
        style={{ cursor: "pointer", color: isExpanded ? "blue" : "black" }}
      >
        {chapter.name} {isExpanded ? "▼" : "▶"}
      </h3>
      {isExpanded && (
        <div className="expandedChapter">
          {chapter.problems.map((problem) => (
            <Problem
              key={problem.id}
              topicId={topicId}
              chapterId={chapter.id}
              problem={problem}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Chapter;