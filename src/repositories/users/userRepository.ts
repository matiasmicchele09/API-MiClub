import GenericRepository from "../genericRepository";
import UserModel from '../../models/users/UserModel';

export default class UserRepository extends GenericRepository{
    constructor(userModel: typeof UserModel){
        super(userModel);
    }

    async getByEmail(email: string): Promise<typeof UserModel | null> {
        return await this.model.findOne({where: {email}});
    }
}
