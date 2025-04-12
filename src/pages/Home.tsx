import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Building2, FlaskConical, Truck, ArrowRight, Users, Briefcase, Brain, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';
import GradientButton from '../components/GradientButton';
import TravelMemoryGame from '../components/TravelMemoryGame';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface ServiceCardProps {
  icon: React.FC<any>;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  image,
  link
}) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden card-hover"
      whileHover={{ y: -10 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <button
          onClick={() => navigate(link)}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center group"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const services = [
  {
    icon: Plane,
    title: "Travel & Tours",
    description: "Experience unforgettable journeys with our curated travel packages and expert guidance.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
    link: "/services/travel"
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Building excellence through innovative construction solutions and expert project management.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    link: "/services/construction"
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Driving innovation through cutting-edge research and development solutions.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    link: "/services/research"
  },
  {
    icon: Truck,
    title: "Transport",
    description: "Reliable and efficient transportation solutions for businesses across India.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80",
    link: "/services/transport"
  }
];

const experts = [
  {
    name: "Gaurav Sharma",
    role: "Director",
    image: "",
    description: "Leading strategic initiatives and business development."
  },
  {
    name: "Naresh Sharma",
    role: "Director",
    image: "",
    description: "Overseeing operations and project management."
  },
  {
    name: "Pooja Jayanth Poojary",
    role: "R&D Consultant",
    image: "",
    description: "Spearheading research and development initiatives."
  },
  {
    name: "Laksh",
    role: "IT Consultant",
    image: "",
    description: "Leading technological innovation and digital transformation."
  }
];

const associates = [
  {
    name: "Sarah Singh",
    role: "Travel Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    name: "Alex Kumar",
    role: "Construction Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Maria Rodriguez",
    role: "Research Analyst",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  },
  {
    name: "David Patil",
    role: "Transport Coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center animate-gradient"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <AnimatedText
              text="Welcome to DBK Consultancy"
              className="text-5xl font-bold"
            />
            <motion.p
              className="text-xl mb-8 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Your partner in travel, construction, and innovation
            </motion.p>
            <GradientButton
              onClick={() => navigate('/contact')}
              className="group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ParallaxSection className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedText
            text="Our Services"
            className="text-3xl font-bold text-center mb-12"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Memory Game Section */}
      <ParallaxSection className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <TravelMemoryGame />
        </div>
      </ParallaxSection>

      {/* Experts Section */}
      <ParallaxSection className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedText
            text="Meet Our Experts"
            className="text-3xl font-bold text-center mb-12"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">{expert.name}</h3>
                    <p className="text-sm opacity-90">{expert.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300">{expert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Associates Section */}
      <ParallaxSection className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedText
            text="Our Associates"
            className="text-3xl font-bold text-center mb-12"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {associates.map((associate, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={associate.image}
                    alt={associate.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{associate.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{associate.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Call to Action */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <AnimatedText
            text="Ready to Start Your Project?"
            className="text-3xl font-bold text-white mb-4"
          />
          <motion.p
            className="text-white text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how we can help you achieve your goals.
          </motion.p>
          <GradientButton
            onClick={() => navigate('/contact')}
            className="group"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </GradientButton>
        </div>
      </section>
    </div>
  );
};

export default Home;