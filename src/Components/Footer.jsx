import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo of MKE.webp'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Icon = ({ children }) => (
  <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-teal-600 text-white" aria-hidden="true">{children}</span>
)

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 text-slate-800 z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="inline-flex items-center gap-3  rounded">
                <img src={logo} alt="Moneykrishna Education" className="h-10 w-auto rounded-full" />
              </Link>
            </div>
            <p className="text-gray-600 leading-relaxed">Money Krishna Education is a leading trading institute in Chennai offering expert training in Stock Market, Forex, and Options Trading. We provide both online and offline classes designed for beginners, intermediate traders, and working professionals.</p>

            <ul className="flex gap-3 mt-6" role="list" aria-label="Social links">
              <li>
                <a href="https://www.facebook.com/moneykrishna.education/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90  rounded" aria-label="Facebook">
                  <Icon>
                    <Facebook className="w-4 h-4" />
                  </Icon>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/moneykrishnaeducation/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90  rounded" aria-label="Instagram">
                  <Icon>
                    <Instagram className="w-4 h-4" />
                  </Icon>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-90  rounded" aria-label="Twitter">
                  <Icon>
                    <Twitter className="w-4 h-4" />
                  </Icon>
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919500074778" target="_blank" rel="noopener noreferrer" className="hover:opacity-90  rounded" aria-label="Whatsapp">
                  <Icon>
                    <img src="whatsapp.svg" alt="WhatsApp" className='w-4 h-4' />
                  </Icon>

                  <span className="sr-only">Whatsapp</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-gray-700 ">About Us</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="/about" className="hover:underline  rounded">-</a></li>
              <li><a href="#" className="hover:underline  rounded">-</a></li>
              <li><a href="#" className="hover:underline  rounded">-</a></li>
              <li><a href="#" className="hover:underline  rounded">-</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-gray-700">Our Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:underline  rounded">-</a></li>
              <li><a href="#" className="hover:underline  rounded">-</a></li>
              <li><a href="#" className="hover:underline  rounded">-</a></li>
              <li><a href="#" className="hover:underline  rounded">-</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-gray-700">Contact Us</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 min-w-[16px] text-blue-400" aria-hidden />
                <a href="mailto:moneykrishnaeducation@gmail.com" className="hover:underline rounded">
                  moneykrishnaeducation@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 min-w-[16px] text-blue-400" aria-hidden />
                <a href="tel:9500074778" className="hover:underline rounded">
                  +91 95000 74778
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 min-w-[16px] text-blue-400 mt-0.5" aria-hidden />
                <span>
                  3rd floor, I Block, 35th Street, 18th Main Rd,
                  Anna Nagar West, Chennai.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-gray-400">
          <div className='text-gray-800'>©2024 - {new Date().getFullYear()} Moneykrishna Education</div>
          <div className="mt-3 md:mt-0">
            <a href="#" className="text-gray-800 hover:underline  rounded">Terms &amp; Conditions</a>
            <span className="mx-2">·</span>
            <a href="#" className="text-gray-800 hover:underline  rounded">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
