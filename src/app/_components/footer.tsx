import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site.config.mjs";

export default function Footer() {
  return (
    <footer className="bg-[#c10949]/90 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events & Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a
                  href="mailto:info@politician.com"
                  className="hover:underline"
                >
                  {SITE_CONFIG.openGraph.emails[0]}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>123 Main St, Anytown, Sri Lanka 12345</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Anura Kumara Dissanayake. All
            rights reserved.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="ml-2 hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
