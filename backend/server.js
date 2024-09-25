import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import pg from 'pg'
dotenv.config()
const app = express();

app.use(cors());

app.use(bodyParser.json());


app.get('/', (req, res) => {
  console.log("no");
  res.status(200).json({ name: 'Route not given' });
});

app.post('/comment', async(req, res) => {
  console.log("comment", req.body);
  const pool = new pg.Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
  });
  console.log(pool.options)
  let {name,email,subject,message} = req.body
    try{
  const result = await pool.query('INSERT INTO comments (name,email,subject,message) VALUES ($1,$2,$3,$4) ', [name,email,subject,message]);
  
  res.status(200).json({ name: 'comment added', data: req.body }); 
}catch(e){
    console.log(e)
    res.status(400).json({ name: 'comment not added', data: req.body }); 
}

});


app.use((req, res) => {
  console.log("else");
  res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
