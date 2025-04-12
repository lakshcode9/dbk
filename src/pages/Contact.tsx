import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';
import { contactFormSchema, type ContactFormData } from '../lib/validation';
import { FormInput, FormTextarea } from '../components/FormInput';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    tourDetails: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const selectedTour = localStorage.getItem('selectedTour');
    if (selectedTour) {
      const tour = JSON.parse(selectedTour);
      setFormData(prev => ({
        ...prev,
        subject: `Booking Inquiry: ${tour.title}`,
        message: `I'm interested in booking the following tour:\n\nTour: ${tour.title}\nDuration: ${tour.duration}\nPrice: ${tour.price}\n\nPlease provide more information about availability and booking process.`,
        tourDetails: JSON.stringify(tour),
      }));
      localStorage.removeItem('selectedTour');
    }
  }, []);

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof Error) {
        const zodError = JSON.parse(error.message);
        const newErrors: Partial<ContactFormData> = {};
        zodError.forEach((err: any) => {
          const field = err.path[0] as keyof ContactFormData;
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the form errors before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          tour_details: formData.tourDetails || null
        }]);

      if (error) throw error;

      toast.success('Message sent successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        tourDetails: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300">Get in touch with our team for any inquiries or support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email</h3>
                  <a 
                    href="mailto:info@dbkconsultancy.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    info@dbkconsultancy.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Phone</h3>
                  <a 
                    href="tel:+919816307925"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                   Gaurav Sharma[Director] +91 7650801787<br />
                   Naresh Sharma[Director] +91 9816307925
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Address</h3>
                  <address className="text-gray-600 dark:text-gray-300 not-italic">
                    DBK Consultancy Private Limted<br />
                    Mandi 175008<br />
                    Himachal Pradesh
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                type="text"
                id="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                disabled={isSubmitting}
                aria-required="true"
              />
              <FormInput
                type="email"
                id="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                disabled={isSubmitting}
                aria-required="true"
              />
              <FormInput
                type="text"
                id="subject"
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                required
                disabled={isSubmitting}
                aria-required="true"
              />
              <FormTextarea
                id="message"
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                rows={4}
                required
                disabled={isSubmitting}
                aria-required="true"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;