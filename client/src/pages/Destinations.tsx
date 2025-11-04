import { useEffect } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from '../components/DestinationCard';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchDestinations, setFilter } from '../store/destinationsSlice';

const Destinations = () => {
  const dispatch = useAppDispatch();
  const { destinations, loading, filter } = useAppSelector((state) => state.destinations);

  const categories = ['all', 'city', 'nature', 'historical'];

  useEffect(() => {
    dispatch(fetchDestinations(filter));
  }, [dispatch, filter]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Explore Destinations
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover breathtaking locations across Armenia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(setFilter(category))}
                className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
            </div>
          ) : destinations.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No destinations found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
