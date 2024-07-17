import { Module } from '@nestjs/common';
import { UsersService, UsersController, User } from '.';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthModule, JwtStrategy } from '../auth';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secretKey', // Change this to an environment variable
      signOptions: { expiresIn: '60m' },
    }),
    AuthModule,
    PassportModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtService, JwtStrategy],
  exports: [UsersService, JwtService, JwtStrategy],
})
export class UsersModule {}
