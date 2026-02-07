import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="py-16 px-6 bg-white dark:bg-gray-950">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[2.5rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-2xl"
                >
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl opacity-50" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                            <Mail size={32} className="text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Subscribe to our Newsletter</h2>
                        <p className="text-purple-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Get the latest updates, new releases, and exclusive offers sent directly to your inbox. No spam, ever.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-8 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-lg"
                            />
                            <button className="px-10 py-5 bg-white text-purple-900 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 text-lg">
                                Subscribe <Send size={20} />
                            </button>
                        </form>

                        <p className="text-sm text-purple-300/60 mt-8">
                            By subscribing, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
