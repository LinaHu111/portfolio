// Portfolio.jsx — 作品集画廊板块（网格 + 分类筛选 + 模态框）
import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { portfolioItems, portfolioCategories } from "../data/resumeData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      {/* 标题 */}
      <SectionTitle label="02" title="作品集" />

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {portfolioCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              activeCategory === cat.key
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-white/10 text-neutral-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 网格画廊 */}
      <Motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <Motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-neutral-900"
              onClick={() => setSelectedItem(item)}
            >
              {item.mediaType === "video" ? (
                <video
                  src={item.videoSrc}
                  poster={item.thumbnail}
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.thumbnail}
                  alt="作品"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {/* 悬浮遮罩 */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* 视频标识 */}
              {item.category === "video" && (
                <div className="absolute top-3 right-3 bg-black/60 rounded-full p-1.5">
                  <Play size={14} className="text-white" />
                </div>
              )}
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>

      {/* 模态框 */}
      <AnimatePresence>
        {selectedItem && (
          <Motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <Motion.div
              className="relative bg-neutral-900 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.mediaType === "video" ? (
                <video
                  src={selectedItem.videoSrc}
                  poster={selectedItem.thumbnail}
                  controls
                  playsInline
                  className="w-full max-h-[80vh] bg-black"
                />
              ) : (
                <img
                  src={selectedItem.fullImage}
                  alt="作品"
                  className="w-full object-cover max-h-[80vh]"
                />
              )}
              <button
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2 text-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X size={18} />
              </button>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// 通用板块标题组件
export function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <span className="text-neutral-600 text-sm tracking-widest font-mono">{label}</span>
      <h2 className="text-4xl md:text-5xl font-thin text-white mt-1 tracking-wide">{title}</h2>
      {subtitle ? <p className="text-neutral-500 text-sm mt-2 tracking-widest uppercase">{subtitle}</p> : null}
      <div className="w-12 h-px bg-purple-500 mx-auto mt-4" />
    </div>
  );
}
