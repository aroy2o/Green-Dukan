import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", to: "https://www.linkedin.com" },
  { icon: <Facebook className="w-5 h-5" />, label: "Facebook", to: "https://www.facebook.com" },
  { icon: <Twitter className="w-5 h-5" />, label: "Twitter", to: "https://www.twitter.com" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", to: "https://www.instagram.com" },
];

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Store", to: "/store" },
  { name: "Features", to: "/features" },
  { name: "Blogs", to: "/blogs" },
  { name: "Contacts", to: "/contact" },
];

const categories = [
  { name: "Home & Living", to: "/store/home-living" },
  { name: "Personal care", to: "/store/personal-care" },
  { name: "Fashion", to: "/store/fashion" },
  { name: "Accessories", to: "/store/accessories" },
  { name: "Zero Waste", to: "/store/zero-waste" },
  { name: "Gifts", to: "/store/gifts" },
];

const LinkList = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; to: string }[];
}) => (
  <nav className="min-w-[130px]" aria-label={title}>
    <h4 className="font-semibold mb-3 text-lg">{title}</h4>
    <ul className="space-y-1 text-sm">
      {items.map((item) => (
        <li key={item.name}>
          <Link to={item.to} className="hover:underline">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white px-6 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-10">
        {/* Left: Logo + Tagline + Store Buttons + Social */}
        <section className="flex flex-col gap-4 w-full sm:w-[250px]">
          <div>
            <div className="flex items-center">
              <img
                src="src/assets/GDLFooter.png"
                alt="Green Dukan Logo"
                className="w-90vw h-vh"
              />
            </div>
            <p className="text-sm font-bold mt-2">GREEN for a Better Tomorrow</p>
          </div>

          <div className="flex gap-3">
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              alt="Download on the App Store"
              className="w-[140px]"
            />
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              alt="Get it on Google Play"
              className="w-[140px]"
            />
          </div>

          <div>
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex gap-5" aria-label="Social Links">
              {socialIcons.map(({ icon, label, to }) => (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Middle: Links */}
        <LinkList title="Quick Links" items={quickLinks} />
        <LinkList title="Categories" items={categories} />

        {/* Right: Subscribe + Gallery */}
        <section className="flex flex-col gap-6 w-full sm:w-[280px]">
          <div>
            <h4 className="font-semibold text-lg mb-3">Subscribe now</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full h-12 bg-amber-50 pl-5 pr-12 rounded-full text-black outline-none"
              />
              <button
                className="absolute top-1 right-1 w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center border border-white"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Gallery</h4>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-white/40 rounded-md"
                  aria-label={`Gallery Image Placeholder ${i}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1200px] mx-auto mt-10 border-t border-white/30 pt-4 text-center text-sm">
        © 2025 Green Dukan, all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
