export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {
    rol: string;
    estado: boolean;
    google: boolean;
    nombre: string;
    correo: string;
    uid: string;
    img?: string;
}