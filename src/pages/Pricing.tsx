import Head from 'next/head'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const pricingTiers = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$9',
    period: '/mo',
    description: 'Perfect for small teams getting started',
    features: [
      { name: 'Dashboard access', included: true },
      { name: '1 bot included', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced analytics', included: false }
    ],
    stripeProductId: 'price_basic_monthly'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'Most popular choice for growing businesses',
    features: [
      { name: '5 bots included', included: true },
      { name: 'Real-time logs', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced analytics', included: true }
    ],
    popular: true,
    stripeProductId: 'price_pro_monthly'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Advanced features for large organizations',
    features: [
      { name: 'Dedicated VPS', included: true },
      { name: 'White-glove setup', included: true },
      { name: 'SLA guarantee', included: true },
      { name: 'Custom integrations', included: true }
    ],
    stripeProductId: 'price_enterprise_custom'
  }
]

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - C-Suite.xyz</title>
        <meta 
          name="description" 
          content="Flexible pricing plans for executive leaders. Choose from Basic, Pro, or Enterprise tiers designed for your business needs." 
        />
        <meta name="keywords" content="pricing, executive, leadership, business plans, C-suite" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Pricing - C-Suite.xyz" />
        <meta property="og:description" content="Flexible pricing plans for executive leaders. Choose from Basic, Pro, or Enterprise tiers designed for your business needs." />
        <meta property="og:url" content="https://c-suite.xyz/pricing" />
        <meta property="og:image" content="https://c-suite.xyz/og-pricing.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="Pricing - C-Suite.xyz" />
        <meta name="twitter:description" content="Flexible pricing plans for executive leaders. Choose from Basic, Pro, or Enterprise tiers designed for your business needs." />
        <meta name="twitter:image" content="https://c-suite.xyz/og-pricing.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-7xl px-6 py-16">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Pricing
          </h1>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.id}
                className={`relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  tier.popular ? 'border-2 border-blue-500 shadow-lg' : 'border border-gray-200'
                }`}
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
                  {/* Plan Name Badge */}
                  <Badge variant="outline" className="w-fit mx-auto mb-4">
                    {tier.name}
                  </Badge>
                  
                  {/* Price Display */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">
                      {tier.price}
                    </span>
                    <span className="text-lg text-slate-600 ml-1">
                      {tier.period}
                    </span>
                  </div>
                  
                  <CardDescription className="text-base">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-3 text-lg">
                          {feature.included ? '✅' : '❌'}
                        </span>
                        <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button 
                    className={`w-full transition-all duration-200 ${
                      tier.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
    </>
  )
}