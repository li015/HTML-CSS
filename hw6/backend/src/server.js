import express from 'express';
import bodyParser from 'body-parser';
import db from './db';
  db.connect();
import cors from 'cors';
import routes from './routes';
const app = express();

// init middleware
app.use(cors());
app.use(express.json())
// define routes  
app.use('/', routes);

  // define server 
  const port = process.env.PORT || 4000;
   app.listen(port, () =>
     console.log(`Server is up on port ${port}.`)
    );