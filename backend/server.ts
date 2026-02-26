import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

// dotenv.config();
// connectDB(); // Connection to MongoDB

const app = express();

app.use(express.json()); // Body parser

// Routes
app.use('/api/products', productRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});