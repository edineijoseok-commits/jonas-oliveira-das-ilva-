
import React from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-24 border-t border-gray-100" id="faq">
      <div className="mx-auto max-w-3xl px-6 lg:px-20">
        <h2 className="mb-16 text-center text-3xl font-black text-text-main md:text-5xl">Perguntas Frequentes</h2>
        <div className="flex flex-col gap-5">
          {FAQ_ITEMS.map((item, idx) => (
            <details key={idx} className="group rounded-3xl bg-background-light p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-text-main">
                <h3 className="text-lg font-bold">{item.question}</h3>
                <ChevronDown className="transition-transform group-open:-rotate-180 text-primary" />
              </summary>
              <p className="mt-5 leading-relaxed text-text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
