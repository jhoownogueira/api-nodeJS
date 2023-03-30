import {ICategoryRepository} from "../../repositories/ICategoryRepository";
import { Category } from "../../model/Category"

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {

    }

    execute(): Category[] {
        return this.categoriesRepository.list();
    }
}

export {ListCategoriesUseCase}