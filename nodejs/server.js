import express from 'express';

const app = express();
const greetee = process.env.GREETEE || 'world';
const port = +process.env.PORT || 80;

process.on('SIGINT', () => {
    console.log('Bye bye');
    process.exit(0);
});

app.get('/', (_, res) => {
    res.send(`hello ${greetee}`);
});

app.listen(port, () => {
    console.log(`Web app listening on port ${port}`)
});
