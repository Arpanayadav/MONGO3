const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
    from:"Chubi",
    to:"Bulbul",
    msg:"Good Morning",
    created_at: new Date(),
},
{
    from:"Annu",
    to:"Yuvraj",
    msg:"Good Morning",
    created_at: new Date(),
},
{
    from:"Mamma",
    to:"Papa",
    msg:"Good Morning",
    created_at: new Date(),
},
{
    from:"Golu",
    to:"Appy",
    msg:"Good Morning",
    created_at: new Date(),
},
];

 Chat.insertMany(allChats);

