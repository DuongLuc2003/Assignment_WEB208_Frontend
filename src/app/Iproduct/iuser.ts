export interface IUser {
    name:string,
    email: string,
    password: string,
    confirmPassword: string,
    address: string,
    phone: string
    role?: string, 
}