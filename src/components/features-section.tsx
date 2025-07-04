import { CloudUpload, AlertTriangle, FileText, MessageCircle, MapPin, Globe } from "lucide-react";

const features = [
  {
    icon: CloudUpload,
    title: "Upload Documents",
    description: "Scan or upload any legal papers for instant AI translation and analysis. Get clarity on what your documents mean and what actions you need to take.",
    gradient: "from-purple-500 to-blue-500",
    bgGradient: "from-lavender-50 to-white"
  },
  {
    icon: AlertTriangle,
    title: "Important Deadlines",
    description: "AI highlights critical dates and actions needed. Never miss another deadline with smart notifications and organized deadline tracking.",
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-soft-blue-50 to-white"
  },
  {
    icon: FileText,
    title: "Immigration Help",
    description: "Understand your visa type, explore your options, and get step-by-step guidance for your immigration journey with personalized advice.",
    gradient: "from-purple-500 to-blue-500",
    bgGradient: "from-lavender-50 to-white"
  },
  {
    icon: MessageCircle,
    title: "24/7 Legal Chat",
    description: "Ask questions anytime and get instant guidance from our smart AI assistant. Get answers when you need them most.",
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-soft-blue-50 to-white"
  },
  {
    icon: MapPin,
    title: "Local Help",
    description: "Find legal aid, local services, and emergency help in your area. Connect with resources and support when you need assistance.",
    gradient: "from-purple-500 to-blue-500",
    bgGradient: "from-lavender-50 to-white"
  },
  {
    icon: Globe,
    title: "Multiple Languages",
    description: "Support for English, Spanish, French, Arabic, Russian, Chinese, Hindi, and more. Get help in the language you're most comfortable with.",
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-soft-blue-50 to-white"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Legal Clarity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From document translation to deadline tracking, LexHelps provides comprehensive support for all your legal paperwork needs.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`group bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
