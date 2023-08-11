import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceInterface {
  id?: string;
  provider_name: string;
  customer_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface InsuranceGetQueryInterface extends GetQueryInterface {
  id?: string;
  provider_name?: string;
  customer_id?: string;
}
