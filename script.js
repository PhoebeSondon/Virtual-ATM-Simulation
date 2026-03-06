// Demo accounts database
const accounts = {
    '1234567890': {
        pin: '1234',
        name: 'John Doe',
        balance: 5000,
        transactions: []
    },
    '9876543210': {
        pin: '5678',
        name: 'Jane Smith',
        balance: 10000,
        transactions: []
    }
};

let currentAccount = null;
let sessionTimeout = null;
let sessionWarningTimeout = null;
let sessionCountdownInterval = null;
let aiEnabled = true;
let displayCurrency = 'USD'; // Default display currency
let currentClientLanguage = 'en';

// Transaction limits
const TRANSACTION_LIMITS = {
    withdraw: { min: 10, max: 1000 },
    deposit: { min: 10, max: 10000 },
    transfer: { min: 1, max: 5000 }
};

// Client Multilingual Translations
// NOTE: Full translations for all 6 languages are in client-translations.js
// This is a minimal implementation for English and Spanish to start
const clientTranslations = {
    en: {
        // Welcome Screen
        welcomeTitle: 'Welcome to SecureBank Virtual ATM',
        welcomeSubtitle: 'Virtual ATM Simulation',
        welcomeTagline: 'Practice Today, Bank Confidently Tomorrow.',
        aiPoweredBanking: 'AI-Powered Banking',
        whatYouLearn: 'What You\'ll Learn',
        importantNotice: 'Important Notice',
        termsAndConditions: 'Terms and Conditions',
        educationalPurpose: 'Educational Purpose',
        virtualCurrency: 'Virtual Currency',
        noRealBanking: 'No Real Banking',
        dataStorage: 'Data Storage',
        aiFeatures: 'AI Features',
        demoAccounts: 'Demo Accounts',
        disclaimer: 'Disclaimer',
        acceptTermsLabel: 'I accept the terms and conditions',
        continueToATM: 'Continue to Virtual ATM',
        
        // Login Screen
        accountNumber: 'Account Number',
        accountNumberPlaceholder: 'Enter 10-digit account',
        pin: 'PIN',
        pinPlaceholder: 'Enter 4-digit PIN',
        loginButton: 'Login',
        demoAccountsTitle: 'Demo Accounts:',
        viewIntroTerms: 'View Introduction & Terms',
        
        // Main Menu
        welcome: 'Welcome',
        account: 'Account',
        availableBalance: 'Available Balance',
        printBalanceReceipt: 'Print Balance Receipt',
        virtualWithdrawal: 'Virtual Withdrawal',
        virtualDeposit: 'Virtual Deposit',
        transfer: 'Transfer',
        miniStatement: 'Mini Statement',
        fullHistory: 'Full History',
        currencyExchange: 'Currency Exchange',
        changePin: 'Change PIN',
        help: 'Help',
        logout: 'Logout',
        
        // Withdraw Screen
        virtualWithdrawalTitle: 'Virtual Withdrawal',
        withdrawalCurrency: 'Withdrawal Currency',
        customAmount: 'Custom Amount',
        processWithdrawal: 'Process Virtual Withdrawal',
        cancel: 'Cancel',
        
        // Deposit Screen
        virtualDepositTitle: 'Virtual Deposit',
        depositCurrency: 'Deposit Currency',
        enterAmount: 'Enter Amount',
        processDeposit: 'Process Virtual Deposit',
        
        // Transfer Screen
        transferMoney: 'Transfer Money',
        toAccountNumber: 'To Account Number',
        toAccountPlaceholder: 'Enter recipient account',
        amount: 'Amount',
        amountPlaceholder: 'Enter amount',
        transferButton: 'Transfer',
        
        // History Screen
        transactionHistory: 'Transaction History',
        downloadReceipt: 'Download Receipt',
        back: 'Back',
        
        // Mini Statement Screen
        miniStatementTitle: 'Mini Statement',
        last5Transactions: 'Last 5 Transactions',
        viewFullHistory: 'View Full History',
        backToMainMenu: 'Back to Main Menu',
        
        // Currency Exchange Screen
        currencyExchangeMarket: 'Currency Exchange Market',
        currencyConverter: 'Currency Converter',
        fromCurrency: 'From Currency',
        toCurrency: 'To Currency',
        convertButton: 'Convert',
        
        // PIN Change Screen
        changePinTitle: 'Change PIN',
        currentPin: 'Current PIN',
        currentPinPlaceholder: 'Enter current PIN',
        newPin: 'New PIN',
        newPinPlaceholder: 'Enter new 4-digit PIN',
        confirmNewPin: 'Confirm New PIN',
        confirmPinPlaceholder: 'Re-enter new PIN',
        changePinButton: 'Change PIN',
        
        // Help Screen
        helpTitle: 'Help & Tutorial',
        
        // Balance Screen
        printBalanceReceiptTitle: 'Print Balance Receipt',
        currentBalance: 'Current Balance',
        printReceipt: 'Print Receipt',
        
        // Another Transaction Screen
        anotherTransactionTitle: 'Transaction Complete',
        continue: 'Continue',
        
        // Dynamic content
        youWillWithdraw: 'You will withdraw',
        willBeDeducted: 'will be deducted',
        youWillDeposit: 'You will deposit',
        willBeAdded: 'will be added',
        loadingMarketData: 'Loading Market Data',
        initializingRates: 'Initializing exchange rates...',
        loadingTopMovers: 'Loading Top Movers',
        pleaseWait: 'Please wait...',
        marketNews: 'Live Market News',
        marketSentiment: 'Market Sentiment',
        rising: 'Rising',
        falling: 'Falling',
        avgChange: 'Avg Change',
        topMovers: 'Top Currency Movers',
        errorLoadingMarket: 'Error loading market data',
        pleaseEnterValid: 'Please enter a valid amount',
        pleaseSelectDifferent: 'Please select different currencies',
        loadingRates: 'Loading exchange rates... Please wait',
        conversionFailed: 'Conversion failed. Rates not available.',
        aiRecommendation: 'AI Recommendation',
        potentialSavings: 'Potential savings',
        currencyConverted: '✅ Currency converted successfully',
        aiFinancialInsights: 'AI Financial Insights',
        pleaseEnterAccountAndPin: 'Please enter account number and PIN',
        invalidAccountOrPin: 'Invalid account number or PIN',
        loginSuccess: '✅ Login successful! AI Security Active',
        logoutSuccess: 'Logged out successfully',
        withdrawConfirm: 'Withdraw',
        equivalentLabel: 'Equivalent',
        rateLabel: 'Rate',
        balanceDeductedUSD: 'Balance will be deducted in USD',
        aiFraudAlert: 'AI Fraud Alert',
        aiDetectedUnusual: 'AI detected unusual activity',
        riskLabel: 'Risk',
        proceedAnyway: 'Proceed anyway',
        insufficientFunds: 'Insufficient funds!',
        safe: 'Safe',
        monitored: 'Monitored',
        flagged: 'Flagged',
        withdrawProcessed: 'Withdrawal processed',
        amountLabel: 'Amount',
        deductedLabel: 'Deducted',
        balanceUpdated: 'Balance updated',
        depositConfirm: 'Deposit',
        balanceUpdatedInstantly: 'Balance will be updated instantly',
        maximumDeposit: 'Maximum deposit is $10,000 USD equivalent',
        depositProcessed: 'Deposit processed',
        addedLabel: 'Added',
        cannotTransferSame: 'Cannot transfer to same account',
        pleaseEnterAccountAndAmount: 'Please enter account number and amount',
        transferConfirm: 'Transfer',
        toLabel: 'To',
        fromLabel: 'From',
        transferCompleted: 'Transfer completed',
        invalidAccount: 'Invalid account number',
        transactionHistory: 'Transaction History',
        noTransactionsYet: 'No transactions yet',
        aiVerified: 'AI Verified',
        balance: 'Balance',
        pinChanged: 'PIN changed successfully!',
        pleaseFillAllFields: 'Please fill all fields',
        currentPinIncorrect: 'Current PIN is incorrect',
        pinMust4Digits: 'PIN must be 4 digits',
        pinsDoNotMatch: 'New PINs do not match',
        pleaseAcceptTerms: 'Please accept the terms and conditions to continue',
        welcomeToATM: 'Welcome to SecureBank Virtual ATM! 🏦',
        maximumWithdrawal: 'Maximum withdrawal is $1,000 USD equivalent',
        languageChanged: 'Language changed successfully',
        
        // AI Insights
        lowBalanceAlert: 'Low Balance Alert',
        lowBalanceMessage: 'Your balance is below $500. Consider depositing funds soon.',
        spendingPattern: 'Spending Pattern',
        spendingPatternMessage: 'You\'ve spent ${{amount}} more than deposited this month.',
        investmentOpportunity: 'Investment Opportunity',
        investmentOpportunityMessage: 'Great balance! Consider investing to grow your wealth.',
        aiPrediction: 'AI Prediction',
        aiPredictionMessage: 'Based on your patterns, you\'ll likely spend ${{amount}} next month.'
    },
    es: {
        // Welcome Screen
        welcomeTitle: 'Bienvenido al Cajero Virtual de SecureBank',
        welcomeSubtitle: 'Simulación de Cajero Virtual',
        welcomeTagline: 'Practique Hoy, Opere con Confianza Mañana.',
        aiPoweredBanking: 'Banca Impulsada por IA',
        whatYouLearn: 'Lo Que Aprenderá',
        importantNotice: 'Aviso Importante',
        termsAndConditions: 'Términos y Condiciones',
        educationalPurpose: 'Propósito Educativo',
        virtualCurrency: 'Moneda Virtual',
        noRealBanking: 'Sin Banca Real',
        dataStorage: 'Almacenamiento de Datos',
        aiFeatures: 'Características IA',
        demoAccounts: 'Cuentas de Demostración',
        disclaimer: 'Descargo de Responsabilidad',
        acceptTermsLabel: 'Acepto los términos y condiciones',
        continueToATM: 'Continuar al Cajero Virtual',
        
        // Login Screen
        accountNumber: 'Número de Cuenta',
        accountNumberPlaceholder: 'Ingrese cuenta de 10 dígitos',
        pin: 'PIN',
        pinPlaceholder: 'Ingrese PIN de 4 dígitos',
        loginButton: 'Iniciar Sesión',
        demoAccountsTitle: 'Cuentas de Demostración:',
        viewIntroTerms: 'Ver Introducción y Términos',
        
        // Main Menu
        welcome: 'Bienvenido',
        account: 'Cuenta',
        availableBalance: 'Saldo Disponible',
        printBalanceReceipt: 'Imprimir Recibo de Saldo',
        virtualWithdrawal: 'Retiro Virtual',
        virtualDeposit: 'Depósito Virtual',
        transfer: 'Transferir',
        miniStatement: 'Estado Mini',
        fullHistory: 'Historial Completo',
        currencyExchange: 'Cambio de Moneda',
        changePin: 'Cambiar PIN',
        help: 'Ayuda',
        logout: 'Cerrar Sesión',
        
        // Withdraw Screen
        virtualWithdrawalTitle: 'Retiro Virtual',
        withdrawalCurrency: 'Moneda de Retiro',
        customAmount: 'Monto Personalizado',
        processWithdrawal: 'Procesar Retiro Virtual',
        cancel: 'Cancelar',
        
        // Deposit Screen
        virtualDepositTitle: 'Depósito Virtual',
        depositCurrency: 'Moneda de Depósito',
        enterAmount: 'Ingrese Monto',
        processDeposit: 'Procesar Depósito Virtual',
        
        // Transfer Screen
        transferMoney: 'Transferir Dinero',
        toAccountNumber: 'A Número de Cuenta',
        toAccountPlaceholder: 'Ingrese cuenta del destinatario',
        amount: 'Monto',
        amountPlaceholder: 'Ingrese monto',
        transferButton: 'Transferir',
        
        // History Screen
        transactionHistory: 'Historial de Transacciones',
        downloadReceipt: 'Descargar Recibo',
        back: 'Volver',
        
        // Mini Statement Screen
        miniStatementTitle: 'Estado Mini',
        last5Transactions: 'Últimas 5 Transacciones',
        viewFullHistory: 'Ver Historial Completo',
        backToMainMenu: 'Volver al Menú Principal',
        
        // Currency Exchange Screen
        currencyExchangeMarket: 'Mercado de Cambio de Moneda',
        currencyConverter: 'Convertidor de Moneda',
        fromCurrency: 'De Moneda',
        toCurrency: 'A Moneda',
        convertButton: 'Convertir',
        
        // PIN Change Screen
        changePinTitle: 'Cambiar PIN',
        currentPin: 'PIN Actual',
        currentPinPlaceholder: 'Ingrese PIN actual',
        newPin: 'Nuevo PIN',
        newPinPlaceholder: 'Ingrese nuevo PIN de 4 dígitos',
        confirmNewPin: 'Confirmar Nuevo PIN',
        confirmPinPlaceholder: 'Reingrese nuevo PIN',
        changePinButton: 'Cambiar PIN',
        
        // Help Screen
        helpTitle: 'Ayuda y Tutorial',
        
        // Balance Screen
        printBalanceReceiptTitle: 'Imprimir Recibo de Saldo',
        currentBalance: 'Saldo Actual',
        printReceipt: 'Imprimir Recibo',
        
        // Another Transaction Screen
        anotherTransactionTitle: 'Transacción Completa',
        continue: 'Continuar',
        
        // Dynamic content
        youWillWithdraw: 'Usted retirará',
        willBeDeducted: 'será deducido',
        youWillDeposit: 'Usted depositará',
        willBeAdded: 'será agregado',
        loadingMarketData: 'Cargando Datos del Mercado',
        initializingRates: 'Inicializando tasas de cambio...',
        loadingTopMovers: 'Cargando Principales Movimientos',
        pleaseWait: 'Por favor espere...',
        marketNews: 'Noticias del Mercado en Vivo',
        marketSentiment: 'Sentimiento del Mercado',
        rising: 'Subiendo',
        falling: 'Bajando',
        avgChange: 'Cambio Promedio',
        topMovers: 'Principales Movimientos de Moneda',
        errorLoadingMarket: 'Error al cargar datos del mercado',
        pleaseEnterValid: 'Por favor ingrese un monto válido',
        pleaseSelectDifferent: 'Por favor seleccione monedas diferentes',
        loadingRates: 'Cargando tasas de cambio... Por favor espere',
        conversionFailed: 'Conversión fallida. Tasas no disponibles.',
        aiRecommendation: 'Recomendación IA',
        potentialSavings: 'Ahorros potenciales',
        currencyConverted: '✅ Moneda convertida exitosamente',
        aiFinancialInsights: 'Información Financiera IA',
        pleaseEnterAccountAndPin: 'Por favor ingrese número de cuenta y PIN',
        invalidAccountOrPin: 'Número de cuenta o PIN inválido',
        loginSuccess: '✅ ¡Inicio de sesión exitoso! Seguridad AI Activa',
        logoutSuccess: 'Sesión cerrada exitosamente',
        withdrawConfirm: 'Retirar',
        equivalentLabel: 'Equivalente',
        rateLabel: 'Tasa',
        balanceDeductedUSD: 'El saldo se deducirá en USD',
        aiFraudAlert: 'Alerta de Fraude IA',
        aiDetectedUnusual: 'IA detectó actividad inusual',
        riskLabel: 'Puntuación de Riesgo',
        proceedAnyway: '¿Proceder de todos modos?',
        insufficientFunds: '¡Fondos insuficientes!',
        safe: 'Seguro',
        monitored: 'Monitoreado',
        flagged: 'Marcado',
        withdrawProcessed: 'Retiro virtual procesado',
        amountLabel: 'Monto',
        deductedLabel: 'Deducido',
        balanceUpdated: 'Su saldo digital ha sido actualizado',
        depositConfirm: 'Depositar',
        balanceUpdatedInstantly: 'El saldo se actualizará instantáneamente',
        maximumDeposit: 'El depósito máximo es $10,000 USD equivalente',
        depositProcessed: 'Depósito virtual procesado',
        addedLabel: 'Agregado',
        cannotTransferSame: 'No se puede transferir a la misma cuenta',
        pleaseEnterAccountAndAmount: 'Por favor ingrese número de cuenta y monto',
        transferConfirm: 'Confirmación de Transferencia Digital',
        toLabel: 'Para',
        fromLabel: 'De',
        transferCompleted: 'Transferencia digital completada',
        invalidAccount: 'Número de cuenta inválido',
        transactionHistory: 'Historial de Transacciones',
        noTransactionsYet: 'Aún no hay transacciones',
        aiVerified: 'Verificado por IA',
        balance: 'Saldo',
        pinChanged: '¡PIN cambiado exitosamente!',
        pleaseFillAllFields: 'Por favor complete todos los campos',
        currentPinIncorrect: 'El PIN actual es incorrecto',
        pinMust4Digits: 'El PIN debe tener 4 dígitos',
        pinsDoNotMatch: 'Los nuevos PINs no coinciden',
        pleaseAcceptTerms: 'Por favor acepte los términos y condiciones para continuar',
        welcomeToATM: '¡Bienvenido al Cajero Virtual de SecureBank! 🏦',
        maximumWithdrawal: 'El retiro máximo es $1,000 USD equivalente',
        languageChanged: 'Idioma cambiado exitosamente',
        
        // AI Insights
        lowBalanceAlert: 'Alerta de Saldo Bajo',
        lowBalanceMessage: 'Su saldo está por debajo de $500. Considere depositar fondos pronto.',
        spendingPattern: 'Patrón de Gastos',
        spendingPatternMessage: 'Ha gastado ${{amount}} más de lo depositado este mes.',
        investmentOpportunity: 'Oportunidad de Inversión',
        investmentOpportunityMessage: '¡Excelente saldo! Considere invertir para hacer crecer su riqueza.',
        aiPrediction: 'Predicción IA',
        aiPredictionMessage: 'Según sus patrones, probablemente gastará ${{amount}} el próximo mes.'
    },
    zh: {
        // Welcome Screen
        welcomeTitle: '欢迎使用SecureBank虚拟ATM',
        welcomeSubtitle: '虚拟ATM模拟',
        welcomeTagline: '今天练习，明天自信使用银行服务。',
        aiPoweredBanking: 'AI智能银行',
        whatYouLearn: '您将学到什么',
        importantNotice: '重要通知',
        termsAndConditions: '条款和条件',
        educationalPurpose: '教育目的',
        virtualCurrency: '虚拟货币',
        noRealBanking: '非真实银行',
        dataStorage: '数据存储',
        aiFeatures: 'AI功能',
        demoAccounts: '演示账户',
        disclaimer: '免责声明',
        acceptTermsLabel: '我接受条款和条件',
        continueToATM: '继续到虚拟ATM',
        
        // Login Screen
        accountNumber: '账号',
        accountNumberPlaceholder: '输入10位账号',
        pin: '密码',
        pinPlaceholder: '输入4位密码',
        loginButton: '登录',
        demoAccountsTitle: '演示账户：',
        viewIntroTerms: '查看介绍和条款',
        
        // Main Menu
        welcome: '欢迎',
        account: '账户',
        availableBalance: '可用余额',
        printBalanceReceipt: '打印余额收据',
        virtualWithdrawal: '虚拟取款',
        virtualDeposit: '虚拟存款',
        transfer: '转账',
        miniStatement: '迷你对账单',
        fullHistory: '完整历史',
        currencyExchange: '货币兑换',
        changePin: '更改密码',
        help: '帮助',
        logout: '退出',
        
        // Withdraw Screen
        virtualWithdrawalTitle: '虚拟取款',
        withdrawalCurrency: '取款货币',
        customAmount: '自定义金额',
        processWithdrawal: '处理虚拟取款',
        cancel: '取消',
        
        // Deposit Screen
        virtualDepositTitle: '虚拟存款',
        depositCurrency: '存款货币',
        enterAmount: '输入金额',
        processDeposit: '处理虚拟存款',
        
        // Transfer Screen
        transferMoney: '转账',
        toAccountNumber: '收款账号',
        toAccountPlaceholder: '输入收款账号',
        amount: '金额',
        amountPlaceholder: '输入金额',
        transferButton: '转账',
        
        // History Screen
        transactionHistory: '交易历史',
        downloadReceipt: '下载收据',
        back: '返回',
        
        // Mini Statement Screen
        miniStatementTitle: '迷你对账单',
        last5Transactions: '最近5笔交易',
        viewFullHistory: '查看完整历史',
        backToMainMenu: '返回主菜单',
        
        // Currency Exchange Screen
        currencyExchangeMarket: '货币兑换市场',
        currencyConverter: '货币转换器',
        fromCurrency: '从货币',
        toCurrency: '到货币',
        convertButton: '转换',
        
        // PIN Change Screen
        changePinTitle: '更改密码',
        currentPin: '当前密码',
        currentPinPlaceholder: '输入当前密码',
        newPin: '新密码',
        newPinPlaceholder: '输入新的4位密码',
        confirmNewPin: '确认新密码',
        confirmPinPlaceholder: '重新输入新密码',
        changePinButton: '更改密码',
        
        // Help Screen
        helpTitle: '帮助和教程',
        
        // Balance Screen
        printBalanceReceiptTitle: '打印余额收据',
        currentBalance: '当前余额',
        printReceipt: '打印收据',
        
        // Another Transaction Screen
        anotherTransactionTitle: '交易完成',
        continue: '继续',
        
        // Dynamic content
        youWillWithdraw: '您将取款',
        willBeDeducted: '将被扣除',
        youWillDeposit: '您将存款',
        willBeAdded: '将被添加',
        loadingMarketData: '加载市场数据',
        initializingRates: '初始化汇率...',
        loadingTopMovers: '加载热门货币',
        pleaseWait: '请稍候...',
        marketNews: '实时市场新闻',
        marketSentiment: '市场情绪',
        rising: '上涨',
        falling: '下跌',
        avgChange: '平均变化',
        topMovers: '热门货币',
        errorLoadingMarket: '加载市场数据错误',
        pleaseEnterValid: '请输入有效金额',
        pleaseSelectDifferent: '请选择不同的货币',
        loadingRates: '加载汇率...请稍候',
        conversionFailed: '转换失败。汇率不可用。',
        aiRecommendation: 'AI推荐',
        potentialSavings: '潜在节省',
        currencyConverted: '✅ 货币转换成功',
        aiFinancialInsights: 'AI财务洞察',
        pleaseEnterAccountAndPin: '请输入账号和密码',
        invalidAccountOrPin: '账号或密码无效',
        loginSuccess: '✅ 登录成功！AI安全已激活',
        logoutSuccess: '退出成功',
        withdrawConfirm: '取款',
        equivalentLabel: '等值',
        rateLabel: '汇率',
        balanceDeductedUSD: '余额将以美元扣除',
        aiFraudAlert: 'AI欺诈警报',
        aiDetectedUnusual: 'AI检测到异常活动',
        riskLabel: '风险',
        proceedAnyway: '仍然继续',
        insufficientFunds: '余额不足！',
        safe: '安全',
        monitored: '监控中',
        flagged: '已标记',
        withdrawProcessed: '取款已处理',
        amountLabel: '金额',
        deductedLabel: '已扣除',
        balanceUpdated: '余额已更新',
        depositConfirm: '存款',
        balanceUpdatedInstantly: '余额将立即更新',
        maximumDeposit: '最大存款为$10,000美元等值',
        depositProcessed: '存款已处理',
        addedLabel: '已添加',
        cannotTransferSame: '不能转账到同一账户',
        pleaseEnterAccountAndAmount: '请输入账号和金额',
        transferConfirm: '转账',
        toLabel: '到',
        fromLabel: '从',
        transferCompleted: '转账完成',
        invalidAccount: '账号无效',
        transactionHistory: '交易历史',
        noTransactionsYet: '暂无交易',
        aiVerified: 'AI已验证',
        balance: '余额',
        pinChanged: '密码更改成功！',
        pleaseFillAllFields: '请填写所有字段',
        currentPinIncorrect: '当前密码不正确',
        pinMust4Digits: '密码必须是4位数字',
        pinsDoNotMatch: '新密码不匹配',
        pleaseAcceptTerms: '请接受条款和条件以继续',
        welcomeToATM: '欢迎使用SecureBank虚拟ATM！🏦',
        maximumWithdrawal: '最大取款为$1,000美元等值',
        languageChanged: '语言更改成功',
        
        // AI Insights
        lowBalanceAlert: '低余额警报',
        lowBalanceMessage: '您的余额低于$500。请考虑尽快存款。',
        spendingPattern: '消费模式',
        spendingPatternMessage: '本月您的支出比存款多${{amount}}。',
        investmentOpportunity: '投资机会',
        investmentOpportunityMessage: '余额很好！考虑投资以增加财富。',
        aiPrediction: 'AI预测',
        aiPredictionMessage: '根据您的模式，下个月您可能会花费${{amount}}。'
    },
    ja: {
        // Welcome Screen
        welcomeTitle: 'SecureBank仮想ATMへようこそ',
        welcomeSubtitle: '仮想ATMシミュレーション',
        welcomeTagline: '今日練習、明日自信を持って銀行取引。',
        aiPoweredBanking: 'AI搭載バンキング',
        whatYouLearn: '学べること',
        importantNotice: '重要なお知らせ',
        termsAndConditions: '利用規約',
        educationalPurpose: '教育目的',
        virtualCurrency: '仮想通貨',
        noRealBanking: '実際の銀行ではありません',
        dataStorage: 'データ保存',
        aiFeatures: 'AI機能',
        demoAccounts: 'デモアカウント',
        disclaimer: '免責事項',
        acceptTermsLabel: '利用規約に同意します',
        continueToATM: '仮想ATMに進む',
        
        // Login Screen
        accountNumber: '口座番号',
        accountNumberPlaceholder: '10桁の口座番号を入力',
        pin: '暗証番号',
        pinPlaceholder: '4桁の暗証番号を入力',
        loginButton: 'ログイン',
        demoAccountsTitle: 'デモアカウント：',
        viewIntroTerms: '紹介と規約を表示',
        
        // Main Menu
        welcome: 'ようこそ',
        account: '口座',
        availableBalance: '利用可能残高',
        printBalanceReceipt: '残高レシート印刷',
        virtualWithdrawal: '仮想引き出し',
        virtualDeposit: '仮想預金',
        transfer: '振込',
        miniStatement: 'ミニ明細',
        fullHistory: '全履歴',
        currencyExchange: '通貨両替',
        changePin: '暗証番号変更',
        help: 'ヘルプ',
        logout: 'ログアウト',
        
        // Withdraw Screen
        virtualWithdrawalTitle: '仮想引き出し',
        withdrawalCurrency: '引き出し通貨',
        customAmount: 'カスタム金額',
        processWithdrawal: '仮想引き出しを処理',
        cancel: 'キャンセル',
        
        // Deposit Screen
        virtualDepositTitle: '仮想預金',
        depositCurrency: '預金通貨',
        enterAmount: '金額を入力',
        processDeposit: '仮想預金を処理',
        
        // Transfer Screen
        transferMoney: '送金',
        toAccountNumber: '受取口座番号',
        toAccountPlaceholder: '受取口座を入力',
        amount: '金額',
        amountPlaceholder: '金額を入力',
        transferButton: '振込',
        
        // History Screen
        transactionHistory: '取引履歴',
        downloadReceipt: 'レシートをダウンロード',
        back: '戻る',
        
        // Mini Statement Screen
        miniStatementTitle: 'ミニ明細',
        last5Transactions: '最近の5件の取引',
        viewFullHistory: '全履歴を表示',
        backToMainMenu: 'メインメニューに戻る',
        
        // Currency Exchange Screen
        currencyExchangeMarket: '通貨両替市場',
        currencyConverter: '通貨コンバーター',
        fromCurrency: '元の通貨',
        toCurrency: '先の通貨',
        convertButton: '変換',
        
        // PIN Change Screen
        changePinTitle: '暗証番号変更',
        currentPin: '現在の暗証番号',
        currentPinPlaceholder: '現在の暗証番号を入力',
        newPin: '新しい暗証番号',
        newPinPlaceholder: '新しい4桁の暗証番号を入力',
        confirmNewPin: '新しい暗証番号を確認',
        confirmPinPlaceholder: '新しい暗証番号を再入力',
        changePinButton: '暗証番号を変更',
        
        // Help Screen
        helpTitle: 'ヘルプとチュートリアル',
        
        // Balance Screen
        printBalanceReceiptTitle: '残高レシート印刷',
        currentBalance: '現在の残高',
        printReceipt: 'レシートを印刷',
        
        // Another Transaction Screen
        anotherTransactionTitle: '取引完了',
        continue: '続ける',
        
        // Dynamic content
        youWillWithdraw: '引き出します',
        willBeDeducted: 'が差し引かれます',
        youWillDeposit: '預金します',
        willBeAdded: 'が追加されます',
        loadingMarketData: '市場データを読み込み中',
        initializingRates: '為替レートを初期化中...',
        loadingTopMovers: '人気通貨を読み込み中',
        pleaseWait: 'お待ちください...',
        marketNews: 'ライブ市場ニュース',
        marketSentiment: '市場センチメント',
        rising: '上昇',
        falling: '下落',
        avgChange: '平均変化',
        topMovers: '人気通貨',
        errorLoadingMarket: '市場データの読み込みエラー',
        pleaseEnterValid: '有効な金額を入力してください',
        pleaseSelectDifferent: '異なる通貨を選択してください',
        loadingRates: '為替レートを読み込み中...お待ちください',
        conversionFailed: '変換に失敗しました。レートが利用できません。',
        aiRecommendation: 'AI推奨',
        potentialSavings: '潜在的な節約',
        currencyConverted: '✅ 通貨変換成功',
        aiFinancialInsights: 'AI財務インサイト',
        pleaseEnterAccountAndPin: '口座番号と暗証番号を入力してください',
        invalidAccountOrPin: '口座番号または暗証番号が無効です',
        loginSuccess: '✅ ログイン成功！AIセキュリティ有効',
        logoutSuccess: 'ログアウト成功',
        withdrawConfirm: '引き出し',
        equivalentLabel: '相当額',
        rateLabel: 'レート',
        balanceDeductedUSD: '残高は米ドルで差し引かれます',
        aiFraudAlert: 'AI詐欺警告',
        aiDetectedUnusual: 'AIが異常な活動を検出しました',
        riskLabel: 'リスク',
        proceedAnyway: 'とにかく続行',
        insufficientFunds: '残高不足！',
        safe: '安全',
        monitored: '監視中',
        flagged: 'フラグ付き',
        withdrawProcessed: '引き出しが処理されました',
        amountLabel: '金額',
        deductedLabel: '差し引かれました',
        balanceUpdated: '残高が更新されました',
        depositConfirm: '預金',
        balanceUpdatedInstantly: '残高は即座に更新されます',
        maximumDeposit: '最大預金額は$10,000米ドル相当',
        depositProcessed: '預金が処理されました',
        addedLabel: '追加されました',
        cannotTransferSame: '同じ口座に振込できません',
        pleaseEnterAccountAndAmount: '口座番号と金額を入力してください',
        transferConfirm: '振込',
        toLabel: '宛先',
        fromLabel: '送信元',
        transferCompleted: '振込完了',
        invalidAccount: '口座番号が無効です',
        transactionHistory: '取引履歴',
        noTransactionsYet: 'まだ取引がありません',
        aiVerified: 'AI検証済み',
        balance: '残高',
        pinChanged: '暗証番号が正常に変更されました！',
        pleaseFillAllFields: 'すべてのフィールドを入力してください',
        currentPinIncorrect: '現在の暗証番号が正しくありません',
        pinMust4Digits: '暗証番号は4桁である必要があります',
        pinsDoNotMatch: '新しい暗証番号が一致しません',
        pleaseAcceptTerms: '続行するには利用規約に同意してください',
        welcomeToATM: 'SecureBank仮想ATMへようこそ！🏦',
        maximumWithdrawal: '最大引き出し額は$1,000米ドル相当',
        languageChanged: '言語が正常に変更されました',
        
        // AI Insights
        lowBalanceAlert: '残高不足警告',
        lowBalanceMessage: '残高が$500を下回っています。早めに入金をご検討ください。',
        spendingPattern: '支出パターン',
        spendingPatternMessage: '今月は預金より${{amount}}多く支出しています。',
        investmentOpportunity: '投資機会',
        investmentOpportunityMessage: '素晴らしい残高です！資産を増やすために投資を検討してください。',
        aiPrediction: 'AI予測',
        aiPredictionMessage: 'パターンに基づくと、来月は${{amount}}を支出する可能性があります。'
    },
    tl: {
        // Welcome Screen
        welcomeTitle: 'Maligayang pagdating sa SecureBank Virtual ATM',
        welcomeSubtitle: 'Simulasyon ng Virtual ATM',
        welcomeTagline: 'Magsanay Ngayon, Mag-bank nang May Tiwala Bukas.',
        aiPoweredBanking: 'AI-Powered Banking',
        whatYouLearn: 'Ano ang Matututunan Mo',
        importantNotice: 'Mahalagang Paalala',
        termsAndConditions: 'Mga Tuntunin at Kondisyon',
        educationalPurpose: 'Layuning Pang-edukasyon',
        virtualCurrency: 'Virtual na Pera',
        noRealBanking: 'Walang Tunay na Banking',
        dataStorage: 'Imbakan ng Data',
        aiFeatures: 'Mga Feature ng AI',
        demoAccounts: 'Demo Accounts',
        disclaimer: 'Disclaimer',
        acceptTermsLabel: 'Tinatanggap ko ang mga tuntunin at kondisyon',
        continueToATM: 'Magpatuloy sa Virtual ATM',
        
        // Login Screen
        accountNumber: 'Numero ng Account',
        accountNumberPlaceholder: 'Ilagay ang 10-digit na account',
        pin: 'PIN',
        pinPlaceholder: 'Ilagay ang 4-digit na PIN',
        loginButton: 'Mag-login',
        demoAccountsTitle: 'Demo Accounts:',
        viewIntroTerms: 'Tingnan ang Panimula at Tuntunin',
        
        // Main Menu
        welcome: 'Maligayang pagdating',
        account: 'Account',
        availableBalance: 'Available na Balanse',
        printBalanceReceipt: 'I-print ang Resibo ng Balanse',
        virtualWithdrawal: 'Virtual na Pag-withdraw',
        virtualDeposit: 'Virtual na Deposito',
        transfer: 'Maglipat',
        miniStatement: 'Mini Statement',
        fullHistory: 'Buong Kasaysayan',
        currencyExchange: 'Palitan ng Pera',
        changePin: 'Baguhin ang PIN',
        help: 'Tulong',
        logout: 'Mag-logout',
        
        // Withdraw Screen
        virtualWithdrawalTitle: 'Virtual na Pag-withdraw',
        withdrawalCurrency: 'Pera para sa Withdrawal',
        customAmount: 'Custom na Halaga',
        processWithdrawal: 'Iproseso ang Virtual na Withdrawal',
        cancel: 'Kanselahin',
        
        // Deposit Screen
        virtualDepositTitle: 'Virtual na Deposito',
        depositCurrency: 'Pera para sa Deposito',
        enterAmount: 'Ilagay ang Halaga',
        processDeposit: 'Iproseso ang Virtual na Deposito',
        
        // Transfer Screen
        transferMoney: 'Maglipat ng Pera',
        toAccountNumber: 'Sa Account Number',
        toAccountPlaceholder: 'Ilagay ang account ng tatanggap',
        amount: 'Halaga',
        amountPlaceholder: 'Ilagay ang halaga',
        transferButton: 'Maglipat',
        
        // History Screen
        transactionHistory: 'Kasaysayan ng Transaksyon',
        downloadReceipt: 'I-download ang Resibo',
        back: 'Bumalik',
        
        // Mini Statement Screen
        miniStatementTitle: 'Mini Statement',
        last5Transactions: 'Huling 5 Transaksyon',
        viewFullHistory: 'Tingnan ang Buong Kasaysayan',
        backToMainMenu: 'Bumalik sa Main Menu',
        
        // Currency Exchange Screen
        currencyExchangeMarket: 'Merkado ng Palitan ng Pera',
        currencyConverter: 'Converter ng Pera',
        fromCurrency: 'Mula sa Pera',
        toCurrency: 'Papunta sa Pera',
        convertButton: 'I-convert',
        
        // PIN Change Screen
        changePinTitle: 'Baguhin ang PIN',
        currentPin: 'Kasalukuyang PIN',
        currentPinPlaceholder: 'Ilagay ang kasalukuyang PIN',
        newPin: 'Bagong PIN',
        newPinPlaceholder: 'Ilagay ang bagong 4-digit na PIN',
        confirmNewPin: 'Kumpirmahin ang Bagong PIN',
        confirmPinPlaceholder: 'Ilagay muli ang bagong PIN',
        changePinButton: 'Baguhin ang PIN',
        
        // Help Screen
        helpTitle: 'Tulong at Tutorial',
        
        // Balance Screen
        printBalanceReceiptTitle: 'I-print ang Resibo ng Balanse',
        currentBalance: 'Kasalukuyang Balanse',
        printReceipt: 'I-print ang Resibo',
        
        // Another Transaction Screen
        anotherTransactionTitle: 'Kumpleto ang Transaksyon',
        continue: 'Magpatuloy',
        
        // Dynamic content
        youWillWithdraw: 'Mag-withdraw ka ng',
        willBeDeducted: 'ay ibabawas',
        youWillDeposit: 'Magdedeposito ka ng',
        willBeAdded: 'ay idadagdag',
        loadingMarketData: 'Nilo-load ang Data ng Merkado',
        initializingRates: 'Sinisimulan ang mga rate...',
        loadingTopMovers: 'Nilo-load ang Top Movers',
        pleaseWait: 'Mangyaring maghintay...',
        marketNews: 'Live na Balita ng Merkado',
        marketSentiment: 'Sentimento ng Merkado',
        rising: 'Tumataas',
        falling: 'Bumababa',
        avgChange: 'Average na Pagbabago',
        topMovers: 'Top Currency Movers',
        errorLoadingMarket: 'Error sa pag-load ng data ng merkado',
        pleaseEnterValid: 'Mangyaring maglagay ng valid na halaga',
        pleaseSelectDifferent: 'Mangyaring pumili ng ibang pera',
        loadingRates: 'Nilo-load ang mga rate... Mangyaring maghintay',
        conversionFailed: 'Nabigo ang conversion. Walang available na rates.',
        aiRecommendation: 'Rekomendasyon ng AI',
        potentialSavings: 'Potensyal na tipid',
        currencyConverted: '✅ Matagumpay na na-convert ang pera',
        aiFinancialInsights: 'AI Financial Insights',
        pleaseEnterAccountAndPin: 'Mangyaring ilagay ang account number at PIN',
        invalidAccountOrPin: 'Invalid na account number o PIN',
        loginSuccess: '✅ Matagumpay ang pag-login! Aktibo ang AI Security',
        logoutSuccess: 'Matagumpay ang pag-logout',
        withdrawConfirm: 'Mag-withdraw',
        equivalentLabel: 'Katumbas',
        rateLabel: 'Rate',
        balanceDeductedUSD: 'Ang balanse ay ibabawas sa USD',
        aiFraudAlert: 'AI Fraud Alert',
        aiDetectedUnusual: 'Nakita ng AI ang kakaibang aktibidad',
        riskLabel: 'Panganib',
        proceedAnyway: 'Magpatuloy pa rin',
        insufficientFunds: 'Kulang ang pondo!',
        safe: 'Ligtas',
        monitored: 'Sinusubaybayan',
        flagged: 'Naka-flag',
        withdrawProcessed: 'Naproseso ang withdrawal',
        amountLabel: 'Halaga',
        deductedLabel: 'Nabawas',
        balanceUpdated: 'Na-update ang balanse',
        depositConfirm: 'Deposito',
        balanceUpdatedInstantly: 'Agad na ma-uupdate ang balanse',
        maximumDeposit: 'Ang maximum na deposito ay $10,000 USD equivalent',
        depositProcessed: 'Naproseso ang deposito',
        addedLabel: 'Naidagdag',
        cannotTransferSame: 'Hindi pwedeng maglipat sa parehong account',
        pleaseEnterAccountAndAmount: 'Mangyaring ilagay ang account number at halaga',
        transferConfirm: 'Maglipat',
        toLabel: 'Para kay',
        fromLabel: 'Mula kay',
        transferCompleted: 'Kumpleto ang paglipat',
        invalidAccount: 'Invalid na account number',
        transactionHistory: 'Kasaysayan ng Transaksyon',
        noTransactionsYet: 'Walang transaksyon pa',
        aiVerified: 'Na-verify ng AI',
        balance: 'Balanse',
        pinChanged: 'Matagumpay na nabago ang PIN!',
        pleaseFillAllFields: 'Mangyaring punan ang lahat ng field',
        currentPinIncorrect: 'Mali ang kasalukuyang PIN',
        pinMust4Digits: 'Ang PIN ay dapat 4 digits',
        pinsDoNotMatch: 'Hindi tugma ang mga bagong PIN',
        pleaseAcceptTerms: 'Mangyaring tanggapin ang mga tuntunin at kondisyon upang magpatuloy',
        welcomeToATM: 'Maligayang pagdating sa SecureBank Virtual ATM! 🏦',
        maximumWithdrawal: 'Ang maximum na withdrawal ay $1,000 USD equivalent',
        languageChanged: 'Matagumpay na nabago ang wika',
        
        // AI Insights
        lowBalanceAlert: 'Alerto sa Mababang Balanse',
        lowBalanceMessage: 'Ang iyong balanse ay mas mababa sa $500. Mag-deposito ng pondo sa lalong madaling panahon.',
        spendingPattern: 'Pattern ng Paggastos',
        spendingPatternMessage: 'Gumasta ka ng ${{amount}} higit sa na-deposito ngayong buwan.',
        investmentOpportunity: 'Oportunidad sa Pamumuhunan',
        investmentOpportunityMessage: 'Magandang balanse! Isaalang-alang ang pamumuhunan upang palaguin ang iyong yaman.',
        aiPrediction: 'Hula ng AI',
        aiPredictionMessage: 'Batay sa iyong mga pattern, malamang na gumastos ka ng ${{amount}} sa susunod na buwan.'
    },
    hi: {
        // Welcome Screen
        welcomeTitle: 'SecureBank वर्चुअल ATM में आपका स्वागत है',
        welcomeSubtitle: 'वर्चुअल ATM सिमुलेशन',
        welcomeTagline: 'आज अभ्यास करें, कल आत्मविश्वास से बैंकिंग करें।',
        aiPoweredBanking: 'AI-संचालित बैंकिंग',
        whatYouLearn: 'आप क्या सीखेंगे',
        importantNotice: 'महत्वपूर्ण सूचना',
        termsAndConditions: 'नियम और शर्तें',
        educationalPurpose: 'शैक्षिक उद्देश्य',
        virtualCurrency: 'वर्चुअल मुद्रा',
        noRealBanking: 'कोई वास्तविक बैंकिंग नहीं',
        dataStorage: 'डेटा संग्रहण',
        aiFeatures: 'AI सुविधाएं',
        demoAccounts: 'डेमो खाते',
        disclaimer: 'अस्वीकरण',
        acceptTermsLabel: 'मैं नियम और शर्तों को स्वीकार करता हूं',
        continueToATM: 'वर्चुअल ATM पर जारी रखें',
        
        // Login Screen
        accountNumber: 'खाता संख्या',
        accountNumberPlaceholder: '10-अंकीय खाता दर्ज करें',
        pin: 'पिन',
        pinPlaceholder: '4-अंकीय पिन दर्ज करें',
        loginButton: 'लॉगिन',
        demoAccountsTitle: 'डेमो खाते:',
        viewIntroTerms: 'परिचय और नियम देखें',
        
        // Main Menu
        welcome: 'स्वागत है',
        account: 'खाता',
        availableBalance: 'उपलब्ध शेष',
        printBalanceReceipt: 'शेष रसीद प्रिंट करें',
        virtualWithdrawal: 'वर्चुअल निकासी',
        virtualDeposit: 'वर्चुअल जमा',
        transfer: 'स्थानांतरण',
        miniStatement: 'मिनी स्टेटमेंट',
        fullHistory: 'पूर्ण इतिहास',
        currencyExchange: 'मुद्रा विनिमय',
        changePin: 'पिन बदलें',
        help: 'सहायता',
        logout: 'लॉगआउट',
        
        // Withdraw Screen
        virtualWithdrawalTitle: 'वर्चुअल निकासी',
        withdrawalCurrency: 'निकासी मुद्रा',
        customAmount: 'कस्टम राशि',
        processWithdrawal: 'वर्चुअल निकासी प्रोसेस करें',
        cancel: 'रद्द करें',
        
        // Deposit Screen
        virtualDepositTitle: 'वर्चुअल जमा',
        depositCurrency: 'जमा मुद्रा',
        enterAmount: 'राशि दर्ज करें',
        processDeposit: 'वर्चुअल जमा प्रोसेस करें',
        
        // Transfer Screen
        transferMoney: 'पैसे ट्रांसफर करें',
        toAccountNumber: 'खाता संख्या में',
        toAccountPlaceholder: 'प्राप्तकर्ता खाता दर्ज करें',
        amount: 'राशि',
        amountPlaceholder: 'राशि दर्ज करें',
        transferButton: 'स्थानांतरण',
        
        // History Screen
        transactionHistory: 'लेनदेन इतिहास',
        downloadReceipt: 'रसीद डाउनलोड करें',
        back: 'वापस',
        
        // Mini Statement Screen
        miniStatementTitle: 'मिनी स्टेटमेंट',
        last5Transactions: 'अंतिम 5 लेनदेन',
        viewFullHistory: 'पूर्ण इतिहास देखें',
        backToMainMenu: 'मुख्य मेनू पर वापस जाएं',
        
        // Currency Exchange Screen
        currencyExchangeMarket: 'मुद्रा विनिमय बाजार',
        currencyConverter: 'मुद्रा कनवर्टर',
        fromCurrency: 'मुद्रा से',
        toCurrency: 'मुद्रा में',
        convertButton: 'कनवर्ट करें',
        
        // PIN Change Screen
        changePinTitle: 'पिन बदलें',
        currentPin: 'वर्तमान पिन',
        currentPinPlaceholder: 'वर्तमान पिन दर्ज करें',
        newPin: 'नया पिन',
        newPinPlaceholder: 'नया 4-अंकीय पिन दर्ज करें',
        confirmNewPin: 'नए पिन की पुष्टि करें',
        confirmPinPlaceholder: 'नया पिन फिर से दर्ज करें',
        changePinButton: 'पिन बदलें',
        
        // Help Screen
        helpTitle: 'सहायता और ट्यूटोरियल',
        
        // Balance Screen
        printBalanceReceiptTitle: 'शेष रसीद प्रिंट करें',
        currentBalance: 'वर्तमान शेष',
        printReceipt: 'रसीद प्रिंट करें',
        
        // Another Transaction Screen
        anotherTransactionTitle: 'लेनदेन पूर्ण',
        continue: 'जारी रखें',
        
        // Dynamic content
        youWillWithdraw: 'आप निकालेंगे',
        willBeDeducted: 'काटा जाएगा',
        youWillDeposit: 'आप जमा करेंगे',
        willBeAdded: 'जोड़ा जाएगा',
        loadingMarketData: 'बाजार डेटा लोड हो रहा है',
        initializingRates: 'विनिमय दरें प्रारंभ हो रही हैं...',
        loadingTopMovers: 'शीर्ष मूवर्स लोड हो रहे हैं',
        pleaseWait: 'कृपया प्रतीक्षा करें...',
        marketNews: 'लाइव बाजार समाचार',
        marketSentiment: 'बाजार भावना',
        rising: 'बढ़ रहा है',
        falling: 'गिर रहा है',
        avgChange: 'औसत परिवर्तन',
        topMovers: 'शीर्ष मुद्रा मूवर्स',
        errorLoadingMarket: 'बाजार डेटा लोड करने में त्रुटि',
        pleaseEnterValid: 'कृपया एक मान्य राशि दर्ज करें',
        pleaseSelectDifferent: 'कृपया विभिन्न मुद्राएं चुनें',
        loadingRates: 'विनिमय दरें लोड हो रही हैं... कृपया प्रतीक्षा करें',
        conversionFailed: 'रूपांतरण विफल। दरें उपलब्ध नहीं हैं।',
        aiRecommendation: 'AI सिफारिश',
        potentialSavings: 'संभावित बचत',
        currencyConverted: '✅ मुद्रा सफलतापूर्वक परिवर्तित',
        aiFinancialInsights: 'AI वित्तीय अंतर्दृष्टि',
        pleaseEnterAccountAndPin: 'कृपया खाता संख्या और पिन दर्ज करें',
        invalidAccountOrPin: 'अमान्य खाता संख्या या पिन',
        loginSuccess: '✅ लॉगिन सफल! AI सुरक्षा सक्रिय',
        logoutSuccess: 'सफलतापूर्वक लॉगआउट',
        withdrawConfirm: 'निकासी',
        equivalentLabel: 'समतुल्य',
        rateLabel: 'दर',
        balanceDeductedUSD: 'शेष USD में काटा जाएगा',
        aiFraudAlert: 'AI धोखाधड़ी चेतावनी',
        aiDetectedUnusual: 'AI ने असामान्य गतिविधि का पता लगाया',
        riskLabel: 'जोखिम',
        proceedAnyway: 'फिर भी आगे बढ़ें',
        insufficientFunds: 'अपर्याप्त धनराशि!',
        safe: 'सुरक्षित',
        monitored: 'निगरानी में',
        flagged: 'फ्लैग किया गया',
        withdrawProcessed: 'निकासी प्रोसेस की गई',
        amountLabel: 'राशि',
        deductedLabel: 'काटा गया',
        balanceUpdated: 'शेष अपडेट किया गया',
        depositConfirm: 'जमा',
        balanceUpdatedInstantly: 'शेष तुरंत अपडेट किया जाएगा',
        maximumDeposit: 'अधिकतम जमा $10,000 USD समतुल्य है',
        depositProcessed: 'जमा प्रोसेस किया गया',
        addedLabel: 'जोड़ा गया',
        cannotTransferSame: 'एक ही खाते में स्थानांतरण नहीं कर सकते',
        pleaseEnterAccountAndAmount: 'कृपया खाता संख्या और राशि दर्ज करें',
        transferConfirm: 'स्थानांतरण',
        toLabel: 'को',
        fromLabel: 'से',
        transferCompleted: 'स्थानांतरण पूर्ण',
        invalidAccount: 'अमान्य खाता संख्या',
        transactionHistory: 'लेनदेन इतिहास',
        noTransactionsYet: 'अभी तक कोई लेनदेन नहीं',
        aiVerified: 'AI सत्यापित',
        balance: 'शेष',
        pinChanged: 'पिन सफलतापूर्वक बदला गया!',
        pleaseFillAllFields: 'कृपया सभी फ़ील्ड भरें',
        currentPinIncorrect: 'वर्तमान पिन गलत है',
        pinMust4Digits: 'पिन 4 अंकों का होना चाहिए',
        pinsDoNotMatch: 'नए पिन मेल नहीं खाते',
        pleaseAcceptTerms: 'जारी रखने के लिए कृपया नियम और शर्तों को स्वीकार करें',
        welcomeToATM: 'SecureBank वर्चुअल ATM में आपका स्वागत है! 🏦',
        maximumWithdrawal: 'अधिकतम निकासी $1,000 USD समतुल्य है',
        languageChanged: 'भाषा सफलतापूर्वक बदली गई',
        
        // AI Insights
        lowBalanceAlert: 'कम शेष चेतावनी',
        lowBalanceMessage: 'आपका शेष $500 से कम है। जल्द ही धनराशि जमा करने पर विचार करें।',
        spendingPattern: 'खर्च पैटर्न',
        spendingPatternMessage: 'आपने इस महीने जमा से ${{amount}} अधिक खर्च किया है।',
        investmentOpportunity: 'निवेश अवसर',
        investmentOpportunityMessage: 'बढ़िया शेष! अपनी संपत्ति बढ़ाने के लिए निवेश पर विचार करें।',
        aiPrediction: 'AI भविष्यवाणी',
        aiPredictionMessage: 'आपके पैटर्न के आधार पर, आप अगले महीने ${{amount}} खर्च करेंगे।'
    }
};

// Language names for display
const languageNames = {
    en: 'English',
    es: 'Español',
    zh: '中文',
    ja: '日本語',
    tl: 'Filipino',
    hi: 'हिन्दी'
};

// Get client translation
function tc(key) {
    return clientTranslations[currentClientLanguage]?.[key] || 
           clientTranslations.en?.[key] || 
           key;
}

// Make tc() available globally for other scripts
window.tc = tc;

// Change client language
function changeClientLanguage(lang) {
    if (!clientTranslations[lang]) {
        console.warn(`Language ${lang} not found, defaulting to English`);
        lang = 'en';
    }
    
    currentClientLanguage = lang;
    localStorage.setItem('clientLanguage', lang);
    applyTranslations();
    showNotification(tc('languageChanged'), 'success');
}

// Apply translations to all elements with data-translate attribute
function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = tc(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder) {
                element.placeholder = translation;
            }
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language button text
    updateLanguageButtonText();
}

// Cycle through languages (currently English and Spanish, more to be added)
function cycleLanguage() {
    const languages = ['en', 'es', 'zh', 'ja', 'tl', 'hi']; // All 6 languages now available
    const currentIndex = languages.indexOf(currentClientLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeClientLanguage(languages[nextIndex]);
}

// Update language button text
function updateLanguageButtonText() {
    const langButtons = document.querySelectorAll('.global-language-btn, #globalLanguageBtn, #welcomeLanguageBtn, #loginLanguageBtn');
    langButtons.forEach(btn => {
        if (btn) {
            btn.textContent = `🌐 ${languageNames[currentClientLanguage]}`;
        }
    });
}

// Load saved language on page load
function loadSavedLanguage() {
    const saved = localStorage.getItem('clientLanguage');
    if (saved && clientTranslations[saved]) {
        currentClientLanguage = saved;
    }
    applyTranslations();
}


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    
    // Load saved language preference
    loadSavedLanguage();
    
    // Check if terms were accepted, otherwise show welcome screen
    checkTermsAcceptance();
    
    // NOTE: Checkbox handler is now in inline script in HTML for reliability
    
    // Update currency rates every 5 minutes
    setInterval(() => {
        if (currentAccount) {
            updateBalanceDisplay();
        }
    }, 300000);
});

// Load data from localStorage
function loadFromStorage() {
    const saved = localStorage.getItem('atmAccounts');
    if (saved) {
        Object.assign(accounts, JSON.parse(saved));
    }
}

// Save data to localStorage
function saveToStorage() {
    localStorage.setItem('atmAccounts', JSON.stringify(accounts));
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Show screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'historyScreen') {
        displayTransactions();
    }
    
    if (screenId === 'miniStatementScreen') {
        displayMiniStatement();
    }
    
    if (screenId === 'mainMenu') {
        resetSessionTimeout();
        updateAIInsights();
    }
    
    if (screenId === 'currencyScreen') {
        displayCurrencyMarket();
    }
    
    if (screenId === 'withdrawScreen') {
        // Initialize withdraw currency selector
        document.getElementById('withdrawCurrency').value = 'USD';
        updateWithdrawCurrency();
    }
    
    if (screenId === 'depositScreen') {
        // Initialize deposit currency selector
        document.getElementById('depositCurrency').value = 'USD';
        updateDepositCurrency();
    }
    
    if (screenId === 'loginScreen') {
        // Reset biometrics when returning to login screen
        if (biometrics && typeof biometrics.resetLoginSession === 'function') {
            biometrics.resetLoginSession();
            console.log('🔄 Biometrics reset on login screen');
        }
    }
    
    // Apply translations after screen change to maintain selected language
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
}

// Update currency info for transaction screens
function updateCurrencyInfo(type) {
    const selectedCurrency = document.getElementById('displayCurrency')?.value || 'USD';
    const infoBoxId = type === 'withdraw' ? 'withdrawCurrencyInfo' : 'depositCurrencyInfo';
    const infoBox = document.getElementById(infoBoxId);
    
    if (selectedCurrency !== 'USD') {
        const rate = currencyConverter.exchangeRates[selectedCurrency];
        const currencyInfo = currencyConverter.currencies[selectedCurrency];
        infoBox.innerHTML = `
            ${currencyInfo.flag} <strong>Currency Conversion Active</strong><br>
            1 USD = ${rate.toFixed(4)} ${selectedCurrency} | Live rate updated
        `;
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}

// Update withdraw preview
function updateWithdrawPreview() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const preview = document.getElementById('withdrawPreview');
    const selectedCurrency = document.getElementById('withdrawCurrency').value;
    
    if (amount && amount > 0) {
        if (selectedCurrency === 'USD') {
            preview.innerHTML = `${tc('youWillWithdraw')} <strong>$${amount.toFixed(2)} USD</strong>`;
            preview.classList.add('show');
        } else {
            const converted = currencyConverter.convert(amount, selectedCurrency, 'USD');
            if (converted) {
                const currencyInfo = currencyConverter.currencies[selectedCurrency];
                preview.innerHTML = `${currencyInfo.symbol}${amount.toFixed(2)} ${selectedCurrency} = <strong>$${converted.amount.toFixed(2)} USD</strong> ${tc('willBeDeducted')}`;
                preview.classList.add('show');
            }
        }
    } else {
        preview.classList.remove('show');
    }
}

// Update deposit preview
function updateDepositPreview() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const preview = document.getElementById('depositPreview');
    const selectedCurrency = document.getElementById('depositCurrency').value;
    
    if (amount && amount > 0) {
        if (selectedCurrency === 'USD') {
            preview.innerHTML = `${tc('youWillDeposit')} <strong>$${amount.toFixed(2)} USD</strong>`;
            preview.classList.add('show');
        } else {
            const converted = currencyConverter.convert(amount, selectedCurrency, 'USD');
            if (converted) {
                const currencyInfo = currencyConverter.currencies[selectedCurrency];
                preview.innerHTML = `${currencyInfo.symbol}${amount.toFixed(2)} ${selectedCurrency} = <strong>$${converted.amount.toFixed(2)} USD</strong> ${tc('willBeAdded')}`;
                preview.classList.add('show');
            }
        }
    } else {
        preview.classList.remove('show');
    }
}

// Currency Market Display
function displayCurrencyMarket() {
    // Check if converter is ready
    if (!currencyConverter || !currencyConverter.marketTrends || currencyConverter.marketTrends.length === 0) {
        const newsContainer = document.getElementById('marketNews');
        const moversContainer = document.getElementById('topMovers');
        
        newsContainer.innerHTML = `
            <h3>📰 ${tc('loadingMarketData')}</h3>
            <p style="text-align: center; padding: 20px; color: #666;">
                ${tc('initializingRates')}
            </p>
        `;
        
        moversContainer.innerHTML = `
            <h3>🔥 ${tc('loadingTopMovers')}</h3>
            <p style="text-align: center; padding: 20px; color: #666;">
                ${tc('pleaseWait')}
            </p>
        `;
        
        // Force initialization and retry
        if (currencyConverter && typeof currencyConverter.useSimulatedRates === 'function') {
            currencyConverter.useSimulatedRates();
        }
        
        setTimeout(displayCurrencyMarket, 500);
        return;
    }
    
    try {
        // Display market news
        const topMovers = currencyConverter.getTopMovers(5);
        const marketSummary = currencyConverter.getMarketSummary();
        
        const newsContainer = document.getElementById('marketNews');
        newsContainer.innerHTML = `
            <h3>📰 ${tc('marketNews')}</h3>
            <div class="market-summary">
                <h4>${tc('marketSentiment')}: ${marketSummary.sentiment}</h4>
                <div class="market-stats">
                    <div class="market-stat">
                        <span class="stat-value">${marketSummary.upCount}</span>
                        <span class="stat-label">📈 ${tc('rising')}</span>
                    </div>
                    <div class="market-stat">
                        <span class="stat-value">${marketSummary.downCount}</span>
                        <span class="stat-label">📉 ${tc('falling')}</span>
                    </div>
                    <div class="market-stat">
                        <span class="stat-value">${marketSummary.avgChange}%</span>
                        <span class="stat-label">${tc('avgChange')}</span>
                    </div>
                </div>
            </div>
            ${topMovers.slice(0, 3).map(mover => `
                <div class="news-item">
                    <div class="news-text">${mover.news}</div>
                    <div class="news-badge ${mover.trend}">
                        ${mover.trend === 'up' ? '📈' : '📉'} ${Math.abs(mover.change).toFixed(2)}%
                    </div>
                </div>
            `).join('')}
        `;
        
        // Display top movers
        const moversContainer = document.getElementById('topMovers');
        moversContainer.innerHTML = `
            <h3>🔥 ${tc('topMovers')}</h3>
            ${topMovers.map(mover => {
                const currencyInfo = currencyConverter.currencies[mover.currency];
                return `
                    <div class="mover-item">
                        <div class="mover-info">
                            <div class="mover-flag">${currencyInfo.flag}</div>
                            <div class="mover-details">
                                <h4>${currencyInfo.name} (${mover.currency})</h4>
                                <p>${mover.prediction}</p>
                            </div>
                        </div>
                        <div class="mover-change">
                            <div class="change-value ${mover.change > 0 ? 'positive' : 'negative'}">
                                ${mover.change > 0 ? '+' : ''}${mover.change.toFixed(2)}%
                            </div>
                            <div class="change-icon">${mover.trend === 'up' ? '📈' : '📉'}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        `;
    } catch (error) {
        console.error('Error displaying currency market:', error);
        showNotification(tc('errorLoadingMarket'), 'error');
    }
}

// Convert Currency
function convertCurrency() {
    const amount = parseFloat(document.getElementById('convertAmount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (!amount || amount <= 0) {
        showNotification(tc('pleaseEnterValid'), 'error');
        return;
    }
    
    if (fromCurrency === toCurrency) {
        showNotification(tc('pleaseSelectDifferent'), 'error');
        return;
    }
    
    // Check if converter is ready
    if (!currencyConverter || !currencyConverter.exchangeRates || Object.keys(currencyConverter.exchangeRates).length === 0) {
        showNotification(tc('loadingRates'), 'info');
        setTimeout(convertCurrency, 1000);
        return;
    }
    
    const result = currencyConverter.convert(amount, fromCurrency, toCurrency);
    
    if (!result) {
        showNotification(tc('conversionFailed'), 'error');
        return;
    }
    
    const recommendation = currencyConverter.getExchangeRecommendation(fromCurrency, toCurrency, amount);
    
    const resultContainer = document.getElementById('conversionResult');
    resultContainer.innerHTML = `
        <div class="result-amount">
            ${currencyConverter.formatCurrency(result.amount, toCurrency)}
        </div>
        <div class="result-rate">
            1 ${fromCurrency} = ${result.rate.toFixed(4)} ${toCurrency}
        </div>
        <div class="result-recommendation">
            <strong>🤖 ${tc('aiRecommendation')}:</strong><br>
            ${recommendation.recommendation}<br>
            <small>${tc('potentialSavings')}: ${currencyConverter.formatCurrency(recommendation.potentialSavings, toCurrency)}</small>
        </div>
    `;
    resultContainer.classList.add('show');
    
    showNotification(tc('currencyConverted'), 'success');
}

// Swap currencies
function swapCurrencies() {
    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');
    
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    
    // Auto-convert if amount is entered
    const amount = document.getElementById('convertAmount').value;
    if (amount && amount > 0) {
        convertCurrency();
    }
}

// AI Dashboard Functions
function toggleAIDashboard() {
    const dashboard = document.getElementById('aiDashboard');
    dashboard.classList.toggle('active');
    
    if (dashboard.classList.contains('active') && currentAccount) {
        updateAISecurityDashboard();
    }
}

function closeAIDashboard() {
    document.getElementById('aiDashboard').classList.remove('active');
}

function updateAISecurityDashboard() {
    const analysis = biometrics.calculateRiskScore();
    
    // Update risk score display
    const scoreElement = document.getElementById('riskScoreValue');
    const circleElement = document.getElementById('riskScoreCircle');
    const levelElement = document.getElementById('riskLevel');
    
    scoreElement.textContent = Math.round(analysis.riskScore);
    levelElement.textContent = `${analysis.riskLevel} RISK - ${analysis.recommendation}`;
    
    // Update circle color based on risk
    circleElement.className = 'score-circle';
    levelElement.className = 'risk-level';
    
    if (analysis.riskLevel === 'LOW') {
        levelElement.classList.add('low');
    } else if (analysis.riskLevel === 'MEDIUM') {
        circleElement.classList.add('medium-risk');
        levelElement.classList.add('medium');
    } else {
        circleElement.classList.add('high-risk');
        levelElement.classList.add('high');
    }
    
    // Display detailed insights
    const insightsContainer = document.getElementById('aiInsights');
    
    let pasteWarning = '';
    if (analysis.typingAnalysis.pasteDetected) {
        pasteWarning = `
            <div class="insight-item" style="border-left-color: #e74c3c;">
                <h5>⚠️ Paste Behavior Detected</h5>
                <p>Copy-paste detected instead of typing - this is suspicious behavior that may indicate credential theft or bot activity.</p>
            </div>
        `;
    }
    
    insightsContainer.innerHTML = `
        ${pasteWarning}
        <div class="insight-item">
            <h5>🎯 Typing Pattern Analysis</h5>
            <p>Confidence: ${analysis.typingAnalysis.confidence} | Score: ${Math.round(analysis.typingAnalysis.score)}/100</p>
            ${analysis.typingAnalysis.pasteDetected ? '<p style="color: #e74c3c; font-weight: 600;">⚠️ Paste detected - High risk</p>' : ''}
        </div>
        <div class="insight-item">
            <h5>🖱️ Mouse Behavior Analysis</h5>
            <p>Confidence: ${analysis.mouseAnalysis.confidence} | Score: ${Math.round(analysis.mouseAnalysis.score)}/100</p>
        </div>
        <div class="insight-item">
            <h5>🔒 Security Recommendation</h5>
            <p>${analysis.recommendation}</p>
        </div>
    `;
}

function updateAIInsights() {
    if (!currentAccount) return;
    
    const account = accounts[currentAccount];
    const insights = aiAssistant.generateInsights(account);
    const container = document.getElementById('aiInsightsCard');
    
    if (insights.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    container.innerHTML = `
        <h4>🤖 ${tc('aiFinancialInsights')}</h4>
        ${insights.map(insight => `
            <div class="insight-card ${insight.type}">
                <div class="icon">${insight.icon}</div>
                <div class="content">
                    <h5>${insight.title}</h5>
                    <p>${insight.message}</p>
                </div>
            </div>
        `).join('')}
    `;
}

// Session timeout (2 minutes)
function resetSessionTimeout() {
    // Clear existing timeouts
    if (sessionTimeout) clearTimeout(sessionTimeout);
    if (sessionWarningTimeout) clearTimeout(sessionWarningTimeout);
    if (sessionCountdownInterval) clearInterval(sessionCountdownInterval);
    
    // Hide warning if showing
    document.getElementById('sessionTimeoutWarning').classList.remove('show');
    
    // Show warning at 45 seconds before timeout (1 minute 15 seconds)
    sessionWarningTimeout = setTimeout(() => {
        showSessionWarning();
    }, 75000); // 1 minute 15 seconds
    
    // Auto-logout after 2 minutes
    sessionTimeout = setTimeout(() => {
        showNotification('Session expired due to inactivity', 'info');
        setTimeout(logout, 2000);
    }, 120000); // 2 minutes
}

// Show session timeout warning
function showSessionWarning() {
    const warningElement = document.getElementById('sessionTimeoutWarning');
    const countdownElement = document.getElementById('timeoutCountdown');
    
    warningElement.classList.add('show');
    
    let secondsLeft = 45;
    countdownElement.textContent = secondsLeft;
    
    sessionCountdownInterval = setInterval(() => {
        secondsLeft--;
        countdownElement.textContent = secondsLeft;
        
        if (secondsLeft <= 0) {
            clearInterval(sessionCountdownInterval);
        }
    }, 1000);
}

// Continue session
function continueSession() {
    document.getElementById('sessionTimeoutWarning').classList.remove('show');
    if (sessionCountdownInterval) clearInterval(sessionCountdownInterval);
    resetSessionTimeout();
    showNotification('Session extended', 'success');
}

// Custom Security Alert
function showSecurityAlert(title, message, details, onProceed, onCancel) {
    const overlay = document.getElementById('securityAlertOverlay');
    const titleElement = document.getElementById('alertTitle');
    const messageElement = document.getElementById('alertMessage');
    const detailsElement = document.getElementById('alertDetails');
    const proceedBtn = document.getElementById('alertProceedBtn');
    const cancelBtn = document.getElementById('alertCancelBtn');
    
    titleElement.textContent = title;
    messageElement.innerHTML = message;
    detailsElement.innerHTML = details;
    
    overlay.classList.add('active');
    
    // Remove old event listeners
    const newProceedBtn = proceedBtn.cloneNode(true);
    const newCancelBtn = cancelBtn.cloneNode(true);
    proceedBtn.parentNode.replaceChild(newProceedBtn, proceedBtn);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
    
    // Add new event listeners
    document.getElementById('alertProceedBtn').addEventListener('click', () => {
        overlay.classList.remove('active');
        if (onProceed) onProceed();
    });
    
    document.getElementById('alertCancelBtn').addEventListener('click', () => {
        overlay.classList.remove('active');
        if (onCancel) onCancel();
    });
}

// Login
async function login() {
    const accountNumber = document.getElementById('accountNumber').value;
    const pin = document.getElementById('pinInput').value;
    
    if (!accountNumber || !pin) {
        showNotification(tc('pleaseEnterAccountAndPin'), 'error');
        return;
    }
    
    // AI Behavioral Analysis
    const behaviorAnalysis = biometrics.calculateRiskScore();
    
    // Check for paste behavior
    if (behaviorAnalysis.typingAnalysis.pasteDetected) {
        showNotification('⚠️ Paste behavior detected - Security risk identified', 'error');
        
        const message = `
            <p><strong>Paste behavior detected instead of typing.</strong></p>
            <p>This is suspicious and may indicate:</p>
            <p>• Stolen credentials</p>
            <p>• Bot/automated access</p>
            <p>• Security compromise</p>
        `;
        
        const details = `<strong>Risk Score:</strong> ${Math.round(behaviorAnalysis.riskScore)}/100 (HIGH RISK)`;
        
        showSecurityAlert(
            'Suspicious Login Behavior',
            message,
            details,
            () => attemptLogin(accountNumber, pin, behaviorAnalysis), // Proceed
            () => { /* Cancel - do nothing */ } // Cancel
        );
        return;
    }
    
    // Use backend API or localStorage based on configuration
    console.log('🔧 USE_BACKEND configuration:', APP_CONFIG.USE_BACKEND);
    console.log('🔧 API_BASE_URL:', APP_CONFIG.API_BASE_URL);
    
    if (APP_CONFIG.USE_BACKEND) {
        console.log('✅ Using BACKEND mode - calling API');
        try {
            const data = await apiService.login(accountNumber, pin);
            
            // Check behavioral risk
            if (behaviorAnalysis.riskScore > 70) {
                const message = `
                    <p><strong>Unusual login behavior detected.</strong></p>
                    <p>Your interaction patterns differ from normal behavior.</p>
                `;
                
                const details = `<strong>Risk Score:</strong> ${Math.round(behaviorAnalysis.riskScore)}/100`;
                
                showSecurityAlert(
                    'Unusual Behavior Detected',
                    message,
                    details,
                    () => completeLoginWithBackend(data.user), // Proceed (no await needed)
                    () => { apiService.logout(); } // Cancel
                );
            } else {
                completeLoginWithBackend(data.user); // No await needed
            }
        } catch (error) {
            showNotification(error.message || tc('invalidAccountOrPin'), 'error');
        }
    } else {
        // Original localStorage logic
        if (accounts[accountNumber] && accounts[accountNumber].pin === pin) {
            // Check behavioral risk
            if (behaviorAnalysis.riskScore > 70) {
                const message = `
                    <p><strong>Unusual login behavior detected.</strong></p>
                    <p>Your interaction patterns differ from normal behavior.</p>
                `;
                
                const details = `<strong>Risk Score:</strong> ${Math.round(behaviorAnalysis.riskScore)}/100`;
                
                showSecurityAlert(
                    'Unusual Behavior Detected',
                    message,
                    details,
                    () => completeLogin(accountNumber), // Proceed
                    () => { /* Cancel - do nothing */ } // Cancel
                );
            } else {
                completeLogin(accountNumber);
            }
        } else {
            showNotification(tc('invalidAccountOrPin'), 'error');
        }
    }
}

async function attemptLogin(accountNumber, pin, behaviorAnalysis) {
    // Use backend API or localStorage based on configuration
    console.log('🔧 attemptLogin: USE_BACKEND configuration:', APP_CONFIG.USE_BACKEND);

    if (APP_CONFIG.USE_BACKEND) {
        // Backend mode - call API
        console.log('✅ attemptLogin: Using BACKEND mode - calling API');
        try {
            const data = await apiService.login(accountNumber, pin);

            // Check behavioral risk
            if (behaviorAnalysis && behaviorAnalysis.riskScore > 70) {
                const message = `
                    <p><strong>Unusual login behavior detected.</strong></p>
                    <p>Your interaction patterns differ from normal behavior.</p>
                `;

                const details = `<strong>Risk Score:</strong> ${Math.round(behaviorAnalysis.riskScore)}/100`;

                showSecurityAlert(
                    'Unusual Behavior Detected',
                    message,
                    details,
                    () => completeLoginWithBackend(data.user), // Proceed (no await needed)
                    () => { apiService.logout(); } // Cancel
                );
            } else {
                completeLoginWithBackend(data.user); // No await needed
            }
        } catch (error) {
            showNotification(error.message || tc('invalidAccountOrPin'), 'error');
        }
    } else {
        // localStorage mode - use hardcoded accounts
        console.log('✅ attemptLogin: Using LOCALSTORAGE mode');
        if (accounts[accountNumber] && accounts[accountNumber].pin === pin) {
            // Check behavioral risk
            if (behaviorAnalysis && behaviorAnalysis.riskScore > 70) {
                const message = `
                    <p><strong>Unusual login behavior detected.</strong></p>
                    <p>Your interaction patterns differ from normal behavior.</p>
                `;

                const details = `<strong>Risk Score:</strong> ${Math.round(behaviorAnalysis.riskScore)}/100`;

                showSecurityAlert(
                    'Unusual Behavior Detected',
                    message,
                    details,
                    () => completeLogin(accountNumber), // Proceed
                    () => { /* Cancel - do nothing */ } // Cancel
                );
            } else {
                completeLogin(accountNumber);
            }
        } else {
            showNotification(tc('invalidAccountOrPin'), 'error');
        }
    }
}


// Complete login with backend data
async function completeLoginWithBackend(user) {
    console.log('🔐 completeLoginWithBackend called with user:', user);
    console.log('🔐 User balance from login response:', user.balance);
    
    // CRITICAL: Verify token exists
    const tokenExists = localStorage.getItem('authToken');
    console.log('🔐 Token in localStorage:', tokenExists ? 'EXISTS' : 'MISSING');
    
    if (!tokenExists) {
        console.error('❌ CRITICAL ERROR: No token in localStorage!');
        console.error('❌ localStorage contents:', Object.keys(localStorage));
        showNotification('Login error: Token not stored. Please try again.', 'error');
        return;
    }
    
    currentAccount = user.accountNumber;
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userAccount').textContent = user.accountNumber;
    
    // ALWAYS overwrite the account object with backend data (ignore hardcoded values)
    console.log('🔐 Hardcoded balance (IGNORE THIS):', accounts[user.accountNumber] ? accounts[user.accountNumber].balance : 'N/A');
    accounts[user.accountNumber] = {
        name: user.name,
        balance: user.balance, // Use backend balance
        transactions: []
    };
    console.log('🔐 Set account balance to backend value:', user.balance);
    
    // Display the balance from login response
    const formatted = `${user.balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById('balanceDisplay').textContent = formatted;
    console.log('🔐 Balance displayed:', formatted);
    
    showScreen('mainMenu');
    resetSessionTimeout();
    showNotification(tc('loginSuccess'), 'success');
    biometrics.resetLoginSession();
    
    // Apply translations after login
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
    
    // Save session to localStorage
    localStorage.setItem('currentSession', JSON.stringify({
        accountNumber: user.accountNumber,
        timestamp: Date.now()
    }));
    
    // Clear inputs
    document.getElementById('accountNumber').value = '';
    document.getElementById('pinInput').value = '';
    
    // Fetch fresh balance from API in background with delay
    console.log('🔐 Scheduling background balance fetch in 1 second...');
    setTimeout(async () => {
        try {
            console.log('🔐 NOW fetching fresh balance from API...');
            await updateBalanceDisplay();
            console.log('🔐 Fresh balance updated successfully');
        } catch (err) {
            console.error('🔐 Error fetching fresh balance:', err);
        }
    }, 1000);
}

function completeLogin(accountNumber) {
    currentAccount = accountNumber;
    document.getElementById('userName').textContent = accounts[accountNumber].name;
    document.getElementById('userAccount').textContent = accountNumber;
    updateBalanceDisplay();
    showScreen('mainMenu');
    
    // Apply translations after showing main menu
    applyTranslations();
    
    showNotification(tc('loginSuccess'), 'success');
    resetSessionTimeout();
    // Don't reset biometrics here - keep paste detection data
    console.log('Login complete - biometrics preserved');
    
    // Save session to localStorage so user stays logged in when switching views
    localStorage.setItem('currentSession', JSON.stringify({
        accountNumber: accountNumber,
        timestamp: Date.now()
    }));
    
    // Clear inputs
    document.getElementById('accountNumber').value = '';
    document.getElementById('pinInput').value = '';
}

// Logout
function logout() {
    if (sessionTimeout) clearTimeout(sessionTimeout);
    if (sessionWarningTimeout) clearTimeout(sessionWarningTimeout);
    if (sessionCountdownInterval) clearInterval(sessionCountdownInterval);
    
    // Clear account data to prevent stale balance
    if (currentAccount && accounts[currentAccount]) {
        console.log('🔓 Clearing account data for:', currentAccount);
        delete accounts[currentAccount];
    }
    
    currentAccount = null;
    
    // Clear session from localStorage
    localStorage.removeItem('currentSession');
    
    // Clear auth token if using backend
    if (APP_CONFIG.USE_BACKEND) {
        apiService.logout();
    }
    
    // Fully reset all biometrics data
    biometrics.resetLoginSession();
    
    // Close AI dashboard if open
    document.getElementById('aiDashboard').classList.remove('active');
    
    // Hide session warning if showing
    document.getElementById('sessionTimeoutWarning').classList.remove('show');
    
    showScreen('loginScreen');
    showNotification(tc('logoutSuccess'), 'info');
    
    console.log('🔓 Logout complete - All data cleared');
}

// Update balance display
async function updateBalanceDisplay() {
    if (!currentAccount || !accounts[currentAccount]) return;

    console.log('💰 updateBalanceDisplay called for account:', currentAccount);
    console.log('💰 Current local balance BEFORE API call:', accounts[currentAccount].balance);

    // Backend mode - fetch fresh balance from API
    if (APP_CONFIG.USE_BACKEND) {
        try {
            console.log('💰 Fetching fresh balance from API...');
            const response = await apiService.getBalance();
            console.log('💰 API response:', response);
            
            if (accounts[currentAccount]) {
                accounts[currentAccount].balance = response.balance;
                console.log('💰 Updated local balance to:', response.balance);
            }
        } catch (error) {
            console.error('❌ Error fetching balance:', error);
            // Continue with local balance if API fails
        }
    }

    const balance = accounts[currentAccount].balance;
    console.log('💰 Final balance to display:', balance);
    const formatted = `${balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById('balanceDisplay').textContent = formatted;
    console.log('💰 Balance display updated to:', formatted);
}


// Update withdraw currency
function updateWithdrawCurrency() {
    const selectedCurrency = document.getElementById('withdrawCurrency').value;
    const currencyInfo = currencyConverter.currencies[selectedCurrency];
    const rate = currencyConverter.exchangeRates[selectedCurrency];
    
    // Update label
    document.getElementById('withdrawAmountLabel').textContent = `Custom Amount (${selectedCurrency})`;
    
    // Update quick amount buttons
    const quickAmounts = [20, 50, 100, 200, 500];
    const buttonsContainer = document.getElementById('withdrawQuickAmounts');
    
    if (selectedCurrency === 'USD') {
        buttonsContainer.innerHTML = quickAmounts.map(amt => 
            `<button class="amount-btn" onclick="withdrawInCurrency(${amt})">$${amt}</button>`
        ).join('');
    } else {
        const convertedAmounts = quickAmounts.map(amt => {
            const converted = currencyConverter.convert(amt, 'USD', selectedCurrency);
            return Math.round(converted.amount);
        });
        
        buttonsContainer.innerHTML = convertedAmounts.map((amt, idx) => 
            `<button class="amount-btn" onclick="withdrawInCurrency(${quickAmounts[idx]})">${currencyInfo.symbol}${amt}</button>`
        ).join('');
    }
    
    // Update info box
    const infoBox = document.getElementById('withdrawCurrencyInfo');
    if (selectedCurrency !== 'USD') {
        infoBox.innerHTML = `
            ${currencyInfo.flag} <strong>Live Exchange Rate</strong><br>
            1 USD = ${rate.toFixed(4)} ${selectedCurrency} | Updated in real-time
        `;
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
    
    // Clear preview
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawPreview').classList.remove('show');
}

// Update deposit currency
function updateDepositCurrency() {
    const selectedCurrency = document.getElementById('depositCurrency').value;
    const currencyInfo = currencyConverter.currencies[selectedCurrency];
    const rate = currencyConverter.exchangeRates[selectedCurrency];
    
    // Update label
    document.getElementById('depositAmountLabel').textContent = `Enter Amount (${selectedCurrency})`;
    
    // Update info box
    const infoBox = document.getElementById('depositCurrencyInfo');
    if (selectedCurrency !== 'USD') {
        infoBox.innerHTML = `
            ${currencyInfo.flag} <strong>Live Exchange Rate</strong><br>
            1 USD = ${rate.toFixed(4)} ${selectedCurrency} | Updated in real-time
        `;
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
    
    // Clear preview
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositPreview').classList.remove('show');
}

// Add transaction
function addTransaction(type, amount, toAccount = null, anomalyAnalysis = null) {
    const transaction = {
        id: Date.now(),
        type: type,
        amount: amount,
        balance: accounts[currentAccount].balance,
        date: new Date().toISOString(),
        toAccount: toAccount,
        anomalyScore: anomalyAnalysis ? anomalyAnalysis.anomalyScore : 0,
        aiVerified: anomalyAnalysis ? anomalyAnalysis.anomalyScore < 30 : true
    };
    
    accounts[currentAccount].transactions.unshift(transaction);
    saveToStorage();
}

// Withdraw in selected currency
function withdrawInCurrency(usdAmount) {
    const selectedCurrency = document.getElementById('withdrawCurrency').value;

    if (selectedCurrency === 'USD') {
        showTransactionConfirmation('withdraw', usdAmount, 'USD', () => {
            withdraw(usdAmount);
        });
    } else {
        // Convert and show confirmation
        const converted = currencyConverter.convert(usdAmount, 'USD', selectedCurrency);
        const currencyInfo = currencyConverter.currencies[selectedCurrency];

        showTransactionConfirmation('withdraw', converted.amount, selectedCurrency, () => {
            withdraw(usdAmount, selectedCurrency, converted.amount);
        }, usdAmount);
    }
}

// Show transaction confirmation modal
function showTransactionConfirmation(type, amount, currency, onConfirm, usdEquivalent = null) {
    const overlay = document.getElementById('transactionConfirmOverlay2');
    const titleElement = document.getElementById('confirmTitle2');
    const iconElement = document.getElementById('confirmIcon2');
    const messageElement = document.getElementById('confirmMessage2');
    const detailsElement = document.getElementById('confirmDetails2');
    const confirmBtn = document.getElementById('confirmProceedBtn2');
    const cancelBtn = document.getElementById('confirmCancelBtn2');
    
    // Set content based on transaction type
    const currencyInfo = currencyConverter.currencies[currency];
    const formattedAmount = `${currencyInfo.symbol}${amount.toFixed(2)} ${currency}`;
    
    if (type === 'withdraw') {
        titleElement.textContent = 'Confirm Withdrawal';
        iconElement.textContent = '💳';
        messageElement.textContent = `Withdraw ${formattedAmount}?`;
        
        let details = `Your account will be debited with this amount.`;
        if (usdEquivalent && currency !== 'USD') {
            details += `<br><br><strong>USD Equivalent:</strong> $${usdEquivalent.toFixed(2)}`;
        }
        const newBalance = accounts[currentAccount].balance - (usdEquivalent || amount);
        details += `<br><strong>New Balance:</strong> $${newBalance.toFixed(2)}`;
        detailsElement.innerHTML = details;
    } else if (type === 'deposit') {
        titleElement.textContent = 'Confirm Deposit';
        iconElement.textContent = '💵';
        messageElement.textContent = `Deposit ${formattedAmount}?`;
        
        let details = `Your account will be credited with this amount.`;
        if (usdEquivalent && currency !== 'USD') {
            details += `<br><br><strong>USD Equivalent:</strong> $${usdEquivalent.toFixed(2)}`;
        }
        const newBalance = accounts[currentAccount].balance + (usdEquivalent || amount);
        details += `<br><strong>New Balance:</strong> $${newBalance.toFixed(2)}`;
        detailsElement.innerHTML = details;
    } else if (type === 'transfer') {
        titleElement.textContent = 'Confirm Transfer';
        iconElement.textContent = '🔄';
        messageElement.textContent = `Transfer ${formattedAmount}?`;
        detailsElement.innerHTML = `This amount will be transferred to the recipient account.`;
    }
    
    overlay.classList.add('active');
    
    // Remove old event listeners
    const newConfirmBtn = confirmBtn.cloneNode(true);
    const newCancelBtn = cancelBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
    
    // Add new event listeners
    document.getElementById('confirmProceedBtn2').addEventListener('click', () => {
        overlay.classList.remove('active');
        if (onConfirm) onConfirm();
    });
    
    document.getElementById('confirmCancelBtn2').addEventListener('click', () => {
        overlay.classList.remove('active');
    });
}


// Withdraw
function withdraw(amount, displayCurrency = null, displayAmount = null) {
    // AI Anomaly Detection
    const anomalyAnalysis = anomalyDetector.analyzeTransaction(
        currentAccount, 
        'Withdrawal', 
        amount
    );
    
    // Check for anomalies
    if (anomalyAnalysis.isAnomaly && anomalyAnalysis.anomalyScore > 70) {
        showNotification(`🚨 ${tc('aiFraudAlert')}: ${anomalyAnalysis.details}`, 'error');
        
        setTimeout(() => {
            if (confirm(`${tc('aiDetectedUnusual')} (${tc('riskLabel')}: ${anomalyAnalysis.anomalyScore}/100).\n\n${anomalyAnalysis.recommendation}\n\n${tc('proceedAnyway')}?`)) {
                performWithdrawal(amount, anomalyAnalysis, displayCurrency, displayAmount);
            } else {
                showScreen('mainMenu');
            }
        }, 500);
        return;
    }
    
    performWithdrawal(amount, anomalyAnalysis, displayCurrency, displayAmount);
}

async function performWithdrawal(amount, anomalyAnalysis, displayCurrency = null, displayAmount = null) {
    // Backend mode - use API
    if (APP_CONFIG.USE_BACKEND) {
        try {
            const response = await apiService.withdraw(amount, displayCurrency || 'USD');

            // Update local balance display
            if (accounts[currentAccount]) {
                accounts[currentAccount].balance = response.balance;
            }
            updateBalanceDisplay();

            const anomalyBadge = anomalyAnalysis.anomalyScore < 30 ? `✅ ${tc('safe')}` :
                                 anomalyAnalysis.anomalyScore < 60 ? `⚠️ ${tc('monitored')}` : `🚨 ${tc('flagged')}`;

            let message = `✅ ${tc('withdrawProcessed')} ${anomalyBadge}\n\n`;

            if (displayCurrency && displayAmount) {
                const currencyInfo = currencyConverter.currencies[displayCurrency];
                message += `${tc('amountLabel')}: ${currencyInfo.symbol}${displayAmount.toFixed(2)} ${displayCurrency}\n`;
                message += `${tc('deductedLabel')}: ${amount.toFixed(2)} USD\n\n`;
            } else {
                message += `${tc('amountLabel')}: ${amount.toFixed(2)} USD\n\n`;
            }

            message += `💳 ${tc('balanceUpdated')}`;

            showNotification(message, 'success');

            // Show "Another Transaction" screen
            document.getElementById('completeMessage').textContent = 'Your withdrawal has been processed successfully.';
            showScreen('anotherTransactionScreen');
        } catch (error) {
            showNotification(`❌ ${error.message}`, 'error');
        }
        return;
    }

    // LocalStorage mode - original implementation
    if (accounts[currentAccount].balance < amount) {
        const available = accounts[currentAccount].balance.toFixed(2);
        showNotification(`❌ Insufficient funds! Available balance: ${available}. You need ${(amount - accounts[currentAccount].balance).toFixed(2)} more.`, 'error');
        return;
    }

    accounts[currentAccount].balance -= amount;
    addTransaction('Virtual Withdrawal', -amount, null, anomalyAnalysis);
    updateBalanceDisplay();

    const anomalyBadge = anomalyAnalysis.anomalyScore < 30 ? `✅ ${tc('safe')}` :
                         anomalyAnalysis.anomalyScore < 60 ? `⚠️ ${tc('monitored')}` : `🚨 ${tc('flagged')}`;

    let message = `✅ ${tc('withdrawProcessed')} ${anomalyBadge}\n\n`;

    if (displayCurrency && displayAmount) {
        const currencyInfo = currencyConverter.currencies[displayCurrency];
        message += `${tc('amountLabel')}: ${currencyInfo.symbol}${displayAmount.toFixed(2)} ${displayCurrency}\n`;
        message += `${tc('deductedLabel')}: ${amount.toFixed(2)} USD\n\n`;
    } else {
        message += `${tc('amountLabel')}: ${amount.toFixed(2)} USD\n\n`;
    }

    message += `💳 ${tc('balanceUpdated')}`;

    showNotification(message, 'success');

    // Show "Another Transaction" screen
    document.getElementById('completeMessage').textContent = 'Your withdrawal has been processed successfully.';
    showScreen('anotherTransactionScreen');
}



function withdrawCustom() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const selectedCurrency = document.getElementById('withdrawCurrency').value;
    
    if (!amount || amount <= 0) {
        showNotification('❌ Please enter a valid amount greater than zero', 'error');
        return;
    }
    
    // Convert to USD if needed
    let usdAmount = amount;
    let displayAmount = amount;
    
    if (selectedCurrency !== 'USD') {
        const converted = currencyConverter.convert(amount, selectedCurrency, 'USD');
        usdAmount = converted.amount;
        displayAmount = amount;
    }
    
    // Check limits
    if (usdAmount < TRANSACTION_LIMITS.withdraw.min) {
        showNotification(`❌ Minimum withdrawal is $${TRANSACTION_LIMITS.withdraw.min} USD equivalent`, 'error');
        return;
    }
    
    if (usdAmount > TRANSACTION_LIMITS.withdraw.max) {
        showNotification(`❌ Maximum withdrawal is $${TRANSACTION_LIMITS.withdraw.max} USD equivalent`, 'error');
        return;
    }
    
    // Show confirmation before processing
    showTransactionConfirmation('withdraw', displayAmount, selectedCurrency, () => {
        withdraw(usdAmount, selectedCurrency, displayAmount);
        document.getElementById('withdrawAmount').value = '';
    }, usdAmount);
}

// Deposit
function deposit() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const selectedCurrency = document.getElementById('depositCurrency').value;
    
    if (!amount || amount <= 0) {
        showNotification(tc('pleaseEnterValid'), 'error');
        return;
    }
    
    // Convert to USD if needed
    let usdAmount = amount;
    let displayAmount = amount;
    
    if (selectedCurrency !== 'USD') {
        const converted = currencyConverter.convert(amount, selectedCurrency, 'USD');
        usdAmount = converted.amount;
        displayAmount = amount;
    }
    
    if (usdAmount > 10000) {
        showNotification(tc('maximumDeposit'), 'error');
        return;
    }
    
    const currencyInfo = currencyConverter.currencies[selectedCurrency];
    const message = `💳 ${tc('depositConfirm')} ${currencyInfo.symbol}${displayAmount.toFixed(2)} ${selectedCurrency}?\n\n` +
        (selectedCurrency !== 'USD' ? `${tc('equivalentLabel')}: $${usdAmount.toFixed(2)} USD\n` : '') +
        `${tc('balanceUpdatedInstantly')}`;
    
    if (confirm(message)) {
        performDeposit(usdAmount, selectedCurrency, displayAmount);
    }
}

async function performDeposit(amount, displayCurrency = null, displayAmount = null) {
    // AI Anomaly Detection for deposits
    const anomalyAnalysis = anomalyDetector.analyzeTransaction(
        currentAccount,
        'Deposit',
        amount
    );

    // Backend mode - use API
    if (APP_CONFIG.USE_BACKEND) {
        try {
            const response = await apiService.deposit(amount, displayCurrency || 'USD');

            // Update local balance display
            if (accounts[currentAccount]) {
                accounts[currentAccount].balance = response.balance;
            }
            updateBalanceDisplay();

            const anomalyBadge = anomalyAnalysis.anomalyScore < 30 ? '✅' : '⚠️';

            let message = `${anomalyBadge} ${tc('depositProcessed')}\n\n`;

            if (displayCurrency && displayAmount && displayCurrency !== 'USD') {
                const currencyInfo = currencyConverter.currencies[displayCurrency];
                message += `${tc('amountLabel')}: ${currencyInfo.symbol}${displayAmount.toFixed(2)} ${displayCurrency}\n`;
                message += `${tc('addedLabel')}: ${amount.toFixed(2)} USD\n\n`;
            } else {
                message += `${tc('amountLabel')}: ${amount.toFixed(2)} USD\n\n`;
            }

            message += `💳 ${tc('balanceUpdated')}`;

            showNotification(message, 'success');
            document.getElementById('depositAmount').value = '';
            showScreen('mainMenu');
        } catch (error) {
            showNotification(`❌ ${error.message}`, 'error');
        }
        return;
    }

    // LocalStorage mode - original implementation
    accounts[currentAccount].balance += amount;
    addTransaction('Virtual Deposit', amount, null, anomalyAnalysis);
    updateBalanceDisplay();

    const anomalyBadge = anomalyAnalysis.anomalyScore < 30 ? '✅' : '⚠️';

    let message = `${anomalyBadge} ${tc('depositProcessed')}\n\n`;

    if (displayCurrency && displayAmount && displayCurrency !== 'USD') {
        const currencyInfo = currencyConverter.currencies[displayCurrency];
        message += `${tc('amountLabel')}: ${currencyInfo.symbol}${displayAmount.toFixed(2)} ${displayCurrency}\n`;
        message += `${tc('addedLabel')}: ${amount.toFixed(2)} USD\n\n`;
    } else {
        message += `${tc('amountLabel')}: ${amount.toFixed(2)} USD\n\n`;
    }

    message += `💳 ${tc('balanceUpdated')}`;

    showNotification(message, 'success');
    document.getElementById('depositAmount').value = '';
    showScreen('mainMenu');
}


// Transfer
function transfer() {
    const toAccount = document.getElementById('transferAccount').value;
    const amount = parseFloat(document.getElementById('transferAmount').value);
    
    if (!toAccount || !amount) {
        showNotification(tc('pleaseEnterAccountAndAmount'), 'error');
        return;
    }
    
    if (!accounts[toAccount]) {
        showNotification(tc('invalidAccount'), 'error');
        return;
    }
    
    if (toAccount === currentAccount) {
        showNotification(tc('cannotTransferSame'), 'error');
        return;
    }
    
    if (amount <= 0) {
        showNotification(tc('pleaseEnterValid'), 'error');
        return;
    }
    
    if (accounts[currentAccount].balance < amount) {
        showNotification(tc('insufficientFunds'), 'error');
        return;
    }
    
    // AI Anomaly Detection for transfers
    const anomalyAnalysis = anomalyDetector.analyzeTransaction(
        currentAccount, 
        'Transfer', 
        amount
    );
    
    if (anomalyAnalysis.isAnomaly && anomalyAnalysis.anomalyScore > 60) {
        showNotification(`🚨 ${tc('aiAlert')}: ${anomalyAnalysis.details}`, 'error');
        
        setTimeout(() => {
            if (confirm(`${tc('unusualTransferDetected')} (${tc('riskLabel')}: ${anomalyAnalysis.anomalyScore}/100).\n\n${tc('proceedQuestion')}?`)) {
                performTransfer(toAccount, amount, anomalyAnalysis);
            }
        }, 500);
        return;
    }
    
    performTransfer(toAccount, amount, anomalyAnalysis);
}

async function performTransfer(toAccount, amount, anomalyAnalysis) {
    const toAccountName = accounts[toAccount] ? accounts[toAccount].name : toAccount;
    const message = `💳 ${tc('transferConfirm')}:\n\n` +
        `${tc('fromLabel')}: ${accounts[currentAccount].name}\n` +
        `${tc('toLabel')}: ${toAccountName}\n` +
        `${tc('amountLabel')}: ${amount.toFixed(2)}\n\n` +
        `${tc('virtualTransactionNote')}\n\n` +
        `${tc('proceedWithTransfer')}?`;

    if (!confirm(message)) {
        showScreen('transferScreen');
        return;
    }

    // Backend mode - use API
    if (APP_CONFIG.USE_BACKEND) {
        try {
            const response = await apiService.transfer(toAccount, amount);

            // Update local balance display
            if (accounts[currentAccount]) {
                accounts[currentAccount].balance = response.balance;
            }
            updateBalanceDisplay();

            showNotification(`✅ ${tc('transferCompleted')}: ${amount.toFixed(2)} ${tc('toLabel')} ${toAccountName}`, 'success');
            document.getElementById('transferAccount').value = '';
            document.getElementById('transferAmount').value = '';
            showScreen('mainMenu');
        } catch (error) {
            showNotification(`❌ ${error.message}`, 'error');
        }
        return;
    }

    // LocalStorage mode - original implementation
    accounts[currentAccount].balance -= amount;
    accounts[toAccount].balance += amount;

    addTransaction('Digital Transfer Out', -amount, toAccount, anomalyAnalysis);
    accounts[toAccount].transactions.unshift({
        id: Date.now(),
        type: 'Digital Transfer In',
        amount: amount,
        balance: accounts[toAccount].balance,
        date: new Date().toISOString(),
        fromAccount: currentAccount,
        anomalyScore: anomalyAnalysis.anomalyScore
    });

    updateBalanceDisplay();
    showNotification(`✅ ${tc('transferCompleted')}: ${amount.toFixed(2)} ${tc('toLabel')} ${toAccountName}`, 'success');
    document.getElementById('transferAccount').value = '';
    document.getElementById('transferAmount').value = '';
    showScreen('mainMenu');
}


// Change PIN
async function changePin() {
    const currentPin = document.getElementById('currentPin').value;
    const newPin = document.getElementById('newPin').value;
    const confirmPin = document.getElementById('confirmPin').value;
    
    if (!currentPin || !newPin || !confirmPin) {
        showNotification(tc('pleaseFillAllFields'), 'error');
        return;
    }
    
    if (newPin.length !== 4 || !/^\d+$/.test(newPin)) {
        showNotification(tc('pinMust4Digits'), 'error');
        return;
    }
    
    if (newPin !== confirmPin) {
        showNotification(tc('pinsDoNotMatch'), 'error');
        return;
    }
    
    // Backend mode - use API
    if (APP_CONFIG.USE_BACKEND) {
        try {
            await apiService.changePin(currentPin, newPin);
            
            // Update local account if exists
            if (accounts[currentAccount]) {
                accounts[currentAccount].pin = newPin;
            }
            
            showNotification(tc('pinChanged'), 'success');
            document.getElementById('currentPin').value = '';
            document.getElementById('newPin').value = '';
            document.getElementById('confirmPin').value = '';
            showScreen('mainMenu');
        } catch (error) {
            showNotification(`❌ ${error.message}`, 'error');
        }
        return;
    }
    
    // LocalStorage mode - original implementation with staff approval
    if (accounts[currentAccount].pin !== currentPin) {
        showNotification(tc('currentPinIncorrect'), 'error');
        return;
    }
    
    // Create PIN reset request for staff approval
    const pinResetRequest = {
        id: Date.now(),
        accountNumber: currentAccount,
        accountName: accounts[currentAccount].name,
        requestedPin: newPin,
        timestamp: new Date().toISOString(),
        status: 'pending'
    };
    
    // Load existing requests
    let pinResetRequests = [];
    const savedResets = localStorage.getItem('pinResetRequests');
    if (savedResets) {
        pinResetRequests = JSON.parse(savedResets);
    }
    
    // Add new request
    pinResetRequests.push(pinResetRequest);
    localStorage.setItem('pinResetRequests', JSON.stringify(pinResetRequests));
    
    showNotification('🔐 PIN change request submitted! Staff will review your request.', 'success');
    document.getElementById('currentPin').value = '';
    document.getElementById('newPin').value = '';
    document.getElementById('confirmPin').value = '';
    showScreen('mainMenu');
}

// Display transactions
async function displayTransactions() {
    const listElement = document.getElementById('transactionList');
    
    // Backend mode - fetch transactions from API
    if (APP_CONFIG.USE_BACKEND) {
        try {
            const transactions = await apiService.getTransactions();
            
            if (transactions.length === 0) {
                listElement.innerHTML = `<p style="text-align: center; padding: 20px; color: #95a5a6;">${tc('noTransactionsYet')}</p>`;
                return;
            }

            listElement.innerHTML = transactions.slice(0, 20).map(t => {
                const date = new Date(t.createdAt || t.date);
                const isPositive = t.amount > 0;
                const extraInfo = t.toAccount ? ` ${tc('toLabel')} ${t.toAccount}` : (t.fromAccount ? ` ${tc('fromLabel')} ${t.fromAccount}` : '');

                // AI Badge
                let aiBadge = '';
                if (t.anomalyScore !== undefined) {
                    if (t.anomalyScore < 30) {
                        aiBadge = `<span class="anomaly-badge safe">✓ ${tc('aiVerified')}</span>`;
                    } else if (t.anomalyScore < 60) {
                        aiBadge = `<span class="anomaly-badge warning">⚠ ${tc('monitored')}</span>`;
                    } else {
                        aiBadge = `<span class="anomaly-badge danger">🚨 ${tc('flagged')}</span>`;
                    }
                }

                return `
                    <div class="transaction-item">
                        <div>
                            <div class="transaction-type">${t.type}${extraInfo} ${aiBadge}</div>
                            <div class="transaction-date">${date.toLocaleString()}</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="transaction-amount ${isPositive ? 'positive' : 'negative'}">
                                ${isPositive ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                            </div>
                            <div class="transaction-date">${tc('balance')}: ${t.balance.toFixed(2)}</div>
                        </div>
                    </div>
                `;
            }).join('');
            return;
        } catch (error) {
            console.error('Error fetching transactions:', error);
            // Fall through to localStorage mode
        }
    }
    
    // LocalStorage mode - use local transactions
    const transactions = accounts[currentAccount].transactions;

    if (transactions.length === 0) {
        listElement.innerHTML = `<p style="text-align: center; padding: 20px; color: #95a5a6;">${tc('noTransactionsYet')}</p>`;
        return;
    }

    listElement.innerHTML = transactions.slice(0, 20).map(t => {
        const date = new Date(t.date);
        const isPositive = t.amount > 0;
        const extraInfo = t.toAccount ? ` ${tc('toLabel')} ${t.toAccount}` : (t.fromAccount ? ` ${tc('fromLabel')} ${t.fromAccount}` : '');

        // AI Badge
        let aiBadge = '';
        if (t.anomalyScore !== undefined) {
            if (t.anomalyScore < 30) {
                aiBadge = `<span class="anomaly-badge safe">✓ ${tc('aiVerified')}</span>`;
            } else if (t.anomalyScore < 60) {
                aiBadge = `<span class="anomaly-badge warning">⚠ ${tc('monitored')}</span>`;
            } else {
                aiBadge = `<span class="anomaly-badge danger">🚨 ${tc('flagged')}</span>`;
            }
        }

        return `
            <div class="transaction-item">
                <div>
                    <div class="transaction-type">${t.type}${extraInfo} ${aiBadge}</div>
                    <div class="transaction-date">${date.toLocaleString()}</div>
                </div>
                <div style="text-align: right;">
                    <div class="transaction-amount ${isPositive ? 'positive' : 'negative'}">
                        ${isPositive ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                    </div>
                    <div class="transaction-date">${tc('balance')}: ${t.balance.toFixed(2)}</div>
                </div>
            </div>
        `;
    }).join('');
}


// Download receipt
function downloadReceipt() {
    const transactions = accounts[currentAccount].transactions.slice(0, 20);
    const account = accounts[currentAccount];

    // Generate receipt content
    let receiptHTML = `
        <div class="receipt-bank-header">
            <h1>🏦 ${tc('receiptBankHeader')}</h1>
            <p>${tc('receiptVirtualPortal')}</p>
            <p>${tc('receiptDigitalSim')}</p>
        </div>

        <div class="receipt-info">
            <div class="receipt-info-row">
                <span><strong>${tc('receiptAccount')}:</strong></span>
                <span>${currentAccount}</span>
            </div>
            <div class="receipt-info-row">
                <span><strong>${tc('receiptName')}:</strong></span>
                <span>${account.name}</span>
            </div>
            <div class="receipt-info-row">
                <span><strong>${tc('receiptDate')}:</strong></span>
                <span>${new Date().toLocaleString()}</span>
            </div>
            <div class="receipt-info-row border-top border-bottom">
                <span><strong>${tc('receiptCurrentBalance')}:</strong></span>
                <span><strong>$${account.balance.toFixed(2)}</strong></span>
            </div>
        </div>

        <div class="receipt-transactions">
            <h3 style="text-align: center; margin-bottom: 20px;">${tc('receiptRecentTransactions')}</h3>
    `;

    if (transactions.length === 0) {
        receiptHTML += `
            <div style="text-align: center; padding: 20px; color: #666;">
                ${tc('receiptNoTransactions')}
            </div>
        `;
    } else {
        transactions.forEach(t => {
            const date = new Date(t.date);
            const isPositive = t.amount > 0;
            const extraInfo = t.toAccount ? ` to ${t.toAccount}` : (t.fromAccount ? ` from ${t.fromAccount}` : '');

            // AI Badge
            let aiBadge = '';
            if (t.anomalyScore !== undefined) {
                if (t.anomalyScore < 30) {
                    aiBadge = `<span style="color: #27ae60; font-size: 0.8rem;">✓ ${tc('aiVerified')}</span>`;
                } else if (t.anomalyScore < 60) {
                    aiBadge = `<span style="color: #f39c12; font-size: 0.8rem;">⚠ ${tc('monitored')}</span>`;
                } else {
                    aiBadge = `<span style="color: #e74c3c; font-size: 0.8rem;">🚨 ${tc('flagged')}</span>`;
                }
            }

            receiptHTML += `
                <div class="receipt-transaction-item">
                    <div class="receipt-transaction-header">
                        <span class="receipt-transaction-type">${t.type}${extraInfo}</span>
                        <span class="receipt-transaction-amount ${isPositive ? 'positive' : 'negative'}">
                            ${isPositive ? '+' : ''}$${Math.abs(t.amount).toFixed(2)}
                        </span>
                    </div>
                    <div class="receipt-transaction-details">
                        <span>${date.toLocaleString()}</span>
                        <span>${tc('balance')}: $${t.balance.toFixed(2)}</span>
                    </div>
                    ${aiBadge ? `<div style="margin-top: 5px;">${aiBadge}</div>` : ''}
                </div>
            `;
        });
    }

    receiptHTML += `
        </div>

        <div class="receipt-info" style="margin-top: 30px;">
            <div class="receipt-info-row border-top">
                <span><strong>${tc('receiptID')}:</strong></span>
                <span>RCP-${Date.now()}</span>
            </div>
            <div class="receipt-info-row">
                <span><strong>${tc('receiptGenerated')}:</strong></span>
                <span>${new Date().toLocaleString()}</span>
            </div>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #333; font-size: 0.9rem; color: #666;">
            <p><strong>${tc('receiptThankYou')}</strong></p>
            <p>${tc('receiptAIPowered')}</p>
        </div>
    `;

    // Show the modal
    document.getElementById('receiptContent').innerHTML = receiptHTML;
    document.getElementById('receiptModalOverlay').classList.add('active');
}


// Add event listeners for Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen.id === 'loginScreen') {
            login();
        }
    }
});
// Close receipt modal
function closeReceiptModal() {
    document.getElementById('receiptModalOverlay').classList.remove('active');
}

// Print receipt
function printReceipt() {
    window.print();
}

// Download receipt as file
function downloadReceiptFile() {
    const transactions = accounts[currentAccount].transactions.slice(0, 20);
    const account = accounts[currentAccount];
    
    let receipt = `SecureBank ATM Receipt\n`;
    receipt += `=================================\n`;
    receipt += `Account: ${currentAccount}\n`;
    receipt += `Name: ${account.name}\n`;
    receipt += `Date: ${new Date().toLocaleString()}\n`;
    receipt += `Current Balance: $${account.balance.toFixed(2)}\n`;
    receipt += `=================================\n\n`;
    receipt += `Recent Transactions:\n\n`;
    
    transactions.forEach(t => {
        const date = new Date(t.date);
        receipt += `${date.toLocaleString()}\n`;
        receipt += `${t.type}: ${t.amount > 0 ? '+' : ''}$${t.amount.toFixed(2)}\n`;
        receipt += `Balance: $${t.balance.toFixed(2)}\n`;
        receipt += `---------------------------------\n`;
    });
    
    receipt += `\nReceipt ID: RCP-${Date.now()}\n`;
    receipt += `Generated: ${new Date().toLocaleString()}\n\n`;
    receipt += `Thank you for using SecureBank Virtual ATM\n`;
    receipt += `AI-Powered Digital Banking • Secure • Reliable\n`;
    
    const blob = new Blob([receipt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SecureBank_Receipt_${currentAccount}_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Receipt downloaded successfully!', 'success');
    closeReceiptModal();
}

// Proceed to login screen
function proceedToLogin() {
    const acceptTerms = document.getElementById('acceptTerms');
    
    if (!acceptTerms.checked) {
        showNotification(tc('pleaseAcceptTerms'), 'error');
        return;
    }
    
    // Show login screen (don't save to localStorage so welcome screen shows every time)
    showScreen('loginScreen');
    showNotification(tc('welcomeToATM'), 'info');
}

// Check if terms were already accepted
function checkTermsAcceptance() {
    // Check if user is already logged in (has a session)
    const wasLoggedIn = localStorage.getItem('currentSession');
    
    if (wasLoggedIn) {
        // User was logged in, restore their session
        const sessionData = JSON.parse(wasLoggedIn);
        currentAccount = sessionData.accountNumber;
        
        // Verify account still exists
        if (accounts[currentAccount]) {
            document.getElementById('userName').textContent = accounts[currentAccount].name;
            document.getElementById('userAccount').textContent = currentAccount;
            updateBalanceDisplay();
            showScreen('mainMenu');
            resetSessionTimeout();
        } else {
            // Account doesn't exist anymore, clear session and show welcome
            localStorage.removeItem('currentSession');
            showScreen('welcomeScreen');
        }
    } else {
        // No active session, show welcome screen
        showScreen('welcomeScreen');
    }
}

// Show welcome screen (for returning users who want to see it again)
function showWelcomeScreen() {
    // Uncheck the terms checkbox
    const acceptTerms = document.getElementById('acceptTerms');
    if (acceptTerms) {
        acceptTerms.checked = false;
    }
    
    // Disable the proceed button
    const proceedBtn = document.getElementById('proceedBtn');
    if (proceedBtn) {
        proceedBtn.disabled = true;
    }
    
    showScreen('welcomeScreen');
}


// Show Balance Check Screen
function showBalanceScreen() {
    const account = accounts[currentAccount];
    const balance = account.balance;
    const formatted = `$${balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    
    document.getElementById('balanceInquiryAccount').textContent = currentAccount;
    document.getElementById('balanceInquiryName').textContent = account.name;
    document.getElementById('balanceInquiryAmount').textContent = formatted;
    document.getElementById('balanceInquiryDate').textContent = new Date().toLocaleString();
    
    showScreen('balanceScreen');
    resetSessionTimeout();
}

// Print Balance Receipt
function printBalanceReceipt() {
    const account = accounts[currentAccount];
    const balance = account.balance;
    
    const receiptHTML = `
        <div class="receipt-bank-header">
            <h1>🏦 SecureBank ATM</h1>
            <p>Balance Inquiry Receipt</p>
        </div>
        
        <div style="text-align: center; padding: 30px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; margin: -30px -30px 20px -30px;">
            <div style="font-size: 3rem; margin-bottom: 10px;">💰</div>
            <h2 style="margin: 0; font-size: 1.5rem;">Balance Inquiry</h2>
        </div>
        
        <div class="receipt-info">
            <div class="receipt-info-row">
                <span><strong>Account:</strong></span>
                <span>${currentAccount}</span>
            </div>
            <div class="receipt-info-row">
                <span><strong>Name:</strong></span>
                <span>${account.name}</span>
            </div>
            <div class="receipt-info-row">
                <span><strong>Date & Time:</strong></span>
                <span>${new Date().toLocaleString()}</span>
            </div>
            <div class="receipt-info-row border-top border-bottom" style="font-size: 1.5rem; padding: 20px 0;">
                <span><strong>Available Balance:</strong></span>
                <span><strong>$${balance.toFixed(2)}</strong></span>
            </div>
        </div>
        
        <div class="receipt-info" style="margin-top: 30px;">
            <div class="receipt-info-row border-top">
                <span><strong>Receipt ID:</strong></span>
                <span>BAL-${Date.now()}</span>
            </div>
            <div class="receipt-info-row">
                <span><strong>Transaction Type:</strong></span>
                <span>Balance Inquiry</span>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <p style="margin: 0; color: #27ae60; font-weight: bold; font-size: 1.1rem;">✓ Balance Inquiry Successful</p>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 0.9rem;">Keep this receipt for your records</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 2px solid #333; font-size: 0.9rem; color: #666;">
            <p><strong>Thank you for using SecureBank Virtual ATM</strong></p>
            <p>AI-Powered Digital Banking • Secure • Reliable</p>
        </div>
    `;
    
    document.getElementById('receiptContent').innerHTML = receiptHTML;
    document.getElementById('receiptModalOverlay').classList.add('active');
    
    showNotification('✅ Balance receipt generated', 'success');
}


// Display Mini Statement (last 5 transactions)
async function displayMiniStatement() {
    const listElement = document.getElementById('miniStatementList');
    
    // Backend mode - fetch transactions from API
    if (APP_CONFIG.USE_BACKEND) {
        try {
            const transactions = await apiService.getTransactions();
            
            if (transactions.length === 0) {
                listElement.innerHTML = `<p style="text-align: center; padding: 20px; color: #95a5a6;">${tc('noTransactionsYet')}</p>`;
                return;
            }

            // Show only last 5 transactions
            listElement.innerHTML = transactions.slice(0, 5).map(t => {
                const date = new Date(t.createdAt || t.date);
                const isPositive = t.amount > 0;
                const extraInfo = t.toAccount ? ` ${tc('toLabel')} ${t.toAccount}` : (t.fromAccount ? ` ${tc('fromLabel')} ${t.fromAccount}` : '');

                // AI Badge
                let aiBadge = '';
                if (t.anomalyScore !== undefined) {
                    if (t.anomalyScore < 30) {
                        aiBadge = `<span class="anomaly-badge safe">✓ ${tc('aiVerified')}</span>`;
                    } else if (t.anomalyScore < 60) {
                        aiBadge = `<span class="anomaly-badge warning">⚠ ${tc('monitored')}</span>`;
                    } else {
                        aiBadge = `<span class="anomaly-badge danger">🚨 ${tc('flagged')}</span>`;
                    }
                }

                return `
                    <div class="transaction-item">
                        <div>
                            <div class="transaction-type">${t.type}${extraInfo} ${aiBadge}</div>
                            <div class="transaction-date">${date.toLocaleString()}</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="transaction-amount ${isPositive ? 'positive' : 'negative'}">
                                ${isPositive ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                            </div>
                            <div class="transaction-date">${tc('balance')}: ${t.balance.toFixed(2)}</div>
                        </div>
                    </div>
                `;
            }).join('');
            return;
        } catch (error) {
            console.error('Error fetching transactions for mini statement:', error);
            // Fall through to localStorage mode
        }
    }
    
    // LocalStorage mode - use local transactions
    const transactions = accounts[currentAccount].transactions;

    if (transactions.length === 0) {
        listElement.innerHTML = `<p style="text-align: center; padding: 20px; color: #95a5a6;">No transactions yet</p>`;
        return;
    }

    // Show only last 5 transactions
    listElement.innerHTML = transactions.slice(0, 5).map(t => {
        const date = new Date(t.date);
        const isPositive = t.amount > 0;
        const extraInfo = t.toAccount ? ` to ${t.toAccount}` : (t.fromAccount ? ` from ${t.fromAccount}` : '');

        // AI Badge
        let aiBadge = '';
        if (t.anomalyScore !== undefined) {
            if (t.anomalyScore < 30) {
                aiBadge = `<span class="anomaly-badge safe">✓ ${tc('aiVerified')}</span>`;
            } else if (t.anomalyScore < 60) {
                aiBadge = `<span class="anomaly-badge warning">⚠ ${tc('monitored')}</span>`;
            } else {
                aiBadge = `<span class="anomaly-badge danger">🚨 ${tc('flagged')}</span>`;
            }
        }

        return `
            <div class="transaction-item">
                <div>
                    <div class="transaction-type">${t.type}${extraInfo} ${aiBadge}</div>
                    <div class="transaction-date">${date.toLocaleString()}</div>
                </div>
                <div style="text-align: right;">
                    <div class="transaction-amount ${isPositive ? 'positive' : 'negative'}">
                        ${isPositive ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                    </div>
                    <div class="transaction-date">${tc('balance')}: ${t.balance.toFixed(2)}</div>
                </div>
            </div>
        `;
    }).join('');
}


// Switch AI Dashboard Tabs
function switchAITab(tab) {
    // Update tab buttons
    document.querySelectorAll('.ai-tab').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.ai-tab').classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.ai-tab-content').forEach(content => content.classList.remove('active'));
    
    if (tab === 'security') {
        document.getElementById('securityTab').classList.add('active');
        if (currentAccount) {
            updateAISecurityDashboard();
        }
    } else if (tab === 'assistant') {
        document.getElementById('assistantTab').classList.add('active');
    }
}

// AI Assistant Responses
function askAI(question) {
    const responseDiv = document.getElementById('aiResponse');
    let response = '';
    
    switch(question) {
        case 'withdraw':
            response = `
                <h4>💳 How to Withdraw Money</h4>
                <p><strong>Step 1:</strong> Click the "Virtual Withdrawal" button on the main menu</p>
                <p><strong>Step 2:</strong> Choose your currency (USD, EUR, PHP, etc.)</p>
                <p><strong>Step 3:</strong> Select a quick amount or enter a custom amount</p>
                <p><strong>Step 4:</strong> Confirm your transaction</p>
                <p><strong>Step 5:</strong> Your balance will be updated instantly!</p>
                <p><strong>💡 Tip:</strong> Check your balance first to make sure you have enough money.</p>
                <p><strong>Limits:</strong> Min: $10 | Max: $1,000 per transaction</p>
            `;
            break;
            
        case 'deposit':
            response = `
                <h4>💵 How to Deposit Money</h4>
                <p><strong>Step 1:</strong> Click the "Virtual Deposit" button on the main menu</p>
                <p><strong>Step 2:</strong> Choose your currency</p>
                <p><strong>Step 3:</strong> Enter the amount you want to deposit</p>
                <p><strong>Step 4:</strong> Confirm your transaction</p>
                <p><strong>Step 5:</strong> Your balance will increase instantly!</p>
                <p><strong>💡 Tip:</strong> You can deposit in different currencies and it will be converted to USD.</p>
                <p><strong>Limits:</strong> Min: $10 | Max: $10,000 per transaction</p>
            `;
            break;
            
        case 'transfer':
            response = `
                <h4>🔄 How to Transfer Money</h4>
                <p><strong>Step 1:</strong> Click the "Transfer" button on the main menu</p>
                <p><strong>Step 2:</strong> Enter the recipient's account number</p>
                <p><strong>Step 3:</strong> Enter the amount to transfer</p>
                <p><strong>Step 4:</strong> Confirm the transfer details</p>
                <p><strong>Step 5:</strong> Money will be sent instantly!</p>
                <p><strong>💡 Tip:</strong> Double-check the account number before confirming.</p>
                <p><strong>Limits:</strong> Min: $1 | Max: $5,000 per transaction</p>
            `;
            break;
            
        case 'balance':
            response = `
                <h4>💰 How to Check Your Balance</h4>
                <p><strong>Easy Way:</strong> Your balance is always shown on the main menu in the green card!</p>
                <p><strong>Print Receipt:</strong> Click "Print Balance Receipt" to get a printable receipt with your balance.</p>
                <p><strong>Mini Statement:</strong> Click "Mini Statement" to see your last 5 transactions.</p>
                <p><strong>Full History:</strong> Click "Full History" to see all your transactions.</p>
                <p><strong>💡 Tip:</strong> Check your balance before making withdrawals to avoid errors.</p>
            `;
            break;
            
        case 'pin':
            response = `
                <h4>🔐 How to Change Your PIN</h4>
                <p><strong>Step 1:</strong> Click the "Change PIN" button on the main menu</p>
                <p><strong>Step 2:</strong> Enter your current PIN</p>
                <p><strong>Step 3:</strong> Enter your new 4-digit PIN</p>
                <p><strong>Step 4:</strong> Confirm your new PIN</p>
                <p><strong>Step 5:</strong> Wait for staff approval</p>
                <p><strong>⚠️ Important:</strong> Your PIN change request will be sent to staff for approval. This is for security!</p>
                <p><strong>💡 Tip:</strong> Choose a PIN that's easy to remember but hard for others to guess.</p>
            `;
            break;
            
        case 'limits':
            response = `
                <h4>📊 Transaction Limits</h4>
                <p><strong>Withdrawal:</strong></p>
                <ul>
                    <li>Minimum: $10 USD</li>
                    <li>Maximum: $1,000 USD per transaction</li>
                </ul>
                <p><strong>Deposit:</strong></p>
                <ul>
                    <li>Minimum: $10 USD</li>
                    <li>Maximum: $10,000 USD per transaction</li>
                </ul>
                <p><strong>Transfer:</strong></p>
                <ul>
                    <li>Minimum: $1 USD</li>
                    <li>Maximum: $5,000 USD per transaction</li>
                </ul>
                <p><strong>💡 Tip:</strong> These limits help keep your account safe!</p>
            `;
            break;
            
        case 'safe':
            response = `
                <h4>🛡️ How to Stay Safe</h4>
                <p><strong>1. Keep Your PIN Secret</strong></p>
                <p>Never share your PIN with anyone, not even family or friends.</p>
                <p><strong>2. Check Your Balance</strong></p>
                <p>Always check your balance before and after transactions.</p>
                <p><strong>3. Review Transactions</strong></p>
                <p>Check your mini statement regularly for any unusual activity.</p>
                <p><strong>4. Logout When Done</strong></p>
                <p>Always click "Logout" when you finish using the ATM.</p>
                <p><strong>5. Watch for Alerts</strong></p>
                <p>Our AI monitors for suspicious activity and will alert you.</p>
                <p><strong>💡 Remember:</strong> This is a practice simulator, but these tips apply to real ATMs too!</p>
            `;
            break;
            
        case 'currency':
            response = `
                <h4>💱 How Currency Exchange Works</h4>
                <p><strong>What is it?</strong></p>
                <p>Currency exchange lets you convert money from one currency to another (like USD to PHP).</p>
                <p><strong>How to use it:</strong></p>
                <p><strong>Step 1:</strong> Click "Currency Exchange" on the main menu</p>
                <p><strong>Step 2:</strong> Enter the amount you want to convert</p>
                <p><strong>Step 3:</strong> Select "From" currency and "To" currency</p>
                <p><strong>Step 4:</strong> Click "Convert" to see the result</p>
                <p><strong>💡 Cool Feature:</strong> Our AI gives you smart recommendations on the best time to exchange!</p>
                <p><strong>Supported Currencies:</strong> USD, EUR, GBP, JPY, PHP, CNY, INR, AUD, CAD</p>
            `;
            break;
    }
    
    response += `<button class="ai-response-close" onclick="closeAIResponse()">Got it! ✓</button>`;
    
    responseDiv.innerHTML = response;
    responseDiv.classList.add('show');
    
    // Scroll to response
    responseDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Close AI Response
function closeAIResponse() {
    document.getElementById('aiResponse').classList.remove('show');
}
