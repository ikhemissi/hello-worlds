import express from 'express';

const app = express();
const port = +process.env.PORT || 80;
const greetee = process.env.GREETEE || 'world';
const version = process.env.VERSION || 'N/A';
const environment = process.env.ENVIRONMENT || 'N/A';

process.on('SIGINT', () => {
    console.log('Bye bye');
    process.exit(0);
});

app.get('/', (_, res) => {
    res.set({
        'X-Environment': environment,
        'X-Version': version,
    });

    res.send(`hello ${greetee}`);
});

app.listen(port, () => {
    console.log(`Web app listening on port ${port}`)
});
