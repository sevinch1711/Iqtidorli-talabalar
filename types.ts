
export interface NavItem {
  label: string;
  path: string;
}

export interface Achievement {
  id: number;
  title: string;
  studentName: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface Leader {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  projects: string[];
}

export interface StaffMember {
  id: number;
  name: string;
  position: string;
  receptionTime: string;
  phone: string;
  email: string;
  image: string;
  bio?: string;
  education?: string;
}
