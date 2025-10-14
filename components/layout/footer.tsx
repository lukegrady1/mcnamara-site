import Link from "next/link";
import { BUSINESS_INFO, NAVIGATION, SERVICE_AREAS } from "@/lib/constants";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const displayServiceAreas = SERVICE_AREAS.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3 md:gap-12">
          {/* Business Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              {BUSINESS_INFO.name}
            </h3>
            <div className="space-y-2">
              <p className="text-sm">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</p>
              <p className="text-sm">
                <a
                  href={"tel:" + BUSINESS_INFO.phoneRaw}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="text-sm">
                <a
                  href={"mailto:" + BUSINESS_INFO.email}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {displayServiceAreas.map((area) => (
                <li key={area} className="text-sm">
                  {area}, MA
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-sm">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
