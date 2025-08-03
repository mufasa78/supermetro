import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Zap,
  Shield,
  Radio,
  Satellite,
} from "lucide-react";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    priority: "normal",
  });

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && !element.classList.contains("animate-slide-up")) {
          element.classList.add("animate-slide-up");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Smart form submitted:", formData);
  };

  const contactChannels = [
    {
      icon: Phone,
      title: "Customer Hotline",
      details: ["+254 722 730 430", "+254 721 202 313", "+254 723 987 478"],
      subtitle: "Professional support during business hours",
      color: "from-sky-500 to-cyan-400",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["info@supermetro.co.ke"],
      subtitle: "Get responses within 24 hours",
      color: "from-emerald-500 to-teal-400",
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Njengi House, 7th Floor", "Nairobi, Kenya"],
      subtitle: "Visit our main office",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 4PM"],
      subtitle: "We are here to help",
      color: "from-amber-500 to-orange-400",
    },
  ];

  const offices = [
    {
      name: "Head Office",
      address: "Njengi House, 7th Floor, Nairobi",
      phone: "+254 722 730 430",
      hours: "Monday - Friday: 8AM - 5PM",
      status: "Open",
      description: "Main Office",
    },
  ];

  const supportStats = [
    {
      icon: Zap,
      number: "2 hrs",
      label: "Response Time",
      color: "from-sky-500 to-cyan-400",
    },
    {
      icon: Shield,
      number: "95%",
      label: "Resolution Rate",
      color: "from-emerald-500 to-teal-400",
    },
    {
      icon: Radio,
      number: "8-6PM",
      label: "Business Hours",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Satellite,
      number: "12+",
      label: "Routes Served",
      color: "from-amber-500 to-orange-400",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "from-red-500 to-pink-500";
      case "high":
        return "from-amber-500 to-orange-500";
      case "normal":
        return "from-sky-500 to-emerald-500";
      case "low":
        return "from-slate-500 to-slate-400";
      default:
        return "from-sky-500 to-emerald-500";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-city city-silhouette"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Radio className="h-4 w-4 text-emerald-400 animate-pulse" />
                <span className="text-sky-200 text-sm font-body">
                  Customer Support
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-display">
              Contact
              <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Super Metro
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-body">
              Get in touch with Super Metro for inquiries, support, and
              information about our bus transportation services
            </p>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {supportStats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover-scale"
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  ></div>
                  <div className="relative w-16 h-16 mx-auto glass rounded-2xl border border-slate-600/30 flex items-center justify-center group-hover:border-sky-500/50 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Contact{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Information
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body">
              Multiple ways to reach our customer service team for assistance
              and support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {contactChannels.map((channel, index) => (
              <div
                key={index}
                className="text-center group hover-scale"
                data-animate
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${channel.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  ></div>
                  <div className="relative w-20 h-20 mx-auto glass rounded-2xl border border-slate-600/30 flex items-center justify-center group-hover:border-sky-500/50 transition-all duration-300">
                    <channel.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-display">
                  {channel.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {channel.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="text-sky-400 font-medium font-body"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-slate-400 text-sm font-body">
                  {channel.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div
              className="glass rounded-3xl p-8 border border-slate-600/30"
              data-animate
            >
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-display">
                    Send us a Message
                  </h2>
                </div>
                <p className="text-slate-400 font-body">
                  Contact our customer service team for assistance with routes,
                  schedules, and inquiries.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2 font-body"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-body"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-300 mb-2 font-body"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-body"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2 font-body"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-body"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-2 font-body"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-body"
                    >
                      <option value="">Select subject</option>
                      <option value="route-query">Route Information</option>
                      <option value="schedule-info">
                        Schedule Information
                      </option>
                      <option value="lost-found">Lost and Found</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="priority"
                      className="block text-sm font-medium text-slate-300 mb-2 font-body"
                    >
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-body"
                    >
                      <option value="low">Low Priority</option>
                      <option value="normal">Standard</option>
                      <option value="high">High Priority</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2 font-body"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all resize-vertical font-body"
                    placeholder="Please describe your inquiry or feedback about our bus services..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 px-6 bg-gradient-to-r ${getPriorityColor(
                    formData.priority
                  )} rounded-lg font-semibold text-white transition-all duration-300 hover-scale electric-glow font-body`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </div>
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-6" data-animate>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 font-display">
                  Office Location
                </h2>
                <p className="text-slate-400 font-body">
                  Visit our main office for in-person assistance and support.
                </p>
              </div>

              {offices.map((office, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 hover-scale"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white font-display">
                      {office.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-full text-emerald-400 text-xs font-body">
                        {office.status}
                      </div>
                      <div className="px-2 py-1 bg-gradient-to-r from-sky-500/20 to-sky-400/20 rounded-full text-sky-400 text-xs font-body">
                        {office.description}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-sky-400 mr-3 mt-0.5" />
                      <span className="text-slate-300 font-body">
                        {office.address}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-slate-300 font-body">
                        {office.phone}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-purple-400 mr-3" />
                      <span className="text-slate-300 font-body">
                        {office.hours}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="glass rounded-2xl p-6 border border-red-500/30 bg-gradient-to-r from-red-900/10 to-orange-900/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-300 font-display">
                      Emergency Contact
                    </h3>
                    <p className="text-red-200 text-sm font-body">
                      For urgent assistance or emergencies
                    </p>
                  </div>
                </div>
                <p className="text-red-200 mb-4 font-body">
                  For immediate assistance with bus emergencies:
                </p>
                <p className="text-2xl font-bold text-red-300 font-mono">
                  +254 722 730 430
                </p>
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 text-red-400 mr-2" />
                  <span className="text-red-300 text-sm font-body">
                    Available during service hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl font-bold text-white mb-4 font-display">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-slate-400 font-body">
              Common questions about our bus services and operations
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are your bus service hours?",
                answer:
                  "Our buses operate daily from 6:00 AM to 10:00 PM, serving routes across Nairobi and surrounding areas including Thika, Ruiru, Kasarani, Karen, Westlands, and Eastleigh.",
              },
              {
                question: "How can I find route information and schedules?",
                answer:
                  "You can visit our Routes and Schedules pages on this website, or contact our customer service team for specific route information and timing details.",
              },
              {
                question: "What are your fare rates?",
                answer:
                  "Our fares range from KSh 50 to KSh 120 depending on the route distance. We offer competitive pricing for reliable public transportation across our network.",
              },
              {
                question: "How can I report lost items or provide feedback?",
                answer:
                  "Contact our customer service team through the phone numbers provided, send us an email, or visit our office at Njengi House. We're here to help with lost items and value your feedback.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300"
                data-animate
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center font-display">
                  <div className="w-6 h-6 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <MessageSquare className="h-3 w-3 text-white" />
                  </div>
                  {faq.question}
                </h3>
                <p className="text-slate-300 ml-9 font-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
