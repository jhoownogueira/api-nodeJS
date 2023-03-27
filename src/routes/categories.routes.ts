import { Router } from 'express'
import {CategoryRepository} from "../repositories/CategoryRepository";


const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository()



categoriesRoutes.post('/', (request, response) => {
    const { name, description  } = request.body

    categoryRepository.create({name, description})

    response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
    const all = categoryRepository.list();

    return response.json(all);
})

export { categoriesRoutes }