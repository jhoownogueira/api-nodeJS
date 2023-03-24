import express, {response} from 'express';

const app = express();

app.get('/', (resquest, response) => {
    return response.json({message: 'Hello World!'});
})

app.listen(3333);