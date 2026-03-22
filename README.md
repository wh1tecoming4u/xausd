# Gold Trading Tracker

## Setup (5 minutes)

### 1. Push this folder to a GitHub repo

### 2. Connect repo to Vercel
Go to vercel.com → New Project → Import your repo → Deploy

### 3. Add Environment Variables in Vercel
Go to your project → Settings → Environment Variables → add these 3:

| Name | Value |
|------|-------|
| `GITHUB_TOKEN` | A GitHub Personal Access Token with `repo` scope. Get one at: github.com/settings/tokens → Generate new token (classic) → check `repo` |
| `GITHUB_OWNER` | Your GitHub username (e.g. `johndoe`) |
| `GITHUB_REPO` | Your repo name (e.g. `gold-tracker`) |

### 4. Redeploy
In Vercel → Deployments → click the 3 dots on latest → Redeploy

### Done!
- Data saves to `data/store.json` in your GitHub repo automatically
- Works on any device, any browser
- If internet is down, data saves to localStorage and syncs next time you save
- The "✓ Saved" indicator in the top right confirms cloud save

## How it works
- `api/load.js` — reads `data/store.json` from your repo via GitHub API
- `api/save.js` — writes back to `data/store.json` via GitHub API whenever you log a day
- `data/store.json` — your data file (committed to GitHub = permanent)
