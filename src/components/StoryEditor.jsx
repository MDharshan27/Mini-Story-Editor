import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Toolbar from "./Toolbar";
import { saveStory } from "../utils/storage";

function StoryEditor() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder.configure({
        placeholder: "Start writing your story here...",
      }),
    ],
    content: "",
  });

  useEffect(() => {
    return () => editor?.destroy?.();
  }, [editor]);

  function handleSave() {
    setError("");
    if (!title.trim()) {
      setError("Please enter a title for your story.");
      return;
    }
    if (!editor) return;

    const story = {
      id: Date.now(),
      title: title.trim(),
      contentJson: editor.getJSON(),
      contentHtml: editor.getHTML(),
      createdAt: new Date().toISOString(),
    };

    saveStory(story);

    setTitle("");
    editor.commands.clearContent(true);
  }

  return (
    <div className="story-editor">
      <label className="title-label" htmlFor="story-title">
        Story Title
      </label>
      <input
        id="story-title"
        type="text"
        className="title-input"
        placeholder="Enter your story title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {editor && <Toolbar editor={editor} />}

      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>

      {error && <div className="error">{error}</div>}

      <button className="save-button" onClick={handleSave}>
        Save Story
      </button>
    </div>
  );
}

export default StoryEditor;
