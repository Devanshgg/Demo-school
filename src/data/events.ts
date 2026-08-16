export interface SchoolEvent {
  id: string;
  name: string;
  date: string;
  month: string; // for calendar-like UI badge
  day: string;
  description: string;
  image: string;
  category: "Cultural" | "Sports" | "Academic" | "National" | "Excursion";
}

export const eventsData: SchoolEvent[] = [
  {
    id: "1",
    name: "Annual Day Celebration",
    date: "18th Dec 2025",
    month: "DEC",
    day: "18",
    description: "A grand showcase of talent, drama, music, and dance highlighting Goshen School's rich diversity and artistic achievement.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
    category: "Cultural",
  },
  {
    id: "2",
    name: "Annual Athletics Meet (Sports Day)",
    date: "14th Nov 2025",
    month: "NOV",
    day: "14",
    description: "Students display speed, agility, and teamwork in track events, gymnastics, and school house relay races.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=600",
    category: "Sports",
  },
  {
    id: "3",
    name: "Inter-School Science Exhibition",
    date: "10th Oct 2025",
    month: "OCT",
    day: "10",
    description: "Young researchers demonstrate working models in robotics, green tech, energy resources, and physics.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
    category: "Academic",
  },
  {
    id: "4",
    name: "Spectrum Cultural Fest",
    date: "05th Sep 2025",
    month: "SEP",
    day: "05",
    description: "An open stage for students from 15 regional schools participating in debates, rock bands, and painting competitions.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600",
    category: "Cultural",
  },
  {
    id: "5",
    name: "Independence Day Celebrations",
    date: "15th Aug 2025",
    month: "AUG",
    day: "15",
    description: "Flag hoisting ceremony followed by patriotic songs, march-past by NCC cadets, and student speeches.",
    image: "https://images.unsplash.com/photo-1599849594175-97e340a5e859?auto=format&fit=crop&q=80&w=600",
    category: "National",
  },
  {
    id: "6",
    name: "Educational Field Excursion",
    date: "22nd Jul 2025",
    month: "JUL",
    day: "22",
    description: "Students visit the regional spacecraft center and national museum to connect classroom theories with industry history.",
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=600",
    category: "Excursion",
  },
];
