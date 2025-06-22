export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white pt-10 pb-4 px-4 sm:px-8 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo & Contact */}
        <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
          <img src="https://geer.in/cdn/shop/files/logo.png_white.png?v=1746534976&width=100" alt="Geer Logo" className="mb-4 w-28 sm:w-32" />
          <div className="text-xs sm:text-sm mb-4">
            2nd floor, Rajhans House, opp. Nayara petrol pump,<br />
            Varachha road, Surat 395006
          </div>
          <div className="text-xs sm:text-sm mb-1">Mon - Sat from 9:00 AM - 7:00 PM IST</div>
          <div className="text-xs sm:text-sm mb-1">
            Email: <a href="mailto:contact@geer.in" className="font-bold underline">contact@geer.in</a>
          </div>
          <div className="text-xs sm:text-sm mb-3">
            Phone: <a href="tel:+919773114418" className="font-bold underline">+91 9773114418</a>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        {/* Center & Right: Links */}
        <div className="flex-1 flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-20">
          <div className="flex-1 min-w-[120px]">
            <div className="font-normal mb-4 sm:mb-8 text-sm">ABOUT</div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">OUR STORY</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">BEYOND CONFLICT FREE</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">CUSTOMER REVIEW</a></div>
          </div>
          <div className="flex-1 min-w-[120px]">
            <div className="font-normal mb-4 sm:mb-8 text-sm">POLICIES</div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">TERMS & CONDITIONS</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">PRIVACY POLICY</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">FAQ</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">RETURN & REFUND</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">SHIPPING POLICY</a></div>
          </div>
          <div className="flex-1 min-w-[120px]">
            <div className="font-normal mb-4 sm:mb-8 text-sm">EDUCATION</div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">DIAMOND BUYING GUIDE</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">LAB GROWN DIAMONDS</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">RING SIZE CHART</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">JEWELLERY CARE</a></div>
            <div className="font-bold mb-1 text-xs sm:text-sm"><a href="#">BLOG</a></div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/95 mt-8 mb-6 pt-4 flex flex-col items-center text-xs">
        <span className="text-center text-base sm:text-lg">© 2025, <span className="font-bold">Geer.</span></span>
      </div>
    </footer>
  );
}