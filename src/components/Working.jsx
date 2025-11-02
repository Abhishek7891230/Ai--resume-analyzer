/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/HowItWorks.css";

const steps = [
  {
    title: "Step 1: Upload Your Resume",
    desc: "Start by uploading your resume in PDF format. The system instantly processes the file without storing personal data, maintaining user's privacy. Whether you’re a fresher or a professional, the analyzer prepares your document for a detailed skill and structure assessment.",
  },
  {
    title: "Step 2: AI-Powered Analysis",
    desc: "Once your resume is uploaded, our system processes its text using a large language model (Llama 3.1). The AI identifies your key skills, strengths, and areas of improvement by analyzing the content’s clarity, structure, and relevance. It provides meaningful observations based on natural language understanding, helping you better present your professional profile.",
  },
  {
    title: "Step 3: Receive Detailed Insights",
    desc: "In just seconds, you’ll receive a comprehensive report that includes Overall score, strengths of your resume, formatting suggestions, and areas to improve. The insights are structured to help you refine your resume for both recruiters and automated screening tools.",
  },
];

export function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="hiw-section">
      <motion.h2
        initial={{ opacity: 0, x: 150 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hiw-title"
      >
        How It Works
      </motion.h2>

      <div className="hiw-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: index * 0.3 }}
            className={`hiw-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
