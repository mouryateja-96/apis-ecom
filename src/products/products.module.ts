import { Module } from '@nestjs/common';
import { ProductsService, ProductsController, Product, Category } from '.';
import { UsersService, UsersModule } from '../users';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category]), UsersModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
