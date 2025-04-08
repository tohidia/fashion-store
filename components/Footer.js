

export default function Footer() {
    return (
      <footer className="bg-white text-black px-6 pt-12 pb-6 mt-16 border-t text-sm">
        {/* Newsletter Section */}
        {/* <section className="bg-black text-white text-center py-12 px-6 rounded-2xl mb-16">
          <h2 className="text-2xl font-bold mb-4">ABOUT OUR LATEST OFFERS</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </section> */}
  
        {/* Footer Main Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">SHOP.CO</h3>
            <p>We have clothes that suit your style and you're proud to wear. From women to men.</p>
            <div className="flex gap-3 mt-4 text-xl">
              <span>🐦</span>
              <span>📸</span>
              <span>📘</span>
            </div>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">COMPANY</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">HELP</h4>
            <ul className="space-y-1">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">RESOURCES</h4>
            <ul className="space-y-1">
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-2 text-2xl">
            <span>💳</span>
            <span>💰</span>
            <span>🛒</span>
            <span>💸</span>
          </div>
        </div>
      </footer>
    );
  }


