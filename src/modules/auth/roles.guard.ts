import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { ROLES_KEY } from './roles.decorator';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const roles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      if (!roles) {
          return true;
      }
  
      const request = context.switchToHttp().getRequest();
      const user = request.user;
  
      if (!user || !roles.includes(user.role)) {
        throw new ForbiddenException('Permissão apenas para admnistradores.');
      }
  
      return true;
    }
  }
  