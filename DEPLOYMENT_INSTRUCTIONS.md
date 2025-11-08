# Deployment Instructions

## Current Status
✅ All deployment files are configured and ready
✅ GitHub Actions workflow is set up (`.github/workflows/deploy.yml`)
✅ Homepage URL is configured: `https://thegauravrn.github.io/Gaurav_Live`

## To Deploy Your Project:

### Step 1: Fix Git Authentication

You need to authenticate with GitHub. Choose one method:

#### Method A: Use Personal Access Token (Recommended)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` and `workflow` permissions
3. Copy the token
4. Update your git remote:
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/theGauravRN/Gaurav_Live.git
   ```
   Or use your username:
   ```bash
   git remote set-url origin https://thegauravrn@github.com/theGauravRN/Gaurav_Live.git
   ```
   (It will prompt for password/token)

#### Method B: Use SSH (If you have SSH keys set up)

```bash
git remote set-url origin git@github.com:theGauravRN/Gaurav_Live.git
```

#### Method C: Clear cached credentials and re-authenticate

```bash
# On Mac
git credential-osxkeychain erase
host=github.com
protocol=https

# Then push (it will prompt for credentials)
git push origin main
```

### Step 2: Push to GitHub

```bash
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/theGauravRN/Gaurav_Live
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 4: Automatic Deployment

Once you push, GitHub Actions will automatically:
- Build your React app
- Deploy it to GitHub Pages
- Your site will be live at: **https://thegauravrn.github.io/Gaurav_Live/**

### Check Deployment Status

- Go to your repository → **Actions** tab
- You'll see the deployment workflow running
- Once complete, your site will be live!

---

## Alternative: Manual Deployment (If GitHub Actions doesn't work)

If you prefer to deploy manually:

```bash
npm run deploy
```

This requires proper GitHub authentication. You may need to:
- Set up a Personal Access Token
- Or configure SSH keys

---

## Troubleshooting

If you see permission errors:
1. Make sure you're logged into GitHub with the correct account (`theGauravRN`)
2. Check that you have write access to the repository
3. Try using a Personal Access Token instead of password

