const APIData = require("../models/data");

exports.pieChart = async(req, res) => {
    try{
        const {month} = req.body;
        const monthN = month.slice(0,3);

        const fetchedData = await APIData.find({});

        let categories = [];
        for(let i=0; i<fetchedData.length; i++) {
            const monthOfSale = fetchedData[i].dateOfSale.toDateString().split(" ").join("").slice(3,6);
            if(monthN === monthOfSale) {
            if(!categories.includes(fetchedData[i].category)){
               categories.push(fetchedData[i].category);
            }
            }
        }

      let count =[];
      for(let j=0; j<categories.length; j++) {
        let temp = 0;
        for(let i=0; i<fetchedData.length; i++) {
            const monthOfSale = fetchedData[i].dateOfSale.toDateString().split(" ").join("").slice(3,6);
            if(monthN === monthOfSale) {
                if(categories[j] === fetchedData[i].category) {
                    temp++;
                }
            }
        }
        count.push(categories[j]  + " : " +  temp);
      }

        return res.status(200).json({
            data: count,
            success: true,
            message: "All data is here"
        })
    } catch(error){
        console.error(error);
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}