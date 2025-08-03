import { Clock, MapPin, Search, Zap, Radio, Satellite } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { useState, useEffect } from 'react';

export default function Schedules() {
  const [selectedRoute, setSelectedRoute] = useState('all');
  const [selectedDay, setSelectedDay] = useState('weekday');
  const [currentTime, setCurrentTime] = useState(new Date());

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

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const schedules = [
    {
      route: 'JKIA Airport → Nairobi CBD',
      firstDeparture: '6:00 AM',
      lastDeparture: '10:00 PM',
      frequency: '30 minutes',
      peakFrequency: '30 minutes',
      nextDeparture: 'Fixed Schedule',
      status: 'Operating',
      reliable: true,
      category: 'airport'
    },
    {
      route: 'JKIA Airport → Westlands',
      firstDeparture: '6:30 AM',
      lastDeparture: '9:30 PM',
      frequency: '45 minutes',
      peakFrequency: '45 minutes',
      nextDeparture: 'Fixed Schedule',
      status: 'Operating',
      reliable: true,
      category: 'airport'
    }
  ];

  const realTimeData = [
    { destination: 'JKIA → CBD', departures: ['6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'], status: 'Operating' },
    { destination: 'JKIA → Westlands', departures: ['6:30', '7:15', '8:00', '8:45', '9:30', '10:15', '11:00', '11:45', '12:30', '13:15', '14:00', '14:45', '15:30', '16:15', '17:00', '17:45', '18:30', '19:15', '20:00', '20:45', '21:30'], status: 'Operating' },
  ];

  const systemStats = [
    { icon: Clock, number: '6AM-10PM', label: 'Service Hours', color: 'from-sky-500 to-cyan-400' },
    { icon: MapPin, number: '2', label: 'Airport Routes', color: 'from-emerald-500 to-teal-400' },
    { icon: Radio, number: '30-45min', label: 'Frequency', color: 'from-purple-500 to-pink-400' },
    { icon: Satellite, number: '7 Days', label: 'Weekly Service', color: 'from-amber-500 to-orange-400' },
  ];

  const filteredSchedules = schedules.filter(schedule => 
    selectedRoute === 'all' || schedule.category === selectedRoute
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Schedule': return 'text-emerald-400';
      case 'Optimizing': return 'text-amber-400';
      case 'Boarding': return 'text-sky-400';
      case 'Delayed': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'On Schedule': return 'from-emerald-500/20 to-emerald-400/20';
      case 'Optimizing': return 'from-amber-500/20 to-amber-400/20';
      case 'Boarding': return 'from-sky-500/20 to-sky-400/20';
      case 'Delayed': return 'from-red-500/20 to-red-400/20';
      default: return 'from-slate-500/20 to-slate-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-city city-silhouette"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-emerald-400 animate-pulse" />
                <span className="text-sky-200 text-sm font-body">Live Scheduling</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-display">
              Intelligent
              <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Time Management
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-body">
              Fixed schedule information for our airport shuttle service with reliable departure times
            </p>
            
            {/* Live Clock */}
            <div className="mt-8 inline-flex items-center glass px-6 py-3 rounded-full border border-sky-500/30">
              <Zap className="h-5 w-5 text-emerald-400 mr-2" />
              <span className="text-white font-mono text-lg">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour12: false, 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit' 
                })}
              </span>
              <span className="text-slate-400 ml-2 text-sm font-body">EAT</span>
            </div>
          </div>
        </div>
      </section>

      {/* System Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {systemStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover-scale" 
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
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

      {/* Filter Controls */}
      <section className="py-8 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-6 border border-slate-600/30">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium font-body">Smart Filters:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex gap-2">
                  {[
                    { value: 'all', label: 'All Services' },
                    { value: 'metro', label: 'Metro Lines' },
                    { value: 'intercity', label: 'Inter-City' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedRoute(option.value)}
                      className={`px-4 py-2 rounded-lg font-medium font-body transition-all duration-300 ${
                        selectedRoute === option.value
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                
                <select 
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-body"
                >
                  <option value="weekday">Weekdays</option>
                  <option value="weekend">Weekends</option>
                  <option value="holiday">Holidays</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Schedules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Airport Shuttle <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Schedule</span>
            </h2>
            <p className="text-xl text-slate-400 font-body">
              Fixed departure times for reliable airport transportation service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSchedules.map((schedule, index) => (
              <div 
                key={index} 
                className="group glass rounded-2xl p-6 border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 hover-scale"
                data-animate
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white font-display">{schedule.route}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getStatusBg(schedule.status)} rounded-full text-xs font-medium font-body ${getStatusColor(schedule.status)}`}>
                      {schedule.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-slate-400 font-body">
                      <Clock className="h-4 w-4 mr-2" />
                      Schedule Type
                    </span>
                    <span className="text-lg font-bold text-emerald-400 font-body">{schedule.nextDeparture}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-slate-400 font-body">
                      <Zap className="h-4 w-4 mr-2" />
                      Frequency
                    </span>
                    <span className="font-medium text-white font-body">{schedule.frequency}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-slate-400 font-body">
                      <Radio className="h-4 w-4 mr-2" />
                      Peak Hours
                    </span>
                    <span className="font-medium text-sky-400 font-body">{schedule.peakFrequency}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="text-sm text-slate-400 font-body">
                    <span>First: {schedule.firstDeparture}</span>
                    <span className="mx-2">•</span>
                    <span>Last: {schedule.lastDeparture}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-xs font-body">Live</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inter-City Express Schedule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Daily Airport <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Departures</span>
            </h2>
            <p className="text-lg text-slate-400 font-body">
              Complete daily schedule for airport shuttle services from JKIA
            </p>
          </div>
          
          <div className="glass rounded-3xl border border-slate-600/30 overflow-hidden" data-animate>
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white font-display">Live Departure Board</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 text-sm font-body">Real-time Updates</span>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300 font-display">Destination</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300 font-display">Departure Times</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300 font-display">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {realTimeData.map((route, index) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-white font-body">{route.destination}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {route.departures.slice(0, 8).map((time, timeIndex) => (
                            <span 
                              key={timeIndex}
                              className="px-2 py-1 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-full text-xs font-mono font-medium"
                            >
                              {time}
                            </span>
                          ))}
                          {route.departures.length > 8 && (
                            <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-body">
                              +{route.departures.length - 8} more
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-sm font-body">{route.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Alerts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 border border-slate-600/30" data-animate>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">Airport Shuttle Service</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3 text-slate-300 font-body">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                  Fixed departure schedules for reliability
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Professional drivers with airport experience
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Direct routes to and from JKIA
                </p>
              </div>
              <div className="space-y-3 text-slate-300 font-body">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  Comfortable seating with luggage space
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Daily service from 6AM to 10PM
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Affordable fares for airport transportation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
