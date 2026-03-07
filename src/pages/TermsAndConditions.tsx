import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
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
            Terms &amp; Conditions
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
              Welcome to <strong>austartify.com</strong>, a service provided by
              IyyanSoft Technologies. By accessing or using our website, you
              agree to comply with the following terms and conditions.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              Services Provided
            </h2>
            <p>
              <strong>austartify.com</strong> facilitates event registration,
              payment processing, and related services. These services are
              offered in association with the Centre for Entrepreneurship
              Development (CED), Anna University, Chennai.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              User Obligations
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Users must provide accurate information during registration and
                payment.
              </li>
              <li>Unauthorized use of the platform is strictly prohibited.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                4
              </span>
              Payments
            </h2>
            <p>
              All payments are securely processed via Razorpay. Users must
              adhere to Razorpay's terms of service.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                5
              </span>
              Data Usage
            </h2>
            <p>
              The data provided by users will be managed according to our{" "}
              <a href="/privacy-policy" className="text-[#7C3AED] font-medium hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                6
              </span>
              Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms and Conditions at any
              time without prior notice. Continued use of the platform
              constitutes acceptance of the updated terms.
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
              For any queries regarding these terms, please reach out to us:
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
