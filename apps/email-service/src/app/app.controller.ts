import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { INotification } from '@notification-services/shared/domain';

@Controller()
export class EmailNotificationsController {
  @MessagePattern('email')
  public getNotifications(@Payload() data: INotification): void {
    console.log('DATAAAAAAAAAAA', data);
  }
}
