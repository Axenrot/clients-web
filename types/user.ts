export interface IUpdateUser {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: any;
  lastName: any;
  [key: string]: any;
}
