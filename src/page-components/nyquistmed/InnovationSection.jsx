"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { nyquistMedData } from '../../constants/nyquistmed';

export function InnovationSection() {
    const { ref, isInView } = useScrollAnimation(0.2);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-25 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div variants={itemVariants} className="text-center">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight flex flex-col items-center justify-center">
                        All the Data, Insights, and Tools Needed to{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Accelerate Your Innovation
                        </span>
                    </h2>
                </motion.div>
            </motion.div>
        </section>
    );
}
