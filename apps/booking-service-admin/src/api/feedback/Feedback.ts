import { Customer } from "../customer/Customer";

export type Feedback = {
  comment: string | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
