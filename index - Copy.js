
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';  
import dns from 'node:dns';
import fileRoutes from './routes/file.route.js';
import mailRoutes from './routes/mail.routes.js';

dns.setServers(['8.8.8.8', '8.8.4.4']);
const app = express();
const PORT = 5000
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);
app.use('/api/mail', mailRoutes);


connectDB();

app.get('/', (req, res) => {
    res.send('code mailer API is running');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});