import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order_items'}) 
export class Order_Items {
    @PrimaryGeneratedColumn()
    order_id: number;

    @Column()
    product_id: number;


    @Column()
    quantity_id: number;


    @Column()
    list_price: number;


    @Column()
    discount: number;
}






