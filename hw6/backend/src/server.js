import express from 'express';
import bodyParser from 'body-parser';
import db from './db';
  db.connect();
import cors from 'cors';
import routes from './routes';
     

   

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json())  
app.use('/', routes);
  //  app.get('/', (req, res) => {
  //    res.send('Hello, World!');
  //  });

  // Parses the text as JSON and exposes the resulting
  // object on req.body.
//   app.use(bodyParser.json());


   app.get('/', (req, res) => {
    res.send( 'Received a GET HTTP method');
   }
   );
    app.post('/', (req, res) => {
      console.log(req.body.text);
    res.send( 'Received a POST HTTP method');
    });
    app.put('/', (req, res) => {
    res.send ('Received a PUT HTTP method');
  });
    app.delete('/', (req, res) => {
    res.send( 'Received a DELETE HTTP method');
    });
    app.post('/users', (req, res) => {
      res.send('POST HTTP method on users resource');
    });
    app.put('/users/:userId', (req, res) => {
      res.send(
        `PUT HTTP method on users/${req.params.userId} resource`,
      );
  });
  
   
   app.listen(port, () =>
     console.log(`Example app listening on port ${port}!`)
);