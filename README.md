# Mini Story Editor ✍️

A simple **React + Vite** based story editor built with [Tiptap](https://tiptap.dev/).  
It allows users to write stories with basic formatting, insert images, and save them locally.

---

## 🚀 Features
- Rich text editing (Bold, Italic, Headings, Paragraphs, etc.)
- Insert and resize images
- Placeholder text support
- Save stories to local storage
- View saved stories list
- Responsive design

---

## 📦 Tech Stack
- [React](https://react.dev/) (Frontend UI)
- [Vite](https://vitejs.dev/) (Build tool)
- [Tiptap](https://tiptap.dev/) (Rich text editor)
- [Babel](https://babeljs.io/) (Fast Refresh)
- LocalStorage for saving stories

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/MDharshan27/mini-story-editor.git
cd mini-story-editor
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm run dev
```
The app will be available at
👉 http://localhost:5173/

### 4️⃣ Build for production
```bash
npm run build
```

### 5️⃣ Preview production build
```bash
npm run preview
```

### 📂 Project Structure
```bash
mini-story-editor/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles.css
│  ├─ components/
│  │  ├─ StoryEditor.jsx
│  │  ├─ Toolbar.jsx
│  │  └─ StoriesList.jsx
│  └─ utils/
│     └─ storage.js
```

### 📝 Usage
1. Start the app using npm run dev.
2. Write your story in the editor.
3. Insert images using the toolbar.
4. Save the story → It will appear in the "Stories List".
5. Select a story from the list to edit again.

### 📷 ScreenShot
<img width="1362" height="754" alt="image" src="https://github.com/user-attachments/assets/84df6ca6-de8e-4d2c-8b87-62291e65f394" />

