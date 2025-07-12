import Head from 'next/head'
import Layout from '../components/Layout'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - C-Suite.xyz</title>
        <meta name="description" content="C-Suite.xyz Services - Executive coaching, leadership consulting, AI-powered tools, and strategic networking for C-suite professionals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Executive Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions designed specifically for today's visionary leaders and tomorrow's innovators.
          </p>
        </section>

        {/* Content Sections */}
        <section className="container mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Transforming Executive Leadership
            </h2>
            <p className="text-lg text-slate-600">
              Our services are designed to address the unique challenges facing modern executives. From AI-powered strategic insights to personalized coaching and exclusive networking opportunities, we provide the tools and connections you need to lead with confidence in an evolving business landscape.
            </p>
          </div>

          {/* First Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🎯 Executive Coaching
              </h3>
              <p className="text-slate-600">
                One-on-one coaching sessions with experienced executive mentors who understand the complexities of C-suite leadership. Develop your strategic thinking, communication skills, and leadership presence.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🤖 AI Leadership Advisors
              </h3>
              <p className="text-slate-600">
                Access cutting-edge AI tools designed specifically for executive decision-making. Get data-driven insights, scenario planning, and strategic recommendations tailored to your industry and challenges.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                📊 Strategic Consulting
              </h3>
              <p className="text-slate-600">
                Work with our team of expert consultants to develop and implement innovative strategies for digital transformation, organizational change, and sustainable growth.
              </p>
            </div>
          </div>

          {/* Second Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🌐 Executive Networking
              </h3>
              <p className="text-slate-600">
                Join an exclusive community of high-level professionals through curated networking events, mastermind groups, and strategic partnership opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                📚 Leadership Content Hub
              </h3>
              <p className="text-slate-600">
                Access our premium library of executive insights, case studies, strategic frameworks, and thought leadership content from industry experts and successful executives.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🚀 Innovation Workshops
              </h3>
              <p className="text-slate-600">
                Participate in exclusive workshops focusing on emerging trends, disruptive technologies, and innovative leadership approaches that will shape the future of business.
              </p>
            </div>
          </div>

          {/* Service Packages */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Service Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-blue-500 rounded-lg p-8 text-center bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Executive Essential</h3>
                <p className="text-lg font-semibold text-slate-700 mb-6">Perfect for emerging leaders</p>
                <ul className="text-left text-slate-600 space-y-2 mb-6">
                  <li>• Monthly coaching sessions</li>
                  <li>• Access to AI advisor tools</li>
                  <li>• Content library access</li>
                  <li>• Quarterly networking events</li>
                </ul>
              </div>
              <div className="border-2 border-orange-500 rounded-lg p-8 text-center bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Visionary Leader</h3>
                <p className="text-lg font-semibold text-slate-700 mb-6">For established executives</p>
                <ul className="text-left text-slate-600 space-y-2 mb-6">
                  <li>• Bi-weekly coaching sessions</li>
                  <li>• Full AI suite access</li>
                  <li>• Strategic consulting hours</li>
                  <li>• Exclusive mastermind groups</li>
                  <li>• Innovation workshop access</li>
                </ul>
              </div>
              <div className="border-2 border-slate-800 rounded-lg p-8 text-center bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">C-Suite Elite</h3>
                <p className="text-lg font-semibold text-slate-700 mb-6">For senior executives & founders</p>
                <ul className="text-left text-slate-600 space-y-2 mb-6">
                  <li>• Weekly coaching & mentoring</li>
                  <li>• Custom AI solutions</li>
                  <li>• Dedicated consulting support</li>
                  <li>• Private networking events</li>
                  <li>• Speaking opportunities</li>
                  <li>• Board advisory access</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-white rounded-lg p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Elevate Your Leadership Impact?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss which services align best with your leadership goals and organizational needs. Our team is ready to create a customized approach for your executive development.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Schedule a Consultation
            </a>
          </section>
        </section>
      </Layout>
    </>
  )
}