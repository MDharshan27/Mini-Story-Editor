const STORAGE_KEY = "mini_story_editor_stories";

export function saveStory(story) {
  const stories = getStories();
  stories.push(story);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
}

export function getStories() {
  const stories = localStorage.getItem(STORAGE_KEY);
  return stories ? JSON.parse(stories) : [];
}

export function deleteStory(id) {
  let stories = getStories();
  stories = stories.filter(story => story.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
}
