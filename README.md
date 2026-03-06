# 🏦 SecureBank Virtual ATM - AI-Powered Educational Banking Simulator

An advanced full-stack educational ATM system built with MEAN Stack (MongoDB, Express.js, Node.js, Vanilla JavaScript) featuring 4 integrated AI systems: behavioral biometrics, fraud detection, financial insights, and currency market intelligence.

## 🎓 Educational Purpose

This project is designed to teach banking operations safely to people of all ages (7 years to adults) in a virtual environment with no real money involved. It demonstrates professional full-stack development, AI integration, and modern security practices.

## 🌐 What is a Virtual ATM Web Application?

This is a **digital banking simulation** that replicates ATM functionality through a web interface:

- **No Physical Cash**: All transactions are digital - balances update in the database
- **Virtual Transactions**: Withdrawals and deposits are simulated database updates
- **Real Banking Logic**: Follows actual banking rules and security protocols
- **AI-Enhanced**: Includes 4 intelligent systems not found in physical ATMs
- **Educational Focus**: Safe learning environment for financial literacy

### How It Works
1. **User Authentication**: Login with account number + PIN (JWT tokens)
2. **Virtual Operations**: Select withdraw, deposit, transfer, or balance inquiry
3. **Database Updates**: System updates balances in MongoDB in real-time
4. **AI Integration**: Real-time fraud detection, currency conversion, and financial insights
5. **No Physical Cash**: Everything is ledger-based - perfect for education and web banking

## 🤖 AI Features (4 Integrated Systems)

### 1. **AI Behavioral Biometrics** (Fraud Detection)
Watches how users interact with the ATM to detect stolen accounts or suspicious behavior.

**How it works:**
- **Typing Pattern Analysis**: Tracks keystroke dynamics, timing, and rhythm
- **Mouse Movement Tracking**: Analyzes mouse velocity, smoothness, and patterns
- **Paste Detection**: Flags suspicious behavior (pasting credentials = potential theft)
- **Touch Gesture Recognition**: Monitors touch interactions on mobile devices
- **Real-time Risk Scoring**: Calculates behavioral risk score (0-100)

**What it detects:**
- Stolen credentials (different typing patterns)
- Bot attacks (unnatural mouse movements)
- Credential stuffing (paste behavior)
- Unusual interaction patterns

### 2. **AI Transaction Anomaly Detector**
Analyzes transaction patterns to detect unusual or fraudulent transactions.

**How it works:**
- **Amount Analysis**: Compares transaction amounts to user's normal spending
- **Time Analysis**: Flags transactions at unusual hours (like 3 AM)
- **Frequency Analysis**: Detects rapid multiple transactions
- **Pattern Learning**: Learns user's normal behavior over time
- **Multi-factor Risk Scoring**: Weighted assessment (0-100 scale)

**What it detects:**
- Unusually large withdrawals
- Transactions at odd hours
- Rapid successive transactions (potential fraud)
- Deviations from spending patterns

### 3. **AI Financial Assistant**
Provides smart insights and predictions about user finances.

**How it works:**
- **Spending Analysis**: Tracks and analyzes spending vs deposits
- **Balance Alerts**: Proactive low balance warnings
- **Predictive Analytics**: Forecasts future spending based on 30-day history
- **Investment Suggestions**: Recommends investing when balance is high
- **Savings Recommendations**: Suggests savings amounts based on habits

**What it provides:**
- Spending predictions for next month
- Low balance warnings
- Investment opportunities
- Personalized financial advice

### 4. **AI Currency Market Intelligence**
Provides real-time currency exchange with market analysis and predictions.

**How it works:**
- **Real-time Exchange Rates**: Fetches live rates from APIs (15 currencies)
- **Market Trend Analysis**: Analyzes which currencies are rising/falling
- **Price Predictions**: Predicts future exchange rates based on trends
- **Exchange Recommendations**: Tells you best time to exchange money
- **Market News Generation**: Creates news summaries about currency movements

**What it provides:**
- Live exchange rates for 9 currencies (USD, EUR, GBP, JPY, PHP, CNY, INR, AUD, CAD)
- Market trend analysis (bullish/bearish)
- Best time to exchange recommendations
- Potential savings calculations

## 🎯 Key Features

### 10 Core Banking Operations
1. ✅ **Balance Inquiry** - Check account balance
2. 💳 **Virtual Cash Withdrawal** - Withdraw money (updates database balance)
3. 💸 **Virtual Cash Deposit** - Deposit money (updates database balance)
4. 🔄 **Money Transfer** - Transfer between accounts
5. 📊 **Transaction History** - View all transactions with AI verification badges
6. 📄 **Mini Statement** - View last 5 transactions
7. 💱 **Currency Exchange** - Real-time conversion (9 currencies)
8. 🔐 **PIN Change** - Secure PIN update
9. � **Receipt Download** - Generate and download transaction receipts
10. ❓ **Help & Tutorial** - Interactive help system

### Advanced Features
- 🤖 **AI Security Dashboard** - Real-time behavioral analysis and risk scoring
- 🌐 **6 Languages** - English, Spanish, Chinese, Japanese, Filipino, Hindi
- � **9 Currencies** - USD, EUR, GBP, JPY, PHP, CNY, INR, AUD, CAD
- ⏱️ **Auto-Logout** - 30-second timeout for security (demo mode)
- � **Smart Notifications** - Toast notifications for all actions
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean gradient design with smooth animations

### Security Features
- 🔐 **PIN Authentication** - 4-digit PIN with JWT tokens
- �️ **Behavioral Biometrics** - Typing and mouse pattern analysis
- 🚨 **Fraud Detection** - Real-time transaction anomaly detection
- ⏰ **Session Timeout** - Auto-logout after inactivity
- 🔒 **Transaction Limits** - Prevents excessive withdrawals
- ✅ **Input Validation** - Prevents invalid transactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Backend Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Environment**
Create a `.env` file in the root directory:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/securebank-atm
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

3. **Start MongoDB**
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

4. **Seed Database with Demo Accounts**
```bash
npm run seed
```

5. **Start Backend Server**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Server will run at `http://localhost:3000`

### Frontend Setup

The frontend is a standalone HTML application that connects to the backend API.

**To use with backend (recommended):**
1. Make sure backend server is running (see above)
2. Open `index.html` in your browser
3. The app will automatically connect to `http://localhost:3000`
4. Login with demo accounts (see below)

**Configuration:**
- Edit `config.js` to switch between backend and localStorage mode
- `USE_BACKEND: true` - Uses MongoDB backend (default)
- `USE_BACKEND: false` - Uses localStorage only (offline mode)

### API Endpoints

#### Authentication
- `POST /api/auth/login` - Login with account number and PIN

#### Accounts
- `GET /api/accounts/balance` - Get account balance (requires auth)
- `PUT /api/accounts/change-pin` - Change PIN (requires auth)

#### Transactions
- `GET /api/transactions` - Get transaction history (requires auth)
- `POST /api/transactions/withdraw` - Withdraw money (requires auth)
- `POST /api/transactions/deposit` - Deposit money (requires auth)
- `POST /api/transactions/transfer` - Transfer money (requires auth)

### Demo Accounts
```
Account 1:
- Account Number: 1234567890
- PIN: 1234
- Balance: $5,000

Account 2:
- Account Number: 9876543210
- PIN: 5678
- Balance: $10,000
```

### Installation
1. Clone or download the project
2. Install dependencies: `npm install`
3. Configure `.env` file (see Backend Setup above)
4. Start MongoDB
5. Seed database: `npm run seed`
6. Start backend: `npm run dev`
7. Open `index.html` in your browser
8. Login with demo accounts

### Project Structure
```
securebank-atm/
├── Backend (Node.js + Express + MongoDB)
│   ├── server.js              # Express server
│   ├── seed.js                # Database seeding script
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment variables
│   ├── models/
│   │   ├── User.js            # User/Account model
│   │   └── Transaction.js     # Transaction model
│   ├── routes/
│   │   ├── auth.js            # Authentication routes
│   │   ├── accounts.js        # Account management routes
│   │   └── transactions.js    # Transaction routes
│   └── middleware/
│       └── auth.js            # JWT authentication middleware
│
├── Frontend (HTML + CSS + JavaScript)
│   ├── index.html             # Main ATM interface
│   ├── style.css              # Styling and animations
│   ├── script.js              # Core banking logic
│   ├── config.js              # Configuration (backend/localStorage mode)
│   ├── api-service.js         # Backend API integration
│   ├── client-translations.js # Multi-language support (6 languages)
│   ├── receipt-modal.js       # Receipt generation
│   ├── ai-security.js         # AI security & behavioral biometrics
│   └── ai-currency.js         # Currency conversion & market intelligence
│
└── Documentation
    ├── README.md              # Project overview
    ├── QUICK_START_GUIDE.md   # Setup instructions
    └── PRESENTATION_GUIDE.md  # Presentation & showcase guide
```

## 🏗️ MEAN Stack Architecture

### MongoDB
- User accounts with bcrypt-hashed PINs
- Transaction history with timestamps
- Indexes for optimized queries
- Automatic timestamps (createdAt, updatedAt)
- Demo accounts seeded via `seed.js`

### Express.js
- RESTful API design
- JWT authentication middleware
- CORS enabled for frontend
- Request validation
- Error handling middleware
- Security headers

### Node.js
- Async/await patterns
- Environment configuration (.env)
- Bcrypt password hashing
- JWT token generation
- MongoDB connection management

### Frontend (Vanilla JavaScript)
- Modern ES6+ JavaScript
- Modular code organization
- API service layer for backend calls
- Real-time UI updates
- Multi-language support (6 languages)
- Responsive design (HTML5 + CSS3)

## 🔬 AI Technology Stack

### Behavioral Biometrics
- **Typing Dynamics**: Keystroke timing and duration analysis
- **Mouse Dynamics**: Movement velocity and smoothness tracking
- **Touch Analytics**: Gesture pattern recognition
- **Session Profiling**: User interaction timing analysis

### Anomaly Detection Algorithms
- **Statistical Analysis**: Mean, variance, and deviation detection
- **Pattern Recognition**: Historical behavior comparison
- **Multi-factor Scoring**: Weighted risk assessment
- **Threshold-based Alerts**: Configurable risk levels

### Machine Learning Concepts
- **Behavioral Profiling**: User pattern learning
- **Predictive Analytics**: Spending forecasting
- **Risk Classification**: Low/Medium/High risk categorization
- **Adaptive Learning**: Pattern updates based on user behavior

## 🛡️ Security Measures

### Authentication
- Hashed PIN storage (demo implementation)
- Behavioral verification on login
- Failed attempt tracking
- Account lockout mechanism

### Transaction Security
- Real-time fraud detection
- Anomaly scoring for all transactions
- User confirmation for high-risk operations
- Transaction limits enforcement

### Session Security
- Auto-logout after inactivity
- Session timeout warnings
- Secure data clearing on logout
- Continuous behavioral monitoring

## 📊 AI Risk Scoring

### Risk Levels
- **LOW (0-20)**: Normal behavior, transaction approved
- **MEDIUM (21-60)**: Unusual pattern, additional monitoring
- **HIGH (61-100)**: Suspicious activity, requires verification

### Scoring Factors
1. **Amount Anomaly** (40% weight)
   - Compared to average transaction amount
   - Maximum transaction history
   
2. **Time Anomaly** (20% weight)
   - Unusual transaction hours
   - Pattern deviation from normal times
   
3. **Frequency Anomaly** (30% weight)
   - Transaction count per hour
   - Rapid successive transactions
   
4. **Behavioral Anomaly** (10% weight)
   - Typing pattern changes
   - Mouse behavior deviation

## 🎨 UI/UX Features

### Visual Feedback
- Color-coded risk indicators
- Animated transitions
- Real-time notifications
- Progress indicators
- Status badges

### Accessibility
- Clear visual hierarchy
- Touch-friendly buttons
- Keyboard navigation support
- Responsive design
- High contrast colors

## 🔮 Future Enhancements

### Potential Features
- Mobile app version (iOS/Android)
- Biometric authentication (fingerprint/face recognition)
- Bill payment functionality
- Investment portfolio tracking
- Gamification (achievements, progress tracking)
- Integration with real ATM hardware
- Advanced AI spending predictions
- Budget planning tools
- Savings goal tracking
- Voice commands
- Video chat support

## 📝 Technical Notes

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Storage & Security
- **Database**: MongoDB for persistent storage
- **Authentication**: JWT tokens with bcrypt-hashed PINs
- **Session Management**: 30-second timeout (demo mode)
- **Transactions**: Full audit trail with timestamps
- **Scalability**: Ready for cloud deployment (AWS, Azure, Google Cloud)

### Performance
- Lightweight (no external dependencies)
- Fast load times
- Efficient DOM manipulation
- Optimized event listeners

## 🤝 Contributing

This is a demonstration project showcasing AI integration in banking applications. Feel free to:
- Fork and modify
- Add new AI features
- Improve security measures
- Enhance UI/UX
- Report issues

## ⚠️ Disclaimer

This project is an **educational banking simulator** for teaching purposes only.

**Educational Purpose:**
- Designed to teach banking operations safely
- No real money or banking connections
- Suitable for ages 7 to adults
- Demonstrates full-stack development and AI integration

**Current Status:**
- ✅ Backend API (Express + MongoDB) - Complete
- ✅ Frontend (HTML/CSS/JavaScript) - Complete
- ✅ Backend-Frontend Integration - Complete
- ✅ 4 AI Systems - Complete
- ✅ 6 Languages - Complete
- ✅ 9 Currencies - Complete

**Security Notes:**
- Uses bcrypt for PIN hashing
- JWT tokens for authentication
- Demo accounts for testing
- 30-second timeout for showcase

**For Production Use:**
- Change JWT_SECRET in .env
- Use strong MongoDB credentials
- Enable HTTPS/SSL
- Implement rate limiting
- Add two-factor authentication
- Set up monitoring and logging
- Follow banking compliance regulations (PCI-DSS, etc.)

## 📄 License

MIT License - Free to use and modify

## 🌟 Project Highlights

**What Makes This Special:**
- ✅ Complete MEAN Stack implementation
- ✅ 4 integrated AI systems (behavioral biometrics, fraud detection, financial assistant, currency intelligence)
- ✅ 10 core ATM operations
- ✅ 6 languages (English, Spanish, Chinese, Japanese, Filipino, Hindi)
- ✅ 9 currencies with real-time exchange rates
- ✅ Professional security (JWT, bcrypt, session management)
- ✅ Clean, organized codebase (17 essential files)
- ✅ Production-ready architecture
- ✅ Educational focus with real-world applications

**Perfect For:**
- School projects and presentations
- Learning full-stack development
- Understanding AI integration
- Teaching financial literacy
- Demonstrating security concepts
- Portfolio projects

---

**Built with ❤️ for educational purposes**

*Demonstrating the future of secure, AI-powered banking education*
