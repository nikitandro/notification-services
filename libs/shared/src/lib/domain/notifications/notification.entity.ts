import { NotificationType } from './notification-type.enum';
import { NotificationStatus } from './notification-status.enum';

export interface INotification {
  readonly id: number;
  readonly type: NotificationType;
  readonly recipient: string;
  readonly status: NotificationStatus;
  readonly timestamp: string;
}
