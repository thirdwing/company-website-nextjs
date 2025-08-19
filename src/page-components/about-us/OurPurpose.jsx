"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { ourPurposeContent, ourInvestorsContent } from "../../constants/AboutUs";
import Image from "next/image";

export function OurPurpose() {
    const { ref, isInView } = useScrollAnimation(0.3);

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
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="py-12 sm:py-16 md:py-20 lg:py-25 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* OUR PURPOSE Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className=" mb-12">
                        <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-medium uppercase tracking-[1.2px] text-black mb-4">
                            {ourPurposeContent.title}
                        </div>
                        <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2em] text-black">
                            {ourPurposeContent.heading}
                        </div>
                    </div>

                    <div className="">
                        {ourPurposeContent.sections.map((section, index) => (

                            <div key={section.id}>
                                <div className="border-t border-gray-200 "></div>
                                <div className=" flex px-8 py-8">
                                    <div className="text-[18px] w-[50%] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium text-black">
                                        {section.title}
                                    </div>
                                    <div className="text-[14px] w-[50%] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal leading-[1.3em] text-black">
                                        {section.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-gray-200"></div>

                    </div>
                </motion.div>

                {/* OUR INVESTORS Section */}
                <motion.div variants={itemVariants}>
                    <div className="mb-12">
                        <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-medium uppercase tracking-[1.2px] text-black mb-4">
                            {ourInvestorsContent.title}
                        </div>
                        <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2em] text-black">
                            {ourInvestorsContent.heading}
                        </div>
                    </div>

                    <div className="flex flex-wrap  items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                        {ourInvestorsContent.investors.map((investor) => (
                            <div key={investor.id} className="flex items-center ">
                                <img
                                    src={investor.logo}
                                    alt={investor.name}
                                    //   width={120}
                                    //   height={60}
                                    className=" object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
