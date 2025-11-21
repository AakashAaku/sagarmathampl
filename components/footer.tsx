"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sagarmatha</h3>
            <p className="opacity-80 text-sm">
              Creativity, Your Own Product Concept, and Innovation with Social Impact
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#home" className="hover:opacity-100 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:opacity-100 transition">
                  Divisions
                </a>
              </li>
              <li>
                <a href="#products" className="hover:opacity-100 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Kathmandu, Bagmati, Nepal</span>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} />
                <span>info@sagarmatha.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <span>+977 1 XXXX XXXX</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2025 Sagarmatha Multipurpose Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
