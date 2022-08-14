import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeCreateDto } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepository:Repository<Employee>){}

    async findAll():Promise<Employee[]>{
        return this.employeeRepository.find()
        
        // let emp: Employee= new Employee()
        // emp.id = "123"
        // emp.firstName = "ahmad"
        // emp.lastName = "zid"
        // emp.city = "kota"
        // emp.designation = "coba"
        // return [emp]
    }

    async create(employee:EmployeeCreateDto) : Promise<Employee>{
        let emp = this.employeeRepository.create(employee);
        return this.employeeRepository.save(emp);
    }
}
