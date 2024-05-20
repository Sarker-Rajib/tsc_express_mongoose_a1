type TVariants = {
  type: string;
  value: string;
};

type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: Array<TVariants>;
  inventory: TInventory;
};
