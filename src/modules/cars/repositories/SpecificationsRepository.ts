import {Specification} from "../model/Specification";
import {ICreateSpecificationDTO, ISpecificationsRepository} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({name, description}: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date()
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        return this.specifications.find(s => s.name === name);
    }

}

export {SpecificationsRepository};