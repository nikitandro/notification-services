import { NotificationType } from './notification-type.enum';
import { NotificationStatus } from './notification-status.enum';

export class Notification implements INotification {
  public readonly id: number;
  public readonly message: string;
  public readonly recipient: string;
  public readonly status: NotificationStatus;
  public readonly type: NotificationType;

  constructor(entity: INotification) {
    this.id = entity.id;
    this.message = entity.message;
    this.recipient = entity.recipient;
    this.status = entity.status;
    this.type = entity.type;
  }
}

export interface INotification {
  readonly id: number;
  readonly type: NotificationType;
  readonly recipient: string;
  readonly message: string;
  readonly status: NotificationStatus,
}
