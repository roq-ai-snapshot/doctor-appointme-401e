import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  customer_id?: string;
  medical_staff_id?: string;
  created_at?: any;
  updated_at?: any;

  user_appointment_customer_idTouser?: UserInterface;
  user_appointment_medical_staff_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  medical_staff_id?: string;
}
