import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Page Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: March 2026</p>
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#a855f7]" />
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              Introduction
            </h2>
            <p>
              IyyanSoft Technologies respects your privacy and is committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and share your information when you use our platform
              at <strong>austartify.com</strong>.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Personal details such as name, email, phone number, and payment
                information.
              </li>
              <li>Event-related data provided during registration.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process registrations and payments.</li>
              <li>To communicate updates related to events or services.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                4
              </span>
              Data Security
            </h2>
            <p>
              We implement strict security measures to protect your data during
              online transactions. Payments are processed securely through
              Razorpay.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                5
              </span>
              Third-Party Sharing
            </h2>
            <p>
              Your data will not be shared with unauthorized third parties. Data
              shared with Razorpay is subject to their Privacy Policy.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                6
              </span>
              Your Rights
            </h2>
            <p>
              You have the right to access, modify, or delete your data upon
              request. Contact us to exercise these rights.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/20 bg-gradient-to-br from-[#7C3AED]/5 to-[#a855f7]/5">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                7
              </span>
              Contact Us
            </h2>
            <p className="mb-3">
              For concerns about your data, please reach out to us:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:iyyansoft@gmail.com"
                className="inline-flex items-center gap-2 text-[#7C3AED] font-medium hover:underline"
              >
                iyyansoft@gmail.com
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a
                href="tel:+919944085762"
                className="inline-flex items-center gap-2 text-[#7C3AED] font-medium hover:underline"
              >
                +91-9944085762
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
