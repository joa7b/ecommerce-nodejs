import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';

import { Product } from 'src/products/models/product.model';
import { OrderProduct } from 'src/orders_products/models/order_product.model';

@Table({
  tableName: 'orders',
  paranoid: true,
  underscored: true,
})
export class Order extends Model<Order> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.BIGINT,
  })
  code: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  customerCode: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  totalAmount: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @BelongsToMany(() => Product, () => OrderProduct)
  products: Product[];

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  deletedAt: Date;

  async setProducts(products: Product[]): Promise<void> {
    await this.$add('products', products);
  }

  async removeProducts(products: Product[]): Promise<void> {
    await this.$remove('products', products);
  }
}