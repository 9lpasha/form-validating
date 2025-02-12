export interface AdFormType {
  title: string;
  condition: "new" | "used";
  type: "personal" | "resale";
  description?: string;
  price: string;
  phone: string;
  city?: string;
  video?: string;
  images: File[];
  connection: "online" | "meet";
}

export interface ControlItem {
  label: string;
  value: string;
}
