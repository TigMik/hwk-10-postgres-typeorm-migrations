import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'costumers'}) 
export class Costumers {
    @PrimaryGeneratedColumn()
    costumer_id: number;

    @Column({
        length: 100
    })
    firstname: string;

    @Column({
        length: 100
    })  
    lastname: string;

    @Column({
        length: 100
    })
    email: string;

    @Column({
        length: 100
    })
    address: string;

    @Column({
        length: 100
    })
    city: string;
}






