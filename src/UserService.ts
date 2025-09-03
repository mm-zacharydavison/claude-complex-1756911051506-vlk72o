export class UserService {
  private users: Map<string, any> = new Map();
  
  create(name: string): string {
    const id = Math.random().toString(36);
    this.users.set(id, { id, name });
    return id;
  }
  
  get(id: string): any {
    return this.users.get(id);
  }
}
