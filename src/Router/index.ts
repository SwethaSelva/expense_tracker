import express, { Response, Request } from "express";
const app = express();

app.get('/api/', (req: Request, res: Response) => {
    res.send('Hello World');
})

app.post('/api/add_expense', (req: Request, res: Response) => {
    const { description, amount } = req.body;
    // Logic to add expense
    res.status(201).send('Expense added');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

