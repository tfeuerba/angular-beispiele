import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductWithDetails } from '../model/product-with-details';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private httpClient: HttpClient) {}

  loadAllProducts$(): Observable<Product[]> {
    console.log('Loading all products...');
    return this.httpClient.get<Product[]>('/api/products');
  }

  loadProductDetail$(id: number): Observable<ProductWithDetails> {
    return this.httpClient.get<ProductWithDetails>(`/api/product/${id}`);
  }
}
