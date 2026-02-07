import { motion } from "framer-motion";

const BookIllustration = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-w-[500px] drop-shadow-2xl"
            >
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="20" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* Floating Book 1 (Bottom) */}
                <motion.g
                    animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Cover */}
                    <rect x="100" y="320" width="300" height="60" rx="4" fill="url(#grad2)" />
                    {/* Pages */}
                    <path d="M105 325 H 395 V 375 H 105 Z" fill="#f8fafc" />
                    <path d="M105 325 Q 100 350 105 375" fill="#e2e8f0" />
                    {/* Spine */}
                    <rect x="90" y="320" width="20" height="60" rx="2" fill="#0baeec" />
                </motion.g>

                {/* Floating Book 2 (Middle, slightly rotated) */}
                <motion.g
                    animate={{ y: [0, -20, 0], rotate: [0, -3, 0], x: [0, 5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    {/* Cover */}
                    <rect x="130" y="240" width="280" height="55" rx="4" transform="rotate(-5 270 267)" fill="url(#grad1)" />
                    {/* Pages */}
                    <path d="M135 245 H 405 V 290 H 135 Z" fill="#f8fafc" transform="rotate(-5 270 267)" />
                    {/* Spine */}
                    <rect x="120" y="240" width="20" height="55" rx="2" fill="#7c3aed" transform="rotate(-5 270 267)" />
                </motion.g>

                {/* Floating Book 3 (Top) */}
                <motion.g
                    animate={{ y: [0, -25, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    {/* Cover */}
                    <rect x="150" y="160" width="240" height="50" rx="4" transform="rotate(5 270 185)" fill="url(#grad3)" />
                    {/* Pages */}
                    <path d="M155 165 H 385 V 205 H 155 Z" fill="#f8fafc" transform="rotate(5 270 185)" />
                    {/* Spine */}
                    <rect x="140" y="160" width="20" height="50" rx="2" fill="#db2777" transform="rotate(5 270 185)" />

                    {/* Symbol on top book */}
                    <circle cx="270" cy="185" r="15" fill="white" fillOpacity="0.3" transform="rotate(5 270 185)" />
                </motion.g>

                {/* Floating Particles/Stars */}
                <motion.circle cx="100" cy="100" r="4" fill="#fbbf24" animate={{ opacity: [0, 1, 0], y: [-10, 0, -10] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.circle cx="400" cy="150" r="3" fill="#60a5fa" animate={{ opacity: [0, 1, 0], y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
                <motion.circle cx="450" cy="400" r="5" fill="#f472b6" animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} />
                <motion.circle cx="50" cy="300" r="3" fill="#fbbf24" animate={{ opacity: [0, 1, 0], x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} />

            </svg>
        </div>
    );
};

export default BookIllustration;
