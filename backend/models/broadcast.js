const mongoose = require('mongoose');

const broadcastSchema = mongoose.Schema({
    broadcast_name : {
        type:String,
        required: true,
    },
    broadcast_id:{
        type:String,
        required:true,
    }, 
    host_name :{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    live_status:{
        type:Boolean,
        default:false,
        required:true,
    },
    broadcast_image:{
        type:String,
        required:true,
    }
})

const Broadcast = mongoose.model('Broadcast',broadcastSchema)

module.exports = {
    Broadcast:Broadcast
}