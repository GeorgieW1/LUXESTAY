import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from '../models/Property';

dotenv.config();

const DB = process.env.DATABASE_URL || '';

const properties = [
    {
        name: 'The Royal Atlantis',
        description: 'Experience the ultimate luxury at the Palm with breathtaking views and world-class dining.',
        location: 'Dubai, UAE',
        pricePerNight: 1200,
        amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Michelin Dining', 'Butler Service'],
        images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', 'https://images.unsplash.com/photo-1571896349842-6e53d10134dd'],
        rating: 4.9,
    },
    {
        name: 'Aman Tokyo',
        description: 'A sanctuary high above the bustling streets of Otemachi, blending traditional Japanese design with modern luxury.',
        location: 'Tokyo, Japan',
        pricePerNight: 1800,
        amenities: ['Onsen', 'City View', 'Zen Garden', 'Fine Dining'],
        images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26', 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa'],
        rating: 4.8,
    },
    {
        name: 'Four Seasons Bora Bora',
        description: 'Iconic overwater bungalows surrounded by turquoise waters and Mount Otemanu.',
        location: 'Bora Bora, French Polynesia',
        pricePerNight: 2500,
        amenities: ['Overwater Bungalow', 'Private Lagoon', 'Diving Center', 'Sunset Cruise'],
        images: ['https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b', 'https://images.unsplash.com/photo-1540541338287-41700207dee6'],
        rating: 5.0,
    },
    {
        name: 'Hotel de Crillon',
        description: 'A historic landmark on Place de la Concorde, embodying the spirit of Paris with 18th-century grandeur.',
        location: 'Paris, France',
        pricePerNight: 2100,
        amenities: ['Concierge', 'Historic Suite', 'Wine Cellar', 'Chauffeur'],
        images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e'],
        rating: 4.7,
    },
    {
        name: 'Amangiri',
        description: 'A remote hideaway tucked within the luminous canyons of the American Southwest.',
        location: 'Utah, USA',
        pricePerNight: 3500,
        amenities: ['Desert View', 'Pool', 'Adventure', 'Wellness'],
        images: ['https://images.unsplash.com/photo-1455587734955-081b22074882', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9'],
        rating: 4.9,
    },
    {
        name: 'One&Only Reethi Rah',
        description: 'Tropical magic in the Maldives with 12 pristine beaches and private villas.',
        location: 'Maldives',
        pricePerNight: 2800,
        amenities: ['Private Villa', 'Scuba Diving', 'Kids Club', 'Water Sports'],
        images: ['https://images.unsplash.com/photo-1439066615861-d1fb8bea3f09', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b'],
        rating: 4.9,
    },
];

const seedDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log('✅ Connected to DB for seeding');

        // Clean existing data
        await Property.deleteMany();
        console.log('🗑️  Deleted existing properties');

        // Insert new data
        await Property.insertMany(properties);
        console.log('🌱 Seeded 6 luxury properties');

        process.exit();
    } catch (err) {
        console.error('❌ Seeding failed:', err);
        process.exit(1);
    }
};

seedDB();
