import { Camera, Bell, Lock, Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-[var(--lavender-100)] via-white to-[var(--soft-blue-100)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Download Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get LexHelps on Your Phone</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Download the LexHelps app and carry your legal assistant wherever you go. Scan documents on the spot, get instant translations, and
              never miss important deadlines.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://apps.apple.com/uz/app/lexhelps/id6747161585"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-200 text-lg flex items-center justify-center space-x-3 hover:scale-105 transform h-auto"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.lexhelps.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-200 text-lg flex items-center justify-center space-x-3 hover:scale-105 transform h-auto"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>

            {/* App Features */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Camera className="text-purple-500 mr-2" size={16} />
                <span>Instant document scanning</span>
              </div>
              <div className="flex items-center">
                <Bell className="text-blue-500 mr-2" size={16} />
                <span>Smart deadline alerts</span>
              </div>
              <div className="flex items-center">
                <Lock className="text-green-500 mr-2" size={16} />
                <span>Secure cloud storage</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="text-purple-500 mr-2" size={16} />
                <span>Offline access available</span>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Mobile app interface showing document scanning and translation features"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />

            {/* Floating App Interface */}
            <div className="absolute -top-8 -right-8 bg-white rounded-3xl shadow-xl p-6 max-w-xs">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Document processed successfully!</p>
                <p className="text-xs text-gray-500 mt-1">Translated to Spanish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
