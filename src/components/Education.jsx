import { motion as Motion } from "framer-motion";
import { educationItems } from "../data/resumeData";
import { SectionTitle } from "./Portfolio";

const boxClass =
  "w-full rounded-2xl border border-white/10 bg-gradient-to-r from-pink-400/20 to-sky-400/20 px-6 py-5 text-white text-base";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionTitle label="03" title="教育经历" />

      <div className="space-y-4">
        {educationItems.map((item, index) => (
          <Motion.div
            key={item.id}
            className={boxClass}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            {item.label}
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
