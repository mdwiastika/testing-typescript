export enum CustomerType {
  REGULAR = "REGULAR",
  SILVER = "SILVER",
  GOLD = "GOLD",
}
export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
