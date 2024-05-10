'use client'
import { motion } from "framer-motion";

const FadeInAll = ({
  children,
  delayIncrement = 0,
}: Readonly<{
  children: React.ReactNode;
  delayIncrement?: number;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayIncrement, ease: [0.4, 0, 0.2, 1]}}
      viewport={{ margin: "100% 0px -100px 0px" }}>
      {children}
    </motion.div>
  );
};

export default FadeInAll;
