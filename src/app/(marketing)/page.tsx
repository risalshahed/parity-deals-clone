import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { NeonIcon } from "./_icons/Neon";
import { ClerkIcon } from "./_icons/Clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptionTirers";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatCompactNumber";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/BrandLogo";

const HomePage = () => {
  return (
    <>
      <section className='min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4'>
        <h1 className='text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4'>
          Price Smarter, Sell Bigger!
        </h1>
        <p className='text-lg lg:text-3xl max-w-screen-xl'>
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className='text-lg p-6 rounded-xl flex gap-2'>
            Get started for free <ArrowRightIcon className='size-5' />
          </Button>
        </SignUpButton>
      </section>
      <section className='bg-primary text-primary-foreground'>
        <div className='container px-8 md:px-16 py-16 flex flex-col gap-16'>
          <h2 className='text-3xl text-center text-balance'>
            Trusted by the top modern companies
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16'>
            <Link href='https://neon.tech'>
              <NeonIcon />
            </Link>
            <Link href='https://clerk.com'>
              <ClerkIcon />
            </Link>
            <Link href='https://neon.tech'>
              <NeonIcon />
            </Link>
            <Link href='https://clerk.com'>
              <ClerkIcon />
            </Link>
            <Link href='https://neon.tech'>
              <NeonIcon />
            </Link>
            <Link href='https://clerk.com'>
              <ClerkIcon />
            </Link>
            <Link href='https://neon.tech'>
              <NeonIcon />
            </Link>
            <Link href='https://clerk.com'>
              <ClerkIcon />
            </Link>
            <Link href='https://neon.tech'>
              <NeonIcon />
            </Link>
            <Link href='https://clerk.com' className='md:max-xl:hidden'>
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id='pricing' className='px-8 py-16 bg-accent/5'>
        <h2 className='text-4xl text-center text-balance font-semibold mb-8'>
          Pricing software that could boost your revenue growth by more than 50%
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto'>
          {
            subscriptionTiersInOrder?.map(tier =>
              <PricingCard key={tier.name} {...tier} />
            )
          }
        </div>
      </section>
      {/* Footer */}
      <footer className='container pt-16 pb-8 flex flex-col sm:flex-row gap-12 sm:gap-8 justify-center items-start'>
        <Link href='/'>
          <BrandLogo />
        </Link>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-36'>
          {/* Help & Solutions */}
          <div className='flex flex-col gap-8'>
            <FooterLinkGroup
              title='Help'
              links={[
                { label: 'PPP Discounts', href: '#' },
                { label: 'Discount API', href: '#' },
              ]}
            />
            <FooterLinkGroup
              title='Solutions'
              links={[
                { label: 'News Letter', href: '#' },
                { label: 'Saas Business', href: '#' },
                { label: 'Online Courses', href: '#' },
              ]}
            />
          </div>
          {/* Features, Tools & Company */}
          <div className='flex flex-col gap-8'>
            <FooterLinkGroup
              title='Features'              
              links={[
                { label: 'Holiday discounts', href: '#' },
                { label: 'PPP Discounts', href: '#' },
                { label: 'Time based discounts', href: '#' },
                { label: 'Benefits of geographical pricing?', href: '#' },
              ]}
            />
            <FooterLinkGroup
              title='Tools'
              links={[
                { label: 'Salary converter', href: '#' },
                { label: 'Coupon generator', href: '#' },
                { label: 'Stripe app', href: '#' },
                { label: 'SaaS pricing calculator', href: '#' },
                { label: 'Buying power calculator', href: '#' },
              ]}
            />
            <FooterLinkGroup
              title='Company'
              links={[
                { label: 'Affiliate', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Privacy', href: '#' },
              ]}
            />
          </div>
          {/* Integrations & Tutorials */}
          <div className='flex flex-col gap-8'>
            <FooterLinkGroup
              title='Integrations'
              links={[
                { label: 'Lemon Squeezy', href: '#' },
                { label: 'Gumroad', href: '#' },
                { label: 'Stripe', href: '#' },
                { label: 'Chargebee', href: '#' },
                { label: 'Whop', href: '#' },
                { label: 'Paddle', href: '#' },
                { label: 'Polar', href: '#' },
              ]}
            />
            <FooterLinkGroup
              title='Tutorials'
              links={[
                { label: 'Any website', href: '#' },
                { label: 'kajabi', href: '#' },
                { label: 'Podia', href: '#' },
                { label: 'Circle.so', href: '#' },
                { label: 'Beehiiv', href: '#' },
                { label: 'Framer', href: '#' },
                { label: 'Substack', href: '#' },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;

function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding
} : (typeof subscriptionTiersInOrder)[number]
) {
  const isMostPopular = name === 'Standard';

  return (
    <Card>
      {/* card header */}
      <CardHeader>
        <div className='text-accent font-semibold mb-8'>
          {name}
        </div>
        <CardTitle className='text-xl font-bold'>
          ${priceInCents / 100}/mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      {/* card content */}
      <CardContent>
        <SignUpButton>
          <Button
            className='text-lg w-full rounded-lg py-6'
            variant={isMostPopular ? 'accent' : 'default'}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      {/* card footer */}
      <CardFooter className='flex flex-col gap-4 items-start'>
        <Feature className='font-bold'>
          {maxNumberOfProducts} {maxNumberOfProducts > 1 ? 'products' : 'product'}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP Branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  )
}

function Feature({ children, className } : {
  children: ReactNode,
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CheckIcon className='size-4 stroke-accent bg-accent/25 rounded-full p-0.5' />
      <span>{children}</span>
    </div>
  )
}

function FooterLinkGroup({
  title,
  links
}: {
  title: string
  links: { label: string, href: string }[]
}) {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='font-semibold'>{title}</h3>
      <ul className='flex flex-col gap-2 text-sm'>
        {
          links.map(link =>
            <li key={crypto.randomUUID()}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}