# AlgoStockGPT AI Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Set up Environment Variables**
   - Copy `.env.local` and add your API keys
   - At minimum, you need an OpenAI API key

3. **Run the Application**
   ```bash
   pnpm dev
   ```

## Required API Keys

### OpenAI API Key (Required)
- Get from: https://platform.openai.com/account/api-keys
- Add to `.env.local`: `OPENAI_API_KEY=your_key_here`

### Financial Datasets API Key (Optional)
- Get from: https://financialdatasets.ai/
- Add to `.env.local`: `FINANCIAL_DATASETS_API_KEY=your_key_here`

## Database Setup (Optional)

The app can run without a database for basic functionality. If you want full features:

1. **Option 1: Use Neon (Recommended)**
   - Sign up at https://neon.tech
   - Create a database
   - Copy connection string to `POSTGRES_URL` in `.env.local`

2. **Option 2: Use Supabase**
   - Sign up at https://supabase.com
   - Create a project
   - Copy connection string to `POSTGRES_URL` in `.env.local`

3. **Option 3: Local PostgreSQL**
   - Install PostgreSQL locally
   - Create database: `createdb algostockgpt`
   - Use: `postgresql://postgres:password@localhost:5432/algostockgpt`

## Troubleshooting

### Database Connection Errors
- The app will work without a database
- Database features (chat history, user accounts) will be disabled
- Just leave `POSTGRES_URL` commented out in `.env.local`

### API Key Issues
- Make sure your OpenAI API key is valid
- Check your API key has sufficient credits
- Restart the development server after adding keys

## Features

- ✅ Real-time stock price queries
- ✅ Financial news and analysis
- ✅ Company performance tracking
- ✅ Stock screening and filtering
- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Interactive sample queries
