import { IUser } from "../models/user.model";
import { AuthRepository } from "../repositories/auth.repository";

export class AuthService {

    private authRepository: AuthRepository;

    constructor() {
        this.authRepository = new AuthRepository();
    }
   
    async login(userId: string) {
        return this.authRepository.login(userId);
    }

    async register(user: IUser){
        return this.authRepository.register(user);
    }
}