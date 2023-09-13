import * as bcrypt from 'bcrypt';

export class Crypt {
    constructor(
        private data: string,
        private encrypted?: string
    ) {}

    public encrypt(): Promise<string> {
        return bcrypt.hash(this.data, 10);
    }

    decrypt(data: string, encrypted: string): Promise<boolean> {
        return bcrypt.compare(data, encrypted);
    }
}