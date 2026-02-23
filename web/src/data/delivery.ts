export type DeliveryArea = {
  id: string;
  name: string;
  fee: number;
};

export const deliveryAreas: DeliveryArea[] = [
  { id: "bairro-a", name: "Bairro A", fee: 5.0 },
  { id: "bairro-b", name: "Bairro B", fee: 8.0 },
  { id: "bairro-c", name: "Bairro C", fee: 12.0 },
];
