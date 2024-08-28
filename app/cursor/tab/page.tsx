"use client";
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

interface BikiniItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const trendingBikinis: BikiniItem[] = [
  {
    id: 1,
    name: "Neon Paradise Bikini",
    price: 79,
    description: "Vibrant neon two-piece that's sure to turn heads on the beach.",
    image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Tropical Sunset Bikini",
    price: 89,
    description: "Ombre-effect bikini inspired by beautiful tropical sunsets.",
    image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Ocean Blue Bikini",
    price: 75,
    description: "Stunning blue bikini reminiscent of crystal-clear ocean waters.",
    image: "https://images.unsplash.com/photo-1581588636584-5c447d2c9d97?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Floral Fantasy Bikini",
    price: 85,
    description: "Colorful floral print bikini perfect for a tropical getaway.",
    image: "https://images.unsplash.com/photo-1582640731057-9e9b13a0a24e?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Rainbow Stripe Bikini",
    price: 82,
    description: "Fun and vibrant rainbow striped bikini for the bold beach-goer.",
    image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Coral Reef Bikini",
    price: 78,
    description: "Coral-inspired bikini with intricate patterns and vibrant colors.",
    image: "https://images.unsplash.com/photo-1582640731057-9e9b13a0a24e?w=800&h=600&fit=crop",
  },
];

export default function CursorTabPage() {
  const [bikiniItems] = useState(trendingBikinis);
  const [selectedItem, setSelectedItem] = useState<BikiniItem | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleItemClick = (item: BikiniItem) => {
    setSelectedItem(item);
    setShowConfetti(true);
    setShowPopup(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const getItemBenefit = (item: BikiniItem) => {
    const benefits: { [key: string]: string } = {
      "Neon Paradise Bikini": "Stand out on the beach with vibrant neon colors.",
      "Tropical Sunset Bikini": "Capture the essence of a beautiful sunset.",
      "Ocean Blue Bikini": "Feel one with the ocean in this stunning blue piece.",
      "Floral Fantasy Bikini": "Embrace tropical vibes with this floral design.",
      "Rainbow Stripe Bikini": "Express your colorful personality on the beach.",
      "Coral Reef Bikini": "Showcase the beauty of marine life with this coral-inspired design.",
    };
    return benefits[item.name] || "Enhance your beach style with this trendy bikini.";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {showConfetti && <Confetti />}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Trending Colorful Bikinis</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {bikiniItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-500 cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative h-48">
              <Image 
                src={item.image} 
                alt={item.name}
                fill
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <span className="text-lg font-medium text-green-600">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showPopup && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <div className="relative h-64 mb-4">
              <Image 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                fill
                style={{objectFit: "cover"}}
                className="rounded"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <p className="text-lg font-medium text-green-600 mb-4">${selectedItem.price.toFixed(2)}</p>
            <p className="text-sm text-gray-700 mb-4">{getItemBenefit(selectedItem)}</p>
            <button 
              onClick={closePopup}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
