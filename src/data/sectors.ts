export type SectorData = {
  title: string;
  points: string[];
  image: string;
};

export const sectorsData: SectorData[] = [
  {
    title: "Banking & Financial Services",
    points: [
      "Stock Brokers",
      "Depository Participants",
      "Portfolio Management Services (PMS)",
      "Research Analyst",
      "Non-Banking Financial Company (NBFC)",
      "Mutual Funds",
    ],
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Service Providers",
    points: ["Doctors", "Lawyers"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Construction & Infrastructure",
    points: ["Builders"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Retail and Distribution",
    points: ["Traders", "Wholesalers", "Distributors"],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Educational Institutions",
    points: [],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Media",
    points: [],
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80&auto=format&fit=crop",
  },
];
