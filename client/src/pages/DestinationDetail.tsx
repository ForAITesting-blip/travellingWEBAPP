import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowLeft, Check } from 'lucide-react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchDestinationById, clearSelectedDestination } from '../store/destinationsSlice';

const DestinationDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { selectedDestination, loading } = useAppSelector((state) => state.destinations);

  useEffect(() => {
    if (id) {
      dispatch(fetchDestinationById(parseInt(id)));
    }
    return () => {
      dispatch(clearSelectedDestination());
    };
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!selectedDestination) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-600">Destination not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Link to="/destinations">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Destinations</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative h-96 mb-12">
        <div className="absolute inset-0">
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative h-full flex items-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-3 py-1 glass text-white text-sm font-medium rounded-full capitalize mb-4">
              {selectedDestination.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              {selectedDestination.name}
            </h1>
            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{selectedDestination.rating}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{selectedDestination.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Armenia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                About This Destination
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {selectedDestination.description}
              </p>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedDestination.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Card */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg sticky top-24"
            >
              <div className="mb-6">
                <span className="text-gray-600">From</span>
                <div className="text-4xl font-bold text-primary-600">
                  ${selectedDestination.price}
                </div>
                <span className="text-gray-500">per person</span>
              </div>

              <Link to="/booking" state={{ destinationId: selectedDestination.id }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Book Now
                </motion.button>
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">What's Included</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Professional guide</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Transportation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Entrance fees</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
