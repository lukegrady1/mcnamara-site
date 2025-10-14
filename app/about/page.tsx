import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS_INFO, TRUST_SIGNALS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              About McNamara Construction & Design
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Building trust and quality homes in Central Massachusetts for over 20 years
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Family-Owned Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  McNamara Construction & Design is a family-owned and operated business serving Central Massachusetts for more than two decades. We take pride in transforming houses into dream homes through expert craftsmanship, thoughtful design, and personalized service.
                </p>
                <p>
                  As a local, family-run company, we understand the importance of trust, integrity, and accountability. When you work with us, you're not just another project number. You're partnering with a team that genuinely cares about bringing your vision to life and stands behind every aspect of the work we do.
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Our Approach
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We specialize in home additions, kitchen and bathroom remodeling, ADUs, and comprehensive design-build services. What sets us apart is our in-house design capability, which streamlines the entire process from concept to completion. This integrated approach means better communication, fewer delays, and a cohesive vision that carries through every phase of your project.
                </p>
                <p>
                  Our team brings together decades of combined experience in construction, design, and project management. We're licensed and insured, and we stay current with building codes, best practices, and innovative techniques to deliver results that exceed expectations.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Our Values
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <ul className="list-inside space-y-3">
                  <li className="flex gap-3">
                    <span className="text-green-700">✓</span>
                    <span>
                      <strong>Quality Craftsmanship:</strong> We never cut corners. Every project receives the same attention to detail and commitment to excellence.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-700">✓</span>
                    <span>
                      <strong>Clear Communication:</strong> We keep you informed every step of the way, ensuring transparency and peace of mind.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-700">✓</span>
                    <span>
                      <strong>Respect for Your Home:</strong> We treat your property with care, maintaining a clean and organized work site throughout the project.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-700">✓</span>
                    <span>
                      <strong>Honest Pricing:</strong> No surprises. We provide detailed, transparent quotes and work within your budget.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Community Connection */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Serving Our Community
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Based in {BUSINESS_INFO.address.city}, we've built lasting relationships throughout Central Massachusetts. Many of our clients come from referrals, and we've had the privilege of working on multiple projects for the same families over the years. That kind of trust is something we never take for granted.
                </p>
                <p>
                  Whether you're expanding your home to accommodate a growing family, updating your kitchen to better suit your lifestyle, or adding an ADU for additional income or multi-generational living, we're here to help make it happen.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="border-y bg-gray-50 py-12">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Why Choose McNamara Construction
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_SIGNALS.map((signal) => (
              <Card key={signal.id} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-8 w-8 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {signal.label}
                  </h3>
                  <p className="text-gray-600">{signal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Let's Talk About Your Project
            </h2>
            <p className="mb-8 text-lg text-green-50">
              Ready to get started? Contact us today for a free consultation and let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-700"
              >
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  Call {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
