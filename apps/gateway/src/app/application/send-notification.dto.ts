import { INotification, NotificationType } from '@notification-services/shared/domain';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class SendNotificationDto implements Pick<INotification, 'type' | 'recipient'> {

  @IsString()
  @IsNotEmpty()
  public readonly recipient: string;

  @IsEnum(NotificationType)
  public readonly type: NotificationType;
}
