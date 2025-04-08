import { motion } from 'framer-motion';
import { Check } from 'lucide-react'; 

const ReadMore = () => {
  // You can replace this with your actual image path or import
  const productImage = "/src/assets/cartoon-concept-recycle 1.jpg"; // example image URL

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <span className="text-green-600 font-medium">Organic</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Eco Produce</h2>
            <p className="text-gray-600 mb-8">
              Our produce is grown without synthetic pesticides or fertilizers, ensuring you get the purest, most nutritious food possible. We partner with local farmers who share our commitment to sustainable practices.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-green-600">
                  <Check size={18} />
                </div>
                <p className="text-gray-700">All products meet quality standards</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-green-600">
                  <Check size={18} />
                </div>
                <p className="text-gray-700">Responsible farming & sustainability</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-green-600">
                  <Check size={18} />
                </div>
                <p className="text-gray-700">Creating health through profits & growth</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Coming Soon...
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.img 
                src={productImage} 
                alt="Eco-friendly packaging with organic produce" 
                className="rounded-lg shadow-xl w-full object-cover"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-md shadow-lg"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-green-700 font-bold text-lg">100%</div>
                <div className="text-sm text-gray-600">Organic</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
