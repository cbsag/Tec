import { HttpService } from '@nestjs/axios';
import { Get, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { response } from 'express';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}




async getUser(): Promise<any> {
  let resp = await lastValueFrom(this.httpService.get('http://server1:3000/hello/world'));
  return resp.data;
}

}
