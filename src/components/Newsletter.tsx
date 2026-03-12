import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const EMAIL_SERVICE_ID = "etsaatoursec@gmail.com";
const EMAIL_TEMPLATE_NEWSLETTER = "template_m706q9b";
const EMAIL_PUBLIC_KEY = "KtDHIKy3YrYFuVbb-";

export default function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSending(true);

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID, 
        EMAIL_TEMPLATE_NEWSLETTER, 
        { email },
        EMAIL_PUBLIC_KEY
      );
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-12 lg:py-32 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] block"
          >
            {t('newsletter.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-none uppercase mt-3 lg:mt-4 mb-8 lg:mb-12"
          >
            {t('newsletter.title')} <br /> <span className="text-gray-300">{t('newsletter.titleGray')}</span>
          </motion.h2>
          
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-green-500"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">{t('common.subscribed')}</span>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4"
              onSubmit={handleSubmit}
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')} 
                required
                className="flex-1 bg-gray-50 border-none px-6 lg:px-8 py-3 lg:py-5 text-[10px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#F27D26] outline-none"
              />
              <button 
                type="submit"
                disabled={isSending}
                className="bg-gray-900 text-white px-8 lg:px-12 py-3 lg:py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#F27D26] transition-colors disabled:opacity-50"
              >
                {isSending ? t('common.subscribing') : t('common.subscribe')}
              </button>
            </motion.form>
          )}
          <p className="mt-6 lg:mt-8 text-[8px] lg:text-[9px] text-gray-400 uppercase tracking-widest font-medium">
            {t('newsletter.privacy')}
          </p>
        </div>
      </div>
    </section>
  );
}
