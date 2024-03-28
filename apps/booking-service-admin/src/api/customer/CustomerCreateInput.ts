import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
