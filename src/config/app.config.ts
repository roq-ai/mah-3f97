interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Marketing Manager'],
  customerRoles: [],
  tenantRoles: ['Marketing Manager'],
  tenantName: 'Agency',
  applicationName: 'MAH',
  addOns: ['file', 'chat', 'notifications'],
};
