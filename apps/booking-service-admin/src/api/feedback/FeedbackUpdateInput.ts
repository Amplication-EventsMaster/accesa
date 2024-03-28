import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
