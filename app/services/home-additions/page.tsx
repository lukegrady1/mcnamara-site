"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BUSINESS_INFO } from "@/lib/constants";

export default function HomeAdditionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      title: "Increase Home Value",
      description: "A well-designed addition can significantly boost your property's market value and appeal to future buyers.",
    },
    {
      title: "Avoid Moving Costs",
      description: "Get the space you need without the hassle and expense of selling your home and relocating to a new neighborhood.",
    },
    {
      title: "Customized to Your Needs",
      description: "Design the perfect space that matches your family's lifestyle, from home offices to in-law suites.",
    },
    {
      title: "Seamless Integration",
      description: "Our expert craftsmanship ensures your addition looks like it was always part of your home.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We meet at your home to discuss your vision, assess the space, and understand your budget and timeline.",
    },
    {
      step: "2",
      title: "Design & Planning",
      description: "Our in-house design team creates detailed plans and 3D renderings, working with you to refine every detail.",
    },
    {
      step: "3",
      title: "Permits & Approvals",
      description: "We handle all necessary permits and approvals, ensuring your project meets local building codes and regulations.",
    },
    {
      step: "4",
      title: "Construction",
      description: "Our skilled craftsmen bring your vision to life with quality materials and attention to detail.",
    },
    {
      step: "5",
      title: "Final Walkthrough",
      description: "We conduct a thorough inspection with you to ensure every detail meets our high standards and your expectations.",
    },
  ];

  const faqs = [
    {
      question: "How long does a home addition project typically take?",
      answer: "Most home additions take 3-6 months from design to completion, depending on the size and complexity. We'll provide a detailed timeline during your consultation. Factors like weather, permit processing, and material availability can affect the schedule.",
    },
    {
      question: "Do I need to move out during construction?",
      answer: "In most cases, you can remain in your home during construction. We take careful steps to minimize disruption, contain dust, and maintain a clean work site. For major structural work, there may be brief periods where certain areas are inaccessible.",
    },
    {
      question: "How much does a home addition cost in Central MA?",
      answer: "Home addition costs vary widely based on size, complexity, and finishes, typically ranging from $150-$400 per square foot. During your free consultation, we'll discuss your specific needs and budget to provide an accurate estimate.",
    },
    {
      question: "Will my addition match my existing home?",
      answer: "Absolutely. We take great care to match your home's existing architecture, materials, and finishes. Our goal is to make your addition look like it's always been part of your home. We'll show you samples and options during the design phase.",
    },
    {
      question: "What types of additions do you build?",
      answer: "We build all types of additions including master bedroom suites, family room expansions, sunrooms, in-law apartments, second-story additions, kitchen expansions, and more. We serve homeowners throughout Central Massachusetts including Holden, Worcester, Shrewsbury, and surrounding towns.",
    },
    {
      question: "Do you handle the permits and inspections?",
      answer: "Yes, we manage the entire permit process from application to final inspections. We're familiar with building codes throughout Central MA including Holden, Boylston, Worcester, Shrewsbury, and neighboring communities.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-gray-600">
                <li>
                  <Link href="/" className="hover:text-green-700">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-green-700">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-900 font-medium">Home Additions</li>
              </ol>
            </nav>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Home Additions in Central Massachusetts
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Need more space but love your home and neighborhood? McNamara Construction specializes in creating beautiful, functional home additions that seamlessly blend with your existing home. Serving Holden, Worcester, Shrewsbury, Boylston, and surrounding Central MA communities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact-form">Get Free Consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  Call {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Why Choose McNamara Construction for Your Home Addition?
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                For over 20 years, McNamara Construction has been the trusted choice for home additions throughout Central Massachusetts. As a family-owned business based in Holden, we understand the unique architectural styles and building requirements of homes in Worcester County.
              </p>
              <p>
                Our design-build approach means you work with one team from concept to completion, eliminating the confusion and delays that come from coordinating multiple contractors. We handle everything: design, permits, construction, and final inspections.
              </p>
              <p>
                Whether you're in Holden, Boylston, Worcester, Shrewsbury, Westborough, or any surrounding town, we bring local expertise, quality craftsmanship, and personalized service to every project.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Benefits of a Home Addition
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Expanding your home offers numerous advantages over moving to a new property.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              We follow a proven process to ensure your home addition project is completed on time, on budget, and to your complete satisfaction.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Common questions about home additions in Central Massachusetts
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left"
                    aria-expanded={openFaqIndex === index}
                  >
                    <CardHeader className="hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between gap-4">
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </CardTitle>
                        <svg
                          className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                            openFaqIndex === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </CardHeader>
                  </button>
                  {openFaqIndex === index && (
                    <CardContent className="pt-0">
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Ready to Expand Your Home?
                </h2>
                <p className="mb-8 text-lg text-gray-700">
                  Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
                </p>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Project *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="What type of addition are you considering? Any specific requirements or timeline?"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Request Free Consultation
                  </Button>
                </form>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-1 text-sm font-medium text-gray-500">Phone</div>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-green-700 hover:text-green-800 font-medium"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium text-gray-500">Email</div>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-green-700 hover:text-green-800 font-medium break-all"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium text-gray-500">Location</div>
                      <p className="text-gray-900">
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <h3 className="mb-2 font-bold text-gray-900">Service Areas</h3>
                    <p className="text-sm text-gray-700">
                      We proudly serve homeowners throughout Central Massachusetts including Holden, Worcester, Shrewsbury, Boylston, Westborough, Northborough, Grafton, and surrounding communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-green-700 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let's Create Your Dream Addition
            </h2>
            <p className="mb-8 text-lg text-green-50">
              With 20+ years of experience serving Central Massachusetts, we have the expertise to bring your vision to life. Schedule your free consultation today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              {/* TODO: Create projects page
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
              */}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
