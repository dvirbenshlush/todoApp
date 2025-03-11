import { User, IUser } from "../models/user.model";

export class AuthRepository {
   
    async login(userId: string): Promise<IUser | null> {
        return await User.findOne({ username: userId });
    }

    async register(user: IUser): Promise<void> {
        const newUser = new User(user);
        await newUser.save();
    }
}