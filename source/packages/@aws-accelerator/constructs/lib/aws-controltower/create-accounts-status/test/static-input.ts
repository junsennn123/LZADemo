/**
 * Abstract class to configure static input for create-log-groups custom resource AWS Lambda unit testing
 */
export abstract class StaticInput {
  public static readonly fiveAccountsProvisioning = {
    ProvisionedProducts: [
      {
        Name: 'account1',
        Type: 'CONTROL_TOWER_ACCOUNT',
        Status: 'UNDER_CHANGE',
      },
      {
        Name: 'account2',
        Type: 'CONTROL_TOWER_ACCOUNT',
        Status: 'UNDER_CHANGE',
      },
      {
        Name: 'account3',
        Type: 'CONTROL_TOWER_ACCOUNT',
        Status: 'UNDER_CHANGE',
      },
      {
        Name: 'account4',
        Type: 'CONTROL_TOWER_ACCOUNT',
        Status: 'UNDER_CHANGE',
      },
      {
        Name: 'account5',
        Type: 'CONTROL_TOWER_ACCOUNT',
        Status: 'UNDER_CHANGE',
      },
    ],
  };
}
