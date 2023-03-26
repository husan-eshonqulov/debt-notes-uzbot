require('dotenv').config();

const { connectDB } = require('./db/connect');

const start = async () => {
  try {
    const conn = await connectDB(process.env.MONGO_URI);
    console.log(`Connected MongoDB port: ${conn.connection.port}`);

    require('./commands');
    require('./listeners');
  } catch (err) {
    console.log(err);
  }
};

start();
