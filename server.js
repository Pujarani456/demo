import express from 'express';
import sum from './sum.js';
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/home', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/add/:a/:b', async(req, res) => {    
    const {a,b}=req.params;
    res.json({ result: sum(parseInt(a), parseInt(b)) });
})