import React from "react";

function Toolbar({ editor }) {
  if (!editor) return null;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const src = readerEvent.target.result;
      editor.chain().focus().setImage({ src }).run();
    };
    reader.readAsDataURL(file);

    event.target.value = null;
  };

  return (
    <div className="toolbar">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "active" : ""}
        aria-label="Bold"
      >
        <i className="bx bx-bold"></i>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "active" : ""}
        aria-label="Italic"
      >
        <i className="bx bx-italic"></i>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "active" : ""}
        aria-label="BulletList"
      >
        <i className="bx bx-list-ul"></i>
      </button>

      <button type="button" aria-label="Insert Image">
        <label htmlFor="image-upload" style={{ cursor: "pointer", margin: 0 }}>
          <i className="bx bxs-image"></i>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(event) => {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (readerEvent) => {
              const src = readerEvent.target.result;

              editor.chain().focus().setImage({ src, width: 200 }).run();
            };
            reader.readAsDataURL(file);

            event.target.value = null;
          }}
        />
      </button>
    </div>
  );
}

export default Toolbar;
