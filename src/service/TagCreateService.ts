import { TagRepository } from './../repository/TagRepository';
import { getCustomRepository } from 'typeorm';
import { Exception } from '../exception/Exception';

export class TagCreateService{

    async execute(name:string) {
        
        const tagsRepository = getCustomRepository(TagRepository);

        const tagAlreadyExists = await tagsRepository.findOne({ name, });

        if (!name) {
            throw new Exception("Incorrect name!", 400);
        }

        if (tagAlreadyExists) {
            throw new Exception("Tag already exists", 400);
        }

        const tag = tagsRepository.create({
            name,
        });

        await tagsRepository.save(tag);

        return tag;
    }
}