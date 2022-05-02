import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {


  constructor(private httpService: HttpService) {}
  getUser(): string{
      return 'hello world';
      }  
}

