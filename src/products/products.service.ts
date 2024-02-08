import { Injectable, Inject } from '@nestjs/common';

import { Product } from './models/product.model';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCTS_REPOSITORY') private productsRepository: typeof Product) { }

  async createProduct(createProductDto: any): Promise<Product> {
    return await this.productsRepository.create<Product>(createProductDto);
  }

  async getProducts(): Promise<Product[]> {
    return await this.productsRepository.findAll();
  }

  async getProductByCode(code: number): Promise<Product> {
    return await this.productsRepository.findOne({
      where: {
        code,
      }
    });
  }

  async updateProductByCode(code: number, updateProductDto: any): Promise<Product> {
    const product: Product = await this.productsRepository.findOne({
      where: {
        code,
      }
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return await product.update(updateProductDto);
  }

  async deleteProductByCode(code: number): Promise<void> {
    const product: Product = await this.productsRepository.findOne({
      where: {
        code,
      }
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return await product.destroy();
  }
}