import GenericRepository from "../genericRepository";
import ClubModel from '../../models/clubs/ClubModel';

export default class ClubRepository extends GenericRepository{
    constructor(clubModel: typeof ClubModel){
        super(clubModel);
    }
}