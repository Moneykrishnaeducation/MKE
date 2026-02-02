import React, { useEffect } from "react"
import { BookOpen, Zap, List, ShieldCheck, FileText, Clock, TrendingUp } from "lucide-react"

const Blog = () => {
  const keywords = [
    "Best online trading courses",
    "Learn stock market trading",
    "Forex trading education",
    "Trading webinars",
    "Day trading strategies",
  ];

  useEffect(() => {
    // Set or update the main keywords meta tag
    const prevKeywords = document.querySelector('meta[name="keywords"]');
    const prevKeywordsContent = prevKeywords ? prevKeywords.getAttribute('content') : null;

    let keywordsMeta = prevKeywords;
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', keywords.join(', '));

    // Create article:tag metas for each keyword (useful for some crawlers)
    const createdMetas = [];
    keywords.forEach((k) => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'article:tag');
      m.setAttribute('content', k);
      m.setAttribute('data-mk-generated', 'true');
      document.head.appendChild(m);
      createdMetas.push(m);
    });

    return () => {
      // restore previous keywords meta value or remove if it didn't exist
      if (prevKeywords) {
        prevKeywords.setAttribute('content', prevKeywordsContent || '');
      } else if (keywordsMeta && keywordsMeta.getAttribute('data-mk-generated') !== 'true') {
        // If we created it here and it wasn't a prior tag, remove it
        try { document.head.removeChild(keywordsMeta); } catch (e) {}
      }

      // remove created article:tag metas
      createdMetas.forEach((m) => {
        try { document.head.removeChild(m); } catch (e) {}
      });
    };
  }, []);
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto max-w-6xl px-6 text-white">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
            Trading Education
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Steps to Become a Successful Day Trader
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100">
            A clear, practical roadmap to build trading skills, discipline, and long-term consistency.
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-blue-100">
            <span>⏱ 6 min read</span>
            <span>•</span>
            <span>Updated for 2026</span>
            <span>•</span>
            <span>Beginner → Intermediate</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Article */}
          <article className="prose prose-slate col-span-2 max-w-none">
            {(() => {
              const sections = [
                {
                  title: '1. Build a Strong Foundation',
                  text: 'Understand instruments, strategies, and market dynamics before risking capital. Quality education accelerates confidence.',
                  Icon: BookOpen,
                },
                {
                  title: '2. Master Your Trading Strategy',
                  text: 'Choose a risk–reward structure that fits your psychology and availability.',
                  Icon: Zap,
                },
                {
                  title: '3. Create a Detailed Trading Plan',
                  text: 'Define entries, exits, stop-losses, position sizing, and routines.',
                  Icon: List,
                },
                {
                  title: '4. Master Risk Management',
                  text: 'Never risk more than a small percentage of capital on a single trade.',
                  Icon: ShieldCheck,
                },
                {
                  title: '5. Maintain a Trading Journal',
                  text: 'Track logic, emotions, results, and lessons for continuous improvement.',
                  Icon: FileText,
                },
                {
                  title: '6. Continuously Seek Knowledge',
                  text: 'Markets evolve—so should your skills and strategies.',
                  Icon: Clock,
                },
                {
                  title: '7. Practice Discipline and Patience',
                  text: 'Consistency beats impulsive trades and emotional decisions.',
                  Icon: TrendingUp,
                },
              ]

              return (
                <div className="grid gap-6 sm:grid-cols-2">
                  {sections.map(({ title, text, Icon }) => (
                    <div key={title} className="flex flex-col items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center mx-auto rounded-lg" style={{ background: '#91C4C3' }}>
                        <Icon className="h-6 w-6 text-white mx-auto" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            })()}
            
          {/* Sidebar */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="sticky top-50 space-y-6">
              

              {/* Quick Tips */}
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
                <h4 className="text-sm font-semibold text-gray-800">
                  Pro Trading Tips
                </h4>
                <ol className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>1. Always use a stop-loss</li>
                  <li>2. Risk &lt; 2% per trade</li>
                  <li>3. Review trades weekly</li>
                </ol>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h4 className="text-lg font-semibold">
                  Learn Trading the Right Way
                </h4>
                <p className="mt-2 text-sm text-blue-100">
                  Structured education beats random tips.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Start Learning
                </a>
              </div>
            </div>
          </div>
            {/* Key Takeaways */}
            <div className="my-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="text-lg font-semibold text-blue-800">
                Key Takeaways
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-blue-700">
                <li>Trading is a skill, not luck</li>
                <li>Risk management defines survival</li>
                <li>Consistency beats intensity</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-xl border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">
                Ready to upgrade your trading skills?
              </h3>
              <p className="mt-2 text-gray-600">
                Learn from experts with structured courses, live webinars, and proven frameworks.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  View Courses
                </a>
                <a
                  href="#"
                  className="rounded-md border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Join Webinar
                </a>
              </div>
            </div>
          </article>

        </div>
        
      </section>
    </main>
  )
}

export default Blog
