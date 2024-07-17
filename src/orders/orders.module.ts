import { Module } from '@nestjs/common';
import { OrdersController, OrdersService, OrderItem, Order } from '.';
import { User, UsersModule, UsersService } from '../users';
import { Category, Product, ProductsService } from '../products';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderItem, Order, Category, Product, User]),
    UsersModule,
    OrdersModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, ProductsService, UsersService],
})
export class OrdersModule {}
