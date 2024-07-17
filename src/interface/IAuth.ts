export interface IProtectedRoute {
  component: React.ComponentType<any>;
  [key: string]: any;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}
