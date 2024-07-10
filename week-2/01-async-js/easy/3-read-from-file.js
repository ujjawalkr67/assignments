const fs = require("fs");
const filereader = async (filepath) => {
    try {
        const filedata= fs.readFileSync(filepath,"utf-8");

        //expensive operation
        let a=1;
        for(let index=0;index<100000000000;index++)
        {
            a += index;
        }
        console.log(filedata)
    } catch(error){
        console.log("Error occured while reading");
    }
};
filereader("./file.txt");