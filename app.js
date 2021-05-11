const express = require('express');
const { graphqlHTTP  } = require('express-graphql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const schema = require('./schema/schema');

dotenv.config();
const PORT = process.env.port;
mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.once('open', () => {
  console.log('database connected')
});

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, ()=> {
  console.log(`Sevrer listening for request on port ${PORT}`);
});
