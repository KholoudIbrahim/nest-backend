import { Body , Controller, HttpCode, HttpStatus, NotImplementedException, Post } from '@nestjs/common';

import { EmployeesService } from 'src/employees/employees.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

constructor(private _AuthService:AuthService){}

@HttpCode(HttpStatus.OK)
@Post('login')
login(@Body() input: {name: string; email: string}){
    return this._AuthService.authenticate(input);
}

}
