import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./Pages/HomePage";
import Agendamentos from "./Pages/Agendamentos";

const fadeSlideVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};


// Wrapper para aplicar animação em cada página
function PageWrapper({ children, variants = fadeSlideVariants }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper variants={fadeSlideVariants}>
              <HomePage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/agendamentos" 
          element={
            <PageWrapper variants={fadeSlideVariants}>
              <Agendamentos />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
} 

export default App;