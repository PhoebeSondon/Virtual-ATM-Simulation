// Client Multilingual Translations
// Languages: English (en), Spanish (es), Chinese (zh), Japanese (ja), Filipino (tl), Hindi (hi)

const clientTranslations = {
    en: {
        // Main Menu
        welcome: 'Welcome',
        account: 'Account',
        availableBalance: 'Available Balance',
        virtualWithdrawal: 'Virtual Withdrawal',
        virtualDeposit: 'Virtual Deposit',
        transfer: 'Transfer',
        history: 'Full History',
        currencyExchange: 'Currency Exchange',
        changePin: 'Change PIN',
        logout: 'Logout',
        miniStatement: 'Mini Statement',
        balanceReceipt: 'Print Balance Receipt',
        help: 'Help/Tutorial',
        
        // Welcome Screen
        welcomeTitle: 'Welcome to SecureBank Virtual ATM',
        welcomeSubtitle: 'Virtual ATM Simulation',
        welcomeDescription: 'Experience modern banking with AI-powered security and virtual transactions',
        tagline: 'Practice Today, Bank Confidently Tomorrow.',
        aiPoweredBanking: 'AI-Powered Banking',
        virtualTransactions: 'Virtual Transactions',
        virtualTransactionsDesc: 'Practice banking operations in a safe, simulated environment',
        aiSecurity: 'AI Security & Assistant',
        aiSecurityDesc: 'Advanced behavioral analysis, fraud detection, and interactive help',
        currencyExchangeFeature: 'Currency Exchange',
        currencyExchangeDesc: 'Real-time exchange rates with AI market insights',
        financialInsights: 'Financial Insights',
        financialInsightsDesc: 'Personalized recommendations powered by AI',
        receiptPrinting: 'Receipt Printing',
        receiptPrintingDesc: 'Download and print transaction receipts',
        pinManagement: 'PIN Management',
        pinManagementDesc: 'Secure PIN change with staff approval',
        whatYouLearn: 'What You\'ll Learn',
        learnBasicTransactions: 'Basic ATM transactions (withdraw, deposit, transfer)',
        learnPinSecurity: 'PIN security and account management',
        learnCurrencyExchange: 'Currency exchange and conversion',
        learnTransactionHistory: 'Reading transaction history and receipts',
        learnAISecurity: 'Understanding AI-powered security features',
        learnSafeBanking: 'Safe banking practices for real-world use',
        importantNotice: 'Important Notice',
        termsAndConditions: 'Terms and Conditions',
        educationalPurpose: 'Educational Purpose',
        educationalPurposeDesc: 'This is a simulation for learning purposes - for people of all ages, from 7-year-olds to adults',
        virtualCurrency: 'Virtual Currency',
        virtualCurrencyDesc: 'All transactions use simulated money - no real funds involved',
        noRealBanking: 'No Real Banking',
        noRealBankingDesc: 'This is not connected to any real bank or financial institution',
        dataStorage: 'Data Storage',
        dataStorageDesc: 'All data is stored locally in your browser',
        aiFeatures: 'AI Features',
        aiFeaturesDesc: 'AI security and insights are simulated for demonstration',
        demoAccounts: 'Demo Accounts',
        demoAccountsDesc: 'Use provided demo accounts to explore features',
        disclaimer: 'Disclaimer',
        disclaimerText: 'By proceeding, you acknowledge this is a virtual simulation for educational purposes only',
        acceptTermsLabel: 'I accept the terms and conditions',
        continueToATM: 'Continue to Virtual ATM',
        
        // Login Screen
        accountNumber: 'Account Number',
        accountNumberPlaceholder: 'Enter account number',
        pin: 'PIN',
        pinPlaceholder: 'Enter 4-digit PIN',
        loginButton: 'Login',
        demoAccountsTitle: 'Demo Accounts Available',
        viewIntroTerms: 'View Introduction & Terms',
        
        // Withdraw Screen
        virtualWithdrawalTitle: 'Virtual Withdrawal',
        withdrawInfoBanner: 'Select currency and amount to withdraw',
        withdrawalCurrency: 'Withdrawal Currency',
        customAmount: 'Custom Amount',
        processWithdrawal: 'Process Virtual Withdrawal',
        cancel: 'Cancel',
        
        // Deposit Screen
        virtualDepositTitle: 'Virtual Deposit',
        depositInfoBanner: 'Select currency and amount to deposit',
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
        noTransactionsYet: 'No transactions yet',
        downloadReceipt: 'Download Receipt',
        back: 'Back',
        aiVerified: 'AI Verified',
        monitored: 'Monitored',
        flagged: 'Flagged',
        balance: 'Balance',
        
        // Currency Screen
        currencyExchangeMarket: 'Currency Exchange Market',
        marketNews: 'Live Market News',
        currencyConverter: 'Currency Converter',
        fromCurrency: 'From Currency',
        toCurrency: 'To Currency',
        convertButton: 'Convert',
        topMovers: 'Top Currency Movers',
        marketSentiment: 'Market Sentiment',
        rising: 'Rising',
        falling: 'Falling',
        avgChange: 'Avg Change',
        conversionResult: 'Conversion Result',
        aiRecommendation: 'AI Recommendation',
        potentialSavings: 'Potential savings',
        
        // PIN Change Screen
        changePinTitle: 'Change PIN',
        currentPin: 'Current PIN',
        currentPinPlaceholder: 'Enter current PIN',
        newPin: 'New PIN',
        newPinPlaceholder: 'Enter new 4-digit PIN',
        confirmNewPin: 'Confirm New PIN',
        confirmPinPlaceholder: 'Re-enter new PIN',
        changePinButton: 'Change PIN',
        
        // Help/Tutorial Screen
        helpTitle: 'Help & Tutorial',
        helpSubtitle: 'Learn how to use the Virtual ATM',
        mainFeatures: 'Main Features',
        safetyTips: 'Safety Tips',
        aiFeaturesList: 'AI Features',
        educationalNote: 'Educational Note',
        
        // Notification Messages
        loginSuccess: '✅ Login successful! AI Security Active',
        logoutSuccess: 'Logged out successfully - Security session cleared',
        insufficientFunds: 'Insufficient funds!',
        transactionSuccess: '✅ Transaction completed successfully',
        invalidAmount: 'Please enter a valid amount',
        invalidAccount: 'Invalid account number',
        pinChanged: 'PIN changed successfully!',
        languageChanged: 'Language changed successfully',
        pleaseEnterValid: 'Please enter a valid amount',
        maximumWithdrawal: 'Maximum withdrawal is $1,000 USD equivalent',
        maximumDeposit: 'Maximum deposit is $10,000 USD equivalent',
        cannotTransferSame: 'Cannot transfer to same account',
        pleaseEnterAccountAndAmount: 'Please enter account number and amount',
        pleaseFillAllFields: 'Please fill all fields',
        currentPinIncorrect: 'Current PIN is incorrect',
        pinMust4Digits: 'PIN must be 4 digits',
        pinsDoNotMatch: 'New PINs do not match',
        pleaseAcceptTerms: 'Please accept the terms and conditions to continue',
        welcomeToATM: 'Welcome to SecureBank Virtual ATM! 🏦',
        receiptDownloaded: 'Receipt downloaded successfully!',
        currencyConverted: '✅ Currency converted successfully',
        pleaseSelectDifferent: 'Please select different currencies',
        loadingRates: 'Loading exchange rates... Please wait',
        conversionFailed: 'Conversion failed. Rates not available.',
        pleaseEnterAccountAndPin: 'Please enter account number and PIN',
        invalidAccountOrPin: 'Invalid account number or PIN',
        
        // Confirmation Dialog Messages
        withdrawConfirm: 'Withdraw',
        depositConfirm: 'Deposit',
        transferConfirm: 'Digital Transfer Confirmation',
        proceedAnyway: 'Proceed anyway?',
        cancelTransaction: 'Cancel',
        
        // Dynamic Message Templates
        withdrawProcessed: 'Virtual withdrawal processed',
        depositProcessed: 'Virtual deposit processed',
        transferCompleted: 'Digital transfer completed',
        amountLabel: 'Amount',
        deductedLabel: 'Deducted',
        addedLabel: 'Added',
        equivalentLabel: 'Equivalent',
        rateLabel: 'Rate',
        balanceUpdated: 'Your digital balance has been updated',
        youWillWithdraw: 'You will withdraw',
        willBeDeducted: 'will be deducted',
        youWillDeposit: 'You will deposit',
        willBeAdded: 'will be added',
        fromLabel: 'From',
        toLabel: 'To',
        
        // Receipt Text
        receiptBankHeader: 'SecureBank ATM',
        receiptVirtualPortal: 'Virtual ATM Web Portal',
        receiptDigitalSim: 'Digital Banking Simulation',
        receiptAccount: 'Account',
        receiptName: 'Name',
        receiptDate: 'Date',
        receiptCurrentBalance: 'Current Balance',
        receiptRecentTransactions: 'Recent Transactions',
        receiptNoTransactions: 'No transactions found',
        receiptID: 'Receipt ID',
        receiptGenerated: 'Generated',
        receiptThankYou: 'Thank you for using SecureBank Virtual ATM',
        receiptAIPowered: 'AI-Powered Digital Banking • Secure • Reliable',
        
        // AI and Security Messages
        aiFraudAlert: 'AI Fraud Alert',
        unusualPattern: 'Unusual transaction pattern detected',
        riskScore: 'Risk Score',
        securityAlert: 'Unusual Behavior Detected',
        suspiciousActivity: 'Suspicious Login Behavior',
        highRisk: 'HIGH RISK',
        mediumRisk: 'MEDIUM RISK',
        lowRisk: 'LOW RISK',
        pasteDetected: 'Paste behavior detected - Security risk identified',
        unusualBehavior: 'Unusual login behavior detected',
        liveExchangeRate: 'Live Exchange Rate',
        
        // Additional keys
        loadingMarketData: 'Loading Market Data',
        initializingRates: 'Initializing exchange rates...',
        loadingTopMovers: 'Loading Top Movers',
        pleaseWait: 'Please wait...',
        errorLoadingMarket: 'Error loading market data',
        aiFinancialInsights: 'AI Financial Insights',
        balanceDeductedUSD: 'Balance will be deducted in USD',
        aiDetectedUnusual: 'AI detected unusual activity',
        safe: 'Safe',
        balanceUpdatedInstantly: 'Balance will be updated instantly'
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

// Cycle through languages
function cycleLanguage() {
    const languages = ['en', 'es', 'zh', 'ja', 'tl', 'hi'];
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

// Add Spanish translations
clientTranslations.es = {
    // Main Menu
    welcome: 'Bienvenido',
    account: 'Cuenta',
    availableBalance: 'Saldo Disponible',
    virtualWithdrawal: 'Retiro Virtual',
    virtualDeposit: 'Depósito Virtual',
    transfer: 'Transferir',
    history: 'Historial Completo',
    currencyExchange: 'Cambio de Moneda',
    changePin: 'Cambiar PIN',
    logout: 'Cerrar Sesión',
    miniStatement: 'Estado Mini',
    balanceReceipt: 'Imprimir Recibo de Saldo',
    help: 'Ayuda/Tutorial',
    
    // Welcome Screen
    welcomeTitle: 'Bienvenido al Cajero Virtual de SecureBank',
    welcomeSubtitle: 'Simulación de Cajero Virtual',
    welcomeDescription: 'Experimente la banca moderna con seguridad impulsada por IA y transacciones virtuales',
    tagline: 'Practique Hoy, Opere con Confianza Mañana.',
    aiPoweredBanking: 'Banca Impulsada por IA',
    virtualTransactions: 'Transacciones Virtuales',
    virtualTransactionsDesc: 'Practique operaciones bancarias en un entorno seguro y simulado',
    aiSecurity: 'Seguridad IA y Asistente',
    aiSecurityDesc: 'Análisis de comportamiento avanzado, detección de fraude y ayuda interactiva',
    currencyExchangeFeature: 'Cambio de Moneda',
    currencyExchangeDesc: 'Tasas de cambio en tiempo real con información de mercado IA',
    financialInsights: 'Información Financiera',
    financialInsightsDesc: 'Recomendaciones personalizadas impulsadas por IA',
    receiptPrinting: 'Impresión de Recibos',
    receiptPrintingDesc: 'Descargue e imprima recibos de transacciones',
    pinManagement: 'Gestión de PIN',
    pinManagementDesc: 'Cambio seguro de PIN con aprobación del personal',
    whatYouLearn: 'Lo Que Aprenderá',
    learnBasicTransactions: 'Transacciones básicas de cajero (retirar, depositar, transferir)',
    learnPinSecurity: 'Seguridad PIN y gestión de cuenta',
    learnCurrencyExchange: 'Cambio y conversión de moneda',
    learnTransactionHistory: 'Lectura de historial de transacciones y recibos',
    learnAISecurity: 'Comprensión de características de seguridad impulsadas por IA',
    learnSafeBanking: 'Prácticas bancarias seguras para uso en el mundo real',
    importantNotice: 'Aviso Importante',
    termsAndConditions: 'Términos y Condiciones',
    educationalPurpose: 'Propósito Educativo',
    educationalPurposeDesc: 'Esta es una simulación para fines de aprendizaje - para personas de todas las edades, desde niños de 7 años hasta adultos',
    virtualCurrency: 'Moneda Virtual',
    virtualCurrencyDesc: 'Todas las transacciones usan dinero simulado - no hay fondos reales involucrados',
    noRealBanking: 'Sin Banca Real',
    noRealBankingDesc: 'Esto no está conectado a ningún banco o institución financiera real',
    dataStorage: 'Almacenamiento de Datos',
    dataStorageDesc: 'Todos los datos se almacenan localmente en su navegador',
    aiFeatures: 'Características IA',
    aiFeaturesDesc: 'La seguridad e información IA son simuladas para demostración',
    demoAccounts: 'Cuentas de Demostración',
    demoAccountsDesc: 'Use las cuentas de demostración proporcionadas para explorar las características',
    disclaimer: 'Descargo de Responsabilidad',
    disclaimerText: 'Al continuar, usted reconoce que esto es una simulación virtual solo con fines educativos',
    acceptTermsLabel: 'Acepto los términos y condiciones',
    continueToATM: 'Continuar al Cajero Virtual',
    
    // Login Screen
    accountNumber: 'Número de Cuenta',
    accountNumberPlaceholder: 'Ingrese número de cuenta',
    pin: 'PIN',
    pinPlaceholder: 'Ingrese PIN de 4 dígitos',
    loginButton: 'Iniciar Sesión',
    demoAccountsTitle: 'Cuentas de Demostración Disponibles',
    viewIntroTerms: 'Ver Introducción y Términos',
    
    // Withdraw Screen
    virtualWithdrawalTitle: 'Retiro Virtual',
    withdrawInfoBanner: 'Seleccione moneda y monto a retirar',
    withdrawalCurrency: 'Moneda de Retiro',
    customAmount: 'Monto Personalizado',
    processWithdrawal: 'Procesar Retiro Virtual',
    cancel: 'Cancelar',
    
    // Deposit Screen
    virtualDepositTitle: 'Depósito Virtual',
    depositInfoBanner: 'Seleccione moneda y monto a depositar',
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
    noTransactionsYet: 'Aún no hay transacciones',
    downloadReceipt: 'Descargar Recibo',
    back: 'Volver',
    aiVerified: 'Verificado por IA',
    monitored: 'Monitoreado',
    flagged: 'Marcado',
    balance: 'Saldo',
    
    // Currency Screen
    currencyExchangeMarket: 'Mercado de Cambio de Moneda',
    marketNews: 'Noticias del Mercado en Vivo',
    currencyConverter: 'Convertidor de Moneda',
    fromCurrency: 'De Moneda',
    toCurrency: 'A Moneda',
    convertButton: 'Convertir',
    topMovers: 'Principales Movimientos de Moneda',
    marketSentiment: 'Sentimiento del Mercado',
    rising: 'Subiendo',
    falling: 'Bajando',
    avgChange: 'Cambio Promedio',
    conversionResult: 'Resultado de Conversión',
    aiRecommendation: 'Recomendación IA',
    potentialSavings: 'Ahorros potenciales',
    
    // PIN Change Screen
    changePinTitle: 'Cambiar PIN',
    currentPin: 'PIN Actual',
    currentPinPlaceholder: 'Ingrese PIN actual',
    newPin: 'Nuevo PIN',
    newPinPlaceholder: 'Ingrese nuevo PIN de 4 dígitos',
    confirmNewPin: 'Confirmar Nuevo PIN',
    confirmPinPlaceholder: 'Reingrese nuevo PIN',
    changePinButton: 'Cambiar PIN',
    
    // Help/Tutorial Screen
    helpTitle: 'Ayuda y Tutorial',
    helpSubtitle: 'Aprenda a usar el Cajero Virtual',
    mainFeatures: 'Características Principales',
    safetyTips: 'Consejos de Seguridad',
    aiFeaturesList: 'Características IA',
    educationalNote: 'Nota Educativa',
    
    // Notification Messages
    loginSuccess: '✅ ¡Inicio de sesión exitoso! Seguridad AI Activa',
    logoutSuccess: 'Sesión cerrada exitosamente - Sesión de seguridad borrada',
    insufficientFunds: '¡Fondos insuficientes!',
    transactionSuccess: '✅ Transacción completada exitosamente',
    invalidAmount: 'Por favor ingrese un monto válido',
    invalidAccount: 'Número de cuenta inválido',
    pinChanged: '¡PIN cambiado exitosamente!',
    languageChanged: 'Idioma cambiado exitosamente',
    pleaseEnterValid: 'Por favor ingrese un monto válido',
    maximumWithdrawal: 'El retiro máximo es $1,000 USD equivalente',
    maximumDeposit: 'El depósito máximo es $10,000 USD equivalente',
    cannotTransferSame: 'No se puede transferir a la misma cuenta',
    pleaseEnterAccountAndAmount: 'Por favor ingrese número de cuenta y monto',
    pleaseFillAllFields: 'Por favor complete todos los campos',
    currentPinIncorrect: 'El PIN actual es incorrecto',
    pinMust4Digits: 'El PIN debe tener 4 dígitos',
    pinsDoNotMatch: 'Los nuevos PINs no coinciden',
    pleaseAcceptTerms: 'Por favor acepte los términos y condiciones para continuar',
    welcomeToATM: '¡Bienvenido al Cajero Virtual de SecureBank! 🏦',
    receiptDownloaded: '¡Recibo descargado exitosamente!',
    currencyConverted: '✅ Moneda convertida exitosamente',
    pleaseSelectDifferent: 'Por favor seleccione monedas diferentes',
    loadingRates: 'Cargando tasas de cambio... Por favor espere',
    conversionFailed: 'Conversión fallida. Tasas no disponibles.',
    pleaseEnterAccountAndPin: 'Por favor ingrese número de cuenta y PIN',
    invalidAccountOrPin: 'Número de cuenta o PIN inválido',
    
    // Confirmation Dialog Messages
    withdrawConfirm: 'Retirar',
    depositConfirm: 'Depositar',
    transferConfirm: 'Confirmación de Transferencia Digital',
    proceedAnyway: '¿Proceder de todos modos?',
    cancelTransaction: 'Cancelar',
    
    // Dynamic Message Templates
    withdrawProcessed: 'Retiro virtual procesado',
    depositProcessed: 'Depósito virtual procesado',
    transferCompleted: 'Transferencia digital completada',
    amountLabel: 'Monto',
    deductedLabel: 'Deducido',
    addedLabel: 'Agregado',
    equivalentLabel: 'Equivalente',
    rateLabel: 'Tasa',
    balanceUpdated: 'Su saldo digital ha sido actualizado',
    youWillWithdraw: 'Usted retirará',
    willBeDeducted: 'será deducido',
    youWillDeposit: 'Usted depositará',
    willBeAdded: 'será agregado',
    fromLabel: 'De',
    toLabel: 'Para',
    
    // Receipt Text
    receiptBankHeader: 'Cajero SecureBank',
    receiptVirtualPortal: 'Portal Web de Cajero Virtual',
    receiptDigitalSim: 'Simulación de Banca Digital',
    receiptAccount: 'Cuenta',
    receiptName: 'Nombre',
    receiptDate: 'Fecha',
    receiptCurrentBalance: 'Saldo Actual',
    receiptRecentTransactions: 'Transacciones Recientes',
    receiptNoTransactions: 'No se encontraron transacciones',
    receiptID: 'ID de Recibo',
    receiptGenerated: 'Generado',
    receiptThankYou: 'Gracias por usar el Cajero Virtual de SecureBank',
    receiptAIPowered: 'Banca Digital Impulsada por IA • Segura • Confiable',
    
    // AI and Security Messages
    aiFraudAlert: 'Alerta de Fraude IA',
    unusualPattern: 'Patrón de transacción inusual detectado',
    riskScore: 'Puntuación de Riesgo',
    securityAlert: 'Comportamiento Inusual Detectado',
    suspiciousActivity: 'Comportamiento de Inicio de Sesión Sospechoso',
    highRisk: 'RIESGO ALTO',
    mediumRisk: 'RIESGO MEDIO',
    lowRisk: 'RIESGO BAJO',
    pasteDetected: 'Comportamiento de pegado detectado - Riesgo de seguridad identificado',
    unusualBehavior: 'Comportamiento de inicio de sesión inusual detectado',
    liveExchangeRate: 'Tasa de Cambio en Vivo',
    
    // Additional keys
    loadingMarketData: 'Cargando Datos del Mercado',
    initializingRates: 'Inicializando tasas de cambio...',
    loadingTopMovers: 'Cargando Principales Movimientos',
    pleaseWait: 'Por favor espere...',
    errorLoadingMarket: 'Error al cargar datos del mercado',
    aiFinancialInsights: 'Información Financiera IA',
    balanceDeductedUSD: 'El saldo se deducirá en USD',
    aiDetectedUnusual: 'IA detectó actividad inusual',
    safe: 'Seguro',
    balanceUpdatedInstantly: 'El saldo se actualizará instantáneamente'
};
