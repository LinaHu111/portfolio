import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { workExperienceItems } from "../data/resumeData";
import { SectionTitle } from "./Portfolio";

const boxClass =
  "w-full rounded-2xl border border-white/10 bg-gradient-to-r from-pink-400/20 to-sky-400/20 text-white";

export default function Experience() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionTitle label="04" title="工作经历" />

      <div className="space-y-4">
        {workExperienceItems.map((item, index) => {
          const isOpen = Boolean(openItems[item.id]);

          return (
            <Motion.div
              key={item.id}
              className={boxClass}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base"
              >
                <span>{item.summary}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 py-4 space-y-3">
                      {item.details.map((detail) => (
                        <p key={detail} className="text-[15px] leading-7 text-[#fffff0]">
                          · {detail}
                        </p>
                      ))}
                    </div>
                  </Motion.div>
                ) : null}
              </AnimatePresence>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
}
