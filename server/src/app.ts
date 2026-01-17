import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { rateLimit } from 'express-rate-limit';

const app: Express = express();

// Security Middleware
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000', // Allow Frontend
    credentials: true,
}));
app.use(express.json({ limit: '10kb' })); // Body limit
app.use(cookieParser());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
app.use('/api', limiter);

// Routes
import propertyRouter from './routes/propertyRoutes';
import bookingRouter from './routes/bookingRoutes';

app.use('/api/properties', propertyRouter);
app.use('/api/bookings', bookingRouter);

// Health Check
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'success', message: 'LuxeStay API is healthy' });
});

// Root Route
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to LuxeStay API',
        endpoints: {
            health: '/health',
            properties: '/api/properties'
        }
    });
});

// 404 Handler
app.all('*', (req: Request, res: Response) => {
    res.status(404).json({ status: 'fail', message: `Route ${req.originalUrl} not found` });
});

export default app;
