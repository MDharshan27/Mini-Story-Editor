import React, { useEffect, useState } from "react";
import { getStories, deleteStory } from "../utils/storage";

function StoriesList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(getStories());
  }, []);

  const handleDelete = (id) => {
    deleteStory(id);
    setStories(getStories());
  };

  if (stories.length === 0) return <p>No stories yet.</p>;

  return (
    <div className="stories-list">
      {stories.map((story) => (
        <div key={story.id} className="story-card">
          <h3>{story.title}</h3>
          <div
            className="story-content"
            dangerouslySetInnerHTML={{ __html: story.contentHtml }}
          />
          <small>{new Date(story.createdAt).toLocaleString()}</small>
          <button onClick={() => handleDelete(story.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StoriesList;
