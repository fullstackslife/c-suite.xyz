import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <Head>
        <title>About - C-Suite.xyz</title>
        <meta name="description" content="About C-Suite.xyz - Learn about our mission to empower executive leaders with innovative strategies and tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            About C-Suite.xyz
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bridging the gap between traditional executive leadership and the demands of tomorrow's business landscape.
          </p>
        </section>

        {/* Content Sections */}
        <section className="container mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                We believe that today's executive leaders need more than conventional wisdom to navigate an increasingly complex and fast-paced business environment. Our mission is to empower C-suite executives, startup founders, and high-level professionals with the <span className="font-semibold text-blue-600">innovative strategies, cutting-edge tools, and visionary insights</span> they need to lead with confidence and drive meaningful impact.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why C-Suite.xyz Exists</h2>
              <p className="text-lg text-slate-600 mb-6">
                The executive landscape has fundamentally changed. Digital transformation, AI revolution, remote work dynamics, and shifting market forces require leaders who can think beyond traditional frameworks. Yet many executive resources still operate with outdated approaches.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                C-Suite.xyz was created to fill this gap—providing a platform where <span className="font-semibold text-blue-600">forward-thinking leaders can access next-generation strategies</span>, connect with fellow visionaries, and leverage innovative tools designed specifically for the modern executive environment.
              </p>
            </section>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  🧠 Visionary Thinking
                </h3>
                <p className="text-slate-600">
                  We champion bold, innovative approaches to leadership that prepare executives for future challenges, not just current ones.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  🔬 Evidence-Based Strategies
                </h3>
                <p className="text-slate-600">
                  Our methodologies combine proven leadership principles with cutting-edge research and real-world executive experience.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  🌐 Global Perspective
                </h3>
                <p className="text-slate-600">
                  We understand that modern leadership requires a global mindset and cross-cultural competency in an interconnected world.
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Approach</h2>
              <p className="text-lg text-slate-600 mb-6">
                At C-Suite.xyz, we focus on three core pillars that define effective modern executive leadership:
              </p>
              <ul className="text-lg text-slate-600 space-y-4 ml-8">
                <li>
                  <strong className="text-slate-900">Strategic Innovation:</strong> Moving beyond reactive management to proactive, visionary leadership
                </li>
                <li>
                  <strong className="text-slate-900">Technology Integration:</strong> Leveraging AI and digital tools to enhance decision-making and organizational effectiveness
                </li>
                <li>
                  <strong className="text-slate-900">Human-Centered Leadership:</strong> Balancing technological advancement with authentic, empathetic leadership that inspires teams and drives culture
                </li>
              </ul>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-white rounded-lg p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Join the Future of Executive Leadership
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Ready to connect with a community of visionary leaders who are shaping the future of business? Discover how C-Suite.xyz can elevate your leadership impact.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Connect With Us
              </a>
            </section>
          </div>
        </section>
      </Layout>
    </>
  )
}