# PEOPLE, PLACES & ME — Spotlight 6 Module 1

Static interactive course for 1:1 English tutoring, designed for GitHub Pages.

## Deploy to GitHub Pages

1. Upload the whole folder contents to a GitHub repository.
2. In GitHub: **Settings → Pages → Deploy from a branch**.
3. Choose `main` and `/ (root)`.
4. Open `https://USERNAME.github.io/REPOSITORY/`.

All internal assets use relative paths, so the project works from a repository subpath. No build step, backend, database or API key is required.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Student state

Progress and answers are stored locally in the browser with `localStorage`. **NEW STUDENT** clears the course state after confirmation.

## Content note

The course follows the syllabus and vocabulary focus of Spotlight 6 Module 1, but uses original contexts, characters, tasks and texts rather than reproducing textbook pages.
