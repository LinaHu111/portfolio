// Hero.jsx — 基本信息板块
import { motion as Motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { heroData } from "../data/resumeData";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <Motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 姓名 */}
        <Motion.h1
          className="text-6xl md:text-8xl font-thin tracking-widest text-white mb-4"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {heroData.name}
        </Motion.h1>

        {/* 头衔 */}
        {heroData.titles.length > 0 && (
          <Motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {heroData.titles.map((title) => (
              <span
                key={title}
                className="px-4 py-1.5 border border-purple-500/40 text-purple-300 text-sm tracking-wider rounded-full"
              >
                {title}
              </span>
            ))}
          </Motion.div>
        )}

        {/* 简介 */}
        <Motion.p
          className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {heroData.bio}
        </Motion.p>

        <Motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-white text-base mb-4 tracking-wide">技能</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {heroData.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-400/20 to-sky-400/20 border border-white/10 text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Motion.div>

        {/* 联系方式 */}
        <Motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href={`mailto:${heroData.email}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-neutral-300 transition-all"
          >
            <Mail size={15} /> 邮箱：{heroData.email}
          </a>
        </Motion.div>
      </Motion.div>

      {/* 向下滚动提示 */}
      <Motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </Motion.div>
    </section>
  );
}
