# Vercel Deployment Steps

## 1. Login to Vercel (if not already)
```bash
vercel login
```

## 2. Deploy to Vercel
Run this command and answer the prompts:
```bash
vercel
```

### Prompts and Answers:
- **Set up and deploy?** → `Y` (Yes)
- **Which scope?** → Select your username
- **Link to existing project?** → `N` (No, create new)
- **Project name?** → `portfolio-website` (or press Enter for default)
- **In which directory is your code?** → `./` (press Enter)
- **Override settings?** → `N` (No)

## 3. Deploy to Production
After the preview deployment, deploy to production:
```bash
vercel --prod
```

## 4. Get Your URLs
- Preview: `https://[project-name]-[random].vercel.app`
- Production: `https://[project-name].vercel.app`

## 5. Add Environment Variable
Go to your Vercel Dashboard:
1. Visit: https://vercel.com/dashboard
2. Click on your project
3. Go to Settings → Environment Variables
4. Add:
   - Name: `REACT_APP_SERVER_URL`
   - Value: `https://your-backend.onrender.com` (will get this after deploying backend)
   - Environment: Production, Preview, Development

## 6. Redeploy After Adding Environment Variable
```bash
vercel --prod
```

## Alternative: Deploy via GitHub
If CLI doesn't work:
1. Push all changes to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will auto-detect React settings
5. Click Deploy