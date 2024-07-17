import { Module } from '@nestjs/common';
import { CartService, CartController, Cart, CartItem } from '.';
import { User, UsersModule, UsersService } from '../users';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  Product,
  ProductsModule,
  ProductsService,
} from '../products';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, CartItem, User, Product, Category]),
    UsersModule,
    ProductsModule,
  ],
  controllers: [CartController],
  providers: [CartService, UsersService, ProductsService],
})
export class CartModule {}
