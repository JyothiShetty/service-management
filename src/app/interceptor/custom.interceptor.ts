import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  let token: string | null = null;

  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    token = localStorage.getItem('angular18Token');
    console.log('[Interceptor] Token:', token);
  }

  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }

  // Optional: Prevent the call if no token
  return next(req);
};
