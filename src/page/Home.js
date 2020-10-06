import { motion } from "framer-motion";
import React from "react";

function Home() {
  return (
    <div className="flex h-screen">
      <motion.h1
        className="m-auto"
        // initial={{ opacity: 0, color: "#1902e8", y: -400 }}
        // animate={{ scale: 6, opacity: 1, color: "#ed0e0e", y: 0, rotate: 360 }}
        // transition={{ duration: 1 }}
      >
        Home Page
      </motion.h1>
    </div>
  );
}

export default Home;
