import Button from "./ui/Button";
import { useState } from "react";
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "GravSync hooks, auto-cleared vasks?",
    answer:
      "Dashvex shows drift logs, latency burst maps, and real-time kernel paths. Dashvex shows drift logs, latency burst maps, and real-time kernel paths.",
  },
  {
    question: "GravSync hooks, auto-cleared vasks?",
    answer:
      "Dashvex shows drift logs, latency burst maps, and real-time kernel paths. Dashvex shows drift logs, latency burst maps, and real-time kernel paths.",
  },
  {
    question: "GravSync hooks, auto-cleared vasks?",
    answer:
      "Dashvex shows drift logs, latency burst maps, and real-time kernel paths. Dashvex shows drift logs, latency burst maps, and real-time kernel paths.",
  },
  {
    question: "GravSync hooks, auto-cleared vasks?",
    answer:
      "Dashvex shows drift logs, latency burst maps, and real-time kernel paths. Dashvex shows drift logs, latency burst maps, and real-time kernel paths.",
  },
  {
    question: "GravSync hooks, auto-cleared vasks?",
    answer:
      "Dashvex shows drift logs, latency burst maps, and real-time kernel paths. Dashvex shows drift logs, latency burst maps, and real-time kernel paths.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full max-w-[1210px] mx-auto flex items-center justify-center flex-col py-[60px] md:py-[84px] px-5">
      <div className="w-full flex flex-col gap-1 items-center md:items-start">
        <h1 className="font-outfit font-bold text-[15px] md:text-[16px] text-[#3f6028] uppercase">
          LEARN MORE
        </h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2">
          <h1 className="w-full max-w-[658px] font-urbanist font-bold text-[28px] md:text-[40px] text-[#01081B] text-center md:text-left">
            Frequently Asked Questions
          </h1>
          <Button text="Contact Us" textColor="white" bgColor="#3F6028" />
        </div>
      </div>
      {/* FAQ */}
      <div className="w-full flex flex-col gap-[12px] mt-6 items-center">
        {faqData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="w-full max-w-[480px] md:max-w-[1200px] flex flex-col gap-[10px] cursor-pointer p-[16px] bg-white shadow-sm rounded-lg"
              style={{
                minHeight: "60px",
                height: openIndex === index ? "auto" : "60px",
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-outfit font-medium text-[#262626] mr-auto">
                  {item.question}
                </h3>
                <div className="arrow">
                  {openIndex === index ? (
                    <img
                      src="/icons/arrow-up.svg"
                      alt="arrow-up"
                      className="h-5 w-5"
                    />
                  ) : (
                    <img
                      src="/icons/arrow-down.svg"
                      alt="arrow-down"
                      className="h-5 w-5"
                    />
                  )}
                </div>
              </div>
              {openIndex === index && (
                <div className="">
                  <p className="text-muted-foreground font-outfit leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
