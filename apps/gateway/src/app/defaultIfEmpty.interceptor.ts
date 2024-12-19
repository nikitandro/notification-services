import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common'
import { defaultIfEmpty } from 'rxjs/operators'

@Injectable()
export class DefaultIfEmptyInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(defaultIfEmpty([]))
  }
}
