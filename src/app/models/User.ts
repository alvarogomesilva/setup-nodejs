

// Usuário vai passar
// ====================

export interface ICreateUserDTO {
    name: string
    email: string
    password: string
}
 
export interface UserRequest {
    id?: string
    name: string
    email: string
    password: string
    created_at?: Date;
    updated_at?: Date;
  }
  