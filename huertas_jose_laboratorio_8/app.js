
const express = require('express');
const app = express();

const fibonacci = (n, s = []) => n < 2 ? n : (s[n - 1]) + (s[n - 2])

const getFibonacciSeries = (req, res) => {

    const { num } = req.params
    let stack = [];

    for (let i = 0; i < num; i++) {

        stack.push(fibonacci(i, stack));
    }

    const sequence = stack.join("")
    res.json({ sequence });
}

app.get('/fibonacci/:num', getFibonacciSeries);

app.listen(3000, () => console.log('puerto 3000...'));