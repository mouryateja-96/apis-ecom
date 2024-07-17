import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // Change this to an environment variable
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [],
  exports: [],
})
export class AuthModule {}
