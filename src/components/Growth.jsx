import { motion as Motion } from "framer-motion";
import { growthData } from "../data/resumeData";
import { SectionTitle } from "./Portfolio";

const boxClass =
  "w-full rounded-2xl border border-white/10 bg-gradient-to-r from-pink-400/20 to-sky-400/20 px-6 py-5";

export default function Growth() {
  return (
    <section id="growth" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionTitle label="05" title="成长与展望" />

      <p className="text-center text-sm text-neutral-300 mb-8">{growthData.note}</p>

      <div className="space-y-4">
        {growthData.items.map((item, index) => (
          <Motion.div
            key={item.id}
            className={boxClass}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3 className="text-white text-base mb-3">{item.title}</h3>
            <div className="space-y-2">
              {item.content.map((line) => (
                <p key={line} className="text-white leading-7">
                  {line}
                </p>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
