import { motion } from "framer-motion";
import { Truck, ShieldCheck, Star } from "lucide-react";

const Features = () => {
    const featureList = [
        {
            icon: <Truck size={32} className="text-blue-500" />,
            title: "Fast Delivery",
            description: "Get your favorite books delivered to your doorstep within 24 hours.",
            bg: "bg-blue-500/10",
        },
        {
            icon: <ShieldCheck size={32} className="text-green-500" />,
            title: "Secure Payment",
            description: "100% secure payment methods with end-to-end encryption.",
            bg: "bg-green-500/10",
        },
        {
            icon: <Star size={32} className="text-yellow-500" />,
            title: "Best Quality",
            description: "We ensure all our books are in pristine condition and original prints.",
            bg: "bg-yellow-500/10",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white leading-tight">
                        We Provide the Best Experience
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {featureList.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                            className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
