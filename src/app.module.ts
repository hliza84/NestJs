import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { CustomersController } from './customers/controllers/customers/customers.controller';
import { CustomersService } from './customers/services/customers/customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
//   imports: [ConfigModule.forRoot({
//     envFilePath: '.env',
//     isGlobal: true,
//   }), 
//   MongooseModule.forRoot('process.env.DB_URI'),
//   CustomersModule,
// ],
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/mobius'), CustomersModule],
  
})
export class AppModule {}



