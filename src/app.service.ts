import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  getProtected(): string {
    return 'This route is test succeed.';
  }
}
