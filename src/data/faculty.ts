export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  experience: string;
  subject: string;
  image: string;
  email?: string;
}

export const facultyData: FacultyMember[] = [
  {
    id: "1",
    name: "Mr. Prakash Kandpal",
    designation: "Principal",
    experience: "20+ Years Experience",
    subject: "Educational Leadership & English",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    email: "principal@goshenschool.co.in",
  },
  {
    id: "2",
    name: "Mr. Rajiv Mehta",
    designation: "Senior Mathematics Faculty",
    experience: "12 Years Experience",
    subject: "Mathematics & Statistics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    email: "rajiv.mehta@goshenschool.co.in",
  },
  {
    id: "3",
    name: "Mrs. Priya Singh",
    designation: "Head of Science Department",
    experience: "10 Years Experience",
    subject: "Physics & Chemistry",
    image: "https://images.unsplash.com/photo-1580894732444-8febeb28a57b?auto=format&fit=crop&q=80&w=400",
    email: "priya.singh@goshenschool.co.in",
  },
  {
    id: "4",
    name: "Dr. Amit Verma",
    designation: "Head of Computer Science",
    experience: "15 Years Experience",
    subject: "Computer Science & AI Studies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    email: "amit.verma@goshenschool.co.in",
  },
  {
    id: "5",
    name: "Mrs. Shalini Kapoor",
    designation: "Senior English Literature Faculty",
    experience: "8 Years Experience",
    subject: "English Literature & Drama",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    email: "shalini.k@goshenschool.co.in",
  },
  {
    id: "6",
    name: "Mr. Vikram Rathore",
    designation: "Director of Physical Education",
    experience: "14 Years Experience",
    subject: "Sports Science & Athletics",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    email: "vikram.r@goshenschool.co.in",
  },
];
