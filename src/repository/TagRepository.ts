import { Tag } from './../entities/Tag';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tag)
export class TagRepository extends Repository<Tag>{

}