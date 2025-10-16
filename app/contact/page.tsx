"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function ContactPage() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "placeholder"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Get Your Free In-Home Consultation
            </h1>
            <p className="mx-auto max-w-2xl text-md text-gray-700">
              Let's discuss your project. Fill out the form below or give us a call at{" "}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-semibold text-green-700 hover:underline"
              >
                {BUSINESS_INFO.phone}
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  {state.succeeded ? (
                    <div className="rounded-lg bg-green-50 p-6 text-center">
                      <div className="mb-2 text-4xl">✓</div>
                      <h3 className="mb-2 text-xl font-semibold text-green-900">
                        Thank You!
                      </h3>
                      <p className="text-green-800">
                        We've received your request and will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Smith"
                            required
                            disabled={state.submitting}
                          />
                          <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            disabled={state.submitting}
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(508) 555-1234"
                            required
                            disabled={state.submitting}
                          />
                          <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="town">Town *</Label>
                          <select
                            id="town"
                            name="town"
                            title="Select your town"
                            required
                            disabled={state.submitting}
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select your town</option>
                            {SERVICE_AREAS.map((area) => (
                              <option key={area} value={area}>
                                {area}
                              </option>
                            ))}
                            <option value="other">Other</option>
                          </select>
                          <ValidationError
                            prefix="Town"
                            field="town"
                            errors={state.errors}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <select
                          id="projectType"
                          name="projectType"
                          title="Select project type"
                          required
                          disabled={state.submitting}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select project type</option>
                          {SERVICES.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                        <ValidationError
                          prefix="Project Type"
                          field="projectType"
                          errors={state.errors}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Tell Us About Your Project *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please describe your project, timeline, budget range, and any other details..."
                          rows={6}
                          required
                          disabled={state.submitting}
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="file">Attach Files (Optional)</Label>
                        <Input
                          id="file"
                          name="file"
                          type="file"
                          accept="image/*,.pdf"
                          multiple
                          disabled={state.submitting}
                        />
                        <p className="text-xs text-gray-500">
                          Upload photos, plans, or inspiration images (Max 10MB per file)
                        </p>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Sending..." : "Submit Request"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Phone</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-green-700 hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-green-700 hover:underline"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-700">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm text-gray-700">
                    We proudly serve Central Massachusetts including:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {SERVICE_AREAS.map((area) => (
                      <li key={area}>{area}, MA</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    Don't see your town? Contact us to check if we serve your area.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-700">1.</span>
                      <span>We'll review your request within 24 hours</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-700">2.</span>
                      <span>Schedule your free in-home consultation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-700">3.</span>
                      <span>Receive a detailed project proposal</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-700">4.</span>
                      <span>Start bringing your vision to life</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
