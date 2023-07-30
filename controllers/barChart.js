//code is pending to do

const APIData = require("../models/data");

exports.barData = async(req,res) => {
    try{

        const {month} = req.body;
        const monthN = month.slice(0,3);

        const fetchedData = await APIData.find({});
        const range = [0-100, 101-200, 201-300, 301-400, 401-500, 501-600, 601-700, 701-800, 801-900, 900-above];
        let count = 0;
        for(let i=0; i<range.length; i++) {
           let temp = 0;
           for(let j=0; j<fetchedData.length;j++) {
                if(fetchedData[j].price <= 100) {
                    temp++;
                }
           }
        }
    } catch(error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}