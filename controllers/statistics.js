const Month = require("../models/months");
const APIData = require("../models/data");

exports.statistics = async (req,res) => {
    try{

        const{month} = req.body;
        const monthN = month.slice(0,3);

        const fetchedData = await APIData.find({});

        let totalSale = 0;
        let soldItems = 0;
        let notSoldItems = 0;
        for(let i=0; i<fetchedData.length; i++) {
            const monthOfSale = fetchedData[i].dateOfSale.toDateString().split(" ").join("").slice(3,6);
            if(monthN === monthOfSale) {
                totalSale = totalSale + fetchedData[i].price;
                if(fetchedData[i].sold === true) {
                    soldItems++;
                }
                else{
                    notSoldItems++;
                }
            }
        }
         
            return res.status(200).json({
                data:{
                    totalSale,
                    soldItems,
                    notSoldItems
                },
                success:true,
                message: "All details are here",
            })
        

    } catch(error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}