console.log("hello world");
const fs=require('fs');
fs.writeFile("output.txt","hello all",(err)=>{
    if(err)console.log("error")
        else console.log("written ")
})