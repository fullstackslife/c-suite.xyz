import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>C-Suite.xyz - Where Visionaries Connect</title>
        <meta name="description" content="C-Suite.xyz - Where visionaries connect. Next-gen strategies, tools, and conversations for executive leaders and innovators." />
        <meta name="keywords" content="executive leadership, C-suite, business strategy, leadership coaching, innovation" />
        <meta property="og:title" content="C-Suite.xyz - Executive Leadership Platform" />
        <meta property="og:description" content="Where visionaries connect. Delivering next-gen strategies and tools for today's executive leaders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://c-suite.xyz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Where Visionaries Connect
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            C-Suite.xyz delivers next-gen strategies, tools, and conversations for today's executive leaders and tomorrow's innovators.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Join Our Executive Network
          </Link>
        </section>

        {/* Main Content Section */}
        <section className="container mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Empowering Executive Excellence
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              In today's rapidly evolving business landscape, executive leaders need more than traditional strategies. They need innovative approaches, cutting-edge tools, and connections with fellow visionaries who understand the unique challenges of leadership at the highest levels.
            </p>
            <p className="text-lg text-slate-600">
              C-Suite.xyz is the premier platform where <span className="font-semibold text-blue-600">executive excellence meets innovation</span>, providing you with the strategic insights, coaching resources, and networking opportunities essential for modern leadership success.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🎯 Strategic Leadership
              </h3>
              <p className="text-slate-600">
                Access exclusive insights and frameworks designed specifically for C-level executives navigating complex business challenges and opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🤝 Executive Networking
              </h3>
              <p className="text-slate-600">
                Connect with a curated community of high-level professionals, industry leaders, and innovative thinkers who share your vision for the future.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🚀 Innovation Tools
              </h3>
              <p className="text-slate-600">
                Leverage AI-powered advisors and cutting-edge tools designed to enhance decision-making and strategic planning for executive leaders.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center bg-white rounded-lg p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Elevate Your Leadership?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join an exclusive network of visionary leaders who are shaping the future of business. Get access to strategic insights, executive coaching, and innovative tools that drive results.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get Started Today
            </Link>
          </section>
        </section>
      </Layout>
    </>
  )
}