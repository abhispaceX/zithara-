console.log('Starting server...');
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3002; 
app.use(express.json());
app.use(cors());

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zitharadata',
  password: 'abhi@1303',
  port: 5432,
});
//This is to create database and insert the values
// async function initializeDatabaseWithRealData() {
//   try {
//     // Create table if not exists
//     console.log('Creating tables...');
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS customers (
//         sno SERIAL PRIMARY KEY,
//         customer_name VARCHAR(100),
//         age INT,
//         phone VARCHAR(15),
//         location VARCHAR(100),
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       );
//     `);
//     console.log('Table created successfully.');
   
//       await pool.query(`
//         INSERT INTO customers (customer_name, age, phone, location, created_at)
//         VALUES ('John Doe', 30, '123-456-7890', 'New York', '2024-02-28 10:00:00'),
//         ('Jane Smith', 25, '234-567-8901', 'Los Angeles', '2024-02-27 11:00:00'),
//         ('Alice Johnson', 35, '345-678-9012', 'Chicago', '2024-02-26 12:00:00'),
//         ('Bob Brown', 40, '456-789-0123', 'Houston', '2024-02-25 13:00:00'),
//         ('Eva Wilson', 28, '567-890-1234', 'Miami', '2024-02-24 14:00:00'),
//         ('James Lee', 33, '678-901-2345', 'Seattle', '2024-02-23 15:00:00'),
//         ('Emma White', 22, '789-012-3456', 'San Francisco', '2024-02-22 16:00:00'),
//         ('Michael Clark', 45, '890-123-4567', 'Dallas', '2024-02-21 17:00:00'),
//         ('Olivia Green', 27, '901-234-5678', 'Boston', '2024-02-20 18:00:00'),
//         ('William Hall', 38, '012-345-6789', 'Philadelphia', '2024-02-19 19:00:00'),
//         ('Sophia Young', 31, '123-456-7890', 'Phoenix', '2024-02-18 20:00:00'),
//         ('Noah Baker', 26, '234-567-8901', 'San Antonio', '2024-02-17 21:00:00'),
//         ('Ava Hill', 29, '345-678-9012', 'San Diego', '2024-02-16 22:00:00'),
//         ('Benjamin Perez', 36, '456-789-0123', 'Austin', '2024-02-15 23:00:00'),
//         ('Charlotte Cook', 32, '567-890-1234', 'Fort Worth', '2024-02-14 00:00:00'),
//         ('Mason Murphy', 39, '678-901-2345', 'Jacksonville', '2024-02-13 01:00:00'),
//         ('Amelia Rivera', 24, '789-012-3456', 'Columbus', '2024-02-12 02:00:00'),
//         ('Ethan Rogers', 37, '890-123-4567', 'Indianapolis', '2024-02-11 03:00:00'),
//         ('Harper Peterson', 23, '901-234-5678', 'San Jose', '2024-02-10 04:00:00'),
//         ('Daniel Ross', 34, '012-345-6789', 'Charlotte', '2024-02-09 05:00:00'),
//         ('Elizabeth Stewart', 41, '123-456-7890', 'Detroit', '2024-02-08 06:00:00'),
//         ('Jackson Ward', 28, '234-567-8901', 'El Paso', '2024-02-07 07:00:00'),
//         ('Emily Foster', 25, '345-678-9012', 'Memphis', '2024-02-06 08:00:00'),
//         ('David Gray', 42, '456-789-0123', 'Seattle', '2024-02-05 09:00:00'),
//         ('Liam Brooks', 30, '567-890-1234', 'Denver', '2024-02-04 10:00:00'),
//         ('Avery Long', 27, '678-901-2345', 'Washington', '2024-02-03 11:00:00'),
//         ('Sofia Butler', 38, '789-012-3456', 'Boston', '2024-02-02 12:00:00'),
//         ('Lucas Simmons', 33, '890-123-4567', 'Nashville', '2024-02-01 13:00:00'),
//         ('Lily Foster', 29, '901-234-5678', 'Baltimore', '2024-01-31 14:00:00'),
//         ('Henry Alexander', 35, '012-345-6789', 'Louisville', '2024-01-30 15:00:00'),
//         ('Mia Bennett', 26, '123-456-7890', 'Milwaukee', '2024-01-29 16:00:00'),
//         ('Logan Wood', 31, '234-567-8901', 'Portland', '2024-01-28 17:00:00'),
//         ('Grace Watson', 22, '345-678-9012', 'Oklahoma City', '2024-01-27 18:00:00'),
//         ('Luke Mitchell', 39, '456-789-0123', 'Las Vegas', '2024-01-26 19:00:00'),
//         ('Zoey Price', 28, '567-890-1234', 'Albuquerque', '2024-01-25 20:00:00'),
//         ('Nora Turner', 37, '678-901-2345', 'Tucson', '2024-01-24 21:00:00'),
//         ('Isaac Hughes', 24, '789-012-3456', 'Fresno', '2024-01-23 22:00:00'),
//         ('Riley Coleman', 40, '890-123-4567', 'Sacramento', '2024-01-22 23:00:00'),
//         ('Ellie Barnes', 30, '901-234-5678', 'Long Beach', '2024-01-21 00:00:00'),
//         ('Levi Russell', 25, '012-345-6789', 'Kansas City', '2024-01-20 01:00:00'),
//         ('Chloe Griffin', 42, '123-456-7890', 'Mesa', '2024-01-19 02:00:00'),
//         ('Samuel Diaz', 23, '234-567-8901', 'Virginia Beach', '2024-01-18 03:00:00'),
//         ('Mila Hayes', 36, '345-678-9012', 'Atlanta', '2024-01-17 04:00:00'),
//         ('Logan pool', 30, '234-567-8901', 'Portland', '2024-01-28 17:00:00'),
//         ('Gabriel Barnes', 27, '456-789-0123', 'Colorado Springs', '2024-01-16 05:00:00'),
//         ('Aria Hamilton', 34, '567-890-1234', 'Omaha', '2024-01-15 06:00:00'),
//         ('wash Diaz', 24, '234-567-8906', 'La Beach', '2024-01-18 03:00:00'),
//         ('Max Foster', 31, '678-901-2345', 'Raleigh', '2024-01-14 07:00:00'),
//         ('ashu Turner', 38, '678-901-2345', 'Tucso', '2024-01-24 21:00:00'),
//         ('Evelyn Sanders', 29, '789-012-3456', 'Miami', '2024-01-13 08:00:00');
//       `)
    
//     console.log('Real data inserted successfully');
    
//   } catch (error) {
//     console.error('Error initializing database with real data:', error);
//   }
// }

// // Call function to initialize database with real data
// (async () => {
//   try {
//     await initializeDatabaseWithRealData();
//   } catch (error) {
//     console.error('Error calling initializeDatabaseWithRealData:', error);
//   }
// })();



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// API endpoint to fetch all customers
app.post('/api/customers', async (req, res) => {
  try {
    console.log('fetching')
    const { rows } = await pool.query('SELECT * FROM customers');
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/customers', async (req, res) => {
  const {rows}= await pool.query('SELECT * FROM customers');
  res.send(rows)
});
