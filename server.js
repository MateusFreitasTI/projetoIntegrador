const express = require('express');
const pool = require('./db'); 
const app = express();


app.use(express.json());


(async () => {
    try {
        const [rows] = await pool.query('SELECT NOW()');
        console.log('Conexão bem-sucedida ao MySQL! Data/Hora:', rows[0]);
    } catch (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    }
})();


app.get('/users', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM users');
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/users', async (req, res) => {
    console.log('Requisição recebida no backend:', req.body);

    const { name, email, cpf, password } = req.body;

    
    if (!name || !email || !cpf || !password) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    try {
        const [results] = await pool.query(
            'INSERT INTO users (name, email, cpf, password) VALUES (?, ?, ?, ?)',
            [name, email, cpf, password]
        );
        console.log('Usuário inserido com sucesso:', results);
        res.status(201).json({ message: 'Usuário criado com sucesso!', id: results.insertId });
    } catch (err) {
        console.error('Erro ao inserir no banco:', err);
        res.status(500).json({ error: err.message });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
