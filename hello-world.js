const express = require("express");

const app = express();
const PORT = 3000;

const BTC_PRICE = 98000; //Precio fijo 

app.use(express.static("public"));

app.get("/convert", (req, res) => {
    const amount = parseFloat(req.query.amount);
    if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: "Ingresa un monto en dólares válido." });
    }
    const bitcoinAmount = amount / BTC_PRICE;
    res.json({ usd: amount, btc: bitcoinAmount.toFixed(8) });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
