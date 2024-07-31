import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Test = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold as needed
    triggerOnce: true, // Trigger animation only once
  });

  return (
    <div className="p-5 w-full">
      <p>Scroll down to see the animation...</p>
      <div className="h-[1500px]"></div>

      <div ref={ref} className="flex justify-center">
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="fixed bottom-10 right-10 p-5 bg-black bg-opacity-80 text-white rounded-lg z-50"
          >
            <p>This is a popup with animation!</p>
          </motion.div>
        )}
      </div>

      <div className="grid auto-rows-fr grid-cols-5 gap-2 w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.div
            key={index}
            className="p-5 bg-gray-200 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 2 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              bounce: 0.3,
            }}
          >
            <p className="te">Card {index + 1}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Test;
