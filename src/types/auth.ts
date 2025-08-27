export interface LoginResponse {
  status: string;
  token: string;
  data: LoginResponseData;
}

export interface LoginResponseData {
  _id: string;
  email: string;
  language: string;
  name: string;
  isAdmin: boolean;
}

export interface ErrorMessage {
  message: string;
}
