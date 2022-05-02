import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('from')
export class AppController {
  http: any;
  constructor(private readonly appService: AppService) {}

@Get('to')
getHello(){
  return this.appService.getUser();
  }
}
