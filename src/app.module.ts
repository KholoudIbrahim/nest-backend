import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, EmployeesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
