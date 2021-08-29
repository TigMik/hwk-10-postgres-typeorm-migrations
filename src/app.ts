import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Costumers } from "./entity/costumers";
import { Orders } from "./entity/orders";
import { Products } from "./entity/products";
import { Order_Items } from "./entity/order_items";


dotenv.config();

export const PORT = process.env.PORT || 3001;

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    entities: [
        __dirname + "/entity/*.js"
    ],
    synchronize: true,
}).then(async connection => {

    const costumersRepository = connection.getRepository(Costumers);


    const app = express();
    app.use(express.json());

    // adding new costumer to the table
    let costumer = new Costumers();

    costumer.firstname = 'John';
    costumer.lastname = 'Doe';
    costumer.email = 'doe@gmail.com';
    costumer.address = 'center 21/5';
    costumer.city = 'la'

    await costumersRepository.save(costumer);
    console.log("Costumer has been saved."); 


    app.get("/costumers", async function(req: Request, res: Response) {
        const users = await costumersRepository.find();
        res.json(users);
    });
    
    app.get("/costumers/:id", async function(req: Request, res: Response) {
        const { id } = req.params;
        
        const results = await costumersRepository.findOne(Number(id));
        return res.send(results);
    });

    app.patch("/costumers/:id", async function(req: Request, res: Response) {
        const { id } = req.params;
        const { newName } = req.body;
        await costumersRepository.update(Number(id), newName);
    });

    app.post("/users", async function(req: Request, res: Response) {
        const user = await costumersRepository.create(req.body);
        const results = await costumersRepository.save(user);
        return res.send(results);
    });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await costumersRepository.delete(req.params.id);
        return res.send(results);
    });


    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });

}).catch(error => console.log(error));












