// Install these packages first:
// npm install express @google/generative-ai dotenv

import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config(); // Load your API key from a .env file

const app = express();
const port = 3000;

app.use(express.json()); // Enable JSON body parsing

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Define a route to handle the chat requests
app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
        
        const result = await model.generateContent(userMessage);
        const response = await result.response;
        const text = response.text();
        
        res.json({ aiResponse: text });
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        res.status(500).json({ error: 'Failed to get a response from the AI.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
