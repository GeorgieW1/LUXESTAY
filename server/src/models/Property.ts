import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A property must have a name'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        required: [true, 'A property must have a location'],
    },
    pricePerNight: {
        type: Number,
        required: [true, 'A property must have a price'],
    },
    amenities: [String],
    images: [String],
    rating: {
        type: Number,
        default: 4.5,
        min: 1,
        max: 5,
    },
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
