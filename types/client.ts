enum Title {
  CEO, // Chief Executive Officer
  CTO, // Chief Technology Officer
  Director, // Director
  Manager, // Manager
  Engineer, // Engineer
}

enum Country {
  USA, // United States of America
  UK, // United Kingdom
  Brazil, // Brazil
  Canada, // Canada
  Argentina, // Argentina
  Germany, // Germany
  Mexico, // Mexico
  Italy, // Italy
  Spain, // Spain
  India, // India
}

export interface IClient {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: Title;
  country: Country;
  name: string;
  email: string;
  phone: string;
  address: string;
  userId: number;
}
