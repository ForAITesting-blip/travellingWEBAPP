import { motion } from 'framer-motion';
import { Clock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  index: number;
}

const TourCard = ({ tour, index }: TourCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link to={`/tours/${tour.id}`}>
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Duration Badge */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 glass px-3 py-2 rounded-full">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white font-semibold">{tour.duration}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
            {tour.title}
          </h3>
          
          <p className="text-gray-600 mb-4">
            {tour.description}
          </p>

          {/* Included Items */}
          <div className="mb-4 space-y-2">
            {tour.included.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <span className="text-sm text-gray-500">Price</span>
              <div className="text-2xl font-bold text-primary-600">
                ${tour.price}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              Book Tour
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TourCard;
