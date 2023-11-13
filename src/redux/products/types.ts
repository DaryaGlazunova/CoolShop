export type TProductItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export type TSearchProductParams = {
  sortBy: string;
  order: string;
  categoryName: string;
  search: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
