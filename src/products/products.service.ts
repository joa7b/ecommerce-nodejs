import { Injectable, Inject } from '@nestjs/common';

import { Product } from './models/product.model';

import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCTS_REPOSITORY') private productsRepository: typeof Product) { }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    if (createProductDto.price < 0) {
      throw new Error('Price must be greater than 0');
    };

    if (createProductDto.stockQuantity < 0) {
      throw new Error('Stock must be greater than 0');
    };

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

  async getProductsByCodes(codes: number[]): Promise<Product[]> {
    return await this.productsRepository.findAll({
      where: {
        code: codes,
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