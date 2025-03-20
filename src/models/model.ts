export class User {
    public id: number;
    public name: string | null;
    public email: string;

    constructor(data?: Partial<User>) {
        this.id = data?.id ?? 0;
        this.name = data?.name ?? null;
        this.email = data?.email ?? '';
    }
}