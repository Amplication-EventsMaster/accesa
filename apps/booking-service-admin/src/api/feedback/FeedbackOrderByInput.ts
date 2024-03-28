import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
