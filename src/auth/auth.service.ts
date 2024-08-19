import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmployeesService } from 'src/employees/employees.service';

type AuthInput = {name:string; email:string};
type SignInData = {id:number; name:string};
type AuthResult = {accessToken:string; id:number; name:string};

@Injectable()
export class AuthService {

    constructor(private _EmployeesService:EmployeesService){}

    async authenticate(input:AuthInput):Promise<AuthResult>
    {
        const user = await this.validateUser(input);

        if(!user) 
        {
            throw new UnauthorizedException();
        }

        return {
            accessToken: 'fake-access',
            id:user.id,
            name:user.name,
        };

    }

    async validateUser(input: AuthInput): Promise<SignInData | null> 
    {
        const user = await this._EmployeesService.findUserByName(input.name);

        if(user && user.email==user.email)
        {
            return {
                id:user.id,
                name:user.name,
            };
        }
        return null;
    }
}
//