import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { Customer, CustomerSchema } from './schemas/customer.schema'
import { Mongoose } from 'mongoose';



@Module({
  imports:[MongooseModule.forFeature([{name: Customer.name, schema: CustomerSchema }])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
