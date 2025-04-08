import { useState, ChangeEvent, FormEvent } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    website: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log('Submitted:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', website: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 mt-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto text-center">
            We're here to help. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </div>

      {/* Contact Section with Map and Form */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have a question or idea? We'd love to hear from you. Our team is always ready to assist.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <span className="text-green-600 p-2 bg-green-50 rounded-full group-hover:bg-green-100 transition-all">
                  📍
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    NH-37, opp. Tirupati Balaji Temple, Betkuchi, Guwahati, Assam 781035
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <span className="text-green-600 p-2 bg-green-50 rounded-full group-hover:bg-green-100 transition-all">
                  📞
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Phone Number</h3>
                  <p className="text-gray-600">+91 9907284408</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <span className="text-green-600 p-2 bg-green-50 rounded-full group-hover:bg-green-100 transition-all">
                  ✉️
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email Address</h3>
                  <p className="text-gray-600">abhijeetroy20@outlook.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-80 mt-8 overflow-hidden rounded-xl shadow-lg">
              <iframe
                title="Location Map"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD56iwLtBW_QHh9ak2nWrBx7yCxzZOaF_g&q=NH-37, opp. Tirupati Balaji Temple, Betkuchi, Guwahati, Assam 781035`}
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form Section */}
          <div>
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>

              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-green-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-green-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-green-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Your website (optional)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-green-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-green-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-white font-medium text-lg transition-all flex justify-center items-center ${
                    isSubmitting
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
