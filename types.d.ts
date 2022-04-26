export type Project = {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  image: string;
  href: string;
};

export type ProjectCategory = {
  id: number;
  title: string;
  description: string;
  format: string;
};
