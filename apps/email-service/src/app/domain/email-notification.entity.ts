import { INotification } from '@notification-services/shared/domain';

export interface IEmailNotification extends INotification {
  readonly subject: string;
  readonly body: string;
}
