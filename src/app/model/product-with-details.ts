import { Product } from './product';

export interface ProductWithDetails extends Product {
  description: string;
}
