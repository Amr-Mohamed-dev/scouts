import { motion } from "framer-motion";
import BlogSection from "./BlogSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
    </motion.div>
  );
};

export default Home;
