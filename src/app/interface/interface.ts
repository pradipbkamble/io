export interface Istd{
    fname:string
    lname:string
    email:string
    contact:number
}

export type cate='product'|'catlog'

export interface Iproduct{
    productname:string,
    productinfo:string,
    categery:cate
}