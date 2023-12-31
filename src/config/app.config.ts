interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Bimar'],
  customerRoles: ['Customer'],
  tenantRoles: ['System Administrator', 'Medical Staff', 'Receptionist', 'Insurance Provider'],
  tenantName: 'Organization',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
