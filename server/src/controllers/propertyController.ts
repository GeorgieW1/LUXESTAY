import { Request, Response, NextFunction } from 'express';
import Property from '../models/Property';

export const getAllProperties = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const filter: any = {};
        if (req.query.location) {
            filter.location = { $regex: req.query.location as string, $options: 'i' };
        }

        const properties = await Property.find(filter).lean();

        res.status(200).json({
            status: 'success',
            results: properties.length,
            data: {
                properties,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch properties'
        });
    }
};

export const getProperty = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const property = await Property.findById(req.params.id).lean();

        if (!property) {
            return res.status(404).json({
                status: 'fail',
                message: 'Property not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                property,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch property'
        });
    }
};
