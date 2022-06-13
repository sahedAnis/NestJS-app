import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  
  me(): string {
    return 'This returns the user using the app!';
  }
}
