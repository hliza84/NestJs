import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import { Customer } from 'src/customers/schemas/customer.schema';
import { CreateCustomerDto } from '../../dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
 constructor(private customersService: CustomersService) {}

  @Get() async getAllCustomer(): Promise<Customer[]> {
      return this.customersService.findAll();
  }
  
  @Post() async createCustomer(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(customer);
  }
}
