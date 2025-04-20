import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//import Topics from "../db/topics.json"; 
export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("/api/topics");
        setTopics(response.data); // Set the fetched data to the state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching topics:", err);
        setError("Failed to fetch topics. Please try again later.");
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleCheckboxChange = (topicId, chapterId, problemId) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === topicId
          ? {
              ...topic,
              chapters: topic.chapters.map((chapter) =>
                chapter.id === chapterId
                  ? {
                      ...chapter,
                      problems: chapter.problems.map((problem) =>
                        problem.id === problemId
                          ? { ...problem, completed: !problem.completed }
                          : problem
                      ),
                    }
                  : chapter
              ),
            }
          : topic
      )
    );
  };

  return (
    <TopicContext.Provider value={{ topics, handleCheckboxChange }}>
      {children}
    </TopicContext.Provider>
  );
};