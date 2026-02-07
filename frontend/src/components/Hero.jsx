import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BookIllustration from "./BookIllustration";

const Hero = () => {
    // Staggered animation variants for text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950 text-white px-6">
            {/* Elegant Background: Deep gradient with subtle noise/mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,50,250,0.15),transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(80,100,250,0.15),transparent_40%)]" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.03]" />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-12">
                {/* Left Content - Text */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 text-center lg:text-left"
                >
                    <motion.div variants={itemVariants} className="inline-block">
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-200 tracking-wide backdrop-blur-sm">
                            ✨ Discover the Magic of Reading
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
                    >
                        Stories that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                            Ignite Your Mind
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Immerse yourself in a world of knowledge and adventure.
                        Explore our curated collection of bestsellers, classics, and hidden gems.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4"
                    >
                        <Link
                            to="/books"
                            className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Reading <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all font-medium text-gray-300 hover:text-white">
                            View Collections
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Content - Abstract Book Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative flex justify-center items-center h-full min-h-[400px]"
                >
                    <BookIllustration />

                    {/* Decorative Elements (Minimal) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
