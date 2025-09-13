// This function gets called when the "Send" button is clicked
async function sendMessage() {
    const userInput = document.getElementById('inputBox').value;
    const chatbox = document.getElementById('chatbox');
    
    // Add user's message to the chat display
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    
    // Send the user's message to your secure server
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    });
    
    const data = await response.json();
    
    // Add the AI's response to the chat display
    chatbox.innerHTML += `<p><strong>AI:</strong> ${data.aiResponse}</p>`;
    
    // Clear the input box
    document.getElementById('inputBox').value = '';
}
