import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeeCreateDto } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(()=>Employee)
export class EmployeeResolver {
    
    constructor(private employeeService:EmployeeService){}

    @Query(()=>[Employee],{name:"findAllEmployees"})
    findAll(){
        return this.employeeService.findAll()
    }

    @Mutation(()=> Employee, {name:"createEmployee"})
    create(@Args('employeeInput') employee:EmployeeCreateDto ){
        return this.employeeService.create(employee)
    }
}
