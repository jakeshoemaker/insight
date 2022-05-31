import User from "./User";

export class UserLoginResponse {
    token: string;
    expires_on: Date;
    user: User;
}