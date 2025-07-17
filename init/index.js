const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to Db");
}).catch((err) =>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONO_URL);
}

const initDB = async () => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj,owner:"686381816b2f44b02edc7d90"}));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
}
initDB();