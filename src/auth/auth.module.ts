import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmployeesService } from 'src/employees/employees.service';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [EmployeesModule],
})
export class AuthModule {}
