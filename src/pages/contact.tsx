import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    company: '',
    interest: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      title: '',
      company: '',
      interest: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Contact - C-Suite.xyz</title>
        <meta name="description" content="Contact C-Suite.xyz - Connect with our executive leadership team and join our network of visionary leaders." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Connect With Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to join a network of visionary leaders? Let's start the conversation about your executive leadership journey.
          </p>
        </section>

        {/* Content Sections */}
        <section className="container mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-6">
                Whether you're interested in our executive coaching services, want to join our leadership network, or have questions about how C-Suite.xyz can support your professional growth, we'd love to hear from you.
              </p>
              <p className="text-lg text-slate-600">
                Our team of executive leadership experts is here to help you navigate the complexities of modern business leadership and unlock your full potential as a visionary leader.
              </p>
            </section>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Start Your Leadership Journey
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                    Current Title/Position
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., CEO, CTO, Founder"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                    What are you most interested in?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">Please select...</option>
                    <option value="executive-coaching">Executive Coaching</option>
                    <option value="ai-advisors">AI Leadership Advisors</option>
                    <option value="strategic-consulting">Strategic Consulting</option>
                    <option value="networking">Executive Networking</option>
                    <option value="workshops">Innovation Workshops</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your leadership goals and challenges *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your current leadership challenges, goals, or specific areas where you'd like support..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  📧 Email
                </h3>
                <p className="text-slate-600 mb-2">
                  For general inquiries and partnership opportunities
                </p>
                <p className="font-semibold text-slate-900">
                  hello@c-suite.xyz
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  📅 Schedule a Call
                </h3>
                <p className="text-slate-600 mb-2">
                  Book a 30-minute strategy session with our executive team
                </p>
                <p className="font-semibold text-slate-900">
                  Available by appointment
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  💼 Partnership Inquiries
                </h3>
                <p className="text-slate-600 mb-2">
                  Interested in strategic partnerships or collaboration?
                </p>
                <p className="font-semibold text-slate-900">
                  partnerships@c-suite.xyz
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <section className="text-center bg-white rounded-lg p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Join Our Executive Network
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Connect with like-minded leaders, access exclusive insights, and be part of a community that's shaping the future of business leadership.
              </p>
              <p className="text-slate-500 italic">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </section>
          </div>
        </section>
      </Layout>
    </>
  )
}