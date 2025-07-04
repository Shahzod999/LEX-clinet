import { Button } from "@/components/ui/button";
import { Shield, Languages, Clock, CheckCircle, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--lavender-50)] via-white to-[var(--soft-blue-50)] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-blue-100/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Legal Help</span>
              <br />
              <span className="text-gray-900">in Your Language</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Transform confusing legal documents into clear, actionable guidance. LexHelps translates, explains, and organizes your legal paperwork — so you never miss a deadline again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 text-lg rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 h-auto">
                <a href="https://apps.apple.com/uz/app/lexhelps/id6747161585" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download for iOS
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-gray-200 text-gray-700 px-8 py-4 text-lg rounded-2xl hover:border-purple-300 hover:bg-lavender-50 transition-all duration-200 h-auto">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get on Android
              </Button>
            </div>
            
            {/* Help Button */}
            <div className="flex justify-center lg:justify-start mb-12">
              <Button asChild variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-lg transition-all duration-200">
                <Link href="/support">
                  Need Help? Get Support →
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="text-green-500 mr-2" size={16} />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center">
                <Languages className="text-blue-500 mr-2" size={16} />
                <span>8+ Languages</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-purple-500 mr-2" size={16} />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Legal documents with translation overlays and deadline markers" 
              className="rounded-3xl shadow-2xl w-full h-auto transform rotate-2 hover:rotate-0 transition-transform duration-500" 
            />
            
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={16} />
                <span className="text-sm font-medium">Document Translated</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <Calendar className="text-white" size={16} />
                <span className="text-sm font-medium">Deadline: 5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
