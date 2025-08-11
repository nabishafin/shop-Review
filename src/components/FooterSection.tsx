import { ShoppingBag, Heart, Github, Twitter, Linkedin } from "lucide-react";

export function FooterSection() {
  const socialBtnClass =
    "bg-gray-800 p-2 rounded-lg transition-colors duration-200";

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 mx-auto pl-0  md:pl-40">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-white" aria-label="Logo" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ShopReview</h3>
                <p className="text-sm text-gray-400">Experience Reviews</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering shoppers with honest reviews and authentic experiences
              to make better purchasing decisions.
            </p>
            <div className="flex items-center space-x-2 text-pink-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current" aria-label="Love" />
              <span>for shoppers everywhere</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "Reviews", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Star Ratings</li>
              <li>Search & Filter</li>
              <li>Edit Reviews</li>
              <li>Local Storage</li>
              <li>Mobile Friendly</li>
            </ul>
          </div>

          {/* Social & Stats */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBtnClass} hover:bg-blue-600`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBtnClass} hover:bg-blue-400`}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBtnClass} hover:bg-blue-700`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <div>⭐ 4.8/5 Average Rating</div>
              <div>📝 5,000+ Reviews</div>
              <div>🛍️ 50+ Stores Reviewed</div>
              <div>👥 10,000+ Happy Users</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ShopReview. Built with React,
            TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm mt-2">
            Helping shoppers make informed decisions, one review at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
