import { Bus, Shield, Users, Wrench, CheckCircle, Star, Zap } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { useEffect } from 'react';

export default function Fleet() {
  useEffect(() => {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fleetTypes = [
    {
      type: 'Standard Buses',
      count: '70+',
      capacity: '45-50 passengers',
      features: ['Comfortable Seating', 'Professional Drivers', 'Regular Maintenance', 'Safety Equipment'],
      techSpecs: ['Diesel Engine', 'Manual Transmission', 'Standard Brakes', 'Basic Audio'],
      image: '/mat1.JPG',
      gradient: 'from-sky-500 to-cyan-400'
    },
    {
      type: 'Mid-Size Buses',
      count: '25+',
      capacity: '30-35 passengers',
      features: ['Efficient Routes', 'Good Condition', 'Experienced Drivers', 'Regular Service'],
      techSpecs: ['Diesel Engine', 'Power Steering', 'Air Brakes', 'Standard Features'],
      image: '/mat2.JPG',
      gradient: 'from-emerald-500 to-teal-400'
    },
    {
      type: 'Newer Fleet',
      count: '15+',
      capacity: '50-55 passengers',
      features: ['Better Comfort', 'Improved Efficiency', 'Modern Design', 'Enhanced Safety'],
      techSpecs: ['Modern Engine', 'Power Assist', 'Improved Suspension', 'Better Ventilation'],
      image: '/mat3.JPG',
      gradient: 'from-purple-500 to-pink-400'
    }
  ];

  const smartFeatures = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Regular maintenance, safety inspections, and experienced drivers ensure secure passenger transport.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Wrench,
      title: 'Regular Maintenance',
      description: 'Scheduled maintenance and repairs keep our fleet in good operating condition for reliable service.',
      color: 'from-emerald-500 to-teal-400'
    },
    {
      icon: Users,
      title: 'Professional Drivers',
      description: 'Experienced and licensed drivers committed to safe, courteous, and professional service.',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: CheckCircle,
      title: 'Service Reliability',
      description: 'Consistent daily operations with established routes and regular schedules.',
      color: 'from-amber-500 to-orange-400'
    }
  ];

  const fleetStats = [
    { number: '100+', label: 'Fleet Vehicles', icon: Bus },
    { number: '1.2M+', label: 'Annual Passengers', icon: Users },
    { number: '8 Years', label: 'Average Fleet Age', icon: Star },
    { number: '95%', label: 'Service Reliability', icon: Zap },
  ];

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
                <Bus className="h-4 w-4 text-emerald-400" />
                <span className="text-sky-200 text-sm font-body">Our Fleet</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-display">
              Reliable
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                Transport Fleet
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-body">
              Modern fleet of buses providing reliable public transportation across Nairobi and surrounding areas with professional service
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {fleetStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover-scale" 
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-16 h-16 mx-auto glass rounded-2xl border border-slate-600/30 flex items-center justify-center group-hover:border-sky-500/50 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Fleet <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body">
              Our diverse fleet serves different route requirements across Nairobi and surrounding areas
            </p>
          </div>

          <div className="space-y-20">
            {fleetTypes.map((fleet, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                data-animate
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-1 relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${fleet.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative glass rounded-3xl border border-slate-600/30 overflow-hidden">
                    <img 
                      src={fleet.image} 
                      alt={fleet.type}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span className="text-emerald-400 text-sm font-body">In Service</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4 text-sky-400" />
                          <span className="text-sky-400 text-sm font-body">Regular Service</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-display">{fleet.type}</h3>
                    <div className="flex items-center space-x-6 text-slate-300 font-body mb-6">
                      <span className="flex items-center">
                        <Bus className="h-5 w-5 mr-2 text-sky-400" />
                        {fleet.count} Units
                      </span>
                      <span className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-emerald-400" />
                        {fleet.capacity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 font-display">Advanced Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {fleet.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-emerald-400 mr-3" />
                            <span className="text-slate-300 font-body">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 font-display">Tech Specifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {fleet.techSpecs.map((spec, specIndex) => (
                          <span 
                            key={specIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${fleet.gradient} bg-opacity-10 border border-slate-600/30 rounded-full text-slate-300 text-sm font-body`}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Service <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Standards</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body">
              Our commitment to safety, reliability, and professional service in public transportation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group glass rounded-2xl p-8 border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 hover-scale"
                data-animate
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className="relative w-12 h-12 glass rounded-xl border border-slate-600/30 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-body">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Fleet <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body">
              Explore our diverse fleet of buses serving Nairobi and surrounding areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: '/mat4.JPG', title: 'Standard Route Bus', description: 'Daily service on major routes' },
              { src: '/mat5.JPG', title: 'Express Service', description: 'Fast connections between cities' },
              { src: '/mat6.JPG', title: 'Modern Fleet', description: 'Recently upgraded vehicles' },
              { src: '/bus-station.JPG', title: 'Bus Station Operations', description: 'Professional station management' },
              { src: '/employee.JPG', title: 'Professional Staff', description: 'Experienced drivers and staff' },
              { src: '/fleetwithnelson.JPG', title: 'Leadership & Fleet', description: 'CEO with company fleet' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group glass rounded-2xl overflow-hidden border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 hover-scale"
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{item.title}</h3>
                  <p className="text-slate-400 font-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Operations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Daily <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Operations</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8" data-animate>
              <div className="glass rounded-2xl p-8 border border-slate-600/30">
                <h3 className="text-2xl font-bold text-white mb-6 font-display">Fleet Management</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-body">Daily Active Buses</span>
                    <span className="text-emerald-400 font-bold font-display">85+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-body">Routes Covered</span>
                    <span className="text-sky-400 font-bold font-display">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-body">Average Fleet Age</span>
                    <span className="text-purple-400 font-bold font-display">8 Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-body">Maintenance Schedule</span>
                    <span className="text-amber-400 font-bold font-display">Weekly</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4" data-animate>
              <img 
                src="/launch-ebus.JPG" 
                alt="Electric Bus Launch"
                className="w-full h-32 object-cover rounded-xl"
              />
              <img 
                src="/ebus-route.JPG" 
                alt="Electric Bus Route"
                className="w-full h-32 object-cover rounded-xl"
              />
              <img 
                src="/nelson-dpwife.JPG" 
                alt="Leadership Team"
                className="w-full h-32 object-cover rounded-xl"
              />
              <img 
                src="/matatus.JPG" 
                alt="Fleet Overview"
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
