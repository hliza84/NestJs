import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({timestamps: true})
export class Customer {
  @Prop()
   firstName: string;

  @Prop()
   middleName: string;

  @Prop()
   lastName: string;

  @Prop()
  age: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);