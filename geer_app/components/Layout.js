import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="w-full px-2 sm:px-4 py-8 flex-1">{children}</main>
      <Footer />
    </div>
  );
}