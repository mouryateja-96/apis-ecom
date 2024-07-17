import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UsersModule } from './users';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category, Product, ProductsModule } from './products';
import { Cart, CartItem, CartModule } from './cart';
import { Order, OrderItem, OrdersModule } from './orders';
import { AuthModule } from './auth';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.db',
      entities: [User, Product, Category, Cart, CartItem, Order, OrderItem],
      synchronize: true,
    }),
    CartModule,
    ProductsModule,
    OrdersModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
