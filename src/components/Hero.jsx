import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto flex flex-wrap items-center px-6 lg:px-12">
        <div className="w-full lg:w-1/2 px-6 lg:px-12">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-white"
            >
              Raj Kodmalwar
            </motion.h1>

            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:text-5xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-lg font-light tracking-tighter text-center lg:text-left text-gray-300"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-6 lg:px-12 mt-8 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Raj Kodmalwar"
              className="w-2/3 lg:w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
