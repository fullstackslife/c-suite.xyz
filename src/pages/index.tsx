import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>C-Suite.xyz - Executive Leadership Platform</title>
        <meta name="description" content="Where visionaries connect. C-Suite.xyz delivers next-gen strategies, tools, and conversations for today's executive leaders and tomorrow's innovators." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              C-Suite.xyz
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Where visionaries connect. C-Suite.xyz delivers next-gen strategies, tools, and conversations for today's executive leaders and tomorrow's innovators.
            </p>
            <div className="space-x-4">
              <Link 
                href="/Pricing" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}