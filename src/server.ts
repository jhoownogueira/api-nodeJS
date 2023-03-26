import express, {response} from 'express';

const app = express();

app.use(express.json());

app.get('/', (resquest, response) => {
    return response.json({message: 'Hello!'});
});

app.post('/', (resquest, response) => {
    const { name } = resquest.body;
    return response.json({message: `O Curso é ${name}!`});
})

app.listen(3333, () => console.log('Server is running on port 3333'));