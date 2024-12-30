export type Order = {
  orderId: number;
  customerName: string;
  amount: string;
  status: string;
};

export type SampleOrders = {
  daraz: Order[];
  foodpanda: Order[];
  amazon: Order[];
};
