import { Request, Response, NextFunction, Router } from 'express';
import { IMiddleware } from '../interfaces/middleware.interface';

export interface IControllerRoute {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
	middlewares?: IMiddleware[];
}

export type ExpressReturnType = Response<unknown, Record<string, unknown>>;
