# Deployment Instructions

## Frontend Deployment (Vercel)

### Step 1: Deploy to Vercel
1. Open terminal and run: `vercel login`
2. Follow the prompts to authenticate with your email
3. Once logged in, run: `vercel`
4. Answer the prompts:
   - Set up and deploy? **Yes**
   - Which scope? **Choose your account**
   - Link to existing project? **No**
   - Project name? **portfolio-website** (or your preferred name)
   - In which directory is your code? **./** (current directory)
   - Override settings? **No**
5. Wait for deployment to complete
6. Note your production URL (e.g., https://portfolio-website.vercel.app)

### Step 2: Set Environment Variables in Vercel
1. Go to https://vercel.com/dashboard
2. Click on your project
3. Go to Settings → Environment Variables
4. Add: `REACT_APP_SERVER_URL` with your Render backend URL (see below)

## Backend Deployment (Render)

### Step 1: Deploy to Render
1. Go to https://render.com
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - Name: **portfolio-backend**
   - Root Directory: **server**
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add Environment Variables:
   - `TELEGRAM_TOKEN_ID` = Your Telegram Bot Token
   - `TELEGRAM_CHAT_ID` = Your Telegram Chat ID
   - `NODE_ENV` = production
7. Click "Create Web Service"
8. Note your backend URL (e.g., https://portfolio-backend.onrender.com)

### Step 3: Update Frontend with Backend URL
1. Go back to Vercel Dashboard
2. Settings → Environment Variables
3. Update `REACT_APP_SERVER_URL` with your Render URL
4. Redeploy by going to Deployments → Redeploy

## Alternative: Deploy via GitHub Integration

### Vercel (Automatic)
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure build settings (should auto-detect)
4. Deploy

### Render (Automatic)
Your `render.yaml` file is already configured!
1. Go to https://render.com/deploy
2. Connect GitHub repository
3. Render will use the `render.yaml` configuration
4. Add environment variables in Render dashboard

## Testing Your Deployment

### Frontend Tests:
- Visit your Vercel URL
- Check all pages load correctly
- Test navigation

### Backend Tests:
- Test contact form submission
- Check Telegram integration works
- Monitor Render logs for any errors

## Important Notes:
- Free Render services sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds
- Consider upgrading to paid tier for production use
- Always use HTTPS URLs for production
- Keep your Telegram credentials secret!

## Troubleshooting:

### If contact form doesn't work:
1. Check CORS settings in backend
2. Verify environment variables are set
3. Check browser console for errors
4. Verify backend is running (check Render dashboard)

### If images don't load:
1. Check image paths are relative
2. Verify build completed successfully
3. Check browser console for 404 errors

## Monitoring:
- Vercel: https://vercel.com/dashboard
- Render: https://dashboard.render.com