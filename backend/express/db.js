const mongoose = require("mongoose");

const connectDb = async () => {
   try {
      const connection = await mongoose.connect('mongodb://127.0.0.1:27017/foodappie');

      console.log("Connected");

      const fetched_data = await connection.connection.db.collection("food_type").find({}).toArray();
      const foodCategory = await connection.connection.db.collection("food_name").find({}).toArray();
       global.food_items = fetched_data;
       global.food_name = foodCategory;
    console.log(global.food_items);
    console.log(global.food_name);
   } catch (err) {
      console.error(err);
   }
};

module.exports = connectDb;
