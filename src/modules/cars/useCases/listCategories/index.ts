import {ListCategoriesController} from "./ListCategoriesController";
import {ListCategoriesUseCase} from "./ListCategoriesUseCase";
import { CategoryRepository } from "../../repositories/CategoryRepository"

const categoryRepository = new CategoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};
