const mapping: Record<string, string> = {
  appointments: 'appointment',
  insurances: 'insurance',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
