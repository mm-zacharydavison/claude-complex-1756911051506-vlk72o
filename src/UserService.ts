import { isValidName } from './validation';
import { config } from './config';

interface User {
  id: string;
  name: string;
  created: Date;
}

export class UserService {
  private users: Map<string, User> = new Map();
  
  create(name: string): string {
    if (this.users.size >= config.maxUsers) {
      throw new Error('User limit reached');
    }
    if (!isValidName(name)) {
      throw new Error('Invalid name');
    }
    
    const id = Math.random().toString(36);
    const user: User = { id, name, created: new Date() };
    this.users.set(id, user);
    return id;
  }
  
  get(id: string): User | undefined {
    return this.users.get(id);
  }
  
  getAll(): User[] {
    return Array.from(this.users.values());
  }
  
  clear(): void {
    this.users.clear();
  }
}
