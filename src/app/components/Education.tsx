import { motion } from "motion/react";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header with Number */}
          <div className="relative mb-12">
            <span 
              style={{ fontFamily: 'var(--font-display)' }}
              className="absolute -left-4 -top-8 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
            >
              04
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="relative z-10 font-black text-4xl sm:text-5xl">
              Education
            </h2>
          </div>

          {/* Education Card */}
          <motion.div
            className="bg-[#FFFFFF] border-[2px] border-[#000000] p-6 sm:p-8"
            style={{ boxShadow: "4px 4px 0px #000000", borderRadius: 0 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.01,
              boxShadow: "6px 6px 0px #000000",
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            {/* Degree Info */}
            <div className="mb-6">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="font-black text-2xl sm:text-3xl mb-3">
                B.Tech in Computer Science (Cyber Security)
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)' }} className="text-base sm:text-lg mb-2">
                Guru Nanak Institute of Technology, Hyderabad
              </p>
              <div className="flex flex-wrap gap-3">
                <span 
                  style={{ fontFamily: 'var(--font-mono)' }}
                  className="inline-block bg-[#F0E040] border-[2px] border-[#000000] px-4 py-1 text-xs uppercase tracking-wider"
                >
                  2022 – 2026
                </span>
                <span 
                  style={{ fontFamily: 'var(--font-mono)' }}
                  className="inline-block bg-[#00B4D8] border-[2px] border-[#000000] px-4 py-1 text-xs uppercase tracking-wider"
                >
                  GPA: 8.33/10
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
}
