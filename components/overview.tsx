import { motion } from 'framer-motion';
import Link from 'next/link';

export const Overview = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 size-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 size-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 size-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <motion.div
        key="overview"
        className="relative z-10 flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ delay: 0.5 }}
      >
        {/* Centered Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center space-y-8 mb-12"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="size-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-pulse">
              <span className="text-white font-bold text-2xl">AI</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
            AlgoStockGPT AI
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent max-w-3xl mx-auto leading-relaxed">
              Your AI-Powered Financial Intelligence Platform
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Advanced stock analysis • Real-time market insights • Algorithmic trading strategies
            </p>
          </div>
        </motion.div>

        {/* Sample Query Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-4 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer group">
            <div className="size-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg shadow-cyan-500/50 group-hover:animate-pulse">
              <span className="text-white font-bold text-sm">💻</span>
            </div>
            <p className="text-cyan-300 font-medium text-center text-sm group-hover:text-cyan-200 transition-colors">
              &ldquo;What&rsquo;s Microsoft&rsquo;s stock price right now?&rdquo;
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-purple-500/30 rounded-xl p-4 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer group">
            <div className="size-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg shadow-purple-500/50 group-hover:animate-bounce">
              <span className="text-white font-bold text-sm">📰</span>
            </div>
            <p className="text-purple-300 font-medium text-center text-sm group-hover:text-purple-200 transition-colors">
              &ldquo;Give me the latest headlines about Google.&rdquo;
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-lg border border-pink-500/30 rounded-xl p-4 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 cursor-pointer group">
            <div className="size-10 bg-gradient-to-r from-pink-400 to-orange-500 rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg shadow-pink-500/50 group-hover:animate-spin">
              <span className="text-white font-bold text-sm">📊</span>
            </div>
            <p className="text-pink-300 font-medium text-center text-sm group-hover:text-pink-200 transition-colors">
              &ldquo;How much has Amazon gained or lost in the past 6 months?&rdquo;
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg border border-green-500/30 rounded-xl p-4 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 cursor-pointer group">
            <div className="size-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg shadow-green-500/50 group-hover:animate-pulse">
              <span className="text-white font-bold text-sm">🔍</span>
            </div>
            <p className="text-green-300 font-medium text-center text-sm group-hover:text-green-200 transition-colors">
              &ldquo;List 5 companies with a P/E ratio below 15 and dividend yield above 3%.&rdquo;
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
