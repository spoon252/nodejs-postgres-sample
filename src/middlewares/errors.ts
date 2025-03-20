import { Request, Response, NextFunction } from 'express';

export const jsonErrorHandler = (err: SyntaxError & { status?: number }, req: Request, res: Response, next: NextFunction): Response | void => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON for the request body.' });
  }
  next(err);
};
