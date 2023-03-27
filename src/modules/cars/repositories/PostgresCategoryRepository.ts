import {Category} from "../model/Category";
import {ICategoryRepository, ICreateCategoryDTO} from "./ICategoryRepository";


class PostgresCategoryRepository implements ICategoryRepository {

    create({name, description }: ICreateCategoryDTO): void {
        console.log({name, description})
    }

    findByName(name: string): Category {
        console.log(name);
        return null;
    }

    list(): Category[] {
        return null;
    }

}

export {PostgresCategoryRepository}