import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 py-12">

<h1
  className="relative pl-6 mb-8
  text-3xl sm:text-4xl font-bold tracking-tight
  bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent
  drop-shadow-sm
  before:absolute before:left-0 before:top-1
  before:h-10 before:w-1.5 before:rounded-full
  before:bg-gradient-to-b before:from-emerald-500 before:to-sky-500"
>
  Privacy Policy
</h1>
        

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {[
            {
              title: "1. Nature of Our Services",
              content:
                "MoneyKrishna Education is an educational platform offering learning content related to financial markets, trading concepts, courses, webinars, and insights. We do not guarantee profits or investment outcomes.",
            },
            {
              title: "2. Information We Collect",
              content:
                "We may collect personal details such as name, email, phone number, login credentials, and payment-related information. Where legally required, identity documents may be collected for KYC/AML compliance.",
            },
            {
              title: "3. Technical & Usage Data",
              content:
                "We automatically collect technical information including IP address, device type, browser details, operating system, pages visited, and usage behavior through cookies and similar technologies.",
            },
            {
              title: "4. Cookies & Tracking",
              content:
                "We use cookies to enhance user experience, analyze traffic, and personalize content. You may disable cookies in your browser, but some features may not function properly.",
            },
            {
              title: "5. Educational Disclaimer & Risk Warning",
              content:
                "All content is for educational purposes only. Trading and investing involve significant risk, including possible loss of capital. Past performance does not guarantee future results.",
            },
            {
              title: "6. No Financial Advice",
              content:
                "Nothing on MoneyKrishna Education should be considered guaranteed financial advice, a promise of returns, or a substitute for professional financial consultation. Users must make independent financial decisions.",
            },
            {
              title: "7. Data Sharing",
              content:
                "We do not sell or rent personal data. Information may be shared only with trusted service providers, authorized partners, or government authorities when legally required, under strict confidentiality obligations.",
            },
            {
              title: "8. Data Security",
              content:
                "We implement reasonable technical and organizational measures to protect your data. However, no digital platform can guarantee absolute security.",
            },
            {
              title: "9. User Responsibilities & Prohibited Use",
              content:
                "Users must provide accurate information, safeguard login credentials, and use the platform legally. Activities such as hacking, fraud, spamming, or intellectual property violations are strictly prohibited.",
            },
            {
              title: "10. Legal Compliance, Retention & Updates",
              content:
                "Data is retained only as long as necessary for services and legal compliance. Our services are not intended for users under 18. This policy may be updated at any time, and continued use implies acceptance.",
              
            },
          ].map((item, index) => (
            <section
              key={index}
              className="
                group relative rounded-2xl
                bg-white/70 backdrop-blur-xl
                border border-white/50
                p-7
                shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                transition-all duration-300 ease-out
                before:absolute before:left-0 before:top-6
                before:h-12 before:w-1.5 before:rounded-full
                before:bg-gradient-to-b before:from-emerald-400 before:to-sky-400
                hover:before:top-4 hover:before:h-16
              "
            >
<h2 className="flex items-start gap-3 mb-3">
  {/* Number badge */}
  <span
    className="
      flex items-center justify-center
      h-8 w-8 shrink-0
      rounded-lg
      bg-gradient-to-br from-emerald-500 to-sky-500
      text-white text-xs font-bold
      shadow-md
    "
  >
    {item.title.split(".")[0]}
  </span>

<span
  className="
    relative
    text-lg sm:text-xl
    font-semibold
    tracking-tight
    text-slate-900
    leading-snug
    transition-colors duration-300
    group-hover:text-emerald-600
  "
>
  {item.title.split(". ").slice(1).join(". ")}

  {/* subtle underline accent */}
  <span
    className="
      absolute left-0 -bottom-1
      h-[3px] w-12
      bg-gradient-to-r from-emerald-500 to-sky-500
      rounded-full
      transition-all duration-300
      group-hover:w-full
    "
  />
</span>
</h2>


              {item.content && (
                <p className="text-sm leading-relaxed text-slate-700">
                  {item.content}
                </p>
              )}

              {item.list && (
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer Disclaimer */}
<div className="mt-16 flex justify-center">
  <p className="text-xs sm:text-sm text-slate-600 bg-white/60 backdrop-blur-md
    px-6 py-2 rounded-full border border-white/50 shadow-sm text-center whitespace-nowrap">
    This Privacy Policy is provided for informational purposes only and does not constitute legal advice. Please consult a qualified legal professional to ensure compliance with applicable laws.
  </p>
</div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;