import { IEmailNotification } from '../domain';
import { NotificationStatus, NotificationType } from '@notification-services/shared/domain';
import { Equals, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class EmailNotificationDto implements IEmailNotification {
  @IsInt()
  public readonly id: number;

  @IsString()
  @IsNotEmpty()
  public readonly body: string;

  @IsNotEmpty()
  public readonly recipient: string;

  @IsEnum(NotificationStatus)
  public readonly status: NotificationStatus;

  @IsString()
  @IsNotEmpty()
  public readonly subject: string;

  @IsString()
  @IsNotEmpty()
  public readonly timestamp: string;

  @Equals(NotificationType.Email)
  public readonly type: NotificationType.Email;
}
