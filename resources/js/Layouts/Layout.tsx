import React, { PropsWithChildren, Children } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
    // Container variant controls staggering
    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
        // 0.2s between children
    };

    // Each child fades and slides up
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="relative">
            {/* CONTENT with stagger */}
            <motion.div
                className="relative z-[90]"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {Children.map(children, (child) => (
                    <motion.div variants={childVariants}>{child}</motion.div>
                ))}
            </motion.div>

            {/* NAV appears after content */}
            <motion.div
                className="absolute top-0 left-0 w-full z-[100] pt-3"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.6,
                }}
            >
                <Nav />
            </motion.div>

            {/* FOOTER */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Footer />
            </motion.div>
        </div>
    );
}
