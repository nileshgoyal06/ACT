import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services does ACT provide?",
    answer:
      "We offer custom software development, eCommerce solutions, and online store setups for businesses of all sizes.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade to a higher plan anytime from your dashboard or by contacting support.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, we provide different levels of support depending on your plan. Elite users get 24/7 premium support.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project duration depends on complexity. Basic setups take 1-2 weeks, while full custom builds can take 4-6 weeks.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-14 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Frequently Asked Questions ❓
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-sm font-medium text-blue-700 focus:outline-none"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
