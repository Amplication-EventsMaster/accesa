import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
