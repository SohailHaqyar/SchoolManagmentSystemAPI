import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SchoolModule,
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://nerymwtavbrkvb:396fb5c4d74350206fd6cc59894e46b77c0f477f0c78f50ee65269ff6d662cc3@ec2-34-249-247-7.eu-west-1.compute.amazonaws.com:5432/daj711ldjge8ih',
      entities: [Student],
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      logging: false,
      retryAttempts: 1,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
