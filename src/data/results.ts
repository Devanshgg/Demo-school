export interface YearResult {
  year: string;
  overall: number;
  classX: number;
  classXII: number;
  toppers90Plus: number;
  schoolAverage: number;
}

export const resultsData: YearResult[] = [
  {
    year: "2025",
    overall: 98.6,
    classX: 99.1,
    classXII: 98.2,
    toppers90Plus: 42,
    schoolAverage: 87.5,
  },
  {
    year: "2024",
    overall: 97.8,
    classX: 98.4,
    classXII: 97.2,
    toppers90Plus: 38,
    schoolAverage: 86.2,
  },
  {
    year: "2023",
    overall: 96.9,
    classX: 97.5,
    classXII: 96.3,
    toppers90Plus: 34,
    schoolAverage: 85.1,
  },
  {
    year: "2022",
    overall: 95.8,
    classX: 96.2,
    classXII: 95.4,
    toppers90Plus: 29,
    schoolAverage: 84.3,
  },
  {
    year: "2021",
    overall: 94.7,
    classX: 95.1,
    classXII: 94.3,
    toppers90Plus: 25,
    schoolAverage: 83.0,
  },
];
