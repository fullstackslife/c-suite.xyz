import Head from 'next/head'
import Layout from '../components/Layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const pricingTiers = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'per user/month',
    monthlyPrice: 0,
    features: [
      { name: 'Basic dashboard access', included: true },
      { name: 'Community support', included: true },
      { name: 'Up to 2 team members', included: true },
      { name: 'Advanced analytics', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false }
    ],
    stripeProductId: 'price_free'
  },
  {
    id: 'essential',
    name: 'Essential',
    price: 'From $5',
    period: 'per user/month',
    monthlyPrice: 5,
    features: [
      { name: 'Full dashboard access', included: true },
      { name: 'Email support', included: true },
      { name: 'Up to 10 team members', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false }
    ],
    stripeProductId: 'price_essential_monthly'
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 'From $15',
    period: 'per user/month',
    monthlyPrice: 15,
    popular: true,
    features: [
      { name: 'Advanced dashboard', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Team collaboration tools', included: true },
      { name: 'Custom integrations', included: false }
    ],
    stripeProductId: 'price_plus_monthly'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'From $25',
    period: 'per user/month',
    monthlyPrice: 25,
    features: [
      { name: 'Premium dashboard', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Unlimited everything', included: true },
      { name: 'Advanced analytics & reports', included: true },
      { name: 'API access', included: true },
      { name: 'Basic integrations', included: true }
    ],
    stripeProductId: 'price_pro_monthly'
  },
  {
    id: 'team',
    name: 'Team',
    price: 'From $50',
    period: 'per user/month',
    monthlyPrice: 50,
    features: [
      { name: 'Business dashboard', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Multi-org management', included: true },
      { name: 'Custom reports & exports', included: true },
      { name: 'Full API access', included: true },
      { name: 'Advanced integrations', included: true }
    ],
    stripeProductId: 'price_team_monthly'
  },
  {
    id: 'teampro',
    name: 'TeamPro',
    price: 'From $75',
    period: 'per user/month',
    monthlyPrice: 75,
    features: [
      { name: 'Premium dashboard', included: true },
      { name: 'Premium support', included: true },
      { name: 'Advanced automation', included: true },
      { name: 'Real-time analytics', included: true },
      { name: 'Custom workflows', included: true },
      { name: 'Enterprise integrations', included: true }
    ],
    stripeProductId: 'price_teampro_monthly'
  },
  {
    id: 'business',
    name: 'Business',
    price: 'From $100',
    period: 'per user/month',
    monthlyPrice: 100,
    features: [
      { name: 'Executive dashboard', included: true },
      { name: 'Executive support team', included: true },
      { name: 'Strategic insights', included: true },
      { name: 'Executive reporting', included: true },
      { name: 'Leadership analytics', included: true },
      { name: 'C-suite integrations', included: true }
    ],
    stripeProductId: 'price_business_monthly'
  },
  {
    id: 'businesspro',
    name: 'BusinessPro',
    price: 'From $250',
    period: 'per user/month',
    monthlyPrice: 250,
    features: [
      { name: 'Enterprise dashboard', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'White-glove onboarding', included: true },
      { name: 'Custom analytics & reports', included: true },
      { name: 'Full API access', included: true },
      { name: 'Custom integrations', included: true }
    ],
    stripeProductId: 'price_businesspro_monthly'
  }
]

// Calculate lifetime pricing (32X monthly cost)
const calculateLifetimePrice = (monthlyPrice: number) => {
  return monthlyPrice * 32
}

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | C‑Suite</title>
        <meta 
          name="description" 
          content="Choose the perfect pricing plan for your executive team. From Free to Enterprise, find the right solution for your C-suite needs." 
        />
        <meta name="keywords" content="pricing, executive, leadership, business plans, C-suite" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Pricing | C‑Suite" />
        <meta property="og:description" content="Choose the perfect pricing plan for your executive team. From Free to Enterprise, find the right solution for your C-suite needs." />
        <meta property="og:url" content="https://c-suite.xyz/pricing" />
        <meta property="og:image" content="https://c-suite.xyz/og-pricing.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="Pricing | C‑Suite" />
        <meta name="twitter:description" content="Choose the perfect pricing plan for your executive team. From Free to Enterprise, find the right solution for your C-suite needs." />
        <meta name="twitter:image" content="https://c-suite.xyz/og-pricing.jpg" />
      </Head>

      <Layout>
        <div className="container mx-auto max-w-7xl px-6 py-16">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Pricing
          </h1>

          {/* Pricing Slider */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-6 px-4 whitespace-nowrap">
              {pricingTiers.map((tier) => (
                <Card 
                  key={tier.id}
                  className={`w-[300px] shrink-0 snap-start relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border ${
                    tier.popular ? 'border-2 border-blue-500 shadow-lg' : 'border-gray-200'
                  } bg-white`}
                  data-plan-id={tier.stripeProductId}
                >
                {/* Most Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  {/* Plan Name */}
                  <CardTitle className="text-xl font-bold text-slate-900 mb-4">
                    {tier.name}
                  </CardTitle>
                  
                  {/* Price Display */}
                  <div className="mb-2">
                    <div className="text-3xl font-bold text-slate-900">
                      {tier.price}
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      {tier.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6">
                  {/* Features List */}
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 text-lg mt-0.5">
                          {feature.included ? '✅' : '❌'}
                        </span>
                        <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 px-6 pb-6 flex flex-col gap-3">
                  {tier.id === 'free' ? (
                    <Button 
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300"
                      size="sm"
                    >
                      Get Started Free
                    </Button>
                  ) : (
                    <>
                      <Button 
                        className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                        size="sm"
                      >
                        Free Trial
                      </Button>
                      <Button 
                        className={`w-full transition-all duration-200 ${
                          tier.popular 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                        size="sm"
                      >
                        Buy Now
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

          {/* Lifetime Access Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Lifetime Access
            </h2>
            
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scroll-smooth snap-x snap-mandatory">
              <div className="flex gap-6 px-4 whitespace-nowrap">
                {pricingTiers.filter(tier => tier.id !== 'free').map((tier) => {
                  const lifetimePrice = tier.monthlyPrice ? calculateLifetimePrice(tier.monthlyPrice) : null
                  
                  return (
                    <Card 
                      key={`lifetime-${tier.id}`}
                      className="w-[300px] shrink-0 snap-start relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-200 bg-white"
                      data-plan-id={`${tier.stripeProductId}_lifetime`}
                    >
                    {/* Save Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-500 text-white px-3 py-1 text-xs font-medium">
                        32X Monthly
                      </Badge>
                    </div>

                    <CardHeader className="text-center pb-4 pt-6">
                      <CardTitle className="text-lg font-bold text-slate-900 mb-4">
                        {tier.name}
                      </CardTitle>
                      
                      <div className="mb-2">
                        {lifetimePrice ? (
                          <>
                            <div className="text-2xl font-bold text-slate-900">
                              ${lifetimePrice.toLocaleString()}
                            </div>
                            <div className="text-sm text-slate-600 mt-1">
                              One-time payment
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-lg font-bold text-slate-900">
                              Custom Quote
                            </div>
                            <div className="text-sm text-slate-600 mt-1">
                              Contact us for pricing
                            </div>
                          </>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="px-6">
                      <div className="text-center">
                        {lifetimePrice && (
                          <div className="text-sm text-green-600 font-medium mb-4">
                            Save ${Math.round((tier.monthlyPrice! * 12 * 3) - lifetimePrice)} 
                            <br />vs. 3 years monthly
                          </div>
                        )}
                        <p className="text-sm text-slate-600">
                          All {tier.name} features included forever
                        </p>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-4 px-6 pb-6">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        size="sm"
                      >
                        Get Lifetime Access
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-4">
              All plans include 30-day money-back guarantee
            </p>
            <p className="text-sm text-slate-500">
              Need help choosing? <a href="/contact" className="text-blue-600 hover:underline">Contact our team</a>
            </p>
          </div>
          </div>
        </div>
      </Layout>
    </>
  )
}