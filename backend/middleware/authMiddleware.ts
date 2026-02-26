import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;
  const reqAny = req as any;

  if (reqAny.headers.authorization && reqAny.headers.authorization.startsWith('Bearer')) {
    try {
      token = reqAny.headers.authorization.split(' ')[1];
      
      // Placeholder logic:
      // const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      // req.user = await User.findById(decoded.id).select('-password');
      
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export const admin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};