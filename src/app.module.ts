import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [AuthModule, UserModule, SchoolModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
