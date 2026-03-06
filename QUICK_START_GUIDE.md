# 🚀 Quick Start Guide - SecureBank Virtual ATM

## ✅ What You Have

A complete, clean, production-ready educational ATM simulator with:
- ✅ MEAN Stack (MongoDB + Express + Node.js + Vanilla JavaScript)
- ✅ 4 AI Systems (Behavioral Biometrics, Fraud Detection, Financial Assistant, Currency Intelligence)
- ✅ 10 Core ATM Operations
- ✅ 6 Languages (English, Spanish, Chinese, Japanese, Filipino, Hindi)
- ✅ 9 Currencies with real-time exchange rates
- ✅ Complete backend-frontend integration
- ✅ 17 essential files (cleaned from 70+ files)

## 📁 Current Project Structure

```
securebank-atm/
├── Backend Files
│   ├── server.js              # Express server
│   ├── seed.js                # Database seeding
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment config
│   ├── models/
│   │   ├── User.js            # User model
│   │   └── Transaction.js     # Transaction model
│   ├── routes/
│   │   ├── auth.js            # Login/authentication
│   │   ├── accounts.js        # Account operations
│   │   └── transactions.js    # Transaction operations
│   └── middleware/
│       └── auth.js            # JWT authentication
│
├── Frontend Files
│   ├── index.html             # Main ATM interface
│   ├── style.css              # Styling
│   ├── script.js              # Core logic
│   ├── config.js              # Configuration
│   ├── api-service.js         # Backend API calls
│   ├── client-translations.js # 6 languages
│   ├── receipt-modal.js       # Receipt generation
│   ├── ai-security.js         # AI security system
│   └── ai-currency.js         # Currency AI system
│
└── Documentation
    ├── README.md              # Project overview
    ├── QUICK_START_GUIDE.md   # This file
    └── PRESENTATION_GUIDE.md  # Presentation help
```

**Total: 17 essential files** (cleaned from 70+ files)

## 🚀 How to Run the Project

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment
Create a `.env` file in the root directory:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/securebank-atm
JWT_SECRET=your_secret_key_change_in_production
NODE_ENV=development
```

### Step 3: Start MongoDB
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

### Step 4: Seed Database with Demo Accounts
```bash
npm run seed
```

You should see:
```
✅ MongoDB connected
✅ Database cleared
✅ Demo accounts created
✅ Seeding completed successfully
```

### Step 5: Start Backend Server
```bash
# Development mode (auto-reload)
npm run dev

# OR Production mode
npm start
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 3000
```

### Step 6: Open Frontend
1. Open `index.html` in your browser
2. Or use Live Server in VS Code
3. The app will automatically connect to `http://localhost:3000`

## 🎮 Demo Accounts

```
Account 1:
- Account Number: 1234567890
- PIN: 1234
- Balance: $5,000
- Name: John Doe

Account 2:
- Account Number: 9876543210
- PIN: 5678
- Balance: $10,000
- Name: Jane Smith
```

## 🧪 Testing Features

### Test 1: Login & Balance
1. Open `index.html`
2. Click "Continue to Virtual ATM"
3. Enter Account: `1234567890`, PIN: `1234`
4. Click Login
5. ✅ You should see balance: $5,000

### Test 2: Withdrawal
1. Click "Virtual Withdrawal"
2. Select currency: USD
3. Enter amount: $100
4. Click "Withdraw"
5. ✅ Balance should update to $4,900
6. ✅ Transaction appears in history

### Test 3: Currency Exchange
1. Click "Virtual Withdrawal"
2. Select currency: EUR (Euro)
3. Enter amount: $100
4. ✅ See exchange rate calculation
5. ✅ See equivalent amount in EUR

### Test 4: AI Security Dashboard
1. Click the AI Assistant button (🤖)
2. ✅ See behavioral analysis
3. ✅ See risk score
4. ✅ See typing and mouse metrics

### Test 5: Language Change
1. Click language button (🌐 English)
2. Select "Español"
3. ✅ Entire interface translates to Spanish
4. Try other languages: Chinese, Japanese, Filipino, Hindi

### Test 6: AI Fraud Detection (Paste Detection)
1. Go to login screen
2. Copy the PIN: `1234`
3. Paste it in the PIN field
4. ✅ You should see "Paste behavior detected" warning
5. ✅ AI flags this as suspicious behavior

### Test 7: Transaction History
1. Click "Full History"
2. ✅ See all transactions with dates
3. ✅ See AI verification badges
4. Click "Download Receipt"
5. ✅ Receipt downloads as text file

### Test 8: Auto-Logout
1. Go to main menu
2. Don't touch anything for 20 seconds
3. ✅ Warning appears at 20 seconds
4. ✅ Auto-logout at 30 seconds

### Test 9: Money Transfer
1. Click "Money Transfer"
2. Enter recipient: `9876543210`
3. Enter amount: $50
4. Click "Transfer"
5. ✅ Balance updates
6. ✅ Transaction recorded

### Test 10: PIN Change
1. Click "Change PIN"
2. Enter current PIN: `1234`
3. Enter new PIN: `5555`
4. Confirm new PIN: `5555`
5. ✅ PIN changed successfully
6. Logout and login with new PIN: `5555`

## 📊 What You'll See in Console

### Frontend Console (Browser):
```
🔧 USE_BACKEND configuration: true
✅ Using BACKEND mode - calling API
🔐 Logging in...
✅ Login successful
💰 Fetching balance...
✅ Balance loaded: $5000
🚨 PASTE DETECTED - Suspicious behavior!
```

### Backend Console (Terminal):
```
✅ MongoDB connected successfully
🚀 Server running on port 3000
POST /api/auth/login 200 - Login successful
GET /api/accounts/balance 200 - Balance retrieved
POST /api/transactions/withdraw 200 - Withdrawal processed
GET /api/transactions 200 - Transactions retrieved
```

## 🎯 Configuration Options

### Backend Mode (Default - Recommended)
Edit `config.js`:
```javascript
const APP_CONFIG = {
    USE_BACKEND: true,  // Uses MongoDB backend
    API_BASE_URL: 'http://localhost:3000',
    SESSION_TIMEOUT: 30000,  // 30 seconds for demo
    // ...
};
```

### LocalStorage Mode (Offline)
```javascript
const APP_CONFIG = {
    USE_BACKEND: false,  // Uses localStorage only
    // ...
};
```

**Note:** Backend mode is recommended for full functionality including AI features and data persistence.

## 🎉 What You've Built

**A complete, professional educational ATM simulator with:**

✅ **Full-Stack MEAN Architecture**
- MongoDB database with 2 demo accounts
- Express.js RESTful API (8+ endpoints)
- Node.js backend server
- Vanilla JavaScript frontend

✅ **4 AI Systems**
- Behavioral Biometrics (typing/mouse analysis)
- Transaction Anomaly Detection (fraud detection)
- Financial Assistant (spending predictions)
- Currency Market Intelligence (exchange rates)

✅ **10 Core ATM Operations**
- Balance inquiry, withdrawal, deposit, transfer
- Transaction history, mini statement
- Currency exchange, PIN change
- Receipt download, help system

✅ **Advanced Features**
- 6 languages (English, Spanish, Chinese, Japanese, Filipino, Hindi)
- 9 currencies with real-time exchange rates
- AI security dashboard
- Auto-logout (30 seconds for demo)
- JWT authentication
- Bcrypt PIN hashing

✅ **Clean Codebase**
- 17 essential files (cleaned from 70+)
- Well-organized structure
- Professional architecture
- Production-ready

## 🚀 Ready for Presentation!

Your project is complete and ready to showcase. Check out `PRESENTATION_GUIDE.md` for:
- 5-10 minute presentation script
- Live demo walkthrough
- Q&A preparation
- AI feature explanations
- Slide outlines

## 📝 Notes

- Backend must be running for full functionality
- MongoDB must be running and seeded
- Use demo accounts for testing
- Session timeout is 30 seconds (for showcase)
- All AI features work in real-time
- Transactions persist in database

## 🆘 Troubleshooting

**MongoDB won't start:**
```bash
# Windows
net start MongoDB

# Check if running
mongo --version
```

**Backend won't start:**
- Check if MongoDB is running
- Check `.env` file exists
- Check port 3000 is not in use
- Run `npm install` again

**Frontend won't connect:**
- Check backend is running on port 3000
- Check `config.js` has `USE_BACKEND: true`
- Check browser console for errors
- Try clearing browser cache (Ctrl+Shift+R)

**Transactions not saving:**
- Check MongoDB is running
- Check backend console for errors
- Check `USE_BACKEND: true` in `config.js`

---

**You're all set! Good luck with your presentation! 🌟**
