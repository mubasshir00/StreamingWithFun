const { Broadcast } = require("../models/broadcast");

const liveFeed = async (req,res) =>{
    try {
     let per_page = 10;
     let page = Math.max(0,per_page);
     console.log(page);
     const findLiveFeed = await Broadcast.find({}, {_id:0}).limit(per_page).skip(per_page*page);
     if(findLiveFeed){
        return res.status(200).json({
            status:false,
            'status_message' : findLiveFeed
        })
     }
    } catch(e){
        console.log({e});
        //internal server error
        return res.status(500).json({
            'status' : false,
            'status_message' : e.message
        })
    }
}

module.exports = {
    liveFeed:liveFeed
}