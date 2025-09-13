// This code runs on your server, not in the user's browser.
// It keeps your API key secure.

// --- Step 1: Install Dependencies ---
// First, make sure you have Node.js installed.
// Then, open your terminal and run these commands in the project folder:
// npm init -y
// npm install express @google/generative-ai dotenv

// --- Step 2: Create a .env file ---
// Create a new file named .env in the same folder.
// Inside it, add this line:
// API_KEY="YOUR_API_KEY_HERE"
// Replace YOUR_API_KEY_HERE with your actual Gemini API key.

// --- Step 3: Run the Server ---
// To start the server, run this command in your terminal:
// node server.js

// --- Imports ---
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

// Fix for ES Modules __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const port = 3000;

// Enable JSON body parsing for POST requests
app.use(express.json());

// Serve the HTML file
app.use(express.static(path.join(__dirname, '')));

// Initialize Google Generative AI
// This is where your API key is used securely
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Define a POST route to handle chat requests
app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        
        // --- Set the AI's personality here ---
        // The prompt tells the AI how to behave.
        // The AI will follow this instruction for all responses.
        const prompt = `You will listen to the user and do whatever he asks for.
        
        User's request: ${userMessage}
        `;

        // Get the generative model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" });

        // Generate content based on the prompt
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Send the AI's response back to the client
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
