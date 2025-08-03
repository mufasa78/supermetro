import { 
  Route, 
  Clock, 
  Shield, 
  Users, 
  MapPin,
  ArrowRight,
  Zap,
  Star,
  Award,
  Globe,
  Play
} from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  

  const heroImages = [
    '/fleet-1.JPG',
    '/fleet-2.JPG',
    '/fleet-3.JPG',
    '/fleet-4.JPG',
    '/matatus.JPG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !element.classList.contains('animate-slide-up')) {
          element.classList.add('animate-slide-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroImages.length]);

  const routes = [
    { from: 'Nairobi CBD', to: 'Thika', duration: '90 mins', fare: 'KSh 120', status: 'Operating' },
    { from: 'Nairobi CBD', to: 'Ruiru', duration: '60 mins', fare: 'KSh 80', status: 'Operating' },
    { from: 'Westlands', to: 'Kasarani', duration: '45 mins', fare: 'KSh 60', status: 'Operating' },
    { from: 'Karen', to: 'CBD', duration: '40 mins', fare: 'KSh 70', status: 'Operating' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe',
      description: 'Professional drivers and regular maintenance ensure secure passenger journeys.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Reliable',
      description: 'Consistent schedules and regular service for dependable daily transportation.',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      icon: Star,
      title: 'Affordable',
      description: 'Competitive pricing making public transportation accessible to everyone.',
      gradient: 'from-amber-500 to-orange-400'
    },
    {
      icon: Globe,
      title: 'Connected',
      description: 'Extensive route network connecting Nairobi and surrounding areas.',
      gradient: 'from-purple-500 to-pink-400'
    }
  ];

  const stats = [
    { number: '100+', label: 'Fleet Vehicles', icon: Route },
    { number: '15K+', label: 'Daily Passengers', icon: Users },
    { number: '12+', label: 'Active Routes', icon: MapPin },
    { number: '95%', label: 'Service Reliability', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Transport ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-city city-silhouette"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Zap className="h-4 w-4 text-emerald-400" />
                <span className="text-sky-200 text-sm font-body">Modern Transportation</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-display">
              Reliable
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-float">
                Public Transport
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-body px-4">
              Reliable and affordable public transportation connecting Nairobi 
              and surrounding areas with modern fleet and professional service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-semibold text-white font-body hover-scale electric-glow">
                <div className="flex items-center space-x-2">
                  <span>Explore Routes</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group flex items-center space-x-3 glass px-8 py-4 rounded-xl border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 font-body">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 text-white ml-1" />
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">Watch Demo</div>
                  <div className="text-slate-400 text-sm">2 min showcase</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sky-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-red-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Icon-Based Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-animate>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-emerald-400" />
                <span className="text-sky-200 text-sm font-body">Why Choose Us</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Super Metro</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body">
              Professional service meets reliability in Nairobi's trusted public transportation network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group text-center hover-scale" 
                data-animate
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative w-20 h-20 mx-auto glass rounded-2xl border border-slate-600/30 flex items-center justify-center group-hover:border-sky-500/50 transition-all duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed font-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group" 
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <stat.icon className="h-8 w-8 text-sky-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-body">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-animate>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Popular <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Routes</span>
            </h2>
            <p className="text-xl text-slate-400 font-body">
              Connecting Nairobi and surrounding areas with reliable public transport
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {routes.map((route, index) => (
              <div 
                key={index} 
                className="group glass rounded-2xl p-6 border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 hover-scale"
                data-animate
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-sm font-body">{route.status}</span>
                  </div>
                  <span className="text-2xl font-bold text-sky-400 font-display">{route.fare}</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white font-body">{route.from}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                    <span className="font-semibold text-white font-body">{route.to}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-slate-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {route.duration}
                  </span>
                  <div className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-full">
                    <span className="text-sky-300 text-xs font-medium font-body">Daily Service</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16" data-animate>
            <button className="group px-8 py-4 glass rounded-xl border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 font-body hover-scale">
              <div className="flex items-center space-x-2 text-white">
                <span>View All Routes</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-animate>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Leadership & <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body">
              Meet our leadership team and see the awards that recognize our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* CEO Section */}
            <div className="text-center lg:text-left" data-animate>
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative glass rounded-3xl border border-slate-600/30 overflow-hidden">
                  <img 
                    src="/nelson-mwangi-ceo.JPG" 
                    alt="Nelson Mwangi - CEO and Chairman"
                    className="w-80 h-96 object-cover mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">Nelson Mwangi</h3>
                    <p className="text-sky-400 font-body">CEO & Chairman</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed font-body">
                  Under Nelson Mwangi's visionary leadership, Super Metro has grown to become one of Nairobi's most trusted public transportation providers, serving thousands of passengers daily with reliability and professionalism.
                </p>
                <p className="text-slate-400 font-body">
                  "Our commitment is to provide safe, reliable, and affordable transportation that connects communities and empowers people to reach their destinations with confidence."
                </p>
              </div>
            </div>
            
            {/* Awards Section */}
            <div className="space-y-8" data-animate>
              <div className="glass rounded-2xl p-8 border border-slate-600/30">
                <div className="flex items-center space-x-4 mb-6">
                  <Award className="h-8 w-8 text-amber-400" />
                  <h3 className="text-2xl font-bold text-white font-display">Awards & Recognition</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/awards.JPG" 
                    alt="Super Metro Awards"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <img 
                    src="/awards2.JPG" 
                    alt="Transportation Excellence Award"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <img 
                    src="/certification.JPG" 
                    alt="Safety Recognition"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <img 
                    src="/logo.JPG" 
                    alt="Company Logo"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-body">Excellence in Public Transport</span>
                    <span className="text-emerald-400 text-sm font-body">2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-body">Safety & Reliability Award</span>
                    <span className="text-emerald-400 text-sm font-body">2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-body">Community Service Recognition</span>
                    <span className="text-emerald-400 text-sm font-body">2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electric Fleet Showcase */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 via-slate-900 to-sky-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-animate>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Zap className="h-4 w-4 text-emerald-400" />
                <span className="text-sky-200 text-sm font-body">Modern Fleet</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Electric <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Bus Fleet</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body">
              Leading the transition to sustainable public transportation with our modern electric bus fleet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group glass rounded-2xl overflow-hidden border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 hover-scale" data-animate>
              <img 
                src="/e-bus.JPG" 
                alt="Electric Bus Fleet"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-display">Electric Bus Fleet</h3>
                <p className="text-slate-400 font-body">Zero-emission electric buses for sustainable transport</p>
              </div>
            </div>
            
            <div className="group glass rounded-2xl overflow-hidden border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 hover-scale" data-animate>
              <img 
                src="/ebus3.JPG" 
                alt="Electric Bus Operations"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-display">Modern Electric Operations</h3>
                <p className="text-slate-400 font-body">Advanced electric bus operations with professional service</p>
              </div>
            </div>
            
            <div className="group glass rounded-2xl overflow-hidden border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 hover-scale" data-animate>
              <img 
                src="/charging-ebus.JPG" 
                alt="Electric Bus Charging"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-display">Charging Infrastructure</h3>
                <p className="text-slate-400 font-body">Advanced charging stations for reliable electric operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/50 via-slate-900 to-emerald-900/50"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-animate>
          <div className="glass rounded-3xl p-12 border border-slate-600/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display">
              Ready to <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Travel?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 font-body">
              Experience reliable and affordable public transportation with Super Metro's professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-semibold text-white font-body hover-scale electric-glow">
                <div className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </div>
              </button>
              <button className="px-8 py-4 glass rounded-xl border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 font-body hover-scale">
                <span className="text-white">Contact Support</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
