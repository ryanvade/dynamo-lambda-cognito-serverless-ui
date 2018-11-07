export interface User {
    // firstName: string;
    // lastName: string;
    username: string;
    id: string;
    email: string;
    Session: string;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}
