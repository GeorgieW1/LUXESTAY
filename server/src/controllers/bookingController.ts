import { Request, Response } from 'express';
import Booking from '../models/Booking';
import Property from '../models/Property';

export const createBooking = async (req: Request, res: Response) => {
    try {
        const { propertyId, user, startDate, endDate, guests, totalPrice } = req.body;

        // Basic Validation
        if (!propertyId || !user || !totalPrice) {
            return res.status(400).json({ status: 'fail', message: 'Missing required fields' });
        }

        const booking = await Booking.create({
            property: propertyId,
            user,
            startDate: new Date(startDate || Date.now()), // Mock default if missing
            endDate: new Date(endDate || Date.now() + 86400000),
            guests: guests || 1,
            totalPrice,
            status: 'confirmed' // Auto-confirm for happy path
        });

        res.status(201).json({
            status: 'success',
            data: {
                booking,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};
