import React from "react";
import './Problem.css'; 

const Problem = ({ topicId, chapterId, problem, handleCheckboxChange }) => {
  return (
    <div  className="problem-list">
      <input
        type="checkbox"
        checked={problem.completed}
        onChange={() =>
          handleCheckboxChange(topicId, chapterId, problem.id)
        }
      />
      <label className="problems">{problem.name}</label>
      <div className="problem-links">
        <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer">
          YouTube Tutorial
        </a>{" "}
        |{" "}
        <a href={problem.leetcodeLink} target="_blank" rel="noopener noreferrer">
          LeetCode Problem
        </a>{" "}
        |{" "}
        <a href={problem.articleLink} target="_blank" rel="noopener noreferrer">
          Article
        </a>{" "}
        | Level: {problem.level}
      </div>
    </div>
  );
};

export default Problem;