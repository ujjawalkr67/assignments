const fs= require("fs");

const cleanfile = async (filepath) => {
    try {
    const data =fs.readFileSync(filepath,"utf-8");
    const cleaneddata = data.replace(/\s+/g, " ");
    fs.writeFileSync("cleanedfile.txt",cleaneddata,(err) =>{
        if(err) console.log("something went  wrong writing file content")
    })
    }
    catch (error){
        console.log("nai kr paaya solve")
    }
};

cleanfile("./file.txt")


//reading and wiritng the txt in coonsole
const filereader = async (filepath) => {
    try {
        const filedata= fs.readFileSync(filepath,"utf-8");
        console.log(filedata)
    } catch(error){
        console.log("Error occured while reading");
    }
};
filereader("./cleanedfile.txt");