import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  me(): string {
    return 'This returns the user using the app!';
  }

  create(user: User){
    this.users.push(user);
  }
}
