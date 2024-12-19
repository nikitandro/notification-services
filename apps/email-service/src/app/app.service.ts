import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { INotification } from '@notification-services/shared/domain';

@Injectable()
export class AppService {

  @MessagePattern('email')
  public getNotifications(@Payload() data: INotification): void {
    console.log(data);
  }
}
