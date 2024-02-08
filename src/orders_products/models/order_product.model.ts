import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

import { Order } from '../../orders/models/order.model';
import { Product } from '../../products/models/product.model';

@Table({
  tableName: 'orders_products',
  paranoid: true,
  underscored: true,
  timestamps: false,
})
export class OrderProduct extends Model<OrderProduct> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.BIGINT,
  })
  code: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  orderCode: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  productCode: number;
}