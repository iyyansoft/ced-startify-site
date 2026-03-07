import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RefundPolicy() {
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
            Refund Policy
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
              Eligibility for Refunds
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Payment errors (e.g., duplicate payments).</li>
              <li>Event cancellation by the organizer.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              Refund Process
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Users must submit a refund request via email to{" "}
                <a
                  href="mailto:cedau.outreach@gmail.com"
                  className="text-[#7C3AED] font-medium hover:underline"
                >
                  cedau.outreach@gmail.com
                </a>{" "}
                within 7 days of payment.
              </li>
              <li>
                Refunds will be processed within 7–14 business days upon
                verification.
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl border border-red-100 bg-red-50/40 hover:border-red-200 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              Non-Refundable Scenarios
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>User cancellation after successful registration.</li>
              <li>Failure to attend the event.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/10 bg-[#7C3AED]/[0.02] hover:border-[#7C3AED]/20 transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                4
              </span>
              Payment Gateway Charges
            </h2>
            <p>
              Refunds will exclude the Razorpay transaction fee and any
              applicable taxes.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-[#7C3AED]/20 bg-gradient-to-br from-[#7C3AED]/5 to-[#a855f7]/5">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold flex items-center justify-center shrink-0">
                5
              </span>
              Contact Us
            </h2>
            <p className="mb-3">
              For refund-related queries, please reach out to us:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:cedau.outreach@gmail.com"
                className="inline-flex items-center gap-2 text-[#7C3AED] font-medium hover:underline"
              >
                cedau.outreach@gmail.com
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a
                href="tel:+914422359289"
                className="inline-flex items-center gap-2 text-[#7C3AED] font-medium hover:underline"
              >
                +91-44-22359289
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
