import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Routes & Destinations", href: "/routes" },
    { name: "Live Schedules", href: "/schedules" },
    { name: "Smart Fleet", href: "/fleet" },
    { name: "Support Center", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0 city-silhouette opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/80 p-2 rounded-xl border border-orange-500/30 overflow-hidden backdrop-blur-sm">
                  <img
                    src="/logo.JPG"
                    alt="Super Metro Logo"
                    className="h-8 w-16 sm:h-10 sm:w-20 object-contain rounded-md"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Super Metro
                </h3>
                <div className="flex items-center space-x-1">
                  <Zap className="h-3 w-3 text-orange-400" />
                  <p className="text-sky-200 text-sm font-body">
                    Modern Transport
                  </p>
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-body">
              Providing reliable and affordable public transportation services
              across Nairobi and surrounding areas with professional service.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg border border-slate-600/30 hover:border-orange-500/50 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-slate-400 group-hover:text-orange-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">
              Quick Access
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-300 font-body group flex items-center"
                  >
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg border border-slate-600/30 group-hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-slate-300 text-sm font-body">
                  +254 722 730 430
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg border border-slate-600/30 group-hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-slate-300 text-sm font-body">
                  +254 721 202 313
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg border border-slate-600/30 group-hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-slate-300 text-sm font-body">
                  +254 723 987 478
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg border border-slate-600/30 group-hover:border-orange-500/50 flex items-center justify-center transition-all duration-300">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-slate-300 text-sm font-body">
                  info@supermetro.co.ke
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg border border-slate-600/30 group-hover:border-orange-500/50 flex items-center justify-center transition-all duration-300 mt-0.5">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-slate-300 text-sm font-body">
                  Njengi House, 7th Floor
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* Operating Status */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">
              Live Status
            </h4>
            <div className="space-y-4">
              <div className="glass rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 text-sm font-medium font-body">
                    All Systems Online
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <div className="text-slate-300 text-sm font-body">
                    <div>24/7 Smart Operations</div>
                    <div className="text-orange-400">Regular Service</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-800/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-4 w-4 text-orange-400" />
                  <span className="text-orange-300 text-xs font-medium font-body">
                    SERVICE FEATURES
                  </span>
                </div>
                <p className="text-slate-300 text-xs font-body">
                  Reliable routes • Professional drivers • Regular maintenance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm font-body">
              © {currentYear} Super Metro. Revolutionizing urban mobility.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-slate-600 text-xs font-body">
                Powered by
              </span>
              <div className="flex items-center space-x-1">
                <Zap className="h-3 w-3 text-orange-400" />
                <span className="text-slate-400 text-xs font-body">
                  Help With Mufasa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
