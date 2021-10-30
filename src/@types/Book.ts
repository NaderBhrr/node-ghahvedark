enum Category {
  Computer = 'computer',
  General = 'general',
  novel = 'novel',
}

export interface Book {
  title: string;
  author: string;
  pages: number;
  categories: Category[];
  summary: string;
  createdAt: Date;
}
