export type TItemToCart = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
};

export enum EnumSortProperty {
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type TSort = {
  name: string;
  sortProperty: string;
};
