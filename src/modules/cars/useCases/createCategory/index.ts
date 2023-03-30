import {CreateCategoryUseCase} from "./CreateCategoryUseCase";
import {CategoryRepository} from "../../repositories/CategoryRepository";
import {CreateCategoryController} from "./createCategoryController";


const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export {createCategoryController}