export type ProductAttribute = Color | Size | Weight;

export type ProductDefaultAttribute = {
  [K in keyof ProductAttribute]: ProductAttribute[K];
};

export enum ProductKeys {
  size = 'size',
  color = 'color',
  weight = 'weight'
}

export interface Product {
  id: number;
  name: string;
  attributes: ProductAttribute[];
}

export interface Color {
  code: string;
  name: string;
  [ProductKeys.color]: string;
}

export interface Size {
  code: string;
  name: string;
  [ProductKeys.size]: {
    width: number;
    height: number;
  };
}

export interface Weight {
  code: string;
  name: string;
  [ProductKeys.weight]: number;
}
