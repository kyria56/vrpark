import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Rocket, PartyPopper, MapPin, Menu } from "lucide-react";

// Define types for ImageModal props
interface ImageModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

// Simple Image Modal Component
function ImageModal({ src, alt, onClose }: ImageModalProps) {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose} // Close when clicking outside the image
    >
      <div 
        className="relative max-w-4xl max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image
      >
        <button 
          className="absolute top-2 right-2 text-white text-3xl font-bold p-2 bg-gray-800/70 rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const [modalImageAlt, setModalImageAlt] = useState<string>('');

  const openModal = (src: string, alt: string) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
  };

  const closeModal = () => {
    setModalImageSrc(null);
    setModalImageAlt('');
  };

  return (
    <div className="min-h-screen text-white px-6 py-12 futuristic-background">
      {/* Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 px-4 py-2 bg-pink-500 text-white rounded flex items-center"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu className="w-6 h-6" />
        <span className="ml-2">MENU</span>
      </button>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          className="absolute top-6 left-6 text-white text-xl uppercase font-bold tracking-widest text-glow-close transition-shadow duration-300 ease-in-out hover:text-shadow-glow focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          CLOSE
        </button>
        {/* Navigation Links */}
        <nav className="text-white text-base space-x-2 md:text-xl md:space-x-4 uppercase nav-futuristic-bg w-full h-full flex items-center justify-center">
          <a href="#" className="text-outline-light">Home</a>
          <a href="#" className="text-outline-light">About</a>
          <a href="#" className="text-outline-light">Services</a>
          <a href="#" className="text-outline-light">Contact</a>
        </nav>
      </div>

      {/* Full-width Section with Background */}
      <div className="relative section-with-background-image">
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        ></video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-purple-900 opacity-70 z-[5]"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-3d text-7xl md:text-8xl font-extrabold leading-tight text-cyan-400 text-center">
            Capital City Mobile VR Amusement Park
          </h1>
          <div className="h-48 w-full"></div> {/* Large space for image to breathe */}
          <p className="text-xl md:text-2xl text-indigo-200">
            Where the Thrill Ride Meets Virtual Reality!
          </p>
          <p className="text-lg text-indigo-300">
            Welcome to the future of entertainment — where virtual reality doesn't just show you an experience, it lets you feel it.
          </p>
          <p className="text-lg text-indigo-300">
            At Capital City Mobile VR Amusement Park, we're redefining how people celebrate. Whether it's a birthday bash, a high-energy festival, or a black-tie corporate event, our cutting-edge VR rides bring the wow-factor that today's guests crave.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-cyan-400">What Exactly Is a Mobile VR Amusement Park?</h2>
          <p className="text-indigo-200">
            Imagine a roller coaster, a flight simulator, and a fantasy adventure — all wrapped into one mobile setup. Guests strap into our state-of-the-art motion platform, slip on a headset, and are instantly transported to wild, immersive worlds.
          </p>
          <p className="text-indigo-200">
            The best part? We bring it to you. Indoors or outdoors, day or night — we roll in ready to electrify your event.
          </p>
        </div>
      </div> {/* End of Full-width Section with Background */}

      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-semibold text-pink-400 mt-16">Why Capital City VR Is the New Life of the Party</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-indigo-950 border-cyan-500 shadow-xl card-futuristic-shadow" onClick={() => openModal('https://source.unsplash.com/800x600/?vr-headset', 'VR Immersion')}>
            <CardContent className="p-6">
              <Rocket className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white">Total Immersion, Zero Hassle</h3>
              <p className="text-cyan-200">
                We handle everything — setup, safety, and smooth operation. You just watch your guests have a blast.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-950 border-cyan-500 shadow-xl card-futuristic-shadow" onClick={() => openModal('https://source.unsplash.com/800x600/?party', 'Crowd Pleaser')}>
            <CardContent className="p-6">
              <PartyPopper className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white">A Crowd-Pleaser for All Ages</h3>
              <p className="text-cyan-200">
                From kids to adults, everyone walks away amazed. Our experiences are unforgettable and fun for all.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-950 border-cyan-500 shadow-xl card-futuristic-shadow" onClick={() => openModal('https://source.unsplash.com/800x600/?mobile-amusement-park', 'Mobile Amusement')}>
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white">We Go Wherever the Fun Is</h3>
              <p className="text-cyan-200">
                Backyards, campuses, fairgrounds, hotels, or corporate campuses — we bring the future straight to your party.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* New Prototypes Section */}
        <div className="mt-20 space-y-6">
          <h2 className="text-3xl font-semibold text-pink-400 text-center">Our Latest Prototypes</h2>
          <div className="flex flex-col md:flex-row justify-center items-start">
            {/* Left Image and Description Column */}
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2">
              <img 
                src="/opening-image.jpg" 
                alt="Prototype 1" 
                className="w-full rounded-xl shadow-lg border border-cyan-500 object-cover aspect-video"
              />
              <p className="text-center text-lg text-indigo-200 mt-4">
                Experience our <span className="font-bold text-cyan-400">24ft Mobile VR Trailer</span> with <span className="font-bold text-cyan-400">three unique VR rides</span>, seating up to <span className="font-bold text-cyan-400">7 people at a time</span>, perfect for groups of <span className="font-bold text-cyan-400">60 or more</span>, delivering <span className="font-bold text-cyan-400">wild, immersive experiences</span>!
              </p>
            </div>
            {/* Right Image */}
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2">
              <img 
                src="/opening-image.jpg" 
                alt="Prototype 2" 
                className="w-full rounded-xl shadow-lg border border-cyan-500 object-cover aspect-video"
              />
              <p className="text-center text-lg text-indigo-200 mt-4">
                With <span className="font-bold text-cyan-400">5 unique VR rides</span> and <span className="font-bold text-cyan-400">seating for up to 13 people at a time</span>, our trailer <span className="font-bold text-cyan-400">keeps the energy high and the lines moving</span>. From <span className="font-bold text-cyan-400">pulse-pounding roller coasters</span> to <span className="font-bold text-cyan-400">immersive space adventures</span>, each ride offers a different journey — all powered by <span className="font-bold text-cyan-400">cutting-edge virtual reality</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-6">
          <h2 className="text-3xl font-semibold text-cyan-400">More Than a Ride — It's an Experience</h2>
          <p className="text-indigo-200">
            We're not just a mobile amusement park. We're a portal to the impossible, a launchpad for imagination, and the highlight of your next event.
          </p>
          <p className="text-indigo-200">
            Whether you're hosting a community festival in Raleigh, a corporate mixer in Charlotte, or a birthday party in your own backyard, Capital City Mobile VR Amusement Park brings futuristic thrills that leave lasting impressions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-2xl shadow-lg">
              Book Your Experience Now
            </Button>
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white text-lg px-6 py-3 rounded-2xl shadow-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      {/* Image Modal */}
      <ImageModal src={modalImageSrc} alt={modalImageAlt} onClose={closeModal} />
    </div>
  );
} 