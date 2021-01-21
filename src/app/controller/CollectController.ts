import { Request, Response } from 'express';
import CollectRepository from '../repository/collect/CollectRepository';

class CollectController {
    async index(request: Request, response: Response) {
        const collectRepository = new CollectRepository();
        const userId: number = request.user.id;
        const collects = await collectRepository.find(userId);
        return response.json(collects);
    }

    /*async indexRecycledProducts(request: Request, response: Response) {
        const collectRepository = new CollectRepository();
        const recycleds = await collectRepository.findRecycledProducts();
        return response.json(recycleds);
    }*/

    async show(request: Request, response: Response) {
        const collectRepository = new CollectRepository();
        const id: number = parseInt(request.params.id);
        const collect = await collectRepository.findById(id);
        return response.json(collect);
    }

    async store(request: Request, response: Response) {
        const collectRepository = new CollectRepository();
        const collect = await collectRepository.create(request.body);
        return response.status(201).json(collect)
    }
}

export default CollectController;