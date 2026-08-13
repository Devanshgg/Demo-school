export interface CampusItem {
  id: string;
  title: string;
  category: "Classrooms" | "Labs" | "Computer Lab" | "Library" | "Sports" | "Auditorium" | "Transportation" | "Cafeteria";
  image: string;
  description: string;
}

export const campusData: CampusItem[] = [
  {
    id: "1",
    title: "Smart Classroom",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
    description: "Fully digital classrooms integrated with interactive smart screens, modern sound, and dynamic ergonomic desks.",
  },
  {
    id: "2",
    title: "Science Laboratories",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    description: "Advanced Physics, Chemistry, and Biology laboratories equipped with premium testing gear and safety provisions.",
  },
  {
    id: "3",
    title: "Advanced Computer Lab",
    category: "Computer Lab",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=800",
    description: "Equipped with high-performance desktop units, high-speed fiber internet, and standard engineering/AI coding suites.",
  },
  {
    id: "4",
    title: "Central Library",
    category: "Library",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    description: "A wide catalog of over 25,000 reference books, international journals, digital resources, and peaceful reading lounges.",
  },
  {
    id: "5",
    title: "Multi-Sport Ground",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    description: "Vast athletic track, football field, cricket net pitches, and synthetic court layouts for tennis, basketball, and volleyball.",
  },
  {
    id: "6",
    title: "Air-Conditioned Auditorium",
    category: "Auditorium",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    description: "State-of-the-art auditorium seating 800 people, featuring premium acoustic panelling and theatrical setups.",
  },
  {
    id: "7",
    title: "GPS-Enabled Transport Fleet",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
    description: "A reliable fleet of air-conditioned buses covering the entire district with active GPS tracking and speed limits.",
  },
  {
    id: "8",
    title: "Hygienic Cafeteria",
    category: "Cafeteria",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff1443cd?auto=format&fit=crop&q=80&w=800",
    description: "Spacious, highly sanitized dining hall providing freshly cooked, nutritionally balanced food checked daily by dieticians.",
  },
];
