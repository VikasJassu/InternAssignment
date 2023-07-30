const express = require("express");
const app = express();
const axios = require("axios");
const APIData = require("./models/data");

require("dotenv").config();
const PORT = process.env.PORT || 4000;
require("./config/database").connectDB();

app.use(express.json());

const outputData = require("./routes/outputData");

app.use("/api/v1",outputData);

app.get("/", (req,res)=> {
    res.send(`<h1>This is homepage</h1>`)
})

app.listen(PORT, () => {
    console.log(`Port is listening at ${PORT}`);
})



async function fetchData() {
    const response = await axios('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    console.log("printing length" , response.data.length);

  
   
    for(let i=0; i< response.data.length; i++) {

        const id = response.data[i].id;
        const existingID = await APIData.findOne({id});
        if(!existingID) {
            const newData = new APIData({
                id:response.data[i]['id'],
                title:response.data[i]['title'],
                price:response.data[i]['price'],
                description:response.data[i]['description'],
                category:response.data[i]['category'],
                image:response.data[i]['image'],
                sold:response.data[i]['sold'],
                dateOfSale:response.data[i]['dateOfSale'],
            });
            newData.save();
        }
     
    }
}


fetchData();