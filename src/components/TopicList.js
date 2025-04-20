import React, { useContext, useState } from "react";
import Chapter from "./Chapter";
import { TopicContext } from "../context/TopicContext";
import './TopicList.css';

const TopicList = () => {
  const { topics, handleCheckboxChange } = useContext(TopicContext);
  const [expandedTopicId, setExpandedTopicId] = useState(null);

  const toggleExpand = (topicId) => {
    setExpandedTopicId((prevId) => (prevId === topicId ? null : topicId));
  };

  return (
    <div className="topic-list">
      {topics.map((topic) => (
        <div key={topic.id} className="topics" >
          <h2
            onClick={() => toggleExpand(topic.id)}
            style={{
              cursor: "pointer",
              color: expandedTopicId === topic.id ? "blue" : "black",
            }}
          >
            {topic.id}. {topic.name} ({topic.level}) {expandedTopicId === topic.id ? "▼" : "▶"}
          </h2>
          {expandedTopicId === topic.id && (
            <div  className='expandedTopic'>
              {topic.chapters.map((chapter) => (
                <Chapter
                  key={chapter.id}
                  topicId={topic.id}
                  chapter={chapter}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicList;