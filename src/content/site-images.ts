/**
 * Local images in /public/images (downloaded from Unsplash; replace anytime).
 * Using static files avoids broken remote IDs and works offline in dev.
 */
export const siteImages = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Cyclists riding on a road in a group",
  },
  strip: [
    {
      src: "/images/strip-commuter.jpg",
      alt: "Row of bicycles parked together",
      caption: "Commuter & city bikes",
    },
    {
      src: "/images/strip-road.jpg",
      alt: "Cyclist with a road bike outdoors",
      caption: "Road & endurance builds",
    },
    {
      src: "/images/strip-trail.jpg",
      alt: "Person riding a bicycle outdoors",
      caption: "Trail & weekend miles",
    },
  ] as const,
  services: {
    tuneUp: {
      src: "/images/service-tune.jpg",
      alt: "Bicycle rear cassette and drivetrain close-up",
    },
    tires: {
      src: "/images/service-tires.jpg",
      alt: "Close-up of a bicycle tire tread and wheel",
    },
    brakes: {
      src: "/images/service-brakes.jpg",
      alt: "Cyclist on a paved outdoor path",
    },
    drivetrain: {
      src: "/images/service-drivetrain.jpg",
      alt: "Road cyclist riding on a scenic road",
    },
  },
} as const;
