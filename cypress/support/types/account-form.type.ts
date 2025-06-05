export type ValidationError = {
  field:
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'password'
  | 'confirmPassword'
  | 'province'
  | 'passwordWeak'
  | 'passwordDoNotMatch'
  | 'invalidEmail'
  | 'accountAlreadyExists'
  | 'genericError'; 
  message: string;
};

export type AccountFormData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  province?: string;
  provinceCode?: string; // Optional field for province code
  expectSuccess: boolean;
  expectedErrors?: ValidationError[];
};