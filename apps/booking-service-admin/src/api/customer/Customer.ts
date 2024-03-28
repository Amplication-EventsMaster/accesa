import { Address } from "../address/Address";
import { Feedback } from "../feedback/Feedback";
import { Order } from "../order/Order";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
