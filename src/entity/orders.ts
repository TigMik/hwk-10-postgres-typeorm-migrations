import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders'}) 
export class Orders {

    @PrimaryGeneratedColumn()
    order_id: number;

    @Column()
    costumer_id: number;

    @Column()
    status: string;

    @Column({ type: 'date' })
    date: string;

}






