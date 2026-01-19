# Deployment Instructions

## 1. Push to GitHub

Since I cannot authenticate with your GitHub account, you need to manually push the code.

1.  **Create a new repository** on GitHub (do not initialize with README, .gitignore, or License).
2.  **Run the following commands** in your terminal (replace `<YOUR_REPO_URL>` with the URL of your new repository):

```bash
git remote add origin <YOUR_REPO_URL>
git branch -M main
git push -u origin main
```

## 2. Deploy to Vercel

1.  **Go to Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
2.  **Add New Project**: Click "Add New..." -> "Project".
3.  **Import Git Repository**: Select the GitHub repository you just pushed.
4.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `client` (IMPORTANT: Edit this to point to the `client` folder).
    *   **Environment Variables**:
        *   Copy the content of your local `.env` (excluding secrets if using Vercel Checkups, but for now just add what's needed).
        *   Keys to add: `NEXT_PUBLIC_API_URL` (set to your deployed backend URL or localhost for testing if needed, though for production you'll need the backend deployed too).
5.  **Deploy Backend**:
    *   Vercel is primarily for frontend (though it supports serverless functions). For a full Express backend, you might consider **Render**, **Railway**, or **Heroku**.
    *   If deploying the backend to **Render**:
        1.  Connect your GitHub repo.
        2.  Root Directory: `server`.
        3.  Build Command: `npm install && npm run build`.
        4.  Start Command: `npm start`.
        5.  Add Environment Variables from `server/.env`.
6.  **Deploy**: Click "Deploy".

## 3. Verify Deployment

*   Visit the URL provided by Vercel/Render.
*   Test the application to ensure it connects effectively.
