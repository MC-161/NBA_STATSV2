const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        <div className="footer-section mb-6 w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="mr-10">NBA Stat Tracker is your go-to source for the latest NBA statistics, player profiles, and game analysis.</p>
        </div>
        <div className="footer-section mb-6 w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="/home" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="/players" className="hover:underline">Players</a></li>
            <li className="mb-2"><a href="/teams" className="hover:underline">Teams</a></li>
            <li className="mb-2"><a href="/games" className="hover:underline">Games</a></li>
            <li className="mb-2"><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section mb-6 w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section mb-6 w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
          <p>Email: <a href="mailto:info@nbastattracker.com" className="hover:underline">info@nbastattracker.com</a></p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 mt-4 text-center">
        <p>&copy; 2024 NBA Stat Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
