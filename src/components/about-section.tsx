import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Document translation visualization */}
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt="Documents being processed with translation and deadline highlighting features" 
            className="rounded-3xl shadow-xl w-full h-64 object-cover mb-12" 
          />
          
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why LexHelps Matters
          </h2>
          
          <div className="bg-gradient-to-r from-[var(--lavender-50)] to-[var(--soft-blue-50)] rounded-3xl p-12 mb-12">
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed italic">
              "Legal letters shouldn't feel terrifying. LexHelps gives you clarity, calm, and control — in your language, on your terms."
            </blockquote>
          </div>
          
          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50M+</div>
              <p className="text-gray-600">Immigrants in the US need legal help</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">8+</div>
              <p className="text-gray-600">Languages supported by our AI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <p className="text-gray-600">Available assistance when you need it</p>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Take Control of Your Legal Documents?</h3>
            <p className="text-lg opacity-90 mb-6">Join thousands who already trust LexHelps with their legal paperwork.</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-3 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-200">
              Download LexHelps Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
