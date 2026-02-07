import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedBooks from "../components/FeaturedBooks";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
            <Hero />
            <Features />
            <FeaturedBooks />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
