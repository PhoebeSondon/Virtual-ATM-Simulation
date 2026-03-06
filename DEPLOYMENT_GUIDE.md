# SecureBank ATM - Deployment Guide

## Overview

Your SecureBank Virtual ATM is a full-stack MEAN application that requires:
- **Backend**: Node.js + Express server
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript

You **cannot** use GitHub Pages because it only hosts static files (no backend server).

---

## Recommended: Deploy on Render.com (FREE)

### Step 1: Prepare Your Code

✅ **Already done!** Your code is ready:
- `node_modules/` is in `.gitignore` (correct!)
- `config.js` now auto-detects localhost vs production
- All your code files are ready

### Step 2: Push to GitHub

```bash
# In your project folder
git add .
git commit -m "Ready for deployment"
git push origin main
```

**Note**: Don't worry about the "too many files" error - that's just GitHub warning you. As long as `node_modules/` is in `.gitignore`, it won't be uploaded.

### Step 3: Create MongoDB Database (FREE)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create a **FREE** cluster (M0 Sandbox)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. **Save this connection string** - you'll need it!

### Step 4: Deploy on Render.com

1. Go to [render.com](https://render.com) and sign up (free)
2. Click "New +" → "Web Service"
3. Connect your GitHub account and select your repository
4. Configure the service:
   - **Name**: `securebank-atm` (or any name you want)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Select **FREE**

5. Add Environment Variables (click "Advanced" → "Add Environment Variable"):
   ```
   MONGODB_URI = your-mongodb-connection-string-from-step-3
   JWT_SECRET = your-secret-key-here-make-it-random
   PORT = 3000
   ```

6. Click "Create Web Service"

7. Wait 2-5 minutes for deployment to complete

8. Your app will be live at: `https://securebank-atm.onrender.com` (or your chosen name)

---

## Alternative: Deploy on Railway.app (FREE)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `PORT`
6. Railway will automatically deploy your app

---

## Alternative: Deploy on Heroku (FREE with limits)

1. Go to [heroku.com](https://heroku.com) and sign up
2. Install Heroku CLI
3. In your project folder:
   ```bash
   heroku login
   heroku create securebank-atm
   heroku config:set MONGODB_URI="your-connection-string"
   heroku config:set JWT_SECRET="your-secret-key"
   git push heroku main
   ```

---

## Environment Variables Explained

Your app needs these environment variables on the hosting platform:

### Required:
- **MONGODB_URI**: Your MongoDB Atlas connection string
  - Example: `mongodb+srv://user:pass@cluster.mongodb.net/securebank`
  
- **JWT_SECRET**: A random secret key for authentication tokens
  - Example: `mySecretKey123!@#RandomString`
  - Make it long and random!

- **PORT**: The port number (usually 3000 or provided by hosting platform)

### Your .env file (for local development):
```
MONGODB_URI=mongodb://localhost:27017/securebank
JWT_SECRET=your-local-secret-key
PORT=3000
```

**IMPORTANT**: Never upload your `.env` file to GitHub! It's already in `.gitignore`.

---

## After Deployment

### Test Your Deployed App:

1. Visit your deployed URL (e.g., `https://securebank-atm.onrender.com`)
2. Try logging in with demo accounts:
   - Account: `1234567890`, PIN: `1234`
   - Account: `9876543210`, PIN: `5678`
3. Test withdraw, deposit, transfer features
4. Check if balance updates correctly

### Seed Your Database:

If your deployed database is empty, you need to seed it:

**Option 1**: Run seed script on Render:
1. Go to Render dashboard → Your service → "Shell"
2. Run: `node seed.js`

**Option 2**: Use MongoDB Compass:
1. Connect to your MongoDB Atlas database
2. Manually create the `users` collection
3. Insert the demo accounts

---

## Troubleshooting

### "Cannot connect to database"
- Check your `MONGODB_URI` environment variable
- Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Check MongoDB Atlas → Network Access → Add IP Address → Allow Access from Anywhere

### "Login not working"
- Check browser console for errors
- Make sure `JWT_SECRET` is set in environment variables
- Check if database has user accounts (run seed.js)

### "API calls failing"
- Check if `config.js` is using the correct API URL
- Open browser DevTools → Network tab to see API requests
- Check Render logs for backend errors

---

## Cost

All recommended platforms have **FREE tiers**:
- ✅ Render.com: FREE (with some limitations)
- ✅ Railway.app: FREE $5 credit per month
- ✅ MongoDB Atlas: FREE M0 cluster (512MB storage)
- ✅ Heroku: FREE (with sleep after 30 min inactivity)

**Total cost: $0** for your school project! 🎉

---

## For Your Presentation

Once deployed, you can:
1. Share the live URL with your teacher/classmates
2. Demo the app without running `node server.js` locally
3. Access it from any device with internet
4. Show it works on mobile phones too!

---

## Need Help?

If you encounter issues during deployment, check:
1. Render/Railway logs for error messages
2. MongoDB Atlas connection status
3. Environment variables are set correctly
4. Your GitHub repository has all the code (except node_modules)

Good luck with your deployment! 🚀
