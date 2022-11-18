import { Product } from "./product";

export type Commission = {
  id: number;
  commissionCode: string;
  unitValue: number;
  totalValue: number;
  quantity: number;
  packageQuantity: string;
  product: Product;
  productDescription: string;
  productMeasure: string;
  productMeasureValue: number;
};

export type CommissionPage = {
  content?: Commission[];
  last?: boolean;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number: number;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
};

export type Code = {
  code: string;
  commissionDate: string;
  distributor: string;
  totalValue: number;
  totalQuantity: number;
  totalPackage: number;
  packageType: string;
};

export type CodePage = {
  content?: Code[];
  last?: boolean;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number: number;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
};

export type CodeProps = {
  codeId: string;
};

export type CommissionResults = {
  commissionCode: string;
  totalQuantity: number;
  totalValue: number;
}