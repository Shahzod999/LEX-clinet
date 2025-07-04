import { Scale } from "lucide-react";
import { Link } from "wouter";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Scale className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">LexHelps</span>
            </Link>
            <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}

      <div className="container">
        <main>
          <section className="section">
            <h2>Welcome to the Lex Help Center</h2>
            <p>We're here to support you in getting the most out of your AI-powered legal assistant.</p>
          </section>
          <section className="section">
            <h2>Frequently Asked Questions</h2>
            <ol>
              <li>
                <strong>What is Lex?</strong>
                <br />
                Lex is an AI-powered legal assistant that helps you understand documents, ask legal questions, and receive guidance—available in any
                language.
              </li>
              <li>
                <strong>Can I use Lex in my native language?</strong>
                <br />
                Yes. Lex supports multilingual input and output. Ask questions or scan documents in your language, and Lex will respond accordingly.
              </li>
              <li>
                <strong>Does Lex replace a lawyer?</strong>
                <br />
                No. Lex does not provide legal representation. It is an educational tool designed to help you understand legal information and
                documents.
              </li>
              <li>
                <strong>What kind of documents can I scan?</strong>
                <br />
                You can upload contracts, government forms, rental agreements, immigration paperwork, and more.
              </li>
              <li>
                <strong>Is my data secure?</strong>
                <br />
                Yes. All communication and document analysis is encrypted. We do not sell or share your data with third parties.
              </li>
              <li>
                <strong>How do I get emergency help?</strong>
                <br />
                Lex includes an SOS feature for quick guidance in urgent situations. Tap the icon inside the app.
              </li>
            </ol>
          </section>
          <section className="section">
            <h2>Need More Help?</h2>
            <p>If your question isn't listed above, feel free to reach out.</p>
            <ul>
              <li>
                Email:{" "}
                <a className="website-link" href="mailto:support@lexhelps.com">
                  support@lexhelps.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a className="website-link" href="tel:+1 (469) 310-1999">
                  +1 (469) 310-1999
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 LexHelps | Built to make law accessible.</p>
        </div>
      </footer>
    </div>
  );
}
