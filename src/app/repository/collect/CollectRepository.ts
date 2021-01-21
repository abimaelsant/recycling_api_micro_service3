import { getRepository, Repository } from 'typeorm';
import Collect from '../../entity/Collect';
import RecycledProductRepository from '../recycledProduct/RecycledProductRepository';

class TaskRepository {
    private collect:Repository<Collect>;

    constructor() {
        this.collect = getRepository(Collect);
    }

    async find(userId:number): Promise<any> {
        const collects = await this.collect.find({ where: { userId }});
        return collects;
    }

    async findRecycledProducts(): Promise<any> {
        const recycledRepository = new RecycledProductRepository();
        const recycleds = await recycledRepository.findAll();
        return recycleds;
    }

    async findById(id:number): Promise<any> {
        const collect = await this.collect.findOne(id);
        return collect;
    }

    async create(body:any): Promise<any> {
        const collect = await this.collect.save(body);
        return collect;
    }
}

export default TaskRepository;