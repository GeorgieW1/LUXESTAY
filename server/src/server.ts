import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE_URL || 'mongodb://localhost:27017/luxestay';

mongoose
    .connect(DB)
    .then(() => {
        console.log('✅ DB connection successful!');
    })
    .catch((err) => {
        console.error('❌ DB connection error:', err);
    });

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
