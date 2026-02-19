const express = require('express');
const path = require('path');
const app = express();

// This is the port Pterodactyl uses. Don't change this.
const port = process.env.P_SERVER_PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// --- YOUR ACCOUNT DATA ---
const ADMIN_USER = "trz";
const ADMIN_PASS = "1111";

// --- ROUTES ---

// 1. The Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 2. The Login Logic
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === ADMIN_USER && password === ADMIN_PASS) {
        res.send(`
            <body style="background:#0b0c10; color:#66fcf1; font-family:sans-serif; text-align:center;">
                <h1>Access Granted!</h1>
                <p>Welcome back, Boss TRZ. You can now manage your Free Fire accounts.</p>
                <button onclick="window.location.href='/'">Back to Site</button>
            </body>
        `);
    } else {
        res.send("<h1>Error: Wrong Username or Password!</h1><a href='/'>Go Back</a>");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`TRZ Store is online at port ${port}`);
});
