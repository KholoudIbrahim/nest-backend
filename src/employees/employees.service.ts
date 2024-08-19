import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

export type User = {
  id: number;
  name: string;
  email: string;
}

//this a mockup only
const users:User[]=[
  {
    id: 1,
    name: 'Kholoud',
    email: 'kholoud@gmail.com',
  },
  {
    id: 3,
    name: 'Zain',
    email: 'zain@gmail.com',
  },
];

@Injectable()
export class EmployeesService {
  authenticate(input: { name: string; email: string; }) {
      throw new Error('Method not implemented.');
  }
  
  constructor(private readonly databaseService:DatabaseService){}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
    });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) return this.databaseService.employee.findMany({
      where: {
        role,
      }
    })
    return this.databaseService.employee.findMany()
  }

  // async findOne(name: string): Promise<User | undefined> {
  //   return this.databaseService.employee.findUnique(user => user.name === name);
  // }
  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      }
    });
  }

  async findUserByName(name: string): Promise<User | undefined> {
    return users.find((user)=>user.name===name);
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  // employee is the model..prisma methods helped 

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id,
      }
    });
  }
}
