import { motion } from "framer-motion";
import React from "react";
import { Route } from "react-router-dom";

function AnimatedRoute({ children, ...rest }) {
  return (
    <Route {...rest}>
      <motion.div initial={{ x: 200 }} animate={{ x: 0 }} exit={{ scale: 0 }}>
        {children}
      </motion.div>
    </Route>
  );
}

export default AnimatedRoute;
