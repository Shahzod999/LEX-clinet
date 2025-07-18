import { Scale } from "lucide-react";
import { Link } from "wouter";
import "./privacy.css";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="intro-summary">
            This policy explains how we protect your data, how we use AI, and your rights. We never sell your data. We use your documents to help you
            — not to track, advertise, or profile you.
          </div>

          <section className="section">
            <h2>1. Introduction</h2>
            <p>
              <span className="company-info">CDL Carolinas LLC</span> ("Lex," "we," "our," or "us") is committed to protecting your privacy and
              ensuring the safety of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard information
              when you interact with our mobile and web applications, website{" "}
              <a href="https://www.lexhelps.com" className="website-link" target="_blank" rel="noopener noreferrer">
                https://www.lexhelps.com
              </a>
              , and related services (collectively, "Lex" or "the Service").
            </p>
            <p>
              Lex offers multilingual legal and immigration assistance powered by AI and document analysis features. This Policy also covers our use
              of artificial intelligence, geolocation services, and third-party integrations.
            </p>
            <div className="highlight">
              <p>
                <strong>By using Lex, you acknowledge and accept the practices described in this Policy.</strong> If you do not agree with the terms,
                please do not use the Service.
              </p>
            </div>
          </section>

          <section className="section">
            <h2>2. Information We Collect</h2>
            <p>
              To provide our legal and immigration assistance services, Lex collects and processes specific categories of personal and technical
              information:
            </p>

            <h3>a. Identity & Contact Information</h3>
            <p>
              We collect your full name, email address, country of residence, and preferred language to personalize your experience and ensure
              accurate jurisdiction-based support.
            </p>

            <h3>b. Uploaded Documents & Scanned Media</h3>
            <p>
              Documents you upload or scan (e.g., PDFs, images) are securely processed to extract relevant legal information. These files are used
              solely for generating context-specific responses and are not reused for unrelated purposes.
            </p>

            <h3>c. Geolocation & IP Data</h3>
            <p>
              Lex may access your IP address or device-based location data to determine your jurisdiction, present relevant legal information, and
              display local resources. Location data is never used for advertising or behavioral tracking.
            </p>

            <h3>d. Device & Technical Information</h3>
            <p>
              We collect standard technical details, including browser type, OS version, IP address, session time, and app usage data, to ensure
              platform security and performance.
            </p>

            <h3>e. AI Interaction Logs</h3>
            <p>
              User inputs and AI-generated responses are logged to improve system accuracy, ensure responsible usage, and support safety monitoring.
              These logs are never used for profiling or marketing.
            </p>

            <h3>f. Feature Usage Data</h3>
            <p>Lex monitors which tools you use (e.g., SOS help, document analysis, chat) to enhance product development and user experience.</p>

            <h3>g. Camera Access</h3>
            <p>
              When scanning documents, camera access is requested strictly for capturing document images. No facial data or background visuals are
              stored or analyzed.
            </p>

            <h3>h. Translation Logs</h3>
            <p>
              When using Lex's translation feature, your text is temporarily processed to complete translation requests. These logs are securely
              discarded after the session.
            </p>
          </section>

          <section className="section">
            <h2>3. How We Use Your Information</h2>
            <p>
              Lex processes your information solely to deliver, enhance, and secure the services we provide. Our use of your data aligns strictly with
              the platform's core legal support functions.
            </p>

            <h3>a. Service Delivery & Personalization</h3>
            <p>
              We use your documents, location, and language preferences to generate accurate AI-powered responses, provide jurisdiction-specific legal
              support, and translate materials as needed.
            </p>

            <h3>b. Platform Performance & Reliability</h3>
            <p>Technical and usage data helps us ensure stability, resolve system issues, and improve functionality based on real-world usage.</p>

            <h3>c. Support & Communications</h3>
            <p>
              Your contact details are used to provide user support, respond to inquiries, and send important updates. We do not send promotional
              materials unless you opt in.
            </p>

            <h3>d. Legal & Regulatory Compliance</h3>
            <p>
              We process data as required by applicable laws, including consumer protection, digital services regulations, and lawful disclosure
              obligations.
            </p>

            <h3>e. Security & Abuse Prevention</h3>
            <p>Lex monitors usage patterns to detect and prevent misuse, enforce platform integrity, and respond to suspicious activity or abuse.</p>

            <h3>f. AI Quality & Fairness</h3>
            <p>
              AI interaction logs are reviewed (in pseudonymized form) to improve accuracy, reduce bias, and enhance model performance. We do not use
              identifiable data for AI training without explicit consent.
            </p>

            <h3>g. Emergency Support Functionality</h3>
            <p>
              For users activating the SOS feature, location and session data is used to display local legal resources and assist in urgent
              situations—handled with the highest confidentiality.
            </p>
          </section>

          <section className="section">
            <h2>4. Legal Basis for Processing Personal Data</h2>
            <p>
              Lex is committed to full compliance with applicable international data protection laws, including but not limited to the General Data
              Protection Regulation (GDPR) in the European Economic Area (EEA), the UK GDPR, and the California Consumer Privacy Act (CCPA), among
              others.
            </p>
            <p>
              We process your personal data only when there is a valid legal basis to do so. The specific legal bases under which we process personal
              information are as follows:
            </p>

            <h3>a. Contractual Necessity</h3>
            <p>We process certain personal information to fulfill our contractual obligations to you. This includes enabling you to:</p>
            <ul>
              <li>Upload, scan, and receive legal document analysis</li>
              <li>Access translated legal assistance based on your country of residence</li>
              <li>Use location-based features and SOS services</li>
              <li>Interact with the AI assistant for real-time legal guidance</li>
            </ul>
            <p>Where you use Lex in reliance on our Terms of Use, this processing is essential to deliver the agreed-upon services.</p>

            <h3>b. Legitimate Interests</h3>
            <p>
              In certain cases, we process your data to pursue our legitimate business interests, provided those interests do not override your rights
              and freedoms. These interests include:
            </p>
            <ul>
              <li>Improving platform performance and reliability</li>
              <li>Securing the application against fraud, misuse, or legal liability</li>
              <li>Monitoring AI interactions to ensure safety, accuracy, and fairness</li>
              <li>Facilitating internal analytics and service innovation</li>
            </ul>
            <p>We conduct careful balancing assessments to ensure that our interests do not compromise your privacy or data protection rights.</p>

            <h3>c. Legal Obligations</h3>
            <p>We may process or retain your data when we are legally required to do so. This includes obligations under:</p>
            <ul>
              <li>Civil, consumer protection, or digital services regulations</li>
              <li>Tax, anti-fraud, or anti-money laundering laws</li>
              <li>Mandatory reporting obligations for certain jurisdictions</li>
            </ul>
            <p>
              When we are compelled by law, we ensure the minimum amount of personal data is disclosed and that appropriate safeguards are in place.
            </p>

            <h3>d. Consent</h3>
            <p>
              Where your explicit consent is required for certain processing activities—such as receiving marketing communications or enabling
              optional feature tracking—we obtain this consent clearly and transparently. You may withdraw your consent at any time by contacting us
              at{" "}
              <a href="mailto:support@lexhelps.com" className="website-link">
                support@lexhelps.com
              </a>{" "}
              or adjusting your in-app settings. Withdrawal of consent will not affect the lawfulness of any processing carried out prior to such
              withdrawal.
            </p>

            <h3>e. Public Interest and Vital Interest (where applicable)</h3>
            <p>
              In rare instances, such as emergency use of the SOS function, we may process limited data necessary to protect a user's vital interest
              or to act in the public interest—such as connecting the user to legal aid in critical legal distress situations. In such cases,
              processing is proportionate, limited in scope, and handled with the highest sensitivity.
            </p>
          </section>

          <section className="section">
            <h2>5. Sharing Your Information</h2>
            <p>
              <strong>Lex does not sell your personal data under any circumstances.</strong>
            </p>
            <p>
              We only share your information with trusted third-party service providers who support our platform—for example, cloud hosting,
              analytics, AI processing, and customer support. These providers are contractually bound to use your data solely for delivering services
              on our behalf and must meet strict confidentiality and security standards.
            </p>
            <p>We may also disclose personal information if required by law, court order, or government request, or to:</p>
            <ul>
              <li>Enforce our Terms of Use</li>
              <li>Prevent fraud, abuse, or threats to platform integrity</li>
              <li>Protect the rights and safety of Lex, its users, or others</li>
            </ul>
            <p>
              In the event of a merger, acquisition, or restructuring, your data may be transferred to a successor entity, with notice provided where
              required by law.
            </p>
            <p>
              Lex does not share user data with advertisers or business partners for marketing purposes without your explicit consent. In limited
              cases, we may work with region-specific legal advisors or translators—always under strict confidentiality.
            </p>
            <p>All sharing practices comply with GDPR, CCPA, and other applicable privacy laws.</p>
          </section>

          <section className="section">
            <h2>6. Data Retention</h2>
            <p>
              Lex retains your personal data only as long as necessary to deliver our services, meet legal obligations, resolve disputes, and enforce
              our terms.
            </p>
            <p>
              Uploaded documents and legal queries are kept only for the time required to support your use of the platform—unless a longer retention
              period is required by law or needed for audit, compliance, or dispute resolution.
            </p>
            <p>Inactive accounts may lead to your data being archived in a pseudonymized or anonymized form for internal analytics or compliance.</p>
            <p>
              We regularly review our retention policies to ensure they align with applicable laws, best practices, and evolving user needs. You may
              request data deletion at any time, subject to legal exceptions.
            </p>
          </section>

          <section className="section">
            <h2>7. International Data Transfers</h2>
            <p>
              As Lex is accessible globally, your personal data may be transferred to and processed in countries other than your country of residence,
              including jurisdictions where data protection laws may be less comprehensive than those in your home country.
            </p>
            <p>
              Where such transfers occur, we take appropriate measures to ensure that your information remains protected in accordance with applicable
              data protection laws. These measures may include entering into data transfer agreements using Standard Contractual Clauses approved by
              the European Commission, relying on adequacy decisions, or ensuring that recipients are certified under recognized data protection
              frameworks.
            </p>
            <p>
              By using Lex, you acknowledge and agree to the transfer of your personal data to jurisdictions outside your own, including to the United
              States, where our core infrastructure and service providers are located.
            </p>
          </section>

          <section className="section">
            <h2>8. Security Measures</h2>
            <p>
              We implement a range of administrative, technical, and physical safeguards designed to protect your personal data from unauthorized
              access, disclosure, alteration, and destruction. These include, but are not limited to, encrypted transmission using Transport Layer
              Security (TLS), secure storage of documents and user data, access controls based on the principle of least privilege, and regular system
              monitoring and penetration testing.
            </p>
            <p>
              While we follow industry best practices to secure your information, no system of electronic storage or transmission over the Internet is
              completely secure. Therefore, we cannot guarantee the absolute security of your data. You are responsible for maintaining the
              confidentiality of your account credentials and for restricting access to your devices.
            </p>
            <p>
              If we become aware of any unauthorized access or data breach involving your personal information, we will notify you in accordance with
              applicable laws and regulations.
            </p>
          </section>

          <section className="section">
            <h2>9. Your Rights Under GDPR and CCPA</h2>
            <p>
              Depending on your country or state of residence, you may be entitled to exercise specific rights under data protection laws such as the
              General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA). These rights include:
            </p>
            <ul>
              <li>
                <strong>Right to Access:</strong> You may request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to Erasure:</strong> You may request deletion of your personal data, subject to legal and contractual limitations.
              </li>
              <li>
                <strong>Right to Restrict or Object to Processing:</strong> You may object to certain processing activities or request we limit our
                use of your data.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You may request a structured, machine-readable copy of your data for transfer to another
                service provider.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw it at any time without
                affecting the lawfulness of prior processing.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> Under CCPA, you have the right not to receive discriminatory treatment for exercising
                your rights.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at:{" "}
              <a href="mailto:support@lexhelps.com" className="website-link">
                support@lexhelps.com
              </a>
              . We may need to verify your identity before responding to your request.
            </p>
            <p>
              If you are located in the European Economic Area (EEA), you have specific rights under the General Data Protection Regulation (GDPR),
              including the right to access your personal data, rectify or erase it, restrict its processing, object to processing, and data
              portability. You may also lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section className="section">
            <h2>10. Artificial Intelligence (AI) Disclosures</h2>
            <p>
              Lex incorporates artificial intelligence (AI) technologies as a core component of its legal and immigration support services. These
              features are essential to the functionality of the platform and are used to assist with document analysis, translation, and
              jurisdiction-based informational guidance.
            </p>
            <p>
              <strong>All AI-generated outputs are for informational purposes only and do not constitute legal advice.</strong> Users are responsible
              for verifying the accuracy and applicability of any content provided by the AI system. Lex does not permit AI systems to make autonomous
              decisions that have legal or material consequences.
            </p>
            <p>To ensure the quality and integrity of our AI systems:</p>
            <ul>
              <li>
                User interactions with AI features may be logged in pseudonymized form for internal monitoring, quality assurance, and improvement
                purposes.
              </li>
              <li>No personally identifiable information is used for AI model training unless the user has provided explicit consent.</li>
              <li>Lex does not use user data for behavioral profiling, advertising, or to train third-party AI models.</li>
            </ul>
            <p>
              As AI functionality is integral to the Lex platform, opting out of AI processing is not possible. However, all AI-related data handling
              is governed by strict privacy safeguards and complies with applicable data protection regulations.
            </p>
          </section>

          <section className="section">
            <h2>11. Children's Privacy</h2>
            <p>
              Lex is not intended for use by individuals under the age of thirteen (13), or the applicable age of digital consent in your
              jurisdiction. We do not knowingly collect or solicit personal information from children. If we become aware that we have collected
              personal data from a child without verifiable parental consent, we will take immediate steps to delete such information from our
              systems.
            </p>
            <p>
              If you believe a child has provided us with personal data without appropriate consent, please contact us immediately at{" "}
              <a href="mailto:support@lexhelps.com" className="website-link">
                support@lexhelps.com
              </a>{" "}
              so that we can investigate and take appropriate action.
            </p>
          </section>

          <section className="section">
            <h2>12. Third-Party Services and Links</h2>
            <p>
              Lex may include links to third-party websites, integrations, and services that are not operated or controlled by CDL Carolinas LLC.
              These third parties may collect personal data from you in accordance with their own privacy policies and practices, which are not
              governed by this Privacy Policy. We are not responsible for the privacy, security, or data practices of any third-party platforms or
              services.
            </p>
            <p>
              When you leave our app or website and access external services or content, you do so at your own risk. We strongly encourage users to
              review the privacy policies and terms of use of all external sites or services before submitting any personal information. Lex disclaims
              any liability for loss or damage caused by the use of or reliance on any third-party website or service.
            </p>
          </section>

          <section className="section">
            <h2>13. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to modify, revise, or update this Privacy Policy at any time to reflect changes in our business practices,
              technology, legal requirements, or service offerings. If material changes are made, we will notify users by posting a revised version on
              our website at{" "}
              <a href="https://www.lexhelps.com" className="website-link" target="_blank" rel="noopener noreferrer">
                https://www.lexhelps.com
              </a>{" "}
              and, where legally required, provide direct notice through email or in-app notifications.
            </p>
            <p>
              The "Effective Date" at the top of this Privacy Policy indicates when the most recent version took effect. Continued use of our services
              following the publication of updates constitutes your acknowledgment of and agreement to the modified terms.
            </p>
          </section>

          <section className="section">
            <h2>14. Governing Law and Jurisdiction</h2>
            <p>
              This Privacy Policy, and any dispute or claim arising out of or in connection with it or its subject matter, shall be governed by and
              construed in accordance with the laws of the State of Colorado, United States, without regard to its conflict of law provisions.
            </p>
            <p>
              If you access or use Lex outside of the United States, you do so at your own risk and are responsible for compliance with the laws of
              your jurisdiction. However, by using our services, you consent to the application of U.S. and Colorado law as it pertains to data
              collection, use, and protection, unless otherwise required by local regulations.
            </p>
          </section>

          <section className="section">
            <h2>15. Data Protection Officer (DPO) and Representative (If Applicable)</h2>
            <p>
              In accordance with GDPR requirements, if we are legally obligated to appoint a Data Protection Officer (DPO) or an EU/UK representative,
              their contact information will be made available here.
            </p>
            <p>
              At this time, CDL Carolinas LLC has not appointed a DPO, as the scale and nature of our data processing activities do not require one
              under Article 37 of the GDPR.
            </p>
            <p>
              However, should this status change or should you have specific concerns about the handling of your personal data, please reach out to
              our designated privacy contact at:{" "}
              <a href="mailto:support@lexhelps.com" className="website-link">
                support@lexhelps.com
              </a>
            </p>
          </section>

          <section className="section">
            <h2>16. Supplemental Notice for California Residents (CCPA Addendum)</h2>
            <p>
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act ("CCPA") and California
              Privacy Rights Act ("CPRA"). These include:
            </p>
            <ul>
              <li>The right to know what categories of personal data we collect, use, disclose, or sell (we do not sell personal data).</li>
              <li>The right to request access to the specific pieces of personal data we hold about you.</li>
              <li>The right to request deletion of your personal data, subject to legal and operational limitations.</li>
              <li>The right to correct inaccurate personal data.</li>
              <li>The right to opt out of any "sharing" of personal information for cross-context behavioral advertising.</li>
              <li>The right to non-discrimination for exercising your privacy rights.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:support@lexhelps.com" className="website-link">
                support@lexhelps.com
              </a>{" "}
              with the subject line: "California Privacy Request." Verification of identity may be required for data access and deletion requests.
            </p>
          </section>

          <section className="section">
            <h2>17. Cookies and Tracking Technologies</h2>
            <p>
              Lex uses cookies and similar tracking technologies to enhance the performance, security, and user experience of our website and mobile
              applications. These technologies collect certain data such as IP address, browser type, device information, and user interaction
              patterns. Cookies are used for essential platform operations, analytics, functionality preferences, and, where applicable, personalized
              content delivery. You can control the use of cookies through your browser settings. Disabling cookies may affect certain features or
              services. Where required by law, we obtain your consent for the use of non-essential cookies.
            </p>
          </section>

          <section className="section">
            <h2>18. User Choices and Opt-Out Rights</h2>
            <p>
              You have the right to opt out of certain data uses. You may unsubscribe from marketing communications by following the link in any
              promotional email or contacting us directly. Most browsers allow you to control or disable cookies through their settings. We do not
              respond to "Do Not Track" signals at this time, as there is no uniform industry standard. If you are subject to GDPR, CCPA, or similar
              laws, you may also have the right to restrict, object to, or withdraw consent for certain types of data processing. For any requests,
              please contact{" "}
              <a href="mailto:support@lexhelps.com" className="website-link">
                support@lexhelps.com
              </a>
              .
            </p>
          </section>

          <section className="section">
            <h2>19. Contact Information</h2>
            <p>
              If you have any questions, concerns, complaints, or requests regarding this Privacy Policy or our data handling practices, you may
              contact us using the information below. We aim to respond promptly and in accordance with applicable data protection laws.
            </p>
            <div className="highlight">
              <strong>Company Name:</strong> <span className="company-info">CDL Carolinas LLC</span>
              <br></br>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@lexhelps.com" className="website-link">
                support@lexhelps.com
              </a>
              <br></br>
              <strong>Registered Office:</strong> Colorado, United States<br></br>
              <strong>Website:</strong>{" "}
              <a href="https://www.lexhelps.com" className="website-link" target="_blank" rel="noopener noreferrer">
                https://www.lexhelps.com
              </a>
            </div>
            <p>
              We take privacy inquiries seriously and will make every reasonable effort to respond to your request in a timely and transparent manner.
              Users within the European Economic Area (EEA) or the United Kingdom may also have the right to lodge a complaint with their local data
              protection authority.
            </p>
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
