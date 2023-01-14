import { Size, Color, Weight, ProductAttribute, ProductKeys } from './types';

export const isColorProduct = (
  attribute: ProductAttribute
): attribute is Color => {
  return (attribute as Color)[ProductKeys.color] !== undefined;
};

export const isSizeProduct = (
  attribute: ProductAttribute
): attribute is Size => {
  return (attribute as Size)[ProductKeys.size] !== undefined;
};

export const isWeightProduct = (
  attribute: ProductAttribute
): attribute is Weight => {
  return (attribute as Weight)[ProductKeys.weight] !== undefined;
};
