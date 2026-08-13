export interface Notice {
  id: string;
  title: string;
  date: string;
  description: string;
  category: "Admission" | "Exam" | "Activity" | "Meeting" | "General";
  isUrgent?: boolean;
  isNew?: boolean;
}

export const noticesData: Notice[] = [
  {
    id: "1",
    title: "Admissions Open for Academic Session 2026–27",
    date: "Aug 09, 2026",
    description: "Applications are invited for admissions to Nursery through Class IX and Class XI. Online and offline registration forms are available.",
    category: "Admission",
    isUrgent: true,
    isNew: true,
  },
  {
    id: "2",
    title: "Annual Examination Schedule Released",
    date: "Aug 05, 2026",
    description: "The schedule for Mid-Term and Semester-End Board preparatory examinations is now available on the portal. Students can download the PDF sheets.",
    category: "Exam",
    isNew: true,
  },
  {
    id: "3",
    title: "Upcoming Inter-School Sports Competition",
    date: "Jul 28, 2026",
    description: "DPA will host the District Basketball and Football Championship starting next Monday. Registrations for the school team selections close tomorrow.",
    category: "Activity",
  },
  {
    id: "4",
    title: "Parent-Teacher Meeting (PTM) Schedule",
    date: "Jul 24, 2026",
    description: "The term PTM is scheduled for Saturday, 15th August, from 8:30 AM to 1:00 PM. Parents are requested to check their slots on the digital app.",
    category: "Meeting",
    isUrgent: true,
  },
  {
    id: "5",
    title: "Science Exhibition 2026 Preparations",
    date: "Jul 18, 2026",
    description: "Guidelines and project guidelines for the upcoming Annual Science Exhibition have been posted. Submissions are due on the student desk portal.",
    category: "General",
  },
];
