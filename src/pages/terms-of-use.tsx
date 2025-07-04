import { Scale } from "lucide-react";
import { Link } from "wouter";
import "./terms.css";

export default function TermsOfUse() {
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
      <div className="container">
        <main>
          <section className="section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Lex platform ("Lex," "we," "our," or "us"), you agree to be legally bound by these Terms of Use ("Terms").
              These Terms govern your use of our website, mobile applications, services, tools, and any other platform functionality (collectively,
              the "Services"). If you do not agree with any part of these Terms, you must not access or use the Services. These Terms apply to all
              visitors, users, and others who access or use the Services, and form a legally binding agreement between you and{" "}
              <span className="company-info">CDL Carolinas LLC</span>.
            </p>
          </section>

          <section className="section">
            <h2>2. Description of Services</h2>
            <p>
              Lex offers AI-powered tools designed to simplify legal language, provide immigration-related information, and assist users in navigating
              legal procedures. The Services are for informational purposes only and are not intended to replace legal counsel. Lex does not practice
              law, provide legal advice, or form attorney-client relationships. Any actions you take based on information provided by Lex are your own
              responsibility. You should always seek the advice of a licensed attorney in your jurisdiction for any legal matters.
            </p>
          </section>

          <section className="section">
            <h2>3. Eligibility</h2>
            <p>
              To use Lex, you must be at least 13 years old. If you are under the age of 18 (or the age of legal majority in your country or state),
              you may only use Lex with the supervision and consent of a parent or legal guardian. By using the Services, you represent and warrant
              that you meet these eligibility requirements and that you have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section className="section">
            <h2>4. User Responsibilities</h2>
            <p>
              You agree to use the Services in compliance with all applicable laws and these Terms. You must not use the Services to engage in any
              unlawful, misleading, or harmful activity, including attempting to extract, reverse-engineer, or interfere with our software or systems.
              You are responsible for the accuracy of the information you provide, the integrity of your account (if applicable), and the results of
              any actions taken using the Services.
            </p>
          </section>

          <section className="section">
            <h2>5. No Legal Advice or Representation</h2>
            <div className="important-notice">
              <p>
                <strong>Lex is not a law firm and does not provide legal representation.</strong> The content, responses, and documents generated
                through Lex's AI systems are not legal advice and should not be relied upon as such. We do not guarantee the accuracy, completeness,
                or currentness of any legal information. The Services do not replace the need for professional legal consultation, and use of Lex does
                not create an attorney-client relationship.
              </p>
            </div>
          </section>

          <section className="section">
            <h2>6. Account Security</h2>
            <p>
              If you create an account on Lex, you are responsible for maintaining the confidentiality of your login credentials. You agree to notify
              us immediately of any unauthorized access or use of your account. We reserve the right to suspend or terminate your access if we suspect
              misuse or if your account security has been compromised. Lex is not liable for any losses or damages resulting from unauthorized account
              access due to your actions or negligence.
            </p>
          </section>

          <section className="section">
            <h2>7. Intellectual Property Rights</h2>
            <p>
              All content, technology, software, visual design, logos, trademarks, and other intellectual property displayed or made available through
              the Services are the exclusive property of Lex or its licensors. You may not reproduce, copy, sell, distribute, or create derivative
              works based on our intellectual property without our express written consent. All rights not expressly granted are reserved by us.
            </p>
          </section>

          <section className="section">
            <h2>8. Privacy and Data Use</h2>
            <p>
              Your use of the Services is subject to our Privacy Policy, which explains how we collect, use, and safeguard your personal information.
              By using the Services, you acknowledge and agree to the practices outlined in the Privacy Policy, including the use of AI tools to
              process your data. Use of the Services indicates your informed consent to data collection and processing as described.
            </p>
          </section>

          <section className="section">
            <h2>9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Services at any time, with or without notice, if we reasonably believe
              that you have violated these Terms, abused the Services, or created a risk of harm to others or to Lex. You may also stop using the
              Services at any time. Termination does not affect any provisions of these Terms that are intended to survive termination.
            </p>
          </section>

          <section className="section">
            <h2>10. Disclaimer of Warranties</h2>
            <p>
              The Services are provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant
              that the Services will be accurate, complete, error-free, secure, or uninterrupted. To the fullest extent permitted by law, we disclaim
              all warranties, including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Your use of
              the Services is at your own risk.
            </p>
          </section>

          <section className="section">
            <h2>11. Limitation of Liability</h2>
            <p>
              To the maximum extent allowed by law, Lex and its affiliates, officers, employees, and agents will not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from or related to your use of the Services. This includes, but is not
              limited to, loss of data, profits, or reputation. Our total liability for any claim under these Terms shall not exceed the amount you
              paid to use the Services, if any, in the 12 months preceding the claim.
            </p>
          </section>

          <section className="section">
            <h2>12. Modifications to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. If changes are material, we will notify you through email, in-app
              messaging, or by posting an updated version on our website. Your continued use of the Services after such modifications constitutes your
              acceptance of the updated Terms.
            </p>
          </section>

          <section className="section">
            <h2>13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the State of Colorado, without regard to its conflict of law principles. Any legal action or
              proceeding arising from or related to these Terms shall be brought exclusively in the state or federal courts located in Colorado. You
              agree to submit to the personal jurisdiction of these courts and waive any objections to venue.
            </p>
          </section>

          <section className="section">
            <h2>14. Contact Information</h2>
            <p>For questions or concerns regarding these Terms or your use of the Services, please contact:</p>
            <div className="contact-info">
              <p>
                <strong>
                  Lex / <span className="company-info">CDL Carolinas LLC</span>
                </strong>
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span>📍</span>
                  <span>Colorado, USA</span>
                </div>
                <div className="contact-item">
                  <span>📩</span>
                  <a href="mailto:support@lexhelps.com" className="website-link">
                    support@lexhelps.com
                  </a>
                </div>
              </div>
            </div>
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
