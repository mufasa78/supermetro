import { Menu, X, Moon, Sun, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Routes", href: "/routes" },
    { name: "Fleet", href: "/fleet" },
    { name: "Schedules", href: "/schedules" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark shadow-xl backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/80 p-2 rounded-xl border border-orange-500/30 overflow-hidden backdrop-blur-sm">
                <img
                  src="/logo.JPG"
                  alt="Super Metro Logo"
                  className="h-8 w-16 sm:h-10 sm:w-20 object-contain rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-display tracking-tight">
                Super Metro
              </h1>
              <div className="flex items-center space-x-1">
                <Zap className="h-3 w-3 text-orange-400" />
                <p className="text-sky-200 text-sm font-body">
                  Modern Transport
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-slate-300 hover:text-white px-4 py-2 rounded-lg font-medium font-body transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-emerald-500/0 group-hover:from-sky-500/20 group-hover:to-emerald-500/20 rounded-lg transition-all duration-300"></div>
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg glass border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 group"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="h-5 w-5 text-orange-400 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-orange-400" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg glass border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-600/30 animate-slide-up">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 py-3 px-4 rounded-lg font-medium font-body transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
