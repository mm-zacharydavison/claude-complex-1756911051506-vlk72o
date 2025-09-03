import { isValidName } from './validation';

export class UserService {
  private users: Map<string, any> = new Map();
  
  create(name: string): string {
    if (!isValidName(name)) {
      throw new Error('Invalid name');
    }
    const id = Math.random().toString(36);
    this.users.set(id, { id, name, created: new Date() });
    return id;
  }
  
  get(id: string): any {
    return this.users.get(id);
  }
  
  delete(id: string): boolean {
    return this.users.delete(id);
  }
}
