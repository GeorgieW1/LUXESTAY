import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
    user: string; // User ID or Name for mock
    property: mongoose.Types.ObjectId;
    startDate: Date;
    endDate: Date;
    guests: number;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: Date;
}

const BookingSchema: Schema = new Schema({
    user: { type: String, required: true }, // Keeping it simple for mock auth
    property: { type: Schema.Types.ObjectId, ref: 'Property', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBooking>('Booking', BookingSchema);
