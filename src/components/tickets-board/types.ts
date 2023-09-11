export interface TicketData {
  _id: string;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: string;
  status: "new" | "in progress" | "resolved";
  description: string;
}
