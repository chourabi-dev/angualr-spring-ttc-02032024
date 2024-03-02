export interface Product {
    id:        number;
    product:   string;
    price:     number;
    stock:     number;
    createdAt: Date;
    category:  CategoryClass;
}

export interface CategoryClass {
    id:   number;
    name: string;
}
