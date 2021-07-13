import { Queue } from 'bull';

import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class StatusService {
  constructor(
    private configService: ConfigService,
    @InjectQueue('withdrawal') private withdrawalQueue: Queue,
  ) {}

  async status(): Promise<Health> {
    return {
      status: '',
      error: false,
    };
  }

  main(): string {
    return `This is <a href=https://tornado.cash>tornado.cash</a> Relayer service. Check the <a href=/status>/status</a> for settings`;
  }
}

export { StatusService };
