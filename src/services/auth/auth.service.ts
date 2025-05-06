import UserRepository from "../../repositories/users/userRepository";
import UserModel from "../../models/users/UserModel";    

export class AuthService {
    private userRepository!: UserRepository;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    constructor() {
        // Initialize any necessary properties or dependencies here

        console.log("Constructor AuthService");
        this.userRepository = new UserRepository(UserModel);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async login(email: string, password: string): Promise<any> {
        const user = await this.userRepository.getByEmail(email);
        return { message: "Login successful" };
    }
}