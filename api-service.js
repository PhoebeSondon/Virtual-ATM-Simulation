// API Service - Handles all backend communication
// This replaces localStorage with real API calls to the MEAN Stack backend

const API_BASE_URL = 'http://localhost:3000/api';

class APIService {
    constructor() {
        // Don't store token in instance - always read from localStorage
        // this.token = localStorage.getItem('authToken');
    }

    // Helper method to get auth headers
    getAuthHeaders() {
        // Always get fresh token from localStorage
        const currentToken = localStorage.getItem('authToken') || '';
        console.log('🔑 getAuthHeaders: Getting auth headers');
        console.log('🔑 getAuthHeaders: localStorage available:', typeof localStorage !== 'undefined');
        console.log('🔑 getAuthHeaders: Token from localStorage:', currentToken ? 'EXISTS' : 'MISSING');
        console.log('🔑 getAuthHeaders: Token exists:', !!currentToken);
        console.log('🔑 getAuthHeaders: Token value (first 20 chars):', currentToken ? currentToken.substring(0, 20) + '...' : 'NO TOKEN');
        
        if (!currentToken) {
            console.error('❌ getAuthHeaders: NO TOKEN FOUND! Check if login was successful.');
            console.error('❌ getAuthHeaders: localStorage keys:', Object.keys(localStorage));
        }
        
        return {
            'Content-Type': 'application/json',
            'x-auth-token': currentToken
        };
    }

    // Helper method to handle API responses
    async handleResponse(response) {
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || data.message || 'API request failed');
        }
        
        return data;
    }

    // Authentication APIs
    async login(accountNumber, pin) {
        try {
            console.log('🔐 APIService.login: Attempting login for account:', accountNumber);
            
            // TEST: Check if localStorage is working
            console.log('🔐 APIService.login: Testing localStorage...');
            try {
                localStorage.setItem('test', 'value');
                const testValue = localStorage.getItem('test');
                console.log('🔐 APIService.login: localStorage test result:', testValue);
                localStorage.removeItem('test');
                console.log('🔐 APIService.login: localStorage is WORKING');
            } catch (e) {
                console.error('❌ APIService.login: localStorage is BLOCKED or DISABLED!', e);
            }
            
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ accountNumber, pin })
            });

            console.log('📡 APIService.login: Response status:', response.status);
            const data = await this.handleResponse(response);
            
            console.log('✅ APIService.login: Login successful, token received:', data.token ? 'Yes' : 'No');
            console.log('✅ APIService.login: Token (first 20 chars):', data.token ? data.token.substring(0, 20) + '...' : 'NO TOKEN');
            console.log('✅ APIService.login: Token length:', data.token ? data.token.length : 0);
            
            // Store token in localStorage only
            console.log('💾 APIService.login: About to store token in localStorage...');
            try {
                localStorage.setItem('authToken', data.token);
                console.log('💾 APIService.login: localStorage.setItem called');
            } catch (e) {
                console.error('❌ APIService.login: Failed to store token!', e);
                throw new Error('Failed to store authentication token. localStorage may be disabled.');
            }
            
            console.log('💾 APIService.login: Token stored in localStorage');
            const storedToken = localStorage.getItem('authToken');
            console.log('💾 APIService.login: Verify token in localStorage:', storedToken ? 'YES' : 'NO');
            console.log('💾 APIService.login: Stored token length:', storedToken ? storedToken.length : 0);
            console.log('💾 APIService.login: Token value matches:', storedToken === data.token ? 'YES' : 'NO');
            
            return data;
        } catch (error) {
            console.error('❌ APIService.login: Login error:', error);
            throw error;
        }
    }

    // Account APIs
    async getBalance() {
        try {
            console.log('📊 Getting balance...');
            const headers = this.getAuthHeaders();
            console.log('📊 Headers:', headers);
            
            const response = await fetch(`${API_BASE_URL}/accounts/balance`, {
                method: 'GET',
                headers: headers
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('❌ Get balance error:', error);
            throw error;
        }
    }

    async changePin(currentPin, newPin) {
        try {
            console.log('🔐 Changing PIN...');
            const headers = this.getAuthHeaders();
            console.log('🔐 Headers:', headers);
            
            const response = await fetch(`${API_BASE_URL}/accounts/change-pin`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify({ currentPin, newPin })
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('❌ Change PIN error:', error);
            throw error;
        }
    }

    // Transaction APIs
    async getTransactions() {
        try {
            console.log('📜 Getting transactions...');
            const headers = this.getAuthHeaders();
            console.log('📜 Headers:', headers);
            
            const response = await fetch(`${API_BASE_URL}/transactions`, {
                method: 'GET',
                headers: headers
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('❌ Get transactions error:', error);
            throw error;
        }
    }

    async withdraw(amount, currency = 'USD') {
        try {
            console.log('💸 Withdrawing:', amount, currency);
            const headers = this.getAuthHeaders();
            console.log('💸 Headers:', headers);
            
            const response = await fetch(`${API_BASE_URL}/transactions/withdraw`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ amount, currency })
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('❌ Withdraw error:', error);
            throw error;
        }
    }

    async deposit(amount, currency = 'USD') {
        try {
            console.log('💰 Depositing:', amount, currency);
            const headers = this.getAuthHeaders();
            console.log('💰 Headers:', headers);
            
            const response = await fetch(`${API_BASE_URL}/transactions/deposit`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ amount, currency })
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('❌ Deposit error:', error);
            throw error;
        }
    }

    async transfer(toAccount, amount) {
        try {
            console.log('🔄 Transferring:', amount, 'to', toAccount);
            const headers = this.getAuthHeaders();
            console.log('🔄 Headers:', headers);
            
            const response = await fetch(`${API_BASE_URL}/transactions/transfer`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ toAccount, amount })
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('❌ Transfer error:', error);
            throw error;
        }
    }

    // Logout
    logout() {
        localStorage.removeItem('authToken');
        console.log('🔓 APIService: Token removed from localStorage');
    }

    // Check if user is authenticated
    isAuthenticated() {
        return !!localStorage.getItem('authToken');
    }
}

// Create global instance
const apiService = new APIService();
