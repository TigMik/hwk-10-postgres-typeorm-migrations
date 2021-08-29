import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products'}) 
export class Products {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })  
    category: string;

    @Column()
    price: number;

    @Column({
        length: 100
    })
    description: string;
}






