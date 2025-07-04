import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scale, Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Scale className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold text-gradient">LexHelps</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              About
            </button>
            <Link href="/support" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
              Support
            </Link>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 rounded-full">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-gray-600" size={24} /> : <Menu className="text-gray-600" size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-left"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-left"
              >
                About
              </button>
              <Link href="/support" className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-left">
                Support
              </Link>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-full rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
