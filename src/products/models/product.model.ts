import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';

import { Order } from '../../orders/models/order.model';
import { OrderProduct } from '../../orders_products/models/order_product.model';

@Table({
  tableName: 'products',
  paranoid: true,
  underscored: true,
})
export class Product extends Model<Product> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.BIGINT,
  })
  code: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  stockQuantity: number;
  
  @BelongsToMany(() => Order, () => OrderProduct)
  orders: Order[];

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
}