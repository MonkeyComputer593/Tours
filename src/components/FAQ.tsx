import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFaqs } from "../i18n/faqTranslations";

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = getFaqs(i18n.language);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-32 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F27D26] text-[10px] font-bold uppercase tracking-[0.4em]"
          >
            {t('faq.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-none uppercase mt-3 lg:mt-4"
          >
            {t('faq.title')} <span className="text-gray-300">{t('faq.titleGray')}</span>
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-2 lg:space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 lg:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs lg:text-sm font-bold text-gray-900 uppercase tracking-wide pr-3 lg:pr-4 leading-tight">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 lg:w-5 h-4 lg:h-5 text-[#F27D26] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 lg:w-5 h-4 lg:h-5 text-gray-400 shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-4 lg:px-5 pb-4 lg:pb-5 text-xs lg:text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
