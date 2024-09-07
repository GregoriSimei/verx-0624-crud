export type TCreateUserUseCaseRequest = {
    name: string
    password: string
    email: string
    birthday: string
}
export type TCreateUserUseCaseResponse = {
    id: string
    name: string,
    email: string
}