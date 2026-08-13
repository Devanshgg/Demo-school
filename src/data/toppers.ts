export interface Topper {
  id: string;
  name: string;
  class: string;
  percentage: number;
  stream?: string;
  rank: number;
  image: string; // fallback profile placeholders
  quote?: string;
}

export const toppersData: Topper[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    class: "Class XII",
    percentage: 98.6,
    stream: "Science",
    rank: 1,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    quote: "Focus, consistent hard work, and the unwavering support of the faculty paved the way for my success.",
  },
  {
    id: "2",
    name: "Ananya Verma",
    class: "Class X",
    percentage: 97.8,
    rank: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    quote: "DPA's smart learning classrooms and teachers' active guidance made learning extremely engaging and structured.",
  },
  {
    id: "3",
    name: "Rohan Mehta",
    class: "Class XII",
    percentage: 97.4,
    stream: "Commerce",
    rank: 3,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: "The practical approach, commerce mock panels, and analytics-driven reviews helped me target my weak spots.",
  },
  {
    id: "4",
    name: "Diya Patel",
    class: "Class XII",
    percentage: 96.8,
    stream: "Humanities",
    rank: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "5",
    name: "Kabir Malhotra",
    class: "Class X",
    percentage: 96.5,
    rank: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "6",
    name: "Sneha Reddy",
    class: "Class XII",
    percentage: 96.2,
    stream: "Science",
    rank: 6,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
  },
];
