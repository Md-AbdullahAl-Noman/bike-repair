/** Remote images (Unsplash) — swap for your own `/public` assets when ready. */
export const siteImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1558618047-3c8c764ca8d5?auto=format&fit=crop&w=1200&q=80",
    alt: "Bicycle wheels and frames lined up in a repair shop",
  },
  strip: [
    {
      src: "https://images.unsplash.com/photo-1485965120184-e47f93b80305?auto=format&fit=crop&w=900&q=80",
      alt: "Classic bicycles parked in a row",
      caption: "Commuter & city bikes",
    },
    {
      src: "https://images.unsplash.com/photo-1576435728677-68d0fbf94e91?auto=format&fit=crop&w=900&q=80",
      alt: "Mountain bike on a forest trail",
      caption: "Mountain & gravel rigs",
    },
    {
      src: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=900&q=80",
      alt: "Cyclist checking a road bike outdoors",
      caption: "Road & endurance builds",
    },
  ] as const,
  services: {
    tuneUp: {
      src: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&w=800&q=80",
      alt: "Bicycle rear cassette and derailleur",
    },
    tires: {
      src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80",
      alt: "Bicycles parked in a row outdoors",
    },
    brakes: {
      src: "https://images.unsplash.com/photo-1544191696-102dbdaeeba0?auto=format&fit=crop&w=800&q=80",
      alt: "Mechanic working on a bicycle wheel at a stand",
    },
    drivetrain: {
      src: "https://images.unsplash.com/photo-1507035895480-2b3155c31ba8?auto=format&fit=crop&w=800&q=80",
      alt: "Bicycle chain and crankset close-up",
    },
  },
} as const;
