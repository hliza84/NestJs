import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from '../../schemas/customer.schema';
import { CreateCustomerDto } from '../../dto/create-customer.dto';

@Injectable()
export class CustomersService {
    constructor(@InjectModel(Customer.name) 
    private customerModel: Model<Customer>) {}

    async findAll(): Promise<Customer[]> {
      return this.customerModel.find().exec();
    }
    async create(CreateCustomerDto: CreateCustomerDto): Promise<Customer> {
      const createCustomer = new this.customerModel(CreateCustomerDto);
      return createCustomer.save();
    }

    async findOne(id: string): Promise<Customer> {
        return this.customerModel.findOne({ _id: id }).exec();
      }
    
      async delete(id: string) {
        const deletedCustomer = await this.customerModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedCustomer;
      }
 
}
