import { UserRole } from "../enums/UserRole";

export default class User {
    id: string;
    username: string;
    password: string;
    token: string;
    access_token: string;
    role: UserRole;
    canSaveAccessToken: boolean = true;
}
