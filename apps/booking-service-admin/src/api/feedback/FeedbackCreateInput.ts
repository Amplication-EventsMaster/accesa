import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type FeedbackCreateInput = {
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
