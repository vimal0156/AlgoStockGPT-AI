'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChatRequestOptions, CreateMessage, Message } from 'ai';
import { memo, useState } from 'react';
import { getLocalOpenAIApiKey } from '@/lib/db/api-keys';
import { ApiKeysModal } from './api-keys-modal';

interface SuggestedActionsProps {
  chatId: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const [showApiKeysModal, setShowApiKeysModal] = useState(false);
  
  const suggestedActions = [
    {
      title: '💻 What\'s Microsoft\'s',
      label: 'stock price right now?',
      mobileTitle: '💻 Microsoft price',
      mobileLabel: 'current stock value',
      action: 'What\'s Microsoft\'s stock price right now?',
    },
    {
      title: '📰 Latest Google headlines',
      label: 'and market updates?',
      mobileTitle: '📰 Google news',
      mobileLabel: 'recent headlines',
      action: 'Give me the latest headlines about Google.',
    },
    {
      title: '📊 Amazon\'s performance',
      label: 'over the past 6 months?',
      mobileTitle: '📊 Amazon gains/losses',
      mobileLabel: 'past 6 months',
      action: 'How much has Amazon gained or lost in the past 6 months?',
    },
    {
      title: '🔍 Find dividend stocks',
      label: 'with low P/E ratios?',
      mobileTitle: '🔍 Dividend stocks',
      mobileLabel: 'P/E <15, yield >3%',
      action: 'List 5 companies with a P/E ratio below 15 and dividend yield above 3%.',
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 w-full">
        {suggestedActions.map((suggestedAction, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.05 * index }}
            key={`suggested-action-${suggestedAction.title}-${index}`}
            className="block"
          >
            <Button
              variant="ghost"
              type="button"
              onClick={() => {
                try {
                  //  Check for API key
                  const localApiKey = getLocalOpenAIApiKey();
                  if (!localApiKey) {
                    setShowApiKeysModal(true);
                    return;
                  }
                  
                  window.history.replaceState({}, '', `/chat/${chatId}`);
                  append({
                    role: 'user',
                    content: suggestedAction.action,
                  });
                } catch (error) {
                  console.error('Error checking message count:', error);
                }
              }}
              className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full max-w-[calc(100vw-2rem)] h-auto justify-start items-start break-words hover:bg-accent/50 hover:border-accent hover:scale-[1.02] transition-all duration-200 group"
            >
              <span className="font-medium break-words">
                <span className="hidden sm:inline">{suggestedAction.title}</span>
                <span className="sm:hidden">{suggestedAction.mobileTitle}</span>
              </span>
              <span className="text-muted-foreground break-words">
                <span className="hidden sm:inline">{suggestedAction.label}</span>
                <span className="sm:hidden">{suggestedAction.mobileLabel}</span>
              </span>
            </Button>
          </motion.div>
        ))}
      </div>

      <ApiKeysModal 
        open={showApiKeysModal} 
        onOpenChange={setShowApiKeysModal}
        title="Message Limit Reached"
        description="You have reached your free message limit. Please add your OpenAI API key to continue using the chat."
      />
    </>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
