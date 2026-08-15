import { motion } from "framer-motion";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.94, y: 20, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
  },
  fadeIn: {
    hidden: { opacity: 0, filter: "blur(6px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.55,
  className = "",
  once = true,
  amount = 0.15,
  as = "div",
  ...props
}) {
  const Component = motion[as] || motion.div;
  const selectedVariant = variants[variant] || variants.fadeUp;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
