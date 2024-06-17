

// Usuário vai passar
// ====================

export interface ICreateUserDTO {
    name: string
    email: string
    password: string
}

export interface IDeleteUserDTO {
    id: string
}

export interface IUser {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date
    updatedAt?: Date
}